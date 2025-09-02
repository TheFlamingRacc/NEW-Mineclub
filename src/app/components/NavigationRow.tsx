"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";

const tabLabels = [
  "Політика конфіденційності",
  "Угода користувача",
  "Умови оплати",
  "Повернення коштів",
];

const sectionIds = [
  "privacy-policy",
  "user-agreement",
  "payment-terms",
  "refund-policy",
];

export default function NavigationRow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClick = (i: number) => {
    const section = document.getElementById(sectionIds[i]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionIds.indexOf(entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      const current = tabRefs.current[activeIndex];
      if (current) {
        const { offsetLeft, offsetWidth } = current;
        setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
      }
    });
  }, [activeIndex]);

  return (
    <Box sx={{ position: "relative", marginRight: "clamp(0px, 4vw, 40px)" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          borderBottom: "3px solid #D9D9D9",
          borderRadius: "1px",
          padding: "0 clamp(10px, 0.8vw, 30px)",
        }}
      >
        {tabLabels.map((label, i) => (
          <Button
            disableRipple
            key={i}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => handleClick(i)}
            sx={{
              color: "white",
              fontSize: "clamp(0px, 2vw, 16px)",
              textTransform: "none",
              px: 2,
              py: 1,
              margin: "0 clamp(5px, 0.3vw, 30px)",
              minWidth: "auto",
              position: "relative",
              zIndex: 2,
              fontFamily: "Inter",
              "&:hover": {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
              cursor: "pointer",
            }}
          >
            {label}
          </Button>
        ))}

        {/* Анімована смужка */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-3px",
            height: "3px",
            borderRadius: "1px",
            background: "#9E4EFF",
            filter: "drop-shadow(0 2px 6px rgba(158, 78, 255, 0.8)) blur(4px)",
            transition: "left 0.3s ease, width 0.3s ease",
            ...indicatorStyle,
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
    // <Box sx={{ position: "relative", marginRight: "clamp(0px, 4vw, 40px)" }}>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "space-around",
    //       position: "relative",
    //       borderBottom: "3px solid #D9D9D9",
    //       borderRadius: "1px",
    //       padding: "0 clamp(10px, 0.8vw, 30px)",
    //     }}
    //   >
    //     {/* 🔮 Плаваючий фон під кнопками */}
    //     <Box
    //       sx={{
    //         position: "absolute",
    //         top: 0,
    //         height: "100%",
    //         borderRadius: "8px",
    //         background: "linear-gradient(90deg, #9E4EFF, #7B4CFF)",
    //         transition: "left 0.3s ease, width 0.3s ease",
    //         ...indicatorStyle,
    //         zIndex: 1,
    //       }}
    //     />

    //     {tabLabels.map((label, i) => (
    //       <Button
    //         disableRipple
    //         key={i}
    //         ref={(el) => (tabRefs.current[i] = el)}
    //         onClick={() => handleClick(i)}
    //         sx={{
    //           color: "white",
    //           fontSize: "clamp(0px, 2vw, 16px)",
    //           textTransform: "none",
    //           px: 2,
    //           py: 1,
    //           margin: "0 clamp(5px, 0.3vw, 30px)",
    //           minWidth: "auto",
    //           position: "relative",
    //           zIndex: 2, // Важливо: вище за фон
    //           fontFamily: "Inter",
    //           transition: "color 0.3s ease",
    //           "&:hover": {
    //             backgroundColor: "transparent",
    //             boxShadow: "none",
    //           },
    //         }}
    //       >
    //         {label}
    //       </Button>
    //     ))}
    //   </Box>
    // </Box>
  );
}
