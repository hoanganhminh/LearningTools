import React, { useEffect, useState } from "react";

export default function ScrollToTopButton(): React.ReactElement | null {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const base: React.CSSProperties = {
    position: "fixed",
    right: "1.5rem",
    bottom: "1.5rem",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    color: "white",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
    transform: "translateY(20px)",
    opacity: 0,
    transition:
      "opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
    zIndex: 1000,
  };

  const shown: React.CSSProperties = {
    opacity: 1,
    transform: "translateY(0)",
  };

  const hover: React.CSSProperties = {
    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
  };

  const [hovered, setHovered] = useState(false);

  return React.createElement(
    "button",
    {
      onClick: scrollToTop,
      title: "Scroll to top",
      "aria-label": "Scroll to top",
      style: {
        ...base,
        ...(visible ? shown : {}),
        ...(hovered ? hover : {}),
      },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
    React.createElement(
      "span",
      {
        style: {
          fontSize: "22px",
          fontWeight: "bold",
          transform: "translateY(-1px)",
          userSelect: "none",
        },
      },
      "↑"
    )
  );
}
