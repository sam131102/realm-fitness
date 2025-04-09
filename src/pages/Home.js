import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";


function Home() {
    const scrollToNextSection = () => {
        document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
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
    ];

    const plans = [
      {
        title: "1 Year Membership",
        price: "$850 Paid In Full",
        options: [
          "Two Payment Option:",
          "• $425 at sign-up",
          "• $425 after 30 days"
        ]
      },
      {
        title: "12-Month Membership",
        price: "$85/month",
        options: [
          "• 12-Month Commitment",
          "• Monthly Payments"
        ]
      },
      {
        title: "1-Month Membership",
        price: "$105",
        options: [
          "• No Commitment",
          "• $15 One-time Fob Fee"
        ]
      },
      {
        title: "Senior Memberships",
        price: "$70/month",
        options: [
          "• Month-to-Month"
        ]
      },
      {
        title: "Student Membership",
        price: "$73/month",
        options: [
          "• 6-Month Commitment Required"
        ]
      },
      {
        title: "10-Day Pass",
        price: "$150",
        options: [
          "• 10 Visit Punch Pass"
        ]
      }
    ];
    const scrollRef = useRef();

    const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = 300;

    scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
    });
    };

    return (
        <div className="container mx-auto">
            {/* Intro Section */}
            <section className="h-[calc(100vh-6rem)] bg-black text-white flex flex-col justify-between items-center px-8">
                <div className="flex-grow flex items-center justify-center">
                    <img src="/the_realm.png" alt="The Realm" className="max-w-full h-auto mb-10" />
                </div>
                <div className="flex flex-col items-center mt-10 mb-6">
                    <img src="/welcome.png" alt="Welcome to The Realm" className="w-80 h-auto mb-4" />
                    <button 
                        onClick={scrollToNextSection} 
                        className="mt-4 px-6 py-2 transition duration-300"
                    >
                        <img 
                        src="/mini_logo.png" 
                        alt="logo" 
                        className="h-auto animate-bounce"
                        />
                    </button>
                </div>
            </section>

            {/* About + Reviews Combined Section */}
            <section id="about-us" className="scroll-mt-20 bg-black text-white px-6 lg:px-16 py-20 sm:py-24">
              <div className="max-w-6xl mx-auto flex flex-col items-center text-center py-16 px-2">
                    {/* About Us */}
                    <div className="mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C6962C] mb-6">More Than Just a Gym</h2>
                        <p className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                            The Realm Kelowna is where passion meets purpose. This isn’t just a gym — it’s your second home. 
                            A one-of-a-kind atmosphere filled with driven individuals, luxury equipment, and a strong sense of community.
                        </p>
                        <p className="text-lg sm:text-xl mt-4 leading-relaxed max-w-4xl mx-auto">
                            From stainless steel dumbbells to rare Panatta and Gymleco machines, every detail is designed to elevate your fitness journey. 
                            Enjoy 24/7 access, private showers, and the cleanest environment in town.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                          <img src="/images/general1.jpg" alt="Realm Equipment" className="rounded-xl shadow-md" />
                          <img src="/images/dumbells2.jpg" alt="Gym Atmosphere" className="rounded-xl shadow-md" />
                          <img src="/images/weightrack.jpg" alt="Equipment Racks" className="rounded-xl shadow-md" />
                        </div>
                    </div>

                    {/* Reviews Header */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#C6962C]">
                    What Our Members Say
                    </h3>

                    {/* Carousel for small screens */}
                    <div className="block md:hidden w-full">
                        <div className="relative">
                            <button 
                            onClick={() => scroll("left")} 
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#C6962C] rounded-full"
                            >
                            <FaChevronLeft className="text-white" />
                            </button>

                            <div 
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto pb-4 px-10 scroll-smooth scrollbar-hide"
                            >
                            {reviews.map((review, index) => (
                                <div
                                key={index}
                                className="w-[300px] bg-white text-black rounded-xl p-4 shrink-0 shadow-md"
                                >
                                <h4 className="text-lg font-semibold mb-2">{review.name}</h4>
                                <div className="flex justify-center mb-3">
                                    <img src="/stars.png" alt="Stars" className="h-5 w-auto" />
                                </div>
                                <p className="text-sm italic text-gray-700">“{review.text}”</p>
                                </div>
                            ))}
                            </div>

                            <button 
                            onClick={() => scroll("right")} 
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#C6962C] rounded-full"
                            >
                            <FaChevronRight className="text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Grid for medium and large screens */}
                    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white text-black shadow-md rounded-2xl p-6">
                        <h4 className="text-xl font-semibold mb-2">{review.name}</h4>
                        <div className="flex justify-center mb-4">
                            <img src="/stars.png" alt="Stars" className="h-5 w-auto" />
                        </div>
                        <p className="text-gray-700 text-sm text-center">{review.text}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            {/* Memberships Section */}
            <section className="bg-black text-white min-h-screen px-6 sm:px-12 lg:px-24 py-16 mt-auto py-20 sm:py-24">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C6962C] mb-10">
                    Memberships
                    </h1>
                    <p className="text-lg sm:text-xl mb-16 max-w-2xl mx-auto">
                    Choose a plan that fits your lifestyle. Whether you're committing for the long haul or dropping in for a few sessions, we’ve got flexible options tailored to everyone.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {plans.map((plan, index) => (
                      <div
                        key={index}
                        className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-8 hover:border-[#C6962C] hover:scale-105 transition duration-300"
                      >
                        <h2 className="text-2xl font-bold text-[#C6962C] mb-2">{plan.title}</h2>
                        <p className="text-xl font-semibold mb-4">{plan.price}</p>
                        <ul className="space-y-1 text-sm text-gray-300">
                          {plan.options.map((opt, i) => (
                            <li key={i}>{opt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    </div>
                    <div className="mt-10 col-span-full">
                      <div className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-8 text-center hover:border-[#C6962C] hover:scale-[1.02] transition duration-300 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#C6962C] mb-4">Corporate Memberships</h2>
                        <p className="text-lg text-gray-300">Please call for more details</p>
                      </div>
                    </div>
                    <p className="mt-8 text-center text-lg text-gray-300">Drop-in passes available during staffed hours.</p>
                    <p className="mt-12 text-sm text-gray-400">*All memberships + 5% tax</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                      <img src="/images/general2.jpg" alt="Weights Area" className="rounded-2xl shadow-md object-cover h-72 w-full" />
                      <img src="/images/dumbells.jpg" alt="Machines" className="rounded-2xl shadow-md object-cover h-72 w-full" />
                      <img src="/images/machine.jpg" alt="Workout Setup" className="rounded-2xl shadow-md object-cover h-72 w-full" />
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section id="map" className="bg-black text-white py-16 px-6 py-20 sm:py-24">
              <div className="max-w-4xl mx-auto text-center border-2 border-[#C6962C] rounded-3xl p-6 sm:p-8">
                <h2 className="text-3xl sm:text-5xl text-[#C6962C] mb-6">Come Workout with Us!</h2>
                <p className="text-md sm:text-xl mb-6">
                Realm Fitness is conveniently located right next to BMW Kelowna, making it easy to find. 
                You can access it via Enterprise Way, just off Highway 33 and Banks Road. We are located on the second floor. The entrance lobby is located at the front of the building closest to enterprise way.  Whether you're 
                driving in from downtown or nearby areas, getting here is quick and hassle-free.
                </p>

                {/* Mobile Map Image */}
                <img
                src="/map.png"
                alt="Map (Mobile)"
                className="w-full rounded-3xl block sm:hidden"
                style={{ boxShadow: "0 0 30px #C6962C" }}
                />

                {/* Desktop Map Image */}
                <img
                src="/map.png"
                alt="Map"
                className="w-full rounded-3xl hidden sm:block"
                style={{ boxShadow: "0 0 30px #C6962C" }}
                />
              </div>
            </section>
        </div>
    );
}

export default Home;
