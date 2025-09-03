"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import OurMascotComponent from "./OurMascotComponent";
import Marquee from "@/app/components/Marquee";

type MascotData = {
  id: number;
  image: string;
  likes: number;
  isLiked: boolean;
  isSaved: boolean;
};

// Заглушки зображень
const initialData: MascotData[] = [
  {
    id: 1,
    image: "/images/mascot.jpg",
    likes: 12,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    image: "/images/mascot.jpg",
    likes: 45,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 3,
    image: "/images/mascot.jpg",
    likes: 7,
    isLiked: false,
    isSaved: true,
  },
  {
    id: 4,
    image: "/images/mascot.jpg",
    likes: 20,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 5,
    image: "/images/mascot.jpg",
    likes: 3,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 6,
    image: "/images/mascot.jpg",
    likes: 18,
    isLiked: true,
    isSaved: false,
  },
  {
    id: 7,
    image: "/images/mascot.jpg",
    likes: 33,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 8,
    image: "/images/mascot.jpg",
    likes: 9,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 9,
    image: "/images/mascot.jpg",
    likes: 100,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 10,
    image: "/images/mascot.jpg",
    likes: 55,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 11,
    image: "/images/mascot.jpg",
    likes: 1,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 12,
    image: "/images/mascot.jpg",
    likes: 67,
    isLiked: false,
    isSaved: true,
  },
];

// Функція для розбивки на групи по 4
function chunkArray<T>(arr: T[], size: number) {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

export default function MultipleMarquees() {
  const [mascots, setMascots] = useState(initialData);

  // Обробники для синхронізації
  const toggleLike = (id: number) => {
    setMascots((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              isLiked: !m.isLiked,
              likes: m.isLiked ? m.likes - 1 : m.likes + 1,
            }
          : m
      )
    );
  };

  const toggleSave = (id: number) => {
    setMascots((prev) =>
      prev.map((m) => (m.id === id ? { ...m, isSaved: !m.isSaved } : m))
    );
  };

  // Розділяємо дані на 3 "ряди" по 4
  const rows = chunkArray(mascots, 4);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "3vw" }}>
      {rows.map((row, index) => (
        <Marquee
          key={index}
          gap={3}
          speed={8}
          reverse={index % 2 === 1} // Чередуем направление для каждого второго ряда
          pauseOnHover={true}
        >
          {row.map((m) => (
            <OurMascotComponent
              key={m.id}
              imageData={m}
              onToggleLike={() => toggleLike(m.id)}
              onToggleSave={() => toggleSave(m.id)}
            />
          ))}
        </Marquee>
      ))}
    </Box>
  );
}
