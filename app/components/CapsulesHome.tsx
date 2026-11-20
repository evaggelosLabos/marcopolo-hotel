"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  CONTACT_INFO,
  EXPERIENCES,
  GALLERY_CURATED,
  REVIEWS,
  ROOM_PILLS,
  ROOMS,
  RoomDetail,
  WHY_CHAPTERS,
} from "../data/hotel";
import { useCapsulesUI } from "./CapsulesContext";

const INTRO_LINES = [
  "Welcome to a sunlit corner of Gouvia, Corfu",
  "with Marcopolo®, where coastal calm meets",
  "effortless comfort—nestled minutes from",
  "the Ionian shore, surrounded by cypress trees,",
  "a quiet pool courtyard, and authentic",
  "Greek island hospitality.",
];

const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const range = (v: number, inMin: number, inMax: number) =>
  clamp((v - inMin) / (inMax - inMin), 0, 1);

export default function CapsulesHome() {
  const { openReserve, setDockLabel } = useCapsulesUI();

  const [loaderBar, setLoaderBar] = useState(0);
  const [loaderDone, setLoaderDone] = useState(false);

  const [selectedRoom, setSelectedRoom] = useState<RoomDetail | null>(null);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [forceReviewLit, setForceReviewLit] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [activeWhyIdx, setActiveWhyIdx] = useState(0);
  const [expStepText, setExpStepText] = useState("01 / 04");

  // Scroll choreography DOM refs
  const progressRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);
  const introSectionRef = useRef<HTMLElement>(null);
  const introClipRef = useRef<HTMLDivElement>(null);
  const introLeftRef = useRef<HTMLDivElement>(null);
  const introRightRef = useRef<HTMLDivElement>(null);
  const chooseClipRef = useRef<HTMLDivElement>(null);
  const roomRevealRef = useRef<HTMLDivElement>(null);
  const roomRevealImageRef = useRef<HTMLDivElement>(null);
  const roomRevealTextRef = useRef<HTMLDivElement>(null);
  const roomRevealContentRef = useRef<HTMLDivElement>(null);
  const roomCardRefs = useRef<(HTMLElement | null)[]>([]);
  const roomImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const whyMarqueeRef = useRef<HTMLDivElement>(null);
  const ctaMarqueeRef = useRef<HTMLDivElement>(null);
  const whyGridRef = useRef<HTMLDivElement>(null);
  const whyMediaRef = useRef<HTMLDivElement>(null);
  const whyChapterRefs = useRef<(HTMLElement | null)[]>([]);
  const whyClip1Ref = useRef<HTMLDivElement>(null);
  const whyClip2Ref = useRef<HTMLDivElement>(null);
  const whyImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const expClipRef = useRef<HTMLDivElement>(null);
  const paceBlockRef = useRef<HTMLDivElement>(null);
  const paceBarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const expRunwayRef = useRef<HTMLElement>(null);
  const expTrackRef = useRef<HTMLDivElement>(null);
  const galRunwayRef = useRef<HTMLElement>(null);
  const galTrackRef = useRef<HTMLDivElement>(null);
  const reviewQuoteRef = useRef<HTMLQuoteElement>(null);

  // Subtle initial preloader curtain (shown once per session)
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("marcopolo_intro_seen")
    ) {
      const t0 = window.setTimeout(() => setLoaderDone(true), 0);
      return () => window.clearTimeout(t0);
    }
    const t1 = window.setTimeout(() => setLoaderBar(55), 60);
    const t2 = window.setTimeout(() => setLoaderBar(100), 280);
    const t3 = window.setTimeout(() => {
      setLoaderDone(true);
      sessionStorage.setItem("marcopolo_intro_seen", "1");
    }, 620);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, []);

  // Keyboard shortcuts for room drawer & lightbox
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedRoom(null);
        setLightboxIdx(null);
      } else if (lightboxIdx !== null) {
        if (e.key === "ArrowLeft") {
          setLightboxIdx(
            (prev) =>
              ((prev ?? 0) - 1 + GALLERY_CURATED.length) %
              GALLERY_CURATED.length
          );
        } else if (e.key === "ArrowRight") {
          setLightboxIdx(
            (prev) => ((prev ?? 0) + 1) % GALLERY_CURATED.length
          );
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIdx]);

  // 1:1 locked 60fps scroll choreography engine
  useEffect(() => {
    let rafId = 0;
    let prevY = window.scrollY;
    let marqueeOffset = 0;
    let marqueeDir = -1;
    let starAngle = 0;
    let lastDockLabel = "01 Welcome";
    let lastWhyIdx = 0;
    let lastExpStep = "01 / 04";
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const isStaticTrack = () => motionQuery.matches || mobileQuery.matches;
    const trackDistance = (track: HTMLElement) =>
      Math.max(0, track.scrollWidth - (track.parentElement?.clientWidth ?? 0));
    const sizeRunways = () => {
      [[expRunwayRef.current, expTrackRef.current]].forEach(([runway, track]) => {
        if (!runway || !track) return;
        if (isStaticTrack()) {
          runway.style.height = "auto";
          track.style.transform = "";
        } else {
          runway.style.height = `${window.innerHeight + trackDistance(track)}px`;
        }
      });
    };
    const resizeObserver = new ResizeObserver(sizeRunways);
    [expTrackRef.current, galTrackRef.current].forEach((track) => {
      if (track) resizeObserver.observe(track);
    });
    window.addEventListener("resize", sizeRunways);
    motionQuery.addEventListener("change", sizeRunways);
    mobileQuery.addEventListener("change", sizeRunways);
    sizeRunways();

    const docTop = (el: HTMLElement) =>
      el.getBoundingClientRect().top + window.scrollY;

    const runwayProgress = (el: HTMLElement | null, curY: number) => {
      if (!el) return 0;
      const top = docTop(el);
      const dist = Math.max(1, el.offsetHeight - window.innerHeight);
      return clamp((curY - top) / dist, 0, 1);
    };

    const scrubClip = (
      el: HTMLElement | null,
      startRatio: number,
      endRatio: number
    ) => {
      if (!el) return;
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const p = clamp(
        (vh * startRatio - rect.top) /
          (el.offsetHeight * 1.15 + vh * (startRatio - endRatio)),
        0,
        1
      );
      const fills = el.querySelectorAll<HTMLElement>(".clip-line-fill");
      const n = fills.length;
      fills.forEach((line, i) => {
        const lp = range(p, i / n, (i + 1) / n);
        const rightInset = (1 - lp) * 100;
        const val = `inset(0% ${rightInset.toFixed(2)}% 0% 0%)`;
        line.style.clipPath = val;
      });
    };

    const stars = Array.from(document.querySelectorAll<HTMLElement>(".star-spin"));
    const trackedSections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-section]")
    );

    const tick = () => {
      const y = window.scrollY;
      const velocity = y - prevY;
      prevY = y;

      const vh = window.innerHeight;
      const docH = Math.max(1, document.documentElement.scrollHeight - vh);

      if (progressRef.current) {
        progressRef.current.style.width = `${((y / docH) * 100).toFixed(2)}%`;
      }

      // 1. Hero subtle zoom & parallax
      const hp = clamp(y / vh, 0, 1);
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `scale(${(1 + hp * 0.035).toFixed(
          4
        )}) translateY(${(-hp * 3.5).toFixed(2)}%)`;
      }
      if (heroCopyRef.current) {
        heroCopyRef.current.style.transform = `translateY(${(-hp * 36).toFixed(
          1
        )}px)`;
        heroCopyRef.current.style.opacity = (1 - hp * 0.65).toFixed(3);
      }

      // 2. Introduction clip-path wipe + opposite parallax photo pair
      scrubClip(introClipRef.current, 0.94, 0.45);
      if (introSectionRef.current) {
        const introRect = introSectionRef.current.getBoundingClientRect();
        const introP = clamp((vh - introRect.top) / (vh * 1.6), 0, 1);
        if (introLeftRef.current) {
          introLeftRef.current.style.transform = `translateY(${lerp(
            18,
            -18,
            introP
          ).toFixed(1)}px)`;
        }
        if (introRightRef.current) {
          introRightRef.current.style.transform = `translateY(${lerp(
            -14,
            16,
            introP
          ).toFixed(1)}px)`;
        }
      }

      // The first room grows from a centered image into a full-screen panel.
      if (roomRevealRef.current && roomRevealImageRef.current) {
        const p = runwayProgress(roomRevealRef.current, y);
        const reveal = range(p, 0.04, 0.45);
        const eased = reveal * reveal * (3 - 2 * reveal);
        roomRevealImageRef.current.style.width = `${lerp(46, 98, eased)}%`;
        roomRevealImageRef.current.style.height = `${lerp(49, 96, eased)}%`;
        if (roomRevealContentRef.current) {
          const contentProgress = range(p, 0.3, 0.4);
          roomRevealContentRef.current.style.opacity = `${contentProgress}`;
          roomRevealContentRef.current.style.visibility = contentProgress > 0.01 ? "visible" : "hidden";
        }
        if (roomRevealTextRef.current) {
          roomRevealTextRef.current.style.transform = `translate3d(${lerp(8, -18, p)}%, 0, 0)`;
          roomRevealTextRef.current.style.opacity = `${1 - range(p, 0.2, 0.5)}`;
        }
      }

      // 3. Rooms header clip wipe + sticky card stack depth effect
      scrubClip(chooseClipRef.current, 0.95, 0.58);
      const card0 = roomCardRefs.current[0];
      const card1 = roomCardRefs.current[1];
      const card2 = roomCardRefs.current[2];
      if (card0 && card1 && card2) {
        const r1Top = card1.getBoundingClientRect().top;
        const r2Top = card2.getBoundingClientRect().top;
        const cov0 = clamp(1 - (r1Top - 14) / (vh * 0.92), 0, 1);
        const cov1 = clamp(1 - (r2Top - 14) / (vh * 0.92), 0, 1);

        card0.style.transform = `scale(${lerp(1, 0.94, cov0).toFixed(4)})`;
        card0.style.filter = `brightness(${lerp(1, 0.72, cov0).toFixed(3)})`;

        card1.style.transform = `scale(${lerp(1, 0.94, cov1).toFixed(4)})`;
        card1.style.filter = `brightness(${lerp(1, 0.72, cov1).toFixed(3)})`;

        if (roomImgRefs.current[0]) {
          const c0p = clamp(1 - card0.getBoundingClientRect().top / vh, 0, 1);
          roomImgRefs.current[0].style.transform = `scale(${lerp(
            1.06,
            1.0,
            c0p
          ).toFixed(4)})`;
        }
        if (roomImgRefs.current[1]) {
          roomImgRefs.current[1].style.transform = `scale(${lerp(
            1.08,
            1.0,
            cov0
          ).toFixed(4)})`;
        }
        if (roomImgRefs.current[2]) {
          roomImgRefs.current[2].style.transform = `scale(${lerp(
            1.08,
            1.0,
            cov1
          ).toFixed(4)})`;
        }
      }

      // 4. Scroll-direction-reactive marquee + rotating asterisk
      if (Math.abs(velocity) > 0.2) {
        marqueeDir = velocity > 0 ? -1 : 1;
        starAngle += velocity * 0.42;
      }
      marqueeOffset += marqueeDir * 0.85 - velocity * 0.28;
      if (whyMarqueeRef.current) {
        const halfW = whyMarqueeRef.current.scrollWidth / 2 || 1000;
        if (marqueeOffset <= -halfW) marqueeOffset += halfW;
        if (marqueeOffset >= 0) marqueeOffset -= halfW;
        whyMarqueeRef.current.style.transform = `translate3d(${marqueeOffset.toFixed(
          1
        )}px, 0, 0)`;
      }
      if (ctaMarqueeRef.current) {
        const ctaHalf = ctaMarqueeRef.current.scrollWidth / 2 || 1000;
        const ctaOff = ((-marqueeOffset * 0.85) % ctaHalf) - ctaHalf;
        ctaMarqueeRef.current.style.transform = `translate3d(${ctaOff.toFixed(
          1
        )}px, 0, 0)`;
      }
      stars.forEach((s) => {
        s.style.transform = `rotate(${starAngle.toFixed(1)}deg)`;
      });

      // 5. Why Marcopolo sticky upward clip-path photo wipes
      const ch1 = whyChapterRefs.current[1];
      const ch2 = whyChapterRefs.current[2];
      if (ch1 && ch2) {
        const grid = whyGridRef.current;
        const chapterProgress = grid ? runwayProgress(grid, y) : 0;
        const wipe1 = range(chapterProgress, 0.22, 0.43);
        const wipe2 = range(chapterProgress, 0.66, 0.87);
        if (whyMediaRef.current && window.innerWidth > 760 && !motionQuery.matches) {
          const slide = range(chapterProgress, 0.22, 0.4) - range(chapterProgress, 0.64, 0.82);
          whyMediaRef.current.style.transform = `translateX(calc(${-100 * slide}% - ${8 * slide}px))`;
          const visibility = [1 - range(chapterProgress, 0.29, 0.42), range(chapterProgress, 0.27, 0.4) * (1 - range(chapterProgress, 0.71, 0.84)), range(chapterProgress, 0.69, 0.82)];
          whyChapterRefs.current.forEach((chapter, index) => {
            if (!chapter) return;
            chapter.style.opacity = `${visibility[index]}`;
            chapter.style.visibility = visibility[index] > 0.01 ? "visible" : "hidden";
          });
        } else {
          if (whyMediaRef.current) whyMediaRef.current.style.transform = "";
          whyChapterRefs.current.forEach((chapter) => {
            if (chapter) { chapter.style.opacity = ""; chapter.style.visibility = ""; }
          });
        }

        if (whyClip1Ref.current) {
          whyClip1Ref.current.style.clipPath = `inset(${(
            (1 - wipe1) *
            100
          ).toFixed(2)}% 0% 0% 0%)`;
        }
        if (whyClip2Ref.current) {
          whyClip2Ref.current.style.clipPath = `inset(${(
            (1 - wipe2) *
            100
          ).toFixed(2)}% 0% 0% 0%)`;
        }
        if (whyImgRefs.current[0]) {
          whyImgRefs.current[0].style.transform = `scale(${lerp(
            1.0,
            1.08,
            wipe1
          ).toFixed(4)})`;
        }
        if (whyImgRefs.current[1]) {
          whyImgRefs.current[1].style.transform = `scale(${lerp(
            1.12,
            1.0,
            wipe1
          ).toFixed(4)})`;
        }
        if (whyImgRefs.current[2]) {
          whyImgRefs.current[2].style.transform = `scale(${lerp(
            1.12,
            1.0,
            wipe2
          ).toFixed(4)})`;
        }

        const nextWhyIdx = wipe2 > 0.5 ? 2 : wipe1 > 0.5 ? 1 : 0;
        if (nextWhyIdx !== lastWhyIdx) {
          lastWhyIdx = nextWhyIdx;
          setActiveWhyIdx(nextWhyIdx);
        }
      }

      // 6. Experiences clip wipe, pace bars, and 1:1 horizontal glide
      scrubClip(expClipRef.current, 0.95, 0.58);
      if (paceBlockRef.current) {
        const pbTop = paceBlockRef.current.getBoundingClientRect().top;
        const pbP = clamp((vh * 0.94 - pbTop) / (vh * 0.42), 0.15, 1);
        const targets = [40, 72, 92];
        targets.forEach((pct, idx) => {
          const bar = paceBarRefs.current[idx];
          if (bar) bar.style.width = `${(pbP * pct).toFixed(1)}%`;
        });
      }

      if (!isStaticTrack() && expRunwayRef.current && expTrackRef.current) {
        const ep = runwayProgress(expRunwayRef.current, y);
        const expMaxX = trackDistance(expTrackRef.current);
        expTrackRef.current.style.transform = `translate3d(${(
          -ep * expMaxX
        ).toFixed(1)}px, 0, 0)`;
        const stepLabel = `0${Math.min(4, Math.floor(ep * 4) + 1)} / 04`;
        if (stepLabel !== lastExpStep) {
          lastExpStep = stepLabel;
          setExpStepText(stepLabel);
        }
      }

      // 8. Scroll-illuminated review words
      if (reviewQuoteRef.current) {
        const rTop = reviewQuoteRef.current.getBoundingClientRect().top;
        const revP = clamp((vh * 0.94 - rTop) / (vh * 0.42), 0, 1);
        const words =
          reviewQuoteRef.current.querySelectorAll<HTMLElement>(".rev-word");
        const lit = Math.ceil(revP * words.length);
        words.forEach((w, i) => {
          if (i < lit) w.classList.add("lit");
          else if (revP < 0.04) w.classList.remove("lit");
        });
      }

      // 9. Active section label in floating dock
      let currentLabel = "01 Welcome";
      for (const sec of trackedSections) {
        if (sec.getBoundingClientRect().top <= vh * 0.42 && sec.dataset.section) {
          currentLabel = sec.dataset.section;
        }
      }
      if (currentLabel !== lastDockLabel) {
        lastDockLabel = currentLabel;
        setDockLabel(currentLabel);
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", sizeRunways);
      motionQuery.removeEventListener("change", sizeRunways);
      mobileQuery.removeEventListener("change", sizeRunways);
    };
  }, [setDockLabel]);

  const currentReview = REVIEWS[reviewIdx];
  const reviewWords = currentReview.quote.split(/\s+/);

  const stepReview = (delta: number) => {
    setReviewIdx((prev) => (prev + delta + REVIEWS.length) % REVIEWS.length);
    setForceReviewLit(true);
  };

  return (
    <>
      <div ref={progressRef} className="cap-scroll-progress" style={{ width: 0 }} />

      {/* INTRO PRELOADER CURTAIN */}
      <div className={`cap-preloader ${loaderDone ? "done" : ""}`}>
        <div
          style={{
            fontSize: "24px",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            color: "var(--ivory)",
          }}
        >
          Marcopolo
          <sup
            style={{
              fontSize: "12px",
              color: "var(--sand)",
              marginLeft: "2px",
            }}
          >
            ®
          </sup>
        </div>
        <div className="cap-preloader-track">
          <div
            className="cap-preloader-bar"
            style={{ width: `${loaderBar}%` }}
          />
        </div>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--sand-muted)",
          }}
        >
          Gouvia • Corfu
        </div>
      </div>

      {/* 01. HERO SECTION */}
      <section
        id="welcome"
        data-section="01 Welcome"
        style={{ padding: "12px clamp(10px, 1.6vw, 20px) 16px" }}
      >
        <div
          className="home-hero-frame"
          style={{
            position: "relative",
            minHeight: "calc(100vh - 24px)",
            borderRadius: "var(--radius-frame)",
            overflow: "hidden",
            background: "var(--bg-surface)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding:
              "clamp(86px, 11vh, 122px) clamp(20px, 4vw, 52px) clamp(76px, 9vh, 92px)",
            border: "1px solid rgba(177, 166, 150, 0.22)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={heroImgRef}
            className="home-hero-photo"
            src="/enhanced/hotel-twilight.png"
            alt="Marcopolo Hotel Corfu at twilight"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              willChange: "transform",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(24,23,23,0.32) 0%, rgba(24,23,23,0.06) 46%, rgba(24,23,23,0.72) 100%)",
              zIndex: 2,
            }}
          />

          <div
            ref={heroCopyRef}
            className="home-hero-copy"
            style={{
              position: "relative",
              zIndex: 3,
              maxWidth: "1040px",
              willChange: "transform, opacity",
            }}
          >
            <div
              className="eyebrow"
              style={{
                color: "rgba(244,239,231,0.88)",
                marginBottom: "14px",
              }}
            >
              Gouvia • Corfu Island • Greece
            </div>
            <h1
              className={`display-xl hero-title ${loaderDone ? "is-ready" : ""}`}
              aria-label="Closer to Corfu — Closer to Yourself"
              style={{ margin: 0, color: "var(--ivory)" }}
            >
              <span className="hero-title-line" aria-hidden="true"><span>Closer to Corfu</span></span>
              <span className="hero-title-line" aria-hidden="true"><span><span className="hero-title-dash">—</span> Closer to Yourself</span></span>
            </h1>
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 3,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "18px",
              marginTop: "32px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(244, 239, 231, 0.22)",
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: "440px",
                fontSize: "clamp(0.98rem, 1.35vw, 1.18rem)",
                lineHeight: 1.48,
                color: "rgba(244,239,231,0.92)",
              }}
            >
              Spend unforgettable and sun-warmed days on the Ionian coast with{" "}
              <span style={{ color: "var(--sand)" }}>—</span> Marcopolo®.
            </p>
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ivory)",
              }}
            >
              Scroll to explore ↓
            </span>
          </div>
        </div>
      </section>

      {/* 02. EDITORIAL INTRODUCTION */}
      <section
        id="introduction"
        ref={introSectionRef}
        data-section="02 Introduction"
        style={{
          padding: "clamp(56px, 9vh, 108px) clamp(16px, 4vw, 52px)",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div className="eyebrow" style={{ marginBottom: "20px" }}>
            (01) Introduction
          </div>

          <div
            ref={introClipRef}
            className="display-md reference-intro"
            style={{ maxWidth: "1100px", marginBottom: "52px", fontWeight: 400 }}
          >
            {INTRO_LINES.map((line) => (
              <div key={line} className="clip-line-wrap">
                <span className="clip-line-base">{line}</span>
                <span className="clip-line-fill" aria-hidden="true">
                  {line}
                </span>
              </div>
            ))}
          </div>

          <div
            className="intro-images-row"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "22px",
              alignItems: "end",
            }}
          >
            <div
              ref={introLeftRef}
              className="intro-photo"
              style={{
                borderRadius: "var(--radius-frame)",
                overflow: "hidden",
                height: "clamp(280px, 40vw, 450px)",
                border: "1px solid var(--sand-dim)",
                willChange: "transform",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hotel/photo_034.jpg"
                alt="Marcopolo outdoor pool overhead view"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              ref={introRightRef}
              className="intro-right"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                willChange: "transform",
              }}
            >
              <div
                style={{
                  borderRadius: "var(--radius-frame)",
                  overflow: "hidden",
                  height: "clamp(220px, 27vw, 310px)",
                  border: "1px solid var(--sand-dim)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hotel/photo_033.jpg"
                  alt="Gouvia Bay panoramic view in Corfu"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--sand-dim)",
                  borderRadius: "var(--radius-card)",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(0.96rem, 1.25vw, 1.12rem)",
                    lineHeight: 1.6,
                    color: "var(--ivory)",
                  }}
                >
                  A place where you can be with yourself and your loved ones.{" "}
                  <span style={{ color: "var(--sand)" }}>
                    A relaxed Corfu base where morning light, poolside
                    afternoons, and sea breezes come naturally.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. CHOOSE ROOMS HEADER + PURE STICKY STACKING CARDS */}
      <section
        id="rooms"
        data-section="03 Rooms"
        style={{ paddingTop: "clamp(32px, 5vh, 64px)" }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "0 clamp(16px, 4vw, 52px) 32px",
          }}
        >
          <div className="room-choose-layout">
            <div>
              <div className="eyebrow" style={{ marginBottom: "12px" }}>
                (02) Discover Available Rooms
              </div>
              <div ref={chooseClipRef} className="display-lg reference-choose">
                <div className="clip-line-wrap">
                  <span className="clip-line-base">Choose the one</span>
                  <span className="clip-line-fill" aria-hidden="true">
                    Choose the one
                  </span>
                </div>
                <div className="clip-line-wrap">
                  <span className="clip-line-base">you like best</span>
                  <span className="clip-line-fill" aria-hidden="true">
                    you like best
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "15.5px",
                  lineHeight: 1.65,
                  color: "var(--sand)",
                  maxWidth: "480px",
                }}
              >
                Each sunlit space at Marcopolo® balances calm simplicity with
                practical comfort. Scroll through our spaces and tap{" "}
                <strong style={{ color: "var(--ivory)" }}>Details +</strong> to
                explore full specifications.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {ROOM_PILLS.map((pill) => (
                  <span
                    key={pill}
                    style={{
                      padding: "7px 14px",
                      borderRadius: "999px",
                      border: "1px solid var(--sand-dim)",
                      color: "var(--ivory)",
                      fontSize: "12.5px",
                      background: "var(--bg-surface)",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={roomRevealRef} className="room-reveal-runway">
          <div className="room-reveal-stage">
            <div ref={roomRevealTextRef} className="room-reveal-marquee">
              Marcopolo® &nbsp; Marcopolo® &nbsp; Marcopolo®
            </div>
            <div ref={roomRevealImageRef} className="room-reveal-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ROOMS[0].image} alt={ROOMS[0].title} />
              <div ref={roomRevealContentRef} className="room-reveal-content" style={{ opacity: 0, visibility: "hidden" }}>
                <h3>{ROOMS[0].title}<sup>®</sup></h3>
                <span className="room-reveal-scroll">(Scroll)</span>
                <div className="room-reveal-bottom">
                  <button type="button" className="cap-pill" onClick={() => setSelectedRoom(ROOMS[0])}>
                    <span>Details</span><span className="cap-circle">+</span>
                  </button>
                  <p>{ROOMS[0].shortDesc}</p>
                  <button type="button" className="cap-pill" onClick={() => openReserve(ROOMS[0].reserveLabel)}>
                    <span>Reserve</span><span className="cap-circle">↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="room-stack-wrap">
          {ROOMS.map((room, idx) => (
            <article
              key={room.id}
              ref={(el) => {
                roomCardRefs.current[idx] = el;
              }}
              className="room-stack-card"
              style={{ zIndex: idx + 1 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={(el) => {
                  roomImgRefs.current[idx] = el;
                }}
                src={room.image}
                alt={room.title}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(24,23,23,0.34) 0%, rgba(24,23,23,0.14) 45%, rgba(24,23,23,0.84) 100%)",
                }}
              />
              <div className="room-stack-content">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      padding: "7px 14px",
                      borderRadius: "999px",
                      background: "rgba(29,27,25,0.68)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(244,239,231,0.22)",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {room.badge}
                  </span>
                  <button
                    type="button"
                    className="cap-pill"
                    onClick={() => setSelectedRoom(room)}
                  >
                    <span>Details</span>
                    <span className="cap-circle" style={{ fontSize: "18px" }}>
                      +
                    </span>
                  </button>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    gap: "18px",
                  }}
                >
                  <div style={{ maxWidth: "540px" }}>
                    <h3 className="display-lg" style={{ margin: "0 0 10px 0" }}>
                      {room.title}
                      <sup style={{ fontSize: "0.45em", color: "var(--sand)" }}>
                        ®
                      </sup>
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "15.5px",
                        lineHeight: 1.58,
                        color: "rgba(244,239,231,0.9)",
                      }}
                    >
                      {room.shortDesc}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="cap-pill"
                    onClick={() => openReserve(room.reserveLabel)}
                  >
                    <span>
                      {room.id === "courtyard" ? "Book Your Stay" : "Reserve"}
                    </span>
                    <span className="cap-circle">↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 04. LOCATION SECTION */}
      <section
        id="location"
        data-section="04 Location"
        style={{
          padding: "clamp(56px, 8vh, 96px) clamp(16px, 4vw, 52px)",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div
            className="location-intro"
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 40px",
            }}
          >
            <div className="eyebrow" style={{ marginBottom: "12px" }}>
              (03) Closer Than You Think
            </div>
            <h2 className="display-lg" style={{ margin: "0 0 14px 0" }}>
              Located in Gouvia,
              <br />
              minutes from everything
            </h2>
            <p
              style={{
                margin: 0,
                color: "var(--sand)",
                fontSize: "15.5px",
                lineHeight: 1.65,
              }}
            >
              {CONTACT_INFO.address} — effortless arrival from Corfu Airport and
              a 5-minute walk to Gouvia Beach, tavernas, and marina.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Interactive Google Maps Card */}
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--sand-dim)",
                borderRadius: "var(--radius-frame)",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                minHeight: "460px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <span className="eyebrow">{CONTACT_INFO.coordinates}</span>
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "var(--bg-base)",
                    border: "1px solid var(--sand-dim)",
                    fontSize: "12px",
                    color: "var(--ivory)",
                  }}
                >
                  Gouvia, Corfu
                </span>
              </div>

              <div
                style={{
                  flex: 1,
                  minHeight: "240px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid var(--sand-dim)",
                  background: "var(--bg-base)",
                }}
              >
                <iframe
                  title="Marcopolo Hotel Location in Gouvia, Corfu"
                  src={CONTACT_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "240px",
                    display: "block",
                    filter: "grayscale(0.28) contrast(1.04)",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "10px",
                }}
              >
                {[
                  ["5 min", "Gouvia Beach"],
                  ["10 min", "Corfu Town"],
                  ["15 min", "Corfu Airport"],
                ].map(([time, label]) => (
                  <div
                    key={label}
                    style={{
                      background: "var(--bg-base)",
                      border: "1px solid var(--sand-dim)",
                      borderRadius: "16px",
                      padding: "12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "19px",
                        fontWeight: 600,
                        color: "var(--ivory)",
                      }}
                    >
                      {time}
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--sand)" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/location"
                  style={{
                    fontSize: "13px",
                    color: "var(--sand)",
                    textDecoration: "underline",
                  }}
                >
                  Full location guide →
                </Link>
                <button
                  type="button"
                  className="cap-pill"
                  onClick={() => openReserve()}
                >
                  <span>Ready to reserve?</span>
                  <span className="cap-circle">↗</span>
                </button>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div
                style={{
                  borderRadius: "var(--radius-frame)",
                  overflow: "hidden",
                  border: "1px solid var(--sand-dim)",
                  minHeight: "215px",
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hotel/photo_035.jpg"
                  alt="Aerial view of Gouvia Bay and Marcopolo Hotel"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    left: "16px",
                    background: "rgba(29,27,25,0.78)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid var(--sand-dim)",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                  }}
                >
                  Gouvia Bay &amp; Surroundings
                </span>
              </div>
              <div
                style={{
                  borderRadius: "var(--radius-frame)",
                  overflow: "hidden",
                  border: "1px solid var(--sand-dim)",
                  minHeight: "215px",
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hotel/photo_076.jpg"
                  alt="Marcopolo Hotel Corfu evening entrance"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "14px",
                    left: "16px",
                    background: "rgba(29,27,25,0.78)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid var(--sand-dim)",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                  }}
                >
                  Evening Arrival — Marcopolo Corfu
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05A. SCROLL-DIRECTION-REACTIVE MARQUEE */}
      <section style={{ padding: "16px 0 8px" }}>
        <Link href="/why-marcopolo" className="dir-marquee-wrap why-marquee-link" aria-label="Explore why guests choose Marcopolo">
          <div ref={whyMarqueeRef} className="dir-marquee-track">
            {[0, 1, 2, 3].map((idx) => (
              <span
                key={idx}
                className="display-xl"
                style={{
                  paddingRight: "48px",
                  color: idx % 2 === 1 ? "var(--sand)" : "var(--ivory)",
                }}
              >
                Why Marcopolo
                <sup style={{ fontSize: "0.4em", color: "var(--sand)" }}>®</sup>
                ?<span className="star-spin">*</span>
              </span>
            ))}
          </div>
        </Link>
      </section>

      {/* 05B. 3-CHAPTER EDITORIAL SPLIT + STICKY CLIP-WIPING PHOTO STAGE */}
      <section id="why" data-section="05 Why Marcopolo®">
        <div ref={whyGridRef} className="why-editorial-grid">
          <div className="why-chapters-col">
            {WHY_CHAPTERS.map((ch, idx) => (
              <article
                key={ch.num}
                ref={(el) => {
                  whyChapterRefs.current[idx] = el;
                }}
                className={`why-chapter-card ${
                  activeWhyIdx === idx ? "active" : ""
                }`}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <span className="eyebrow">Benefit Highlight</span>
                  <span
                    style={{
                      fontVariantNumeric: "tabular-nums",
                      fontSize: "14px",
                      color: "var(--sand)",
                    }}
                  >
                    <strong style={{ color: "var(--ivory)", fontSize: "24px" }}>
                      {ch.num}
                    </strong>{" "}
                    / 03
                  </span>
                </div>

                <div className="why-mobile-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ch.image} alt={ch.caption} />
                </div>

                <div>
                  <h3 className="display-md" style={{ margin: "0 0 14px 0" }}>
                    {ch.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "15.5px",
                      lineHeight: 1.68,
                      color: "var(--sand)",
                    }}
                  >
                    {ch.description}
                  </p>
                </div>

                <div
                  style={{
                    height: "2px",
                    background: "rgba(177,166,150,0.2)",
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${ch.progress}%`,
                      height: "100%",
                      background: "var(--ivory)",
                    }}
                  />
                </div>
              </article>
            ))}
          </div>

          <div ref={whyMediaRef} className="why-sticky-media">
            <div className="why-photo-layer" style={{ zIndex: 1 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={(el) => {
                  whyImgRefs.current[0] = el;
                }}
                src={WHY_CHAPTERS[0].image}
                alt={WHY_CHAPTERS[0].caption}
              />
            </div>
            <div
              ref={whyClip1Ref}
              className="why-photo-layer"
              style={{ zIndex: 2, clipPath: "inset(100% 0% 0% 0%)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={(el) => {
                  whyImgRefs.current[1] = el;
                }}
                src={WHY_CHAPTERS[1].image}
                alt={WHY_CHAPTERS[1].caption}
              />
            </div>
            <div
              ref={whyClip2Ref}
              className="why-photo-layer"
              style={{ zIndex: 3, clipPath: "inset(100% 0% 0% 0%)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={(el) => {
                  whyImgRefs.current[2] = el;
                }}
                src={WHY_CHAPTERS[2].image}
                alt={WHY_CHAPTERS[2].caption}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                zIndex: 5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  padding: "7px 14px",
                  borderRadius: "999px",
                  background: "rgba(29,27,25,0.78)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(244,239,231,0.2)",
                  fontSize: "12.5px",
                  color: "var(--ivory)",
                }}
              >
                {WHY_CHAPTERS[activeWhyIdx]?.caption}
              </span>
              <span
                style={{
                  padding: "7px 12px",
                  borderRadius: "999px",
                  background: "rgba(29,27,25,0.78)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(244,239,231,0.2)",
                  fontSize: "12px",
                  color: "var(--sand)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {WHY_CHAPTERS[activeWhyIdx]?.num} / 03
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 06A. CORFU EXPERIENCES HEADER + PACE BARS */}
      <section
        id="experiences"
        data-section="06 Experiences"
        style={{
          padding: "clamp(48px, 7vh, 84px) clamp(16px, 4vw, 52px) 20px",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
              alignItems: "end",
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: "12px" }}>
                (04) Ready for Corfu?
              </div>
              <div ref={expClipRef} className="display-lg">
                <div className="clip-line-wrap">
                  <span className="clip-line-base">Discover the</span>
                  <span className="clip-line-fill" aria-hidden="true">
                    Discover the
                  </span>
                </div>
                <div className="clip-line-wrap">
                  <span className="clip-line-base">island experiences</span>
                  <span className="clip-line-fill" aria-hidden="true">
                    island experiences
                  </span>
                </div>
              </div>
            </div>

            <div
              ref={paceBlockRef}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "15.5px",
                  lineHeight: 1.65,
                  color: "var(--sand)",
                }}
              >
                From a 5-minute morning swim to full-day Ionian cruises,
                everything starts right outside Marcopolo®. Scroll down to glide
                sideways through our Corfu highlights.
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "11px" }}
              >
                {[
                  ["Relaxed", "5 min walk", 40],
                  ["Half-Day", "3–5h outing", 72],
                  ["Full-Day", "6–10h adventure", 92],
                ].map(([label, meta, initialPct], idx) => (
                  <div key={String(label)}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "13px",
                        marginBottom: "5px",
                      }}
                    >
                      <span style={{ color: "var(--ivory)", fontWeight: 500 }}>
                        {label}
                      </span>
                      <span style={{ color: "var(--sand)" }}>{meta}</span>
                    </div>
                    <div
                      style={{
                        height: "3px",
                        background: "rgba(177,166,150,0.24)",
                        borderRadius: "999px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        ref={(el) => {
                          paceBarRefs.current[idx] = el;
                        }}
                        style={{
                          width: `${initialPct}%`,
                          height: "100%",
                          background: "var(--ivory)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06B. PINNED 1:1 HORIZONTAL EXPERIENCES GLIDE */}
      <section
        id="exp-runway"
        ref={expRunwayRef}
        data-section="06 Experiences"
        className="h-pin-runway"
      >
        <div className="h-pin-stage">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
              maxWidth: "1300px",
              width: "100%",
              marginInline: "auto",
            }}
          >
            <span className="eyebrow">
              Explore experiences →
            </span>
            <span
              style={{
                fontSize: "12.5px",
                color: "var(--ivory)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {expStepText}
            </span>
          </div>

          <div style={{ width: "100%" }}>
            <div ref={expTrackRef} className="h-scrub-track">
              {EXPERIENCES.map((exp) => (
                <article key={exp.num} className="exp-scrub-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={exp.image}
                    alt={exp.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 45%, rgba(24,23,23,0.12) 65%, rgba(24,23,23,0.76) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      height: "100%",
                      padding: "26px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          padding: "6px 14px",
                          borderRadius: "999px",
                          background: "rgba(29,27,25,0.72)",
                          border: "1px solid rgba(244,239,231,0.22)",
                          fontSize: "12px",
                        }}
                      >
                        {exp.pace}
                      </span>
                      <span style={{ fontSize: "13px", color: "var(--sand)" }}>
                        {exp.num}
                      </span>
                    </div>
                    <div>
                      <h3 className="display-md" style={{ margin: "0 0 8px 0" }}>
                        {exp.title}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "15px",
                          lineHeight: 1.58,
                          color: "rgba(244,239,231,0.88)",
                          maxWidth: "500px",
                        }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08. GUEST REVIEWS */}
      <section
        id="reviews"
        data-section="08 Reviews"
        style={{
          padding: "clamp(56px, 8vh, 96px) clamp(16px, 4vw, 52px)",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            background: "var(--bg-surface)",
            border: "1px solid var(--sand-dim)",
            borderRadius: "var(--radius-frame)",
            padding: "clamp(28px, 4.5vw, 54px)",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: "20px" }}>
            (06) Do People Like Us?
          </div>
          <blockquote
            ref={reviewQuoteRef}
            className="display-md"
            style={{ margin: "0 0 32px 0", minHeight: "130px" }}
          >
            {reviewWords.map((word, idx) => (
              <span
                key={`${reviewIdx}-${idx}`}
                className={`rev-word ${forceReviewLit ? "lit" : ""}`}
              >
                {word}{" "}
              </span>
            ))}
          </blockquote>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "18px",
              paddingTop: "22px",
              borderTop: "1px solid var(--sand-dim)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "999px",
                  background: "var(--bg-base)",
                  border: "1px solid var(--sand-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  color: "var(--sand)",
                  fontSize: "15px",
                }}
              >
                {currentReview.initials}
              </div>
              <div>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>
                  {currentReview.author}
                </div>
                <div style={{ fontSize: "13px", color: "var(--sand)" }}>
                  {currentReview.origin}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--sand)",
                  fontVariantNumeric: "tabular-nums",
                  marginRight: "6px",
                }}
              >
                {String(reviewIdx + 1).padStart(2, "0")} / 0{REVIEWS.length}
              </span>
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => stepReview(-1)}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "999px",
                  border: "1px solid var(--sand-dim)",
                  background: "var(--bg-base)",
                  color: "var(--ivory)",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => stepReview(1)}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "999px",
                  border: "none",
                  background: "var(--ivory)",
                  color: "var(--ink-dark)",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-image" aria-label="Marcopolo Hotel in Corfu">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/enhanced/hotel-twilight.png" alt="Marcopolo Hotel in Corfu" />
        <div className="closing-image-copy">Closer to Corfu<br />—Closer to Yourself</div>
      </section>

      {/* 07. PINNED 1:1 HORIZONTAL PHOTO GALLERY */}
      <section
        id="gallery"
        ref={galRunwayRef}
        data-section="07 Gallery"
        className="h-pin-runway"
      >
        <div className="h-pin-stage">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "14px",
              marginBottom: "18px",
              maxWidth: "1300px",
              width: "100%",
              marginInline: "auto",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: "6px" }}>
                (05) Horizontal Gallery
              </div>
              <h2 className="display-md" style={{ margin: 0 }}>
                Inside Marcopolo
                <sup style={{ fontSize: "0.45em", color: "var(--sand)" }}>®</sup>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span style={{ fontSize: "12.5px", color: "var(--sand)" }}>
                Click any photo to expand
              </span>
              <Link href="/gallery" className="cap-pill-ghost">
                All 74 photos →
              </Link>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div ref={galTrackRef} className="h-scrub-track">
              {GALLERY_CURATED.map((photo, idx) => (
                <button
                  key={photo.src}
                  type="button"
                  className="gal-scrub-card"
                  onClick={() => setLightboxIdx(idx)}
                  style={{ padding: 0, textAlign: "left" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.src} alt={photo.title} draggable={false} />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "36px 18px 16px",
                      background:
                        "linear-gradient(180deg, transparent, rgba(24,23,23,0.86))",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13.5px",
                        color: "var(--ivory)",
                        fontWeight: 500,
                      }}
                    >
                      {photo.title}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--sand)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09. CLOSING SCROLL-REACTIVE CTA MARQUEE */}
      <section
        id="reserve-cta"
        data-section="09 Reserve"
        style={{ padding: "20px 0 56px" }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "0 20px",
            marginBottom: "16px",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: "6px" }}>
            Interested in a relaxing Corfu escape?
          </div>
          <div style={{ fontSize: "15.5px", color: "var(--sand)" }}>
            Click anywhere below to open the reservation drawer
          </div>
        </div>

        <button
          type="button"
          className="dir-marquee-wrap"
          onClick={() => openReserve()}
          style={{
            cursor: "pointer",
            borderLeft: "none",
            borderRight: "none",
            textAlign: "left",
            color: "inherit",
          }}
        >
          <div ref={ctaMarqueeRef} className="dir-marquee-track">
            {[0, 1, 2, 3].map((idx) => (
              <span
                key={idx}
                className="display-xl"
                style={{
                  paddingRight: "48px",
                  color: idx % 2 === 1 ? "var(--sand)" : "var(--ivory)",
                }}
              >
                Book your stay{" "}
                <span style={{ color: "var(--sand)" }}>—</span>
              </span>
            ))}
          </div>
        </button>
      </section>

      {/* SLIDE-OVER ROOM DETAILS DRAWER */}
      <div
        className={`drawer-backdrop ${selectedRoom ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedRoom(null);
        }}
        aria-hidden={!selectedRoom}
      >
        <div className="drawer-panel">
          {selectedRoom && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div>
                  <div className="eyebrow">Details ({selectedRoom.title}®)</div>
                  <h3
                    style={{
                      margin: "6px 0 0",
                      fontSize: "28px",
                      fontWeight: 500,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {selectedRoom.title}®
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedRoom(null)}
                  aria-label="Close room details"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "999px",
                    border: "1px solid var(--sand-dim)",
                    background: "var(--bg-base)",
                    color: "var(--ivory)",
                    cursor: "pointer",
                    fontSize: "17px",
                  }}
                >
                  ✕
                </button>
              </div>

              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  height: "215px",
                  border: "1px solid var(--sand-dim)",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <p
                style={{
                  margin: 0,
                  fontSize: "14.5px",
                  lineHeight: 1.65,
                  color: "var(--sand)",
                }}
              >
                {selectedRoom.summary}
              </p>

              <div>
                {selectedRoom.specs.map(([key, val]) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "11px 0",
                      borderBottom: "1px solid rgba(177,166,150,0.16)",
                      fontSize: "14px",
                    }}
                  >
                    <span style={{ color: "var(--sand)" }}>{key}</span>
                    <span style={{ color: "var(--ivory)", fontWeight: 500 }}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <div className="eyebrow" style={{ marginBottom: "10px" }}>
                  Included Amenities
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {selectedRoom.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "999px",
                        background: "var(--bg-base)",
                        border: "1px solid rgba(177,166,150,0.2)",
                        fontSize: "12px",
                      }}
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="cap-pill"
                style={{
                  marginTop: "auto",
                  width: "100%",
                  justifyContent: "space-between",
                }}
                onClick={() => {
                  const roomLabel = selectedRoom.reserveLabel;
                  setSelectedRoom(null);
                  openReserve(roomLabel);
                }}
              >
                <span>Ready to reserve?</span>
                <span className="cap-circle">↗</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* FULLSCREEN GALLERY LIGHTBOX */}
      {lightboxIdx !== null && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIdx(null);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 6000,
            background: "rgba(18, 16, 15, 0.94)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1100px",
              height: "84vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={GALLERY_CURATED[lightboxIdx].src}
              alt={GALLERY_CURATED[lightboxIdx].title}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: "18px",
                border: "1px solid var(--sand-dim)",
              }}
            />
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setLightboxIdx(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "42px",
                height: "42px",
                borderRadius: "999px",
                border: "1px solid var(--sand-dim)",
                background: "rgba(29,27,25,0.84)",
                color: "var(--ivory)",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✕
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() =>
                setLightboxIdx(
                  (lightboxIdx - 1 + GALLERY_CURATED.length) %
                    GALLERY_CURATED.length
                )
              }
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "46px",
                height: "46px",
                borderRadius: "999px",
                border: "1px solid var(--sand-dim)",
                background: "rgba(29,27,25,0.8)",
                color: "var(--ivory)",
                cursor: "pointer",
                fontSize: "24px",
              }}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() =>
                setLightboxIdx((lightboxIdx + 1) % GALLERY_CURATED.length)
              }
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "46px",
                height: "46px",
                borderRadius: "999px",
                border: "1px solid var(--sand-dim)",
                background: "rgba(29,27,25,0.8)",
                color: "var(--ivory)",
                cursor: "pointer",
                fontSize: "24px",
              }}
            >
              ›
            </button>
            <div
              style={{
                position: "absolute",
                bottom: "12px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(29,27,25,0.84)",
                border: "1px solid var(--sand-dim)",
                padding: "7px 16px",
                borderRadius: "999px",
                fontSize: "13px",
              }}
            >
              {GALLERY_CURATED[lightboxIdx].title} — {lightboxIdx + 1} /{" "}
              {GALLERY_CURATED.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
