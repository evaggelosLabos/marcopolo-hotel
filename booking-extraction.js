const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const HOTEL_URL = "https://www.booking.com/hotel/gr/marco-polo.html";
const OUTPUT_DIR = path.join(__dirname, "hotel_clean_highres");

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

(async () => {
  const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"]
});
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("🚀 Opening page...");
  await page.goto(HOTEL_URL, { waitUntil: "networkidle" });

  // 1. Scroll to the bottom to load the "hidden" images in the DOM
  console.log("Scrolling to find all image links...");
  for (let i = 0; i < 10; i++) {
    await page.mouse.wheel(0, 1000);
    await page.waitForTimeout(500);
  }

  // 2. Grab every image URL on the page
  const urls = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img'));
    return images
      .map(img => img.src || img.getAttribute('data-lazy') || img.currentSrc)
      .filter(src => src && src.includes('bstatic.com'));
  });

  // 3. MAGIC STEP: Transform the URLs from tiny to HUGE
  const highResUrls = [...new Set(urls.map(url => {
    // This replaces any size marker (like max300, square60, max500) with max1920x1080
    return url.replace(/\/(?:max|square|width)\d+(?:x\d+)?\//, "/max1920x1080/");
  }))];

  console.log(`✅ Found ${highResUrls.length} high-res links. Starting downloads...`);

  for (let i = 0; i < highResUrls.length; i++) {
    const url = highResUrls[i];
    if (url.includes('logo') || url.includes('map')) continue;

    const filename = `photo_${String(i + 1).padStart(3, '0')}.jpg`;
    const filepath = path.join(OUTPUT_DIR, filename);

    try {
      // We use page.request.get so it uses the browser's credentials/cookies
      const response = await page.request.get(url, {
          headers: { 'Referer': 'https://www.booking.com/' }
      });
      
      if (response.ok()) {
        fs.writeFileSync(filepath, await response.body());
        console.log(`Downloaded: ${filename}`);
      } else {
        console.log(`❌ Failed (401/403): ${filename}`);
      }
    } catch (e) {
      console.log(`Error on ${filename}: ${e.message}`);
    }
    await page.waitForTimeout(200); // Tiny delay to stay under the radar
  }

  console.log("\n✨ Done! Check the folder for clean, high-res JPEGs.");
  await browser.close();
})();