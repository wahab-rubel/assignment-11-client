const galleryImages = [
 { id: 1, src: "/images/room1.jpg", alt: "Luxury Room" },
 { id: 2, src: "/images/pool.jpg", alt: "Swimming Pool" },
 { id: 3, src: "/images/dining.jpg", alt: "Dining Area" },
 { id: 4, src: "/images/lobby.jpg", alt: "Hotel Lobby" },
];

const Gallery = () => {
 return (
   <div className="p-6">
     <h2 className="text-2xl font-bold mb-4">Hotel Gallery</h2>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       {galleryImages.map((image) => (
         <img key={image.id} src={image.src} alt={image.alt} className="rounded-lg shadow-lg" />
       ))}
     </div>
   </div>
 );
};

export default Gallery;
