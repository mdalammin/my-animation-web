"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Eye,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProductShowcaseSection() {
  const products = [
    {
      id: 1,
      title: "Premium Headphones",
      price: "$199",
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    },
    {
      id: 2,
      title: "Shoe",
      price: "$149",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_z3_OShnil5k9nEVhAhzbz82mmGCo4cPqTg&s",
    },
    {
      id: 3,
      title: "Air Shoe",
      price: "$199",
      image: "https://pebblely.com/ideas/perfume/use-shadows.jpg",
    },
    {
      id: 4,
      title: "Smart Watch",
      price: "$149",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfJyI0M6MaA8lKTk_tx0lT2JQd9NU-fouXD0n5EGrhlnEVNWJ7K0Q8tsAs9R4HuvUR6I&usqp=CAU",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [index]);

  // Slide animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white border-t border-gray-300 shadow-xl">

      {/* LEFT SECTION */}
      <motion.div layout className="p-6 w-4/5 lg:w-4/5 mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Products</h2>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-white shadow rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-white shadow rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* GRID OF 2 ITEMS */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            {[0, 1].map((offset) => {
              const product = products[(index + offset) % products.length];

              return (
                <motion.div
                  key={product.title + index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  layout
                  className="relative group bg-white rounded-2xl shadow-md overflow-hidden p-4"
                >
                  <div className="w-full h-60 overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="mt-3">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-600 text-sm">{product.price}</p>
                  </div>

                  {/* Hover Icons */}
                  <div className="hidden md:flex flex-col space-y-3 absolute top-1/3 -translate-y-1/2 right-[-60px] group-hover:right-4 transition-all duration-300">
                    {[Heart, Eye, Share2].map((Icon, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white shadow rounded-full hover:bg-gray-100"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.button>
                    ))}
                  </div>

                  {/* Add to Cart */}
                  <motion.button
                    initial={{ y: 80, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-40 py-2 bg-blue-600 text-white rounded-full justify-center group-hover:bottom-4 transition-all"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                  </motion.button>

                  <button className="md:hidden w-full mt-3 py-2 bg-blue-600 text-white rounded-xl">
                    <ShoppingCart className="w-5 h-5 inline-block mr-2" /> Add to Cart
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        <motion.div layout className="flex justify-center mt-6 gap-2">
          {products.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === index ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE STATIC SECTION */}
      <div
        className="relative bg-cover bg-center flex items-center justify-center text-white p-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e')",
        }}
      >
        <div className="max-w-lg text-center md:text-left space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Upgrade Your Lifestyle
          </h2>
          <p className="text-lg opacity-90">
            Discover premium quality tech products designed for comfort,
            performance, and style.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg transition-all">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
