const WhyChooseUs = () => {
 const features = [
   {
     icon: "🌟",
     title: "Top-Rated Service",
     description: "We prioritize customer satisfaction with world-class service.",
   },
   {
     icon: "🛏️",
     title: "Luxurious Rooms",
     description: "Enjoy the comfort of our carefully designed luxury rooms.",
   },
   {
     icon: "🌍",
     title: "Prime Locations",
     description: "Our hotels are located in the heart of the most popular destinations.",
   },
   {
     icon: "💳",
     title: "Affordable Prices",
     description: "Get the best deals and discounts on your bookings.",
   },
 ];

 return (
   <section className="py-12 bg-blue-50">
     <div className="container mx-auto px-6 text-center">
       <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
         {features.map((feature, index) => (
           <div
             key={index}
             className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
           >
             <div className="text-4xl mb-4">{feature.icon}</div>
             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
             <p className="text-gray-600">{feature.description}</p>
           </div>
         ))}
       </div>
     </div>
   </section>
 );
};

export default WhyChooseUs;
