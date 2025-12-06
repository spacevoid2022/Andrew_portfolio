import React, { useRef } from 'react';

export default function Carousel({ children }) {
    const trackRef = useRef(null);

    const scrollByCar = (dir = 1) => {
        const track = trackRef.current;
        if (!track) return;

        const card = track.querySelector('.carousel-card');
        const gap = 16; // px - keep in sync with Tailwind gap-4 (approx)
        const width = card ? card.getBoundingClientRect().width + gap : 320;
        track.scrollBy({ left: dir * width, behavior: 'smooth' });
    };

    return (
        <div className="relative">
            <div className="flex justify-center gap-2 mb-4">
                <button
                    type="button"
                    aria-label="Previous"
                    onClick={() => scrollByCar(-1)}
                    className="rounded-full bg-white/10 p-2 hover:bg-white/15"
                >
                    <span className="text-2xl">⟵</span>
                </button>

                <button
                    type="button"
                    aria-label="Next"
                    onClick={() => scrollByCar(1)}
                    className="rounded-full bg-white/10 p-2 hover:bg-white/15"
                >
                    <span className="text-2xl">→</span>
                </button>
            </div>

            <div
                ref={trackRef}
                className="carousel-track mt-6 flex gap-4 overflow-x-auto scroll-smooth pb-4"
            >
                {React.Children.map(children, (child, i) => (
                    <div key={i} data-card className="carousel-card flex-shrink-0 w-80">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}