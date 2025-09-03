"use client";

import { Box, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useNavigation } from "../context/NavigationMainContext";
import { showWarning } from "../toasts";

export default function NavigationMain() {
  const router = useRouter();
  const pathname = usePathname();
  const { activeIndex, setActiveIndex } = useNavigation()!;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });

  const [hoverStyle, setHoverStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [containerWidth, setContainerWidth] = useState(
    "clamp(250px, 30vw, 500px)" // значення за замовчуванням
  );

  // Оновлення activeIndex і containerWidth при зміні pathname
  useEffect(() => {
    let index = 0;
    if (pathname === "/home") index = 0;
    else if (
      pathname === "/about/story" ||
      pathname === "/about/bloggers" ||
      pathname === "/about/servers"
    )
      index = 1;
    else if (pathname === "/store") index = 3;
    else index = 0;

    setActiveIndex(index);

    if (index !== 0) {
      setContainerWidth("clamp(250px, 37vw, 500px)");
    } else {
      setContainerWidth("clamp(200px, 34vw, 450px)");
    }
  }, [pathname, setActiveIndex]);

  // Білий індикатор (активна кнопка)
  useEffect(() => {
    const current = tabRefs.current[activeIndex];
    if (current) {
      const container = current.parentNode as HTMLElement | null;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const currentRect = current.getBoundingClientRect();
      setIndicatorStyle({
        left: currentRect.left - containerRect.left,
        width: currentRect.width,
      });
    }
  }, [activeIndex]);

  const handleHover = (index: number) => {
    const current = tabRefs.current[index];
    if (current) {
      const container = current.parentNode as HTMLElement | null;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();
      const currentRect = current.getBoundingClientRect();
      setHoverStyle({
        left: currentRect.left - containerRect.left,
        width: currentRect.width,
        opacity: 1,
      });
    }
  };

  const handleLeave = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <Box
      sx={{
        color: "#fff",
        height: "clamp(20px, 4vw, 55px)",
        width: containerWidth,
        borderRadius: "50px",
        backgroundColor: "#583385",
        overflow: "hidden",
        opacity: "0",
        animation: "fadeIn 1s ease forwards",
        animationDelay: "1s",
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          padding: "0 clamp(0px, 1vw, 6px)",
        }}
      >
        {/* Білий фон (активний) */}
        <Box
          sx={{
            position: "absolute",
            height: "80%",
            top: "10%",
            borderRadius: "50px",
            background: "white",
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            transition: "left 0s ease, width 0s ease",
            zIndex: 1,
          }}
        />
        {/* Сірий фон (hover) */}
        <Box
          sx={{
            position: "absolute",
            height: "80%",
            top: "10%",
            borderRadius: "50px",
            background: "rgba(255,255,255,0.2)",
            left: hoverStyle.left,
            width: hoverStyle.width,
            opacity: hoverStyle.opacity,
            transition: "left 0.3s ease, width 0.3s ease, opacity 0.2s ease",
            zIndex: 2,
          }}
        />

        {/* Кнопки */}
        <Button
          disableRipple
          ref={(el) => {
            tabRefs.current[0] = el;
          }}
          onClick={() => {
            router.push("/home");
          }}
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={handleLeave}
          sx={{
            fontSize: "clamp(0px, 1vw, 16px)",
            fontWeight: "500",
            textTransform: "none",
            padding: "0 clamp(10px, 1.5vw, 16px)",
            color: activeIndex === 0 ? "#583385" : "white",
            cursor: "pointer",
            zIndex: 3,
          }}
        >
          Головна
        </Button>

        <Button
          disableRipple
          ref={(el) => {
            tabRefs.current[1] = el;
          }}
          onClick={() => {
            router.push("/about/story", { scroll: false });
          }}
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={handleLeave}
          sx={{
            fontSize: "clamp(0px, 1vw, 16px)",
            fontWeight: "500",
            textTransform: "none",
            padding: "0 clamp(10px, 1.5vw, 16px)",
            color: activeIndex === 1 ? "#583385" : "white",
            cursor: "pointer",
            zIndex: 3,
          }}
        >
          Про нас
        </Button>

        <Button
          disableRipple
          ref={(el) => {
            tabRefs.current[2] = el;
          }}
          onClick={() => {
            showWarning("Вже скоро!");
          }}
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={handleLeave}
          sx={{
            fontSize: "clamp(0px, 1vw, 16px)",
            fontWeight: "500",
            textTransform: "none",
            padding: "0 clamp(10px, 1.5vw, 16px)",
            color: activeIndex === 2 ? "#583385" : "white",
            opacity: 0.4,
            zIndex: 3,
          }}
        >
          Форум
        </Button>

        <Button
          disableRipple
          ref={(el) => {
            tabRefs.current[3] = el;
          }}
          onClick={() => {
            router.push("/store");
          }}
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={handleLeave}
          sx={{
            fontSize: "clamp(0px, 1vw, 16px)",
            fontWeight: "500",
            textTransform: "none",
            padding: "0 clamp(10px, 1.5vw, 16px)",
            color: activeIndex === 3 ? "#583385" : "white",
            cursor: "pointer",
            zIndex: 3,
          }}
        >
          Магазин
        </Button>

        {activeIndex !== 0 ? (
          <Button
            disableRipple
            onMouseEnter={() => handleHover(4)}
            onClick={() => router.push("/settings")}
            onMouseLeave={handleLeave}
            ref={(el) => {
              tabRefs.current[4] = el;
            }}
            sx={{
              width: "clamp(25px, 2.5vw, 40px)",
              minWidth: "0",
              zIndex: "2",
            }}
          >
            <Box
              component="img"
              src="/images/NavSettings.svg"
              alt="Settings"
              sx={{
                height: "clamp(20px, 2vw, 26px)",
                width: "clamp(20px, 2vw, 26px)",
                margin: "0 clamp(5px, 0.3vw, 30px)",
                pointerEvents: "none",
                transition: "background-color 0.5s ease",
              }}
            />
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}
