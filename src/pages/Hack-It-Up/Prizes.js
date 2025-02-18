import React from "react";

const PrizeRankings = () => {
  const prizes = [
    {
      rank: "First Prize",
      reward: "₹6000",
      color: "bg-gradient-to-b from-yellow-400 to-yellow-600",
      image: "/images/first_prize_msc.png",
    },
    {
      rank: "Second Prize",
      reward: "₹4000",
      color: "bg-gradient-to-b from-gray-300 to-gray-400",
      image: "/images/second_prize_msc.png",
    },
    {
      rank: "Third Prize",
      reward: "₹3000",
      color: "bg-gradient-to-b from-orange-600 to-orange-800",
      image: "/images/third_prize_msc.png", // Ensure correct path
    },
  ];

  return (
    <div className="w-full bg-white p-4 sm:p-8">
      <h1 className="mt-8 text-3xl md:text-5xl lg:text-[5em] text-center font-['Bebas_Neue'] text-[#012147]">
        Prizes
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 max-w-6xl mx-auto">
        {prizes.map((prize, index) => (
          <div
            key={prize.rank}
            className="w-full md:w-[300px] transform hover:-translate-y-2 transition-all duration-300"
          >
            <div
              className={`h-full rounded-lg shadow-xl overflow-hidden bg-[#012147] ${
                index === 0 ? "md:scale-105" : ""
              }`}
            >
              {/* Image with fixed height and cover */}
              <img
                src={prize.image}
                alt={prize.rank}
                className="w-full h-100 object-cover bg-[#012147]"
              />

              {/* Header */}
              <div className={`${prize.color} p-6 sm:p-8 text-center`}>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {prize.rank}
                </h2>
                <p className="text-4xl sm:text-5xl font-bold text-white">
                  {prize.reward}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeRankings;
