import React from "react";
const { useState } = React;

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: "/images/carasol1.avif",alt: "Placeholder image 1 with text 'Image 1'" },
        { src: "/images/carasol2.avif", alt: "Placeholder image 2 with text 'Image 2'" },
        { src: "/images/carasol3.avif", alt: "Placeholder image 3 with text 'Image 3'" },
        { src: "/images/carasol4.avif", alt: "Placeholder image 4 with text 'Image 4'" },
        { src: "/images/carasol5.avif", alt: "Placeholder image 5 with text 'Image 5'" }
    ];

    const prevSlide = () => {
        const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto mt-10  ">
            <div className="overflow-hidden relative">
                <div className="flex transition-transform duration-500   " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} className="w-full" />
                    ))}
                
                </div>

            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-800 text-white p-2 w-10  rounded-full">
                <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-800 text-white p-2 w-10 rounded-full">
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};
export default Carousel