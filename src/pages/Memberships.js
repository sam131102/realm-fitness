import React from "react";

function Memberships() {
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
    },
    {
      title: "5 Punch Pass",
      price: "$90",
      options: [
        "• 5 Visit Punch Pass"
      ]
    },
    {
      title: "Drop-in",
      price: "$25",
      options: [
        "• Drop-in"
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 sm:px-12 lg:px-24 py-24 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C6962C] mb-6">Membership Options</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Find the membership that suits your lifestyle. Whether you're here to grind daily or drop in occasionally, we have a plan just for you.
          </p>
        </div>

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
        <p className="mt-8 text-center text-lg text-gray-300">
          Drop-in passes available during staffed hours.
        </p>
        <p className="mt-4 text-center text-sm text-gray-400">
          *All memberships subject to 5% tax
        </p>
      </div>
    </div>
  );
}

export default Memberships;
