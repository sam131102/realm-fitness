import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function About() {
  const scrollToNextSection = () => {
    const next = document.getElementById("inside-realm");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  const galleryRef = React.useRef(null);
  const reviewRef = React.useRef(null);
  const navigate = useNavigate();

  const handleScroll = (direction, ref) => {
    if (ref?.current) {
      const scrollAmount = 324;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };  

  const reviews = [
    {
      name: "Ryder Purnell",
      text: "Been a member for over a year now and I have never been more in love with a gym. Cleanliness and equipment are my number 1 priorities and this gym excels at both! Great environment and friendless staff and inspiring fellow members that make you wanna push for greatness!! Easily accessible location and simple layout to navigate. Couldn’t recommend it more! Kelowna’s best gym!",
    },
    {
      name: "Adam",
      text: "Best gym in Kelowna if you’re serious about your fitness. They have all of the best equipment, Italian made, and the stainless steel dumbbells go to 150. It’s never too packed, and the other members are very respectful and sanitize everything after use. The staff are all phenomenal and keep the gym immaculately clean also. There is no filming before 10 pm, and a minimum age (18, I believe). They also have a lot of great options for pre workout and protein by the scoop, which is great if you’re out or forgot to pack one that day. 5 Stars all the way for these guys",
    },
    {
      name: "Cody Skopnik",
      text: "great gym with great equipment , easily the cleanest gym i’ve been at the staff is cleaning regularly , most gyms you can find spots on the equipment with crud build up but not here at all. The members also put away weight and even the cable accessories are put away after use most times and that’s a first , Think pride is taken by owners , staff and members",
    },
    {
      name: "Jenna",
      text: "Most beautiful and CLEAN gym in Kelowna by a long shot. All staff are so accommodating and friendly. They actually play really good music here always and it’s just an all around great vibe. As someone who’s a complete beginner in the gym, there’s no anxiety coming here. Would recommend this place to any one who’s brand new or super experienced in the gym!",
    },
    {
      name: "Chris West",
      text: "Amazing staff and are always super welcoming. Truly a home away from home. Each and every member that attends this gym is there to actually workout and everyone leads by example. The gym space is super organized and always clean. They mostly have panatta equipment which is absolutely amazing and if you haven’t tried it.. you have to. They always play great music, so if you forget your headphones, no worries. 5 stars across the board for every aspect of this gym. Best gym in Kelowna and the Okanagan region.",
    },
    {
      name: "Ashley Sanderson",
      text: "This is definitely the best gym in Kelowna. Very clean, staff is very welcoming and friendly. Lots of parking. Really good vibes all around, and of course the best equipment. I love The windows all around the gym that allow you to see the blue sky while working out. Nice to see people getting after it and working out hard, it’s inspiring. So happy I joined! 💜",
    },
    {
      name: "Kimberly Thomas",
      text: "Fabulous gym with amazing equipment and a great vibe. Friendly members and the hours are phenomenal. The layout is perfect with a ton of natural light coming in. My favorite gym in town 👌",
    },
    {
      name: "Genevieve Morrone",
      text: "Best people, best equipment, best results. People who go to Iron Nation are seriously focused on their goals. Whether for lifestyle or competition. You’ll find all walks of life here with one commonality - bettering ourselves so we can be better in the world. ✌️",
    },
  ];

  return (
    <div className="bg-black text-white mt-auto">
      {/* Combined Hero + Story + Highlights Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6 sm:px-12 lg:px-24 py-20 rounded-3xl"
        style={{
          backgroundImage: "url('/images/general3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C6962C] mb-6">More Than Just a Gym</h1>
          <p className="text-lg sm:text-xl leading-relaxed">
            The Realm Kelowna is unlike any other gym you’ve experienced before. A one-of-a-kind atmosphere filled with driven, passionate, uplifting, and like-minded individuals. We pride ourselves on our strong sense of community, facilitating more than just a place to work out, but a second home.
          </p>
          <p className="text-lg sm:text-xl mt-4 leading-relaxed">
            Our gym offers top-of-the-line equipment from premium brands like Panatta, Gymleco, and Ghost, making it the most luxurious fitness facility in the Okanagan. Stainless steel dumbbells, an extensive range of cables and attachments, as well as exclusive equipment, sets us apart. Even our cardio equipment impresses with features such as card games, virtual worldwide hiking simulations, Bluetooth connectivity, and charging stations.
          </p>
          <p className="text-lg sm:text-xl mt-4 leading-relaxed mb-12">
            At The Realm Kelowna, we go above and beyond to provide our members with the ultimate fitness experience. Offering 24/7 access, private bathrooms, change rooms, showers, and the cleanest gym environment you’ve ever stepped foot in. If you’re looking for a gym that has everything you need to reach your goals, The Realm Kelowna is your ultimate destination. More than just a gym, join a family that motivates and encourages you every step of the way.
          </p>

          <h2 className="text-3xl font-bold text-[#C6962C] mb-8">What Makes Us Different</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {["Premium Equipment", "Immaculate Cleanliness", "Tight-Knit Community", "24/7 Access", "Tripod-Free & 18+"].map((item, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#111] p-6 rounded-xl shadow-lg hover:shadow-[#C6962C]/60 transition-all duration-300">
                <div className="absolute inset-0 bg-[#C6962C] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <p className="text-lg font-semibold text-white z-10 relative group-hover:text-[#C6962C]">{item}</p>
              </div>
            ))}
          </div>

          <div className="hidden sm:flex flex-col items-center mt-24">
            <button onClick={scrollToNextSection} className="px-6 py-2 transition duration-300">
              <img src="/mini_logo.png" alt="logo" className="h-auto animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Combined Gallery + Testimonials Section */}
      <section id="inside-realm" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 bg-black text-center py-16">
        <div>
          <h2 className="text-3xl font-bold text-[#C6962C] mb-6">Inside the Realm</h2>
          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Explore our luxurious equipment, high-tech cardio zones, and thoughtfully designed spaces. Here’s a glimpse of what makes The Realm visually unforgettable.
          </p>
          {/* Horizontal Scroll Gallery */}
          <div className="relative mb-16">
            <button onClick={() => handleScroll("left", galleryRef)} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#C6962C] rounded-full">
              <FaChevronLeft className="text-white" />
            </button>
            <div ref={galleryRef} className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4">
              {[...Array(15)].map((_, num) => (
                <img
                  key={num}
                  src={`/images/gallery/${num + 1}.jpg`}
                  alt={`Gallery ${num + 1}`}
                  className="w-[300px] h-[200px] object-cover rounded-xl flex-shrink-0 shadow-md"
                />
              ))}
            </div>
            <button onClick={() => handleScroll("right", galleryRef)} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#C6962C] rounded-full">
              <FaChevronRight className="text-white" />
            </button>
          </div>
        </div>
        {/* Menu Section */}
        <h2 className="text-3xl font-bold text-[#C6962C] mb-6">Fuel Your Journey</h2>
        <p className="mb-10 text-lg max-w-3xl mx-auto text-white">From high-performance pre-workouts to refreshing smoothies and protein-packed bites — our in-house fuel station keeps your gains going strong.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {["Pre-Workout Boosts", "Post-Workout Shakes", "Healthy Snacks"].map((menu, idx) => (
            <div key={idx} className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-6 shadow-md hover:border-[#C6962C] transition duration-300">
              <h3 className="text-xl font-semibold text-[#C6962C] mb-3">{menu}</h3>
              <p className="text-gray-300 text-sm">Carefully curated options to support your fitness goals and recovery journey.</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#C6962C] mb-6">What Our Members Say</h2>
          <div className="relative px-4 sm:px-10">
            <button onClick={() => handleScroll("left", reviewRef)} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#C6962C] rounded-full">
              <FaChevronLeft className="text-white" />
            </button>
            <div
              ref={reviewRef}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-[300px] md:w-[350px] lg:w-[400px] bg-white text-black rounded-xl p-4 shrink-0"
                >
                  <p className="italic text-sm">“{review.text}”</p>
                  <p className="font-semibold mt-2 text-sm">– {review.name}</p>
                </div>
              ))}
            </div>
            <button onClick={() => handleScroll("right", reviewRef)} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#C6962C] rounded-full">
              <FaChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;