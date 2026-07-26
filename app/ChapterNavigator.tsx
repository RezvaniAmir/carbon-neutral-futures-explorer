"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "top", number: "01", label: "Explorer" },
  { id: "challenge", number: "02", label: "Challenge" },
  { id: "pathway", number: "03", label: "Pathway" },
  { id: "systems", number: "04", label: "Systems" },
  { id: "futures", number: "05", label: "Futures" },
  { id: "resources", number: "06", label: "Resources" },
  { id: "about", number: "07", label: "About" },
];

export default function ChapterNavigator() {
  const [active, setActive] = useState("top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = chapters
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveChapter = () => {
      const readingLine = window.scrollY + window.innerHeight * 0.36;
      let current = sections[0];
      sections.forEach((section) => {
        if (section.offsetTop <= readingLine) current = section;
      });
      if (current) setActive(current.id);
    };

    updateActiveChapter();
    window.addEventListener("scroll", updateActiveChapter, { passive: true });
    window.addEventListener("resize", updateActiveChapter);
    return () => {
      window.removeEventListener("scroll", updateActiveChapter);
      window.removeEventListener("resize", updateActiveChapter);
    };
  }, []);

  const activeIndex = chapters.findIndex((chapter) => chapter.id === active);
  const current = chapters[Math.max(0, activeIndex)];

  return (
    <nav className="chapter-navigator" aria-label="Chapter navigator">
      <div className="chapter-rail">
        <span className="rail-title">Journey</span>
        <div className="rail-track" aria-hidden="true">
          <span style={{ height: `${(activeIndex / (chapters.length - 1)) * 100}%` }} />
        </div>
        <ol>
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <a
                className={chapter.id === active ? "is-active" : ""}
                href={`#${chapter.id}`}
                aria-current={chapter.id === active ? "location" : undefined}
              >
                <span>{chapter.number}</span>
                <strong>{chapter.label}</strong>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className={`chapter-mobile${open ? " is-open" : ""}`}>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-chapter-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>
            <small>Chapter {current.number}</small>
            <strong>{current.label}</strong>
          </span>
          <i aria-hidden="true">{open ? "×" : "☰"}</i>
        </button>
        <div className="mobile-progress" aria-hidden="true">
          <span style={{ width: `${((activeIndex + 1) / chapters.length) * 100}%` }} />
        </div>
        <ol id="mobile-chapter-menu">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <a
                className={chapter.id === active ? "is-active" : ""}
                href={`#${chapter.id}`}
                aria-current={chapter.id === active ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{chapter.number}</span>
                {chapter.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
