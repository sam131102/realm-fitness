import React from "react";

function SignUp() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 sm:px-12 lg:px-32">
      <h1 className="text-4xl font-bold text-[#C6962C] mb-8 text-center">Membership Sign-Up</h1>

      <div className="bg-[#1a1a1a] border border-[#C6962C] rounded-xl p-6 sm:p-10 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-red-500">**ATTENTION**</h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm sm:text-base">
          <li>Registering through our online portal does not finalize your membership agreement.</li>
          <li>To complete your sign up, you must visit the gym in person to:
            <ul className="list-disc pl-5 mt-2">
              <li>Add a photo to your membership</li>
              <li>Assign your fob</li>
              <li>Provide a copy of ID</li>
              <li>Provide payment (if applicable)</li>
            </ul>
          </li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold text-white">Online Form Instructions:</h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm sm:text-base">
          <li>All fields must be completed in order to proceed to the next page.</li>
          <li>If you do not have a secondary phone number, please enter your primary phone number again.</li>
          <li>Postal code must be entered in <strong>ALL CAPITALS</strong>.</li>
          <li>Blue hyperlinks must be opened before you can agree to the Terms & Conditions.</li>
          <li><strong>Failure to follow these steps may result in delays</strong> in activating your membership.</li>
        </ul>
      </div>

      <div className="text-center">
        <a
          href="https://onlinejoin.abcfitness.com/signup/plan?club=31733&club" // ← Replace with real URL
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#C6962C] text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
        >
          Go to Membership Sign-Up Form
        </a>
      </div>
    </div>
  );
}

export default SignUp;
