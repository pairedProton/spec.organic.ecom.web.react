import React, { useState } from "react";

const TrackOrder = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full min-h-[70vh] bg-[#f7f6f2] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl  font-[Montserrat] ">
          Track Your Order
        </h1>

        <p className="mt-8 text-2xl font-semibold text-black">
          Order ID / Tracking Number
        </p>

        <form onSubmit={handleSubmit} className="mt-7">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter Order ID or Tracking Number"
            className="w-full h-16 rounded-md border border-[#d9c79b] bg-transparent px-5 text-center text-xl text-gray-600 outline-none focus:border-[#c5ac63]"
          />

          <button
            type="submit"
            className="mt-8 w-full h-16 rounded-xl text-white bg-emerald-900 text-4xl font-medium hover:bg-[#d5b225] transition-colors"
          >
            Track Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrackOrder;
