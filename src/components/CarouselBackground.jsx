import { useEffect, useState } from "react";

const images = [
  "https://www.shutterstock.com/image-photo/san-candido-italy-march-30-600nw-2283763429.jpg",
  "/carouselimage/Car2.0.png",
  "/carouselimage/Car2.2.jpg",
  "/carouselimage/Car3.jpg",
];

export default function CarouselBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-top md:bg-center transition-opacity duration-[1500ms] ease-in-out
            ${index === i ? "opacity-100 md:scale-110 scale-100" : "opacity-0 scale-100"}
          `}
          style={{
            backgroundImage: `url(${img})`,
            transition: "opacity 1.5s ease-in-out, transform 4s ease",
          }}
        ></div>
      ))}
    </div>
  );
}
