import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface CarouselItem {
    title: string;
    description: string;
}

interface CarouselProps {
    backgroundImage: string;
    items: CarouselItem[];
    autoPlayInterval?: number; // in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({
    backgroundImage,
    items,
    autoPlayInterval = 5000, // Default 5 seconds
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!autoPlayInterval) return;
        
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % items.length);
        }, autoPlayInterval);
        
        return () => clearInterval(interval);
    }, [autoPlayInterval, items.length]);

    const goToNext = () => {
        setActiveIndex((current) => (current + 1) % items.length);
    };

    const goToPrev = () => {
        setActiveIndex((current) => (current - 1 + items.length) % items.length);
    };

    return (
        <div className="relative w-full h-[448px]">
            {/* Background image with overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            
            {/* Carousel content */}
            <div className="relative h-full flex items-center justify-center text-white px-12">
                <div className="text-center max-w-7xl">
                    <h2 className="text-6xl font-noto font-bold mb-4 transition-opacity duration-500">
                        {items[activeIndex].title}
                    </h2>
                    <p className="text-lg font-bold transition-opacity duration-500">
                        {items[activeIndex].description}
                    </p>
                </div>

                {/* Navigation buttons */}
                <button 
                    onClick={goToPrev}
                    className="absolute text-[#C8D1D9] left-4 p-2 rounded-full cursor-pointer bg-[#0000004D] hover:bg-opacity-40 transition-all"
                    aria-label="Previous slide"
                >
                    <FaArrowLeft />
                </button>
                
                <button 
                    onClick={goToNext}
                    className="absolute text-[#C8D1D9] right-4 p-2 rounded-full cursor-pointer bg-[#0000004D] hover:bg-opacity-40 transition-all"
                    aria-label="Next slide"
                >
                    <FaArrowRight />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 flex space-x-2 justify-center w-full">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-2 w-2 rounded-full transition-all ${
                                activeIndex === index ? 'bg-white w-4' : 'bg-white bg-opacity-50'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;