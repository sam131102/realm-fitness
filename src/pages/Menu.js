import React from "react";

function Menu() {
  const smoothies = [
    {
      title: "Nutty Monkey",
      description: "Banana, chocolate protein, PB, Nutella",
      nutrition: "20g carbs, 12.8g fat, 30.8g protein, 307 calories"
    },
    {
      title: "Chocolate Peanut Butter",
      description: "Banana, chocolate PB protein, cocoa powder, chocolate chips",
      nutrition: "35g carbs, 19g fat, 33.3g protein, 408 calories"
    },
    {
      title: "PB & J",
      description: "Frozen mixed berries, vanilla protein, PB, oats",
      nutrition: "43.8g carbs, 12g fat, 34g protein, 419 calories"
    },
    {
      title: "Cookie Obsession",
      description: "Chocolate cookie protein, oats, Oreo cookies, chocolate chips",
      nutrition: "58.3g carbs, 18.4g fat, 32.9g protein, 510 calories"
    },
    {
      title: "Gladiator",
      description: "OJ, mango, banana, Greek yogurt, vanilla protein",
      nutrition: "41.7g carbs, 9.7g fat, 32g protein, 359 calories"
    },
    {
      title: "Hulk",
      description: "Spinach, greens, banana, mango, avocado, protein",
      nutrition: "31.5g carbs, 11.2g fat, 30.6g protein, 323 calories"
    },
    {
      title: "Berry Burst",
      description: "Mixed berries, strawberries, banana, protein",
      nutrition: "37g carbs, 5g fat, 28.3g protein, 278 calories"
    },
    {
      title: "Strawberry Banana",
      description: "Banana, strawberries, vanilla protein, almond milk",
      nutrition: "22g carbs, 4.5g fat, 28.3g protein, 218 calories"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 sm:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C6962C] text-center mb-10">
          Smoothie Menu
        </h1>
        <p className="text-lg sm:text-xl text-center mb-16 max-w-3xl mx-auto">
          Delicious, protein-packed smoothies to fuel your workouts and support recovery. Made fresh, always tasty.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {smoothies.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl p-6 shadow-md hover:border-[#C6962C] transition duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-[#C6962C]">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-300 italic mb-1">{item.description}</p>
              <p className="text-sm text-gray-400">{item.nutrition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
