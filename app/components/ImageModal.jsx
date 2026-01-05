"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ isOpen, onClose, imgUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-400 transition-colors"
            >
              &times;
            </button>
            <img
              src={imgUrl}
              alt="Project Preview"
              className="max-h-[85vh] w-auto rounded-lg shadow-2xl border border-[#383737]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
