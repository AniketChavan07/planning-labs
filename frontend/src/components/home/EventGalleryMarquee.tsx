

const row1Images = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80",
];

const row2Images = [
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=320&q=80"
];

export default function EventGalleryMarquee() {
  // Duplicate arrays for seamless looping
  const duplicatedRow1 = [...row1Images, ...row1Images];
  const duplicatedRow2 = [...row2Images, ...row2Images];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-foreground text-center">
          Event Highlights
        </h2>
      </div>

      <div className="flex flex-col space-y-[14px]">
        {/* ROW 1: floats LEFT */}
        <div
          className="flex w-full overflow-hidden group"
          style={{ maskImage: 'linear-gradient(90deg, transparent 0, #000 5%, #000 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 5%, #000 95%, transparent 100%)' }}
        >
          <div className="flex gap-[14px] w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
            {duplicatedRow1.map((src, index) => (
              <img
                key={`row1-${index}`}
                src={src}
                alt="Event Highlight"
                className="h-[130px] sm:h-[220px] w-[190px] sm:w-[320px] object-cover rounded-lg shrink-0 shadow-lg shadow-black/40"
              />
            ))}
          </div>
        </div>

        {/* ROW 2: floats RIGHT */}
        <div
          className="flex w-full overflow-hidden group"
          style={{ maskImage: 'linear-gradient(90deg, transparent 0, #000 5%, #000 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 5%, #000 95%, transparent 100%)' }}
        >
          <div className="flex gap-[14px] w-max shrink-0 animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {duplicatedRow2.map((src, index) => (
              <img
                key={`row2-${index}`}
                src={src}
                alt="Event Highlight"
                className="h-[130px] sm:h-[220px] w-[190px] sm:w-[320px] object-cover rounded-lg shrink-0 shadow-lg shadow-black/40"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

