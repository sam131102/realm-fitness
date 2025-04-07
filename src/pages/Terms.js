import React from 'react';

function Terms() {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#C6962C] mb-6">Terms & Conditions</h1>
        <p className="text-gray-300 mb-6">Please review the full document below:</p>
        <div className="border-2 border-[#C6962C] rounded-xl overflow-hidden">
          <iframe
            src="/The_Realm_-_Website_Terms_and_Conditions.pdf"
            width="100%"
            height="800px"
            title="Terms and Conditions"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Terms;
