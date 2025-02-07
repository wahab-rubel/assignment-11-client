import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-[800px]">
        <img
          src="https://i.ibb.co/vhrZGv9/1.jpg"
          className="w-full h-full object-cover"
          alt="Luxury Stay"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Luxury Stay
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experience unmatched comfort and breathtaking views.
          </p>
          <a href="/rooms" className="btn btn-primary px-6 py-3 text-lg">
            Book Now
          </a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-screen">
        <img
          src="https://i.ibb.co.com/9pQqhKV/2.jpg"
          className="w-full h-full object-cover"
          alt="Relax and Unwind"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Relax and Unwind
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Find peace and tranquility during your stay.
          </p>
          <a href="/rooms" className="btn btn-primary px-6 py-3 text-lg">
            Explore Rooms
          </a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-screen">
        <img
          src="https://i.ibb.co/vhrZGv9/1.jpg"
          className="w-full h-full object-cover"
          alt="Exclusive Offers"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Exclusive Offers Await
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Book now and enjoy special discounts for your dream vacation.
          </p>
          <a href="/offers" className="btn btn-primary px-6 py-3 text-lg">
            View Offers
          </a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-screen">
        <img
          src="https://i.ibb.co/vhrZGv9/1.jpg"
          className="w-full h-full object-cover"
          alt="Memorable Moments"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Create Memorable Moments
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Let us make your stay unforgettable with our premium services.
          </p>
          <a href="/contact" className="btn btn-primary px-6 py-3 text-lg">
            Contact Us
          </a>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
