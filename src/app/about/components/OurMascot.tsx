"use client";

import React, { useState } from "react";
import Marquee from "@/app/components/Marquee";
import OurMascotComponent from "./OurMascotComponent";

// Мокові дані — імітуємо, що бекенд уже розділив на 3 групи
const initialImagesData = {
  marquee1: [
    {
      id: 1,
      image: "/images/mascot_img.jpg",
      likes: 2,
      isLiked: true,
      isSaved: false,
    },
    {
      id: 4,
      image: "/images/mascot_img.jpg",
      likes: 0,
      isLiked: true,
      isSaved: false,
    },
    {
      id: 7,
      image: "/images/mascot_img.jpg",
      likes: 14,
      isLiked: false,
      isSaved: false,
    },
  ],
  marquee2: [
    {
      id: 2,
      image: "/images/mascot_img.jpg",
      likes: 200,
      isLiked: false,
      isSaved: false,
    },
    {
      id: 5,
      image: "/images/mascot_img.jpg",
      likes: 1000,
      isLiked: false,
      isSaved: false,
    },
    {
      id: 8,
      image: "/images/mascot_img.jpg",
      likes: 47,
      isLiked: true,
      isSaved: false,
    },
  ],
  marquee3: [
    {
      id: 3,
      image: "/images/mascot_img.jpg",
      likes: 20,
      isLiked: true,
      isSaved: true,
    },
    {
      id: 6,
      image: "/images/mascot_img.jpg",
      likes: 1000000,
      isLiked: true,
      isSaved: true,
    },
    {
      id: 9,
      image: "/images/mascot_img.jpg",
      likes: 333,
      isLiked: false,
      isSaved: true,
    },
  ],
};

export default function OurMascot() {
  const [imagesData, setImagesData] = useState(initialImagesData);

  const toggleLike = (id: number) => {
    setImagesData((prev) => {
      const updateArray = (arr) =>
        arr.map((item) =>
          item.id === id
            ? {
                ...item,
                isLiked: !item.isLiked,
                likes: item.isLiked ? item.likes - 1 : item.likes + 1,
              }
            : item
        );

      return {
        marquee1: updateArray(prev.marquee1),
        marquee2: updateArray(prev.marquee2),
        marquee3: updateArray(prev.marquee3),
      };
    });
  };

  const toggleSave = (id: number) => {
    setImagesData((prev) => {
      const updateArray = (arr) =>
        arr.map((item) =>
          item.id === id ? { ...item, isSaved: !item.isSaved } : item
        );

      return {
        marquee1: updateArray(prev.marquee1),
        marquee2: updateArray(prev.marquee2),
        marquee3: updateArray(prev.marquee3),
      };
    });
  };

  return (
    <>
      <Marquee bottomGap={3} speed={10} pauseOnHover>
        {imagesData.marquee1.map(({ id, image, likes, isLiked, isSaved }) => (
          <OurMascotComponent
            key={`m1-${id}`}
            imageData={{ id, image, likes, isLiked, isSaved }}
            onToggleLike={() => toggleLike(id)}
            onToggleSave={() => toggleSave(id)}
          />
        ))}
      </Marquee>

      <Marquee bottomGap={3} speed={10} reverse pauseOnHover>
        {imagesData.marquee2.map(({ id, image, likes, isLiked, isSaved }) => (
          <OurMascotComponent
            key={`m2-${id}`}
            imageData={{ id, image, likes, isLiked, isSaved }}
            onToggleLike={() => toggleLike(id)}
            onToggleSave={() => toggleSave(id)}
          />
        ))}
      </Marquee>

      <Marquee bottomGap={3} speed={10} pauseOnHover>
        {imagesData.marquee3.map(({ id, image, likes, isLiked, isSaved }) => (
          <OurMascotComponent
            key={`m3-${id}`}
            imageData={{ id, image, likes, isLiked, isSaved }}
            onToggleLike={() => toggleLike(id)}
            onToggleSave={() => toggleSave(id)}
          />
        ))}
      </Marquee>
    </>
  );
}
