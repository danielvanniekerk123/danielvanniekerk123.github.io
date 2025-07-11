import React, { useState } from 'react';

interface CollageViewerProps {
  images: string[];
}

const CollageViewer: React.FC<CollageViewerProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Default view: show only the first image */}
      <img
        src={images[0]}
        alt="collage-thumb"
        className="w-32 h-32 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={() => setIsOpen(true)}
      />

      {/* Modal collage view */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            aria-label="Close collage"
          >
            &times;
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-auto">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`collage-img-${idx}`}
                className="w-64 h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CollageViewer;