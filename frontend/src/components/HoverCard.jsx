import React, { useState } from "react";
import { motion } from "framer-motion";

const HoverCard = ({ imagePath, title, description, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative w-80 h-96 rounded-xl overflow-hidden shadow-2xl cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <img
          width={150}
          height={150}
          src={imagePath}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover filter brightness-75"
        />

        <motion.div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
            flex flex-col justify-end p-6 text-white transition-opacity duration-300
            ${isHovered ? "opacity-100" : "opacity-0"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="text-2xl font-bold mb-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-sm opacity-80"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HoverCard;
