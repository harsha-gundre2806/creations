import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "110.jpg",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Close the full image on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      {/* Intro Headings with AOS */}
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold text-center mb-6 pt-10 text-gray-800"
      >
        Our Art Collection
      </h2>
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-xl font-medium text-center mb-2 text-gray-600"
      >
        Unique hand-painted art on shirts, sarees, and more
      </h2>
      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-xl font-medium text-center mb-2 text-gray-600"
      >
        Every piece is crafted with love and creativity ❤️
      </h2>
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-xl font-medium text-center mb-8 text-gray-600"
      >
        Transform your clothes into wearable masterpieces
      </h2>
      <h2
        data-aos="fade-up"
        data-aos-delay="400"
        className="text-2xl font-sm text-center mb-4 text-gray-700"
      >
        See the artwork in full glory – click the image
      </h2>

      {/* 🖼 Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Art ${idx + 1}`}
              className="w-full h-72 md:h-80 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">
                View Art {idx + 1}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🪄 Fullscreen Image Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImage(null)} // close on clicking anywhere
        >
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-4xl w-[90%] max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-500 scale-100 hover:scale-105"
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
