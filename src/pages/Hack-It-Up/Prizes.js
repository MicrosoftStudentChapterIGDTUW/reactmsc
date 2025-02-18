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
      image: "/images/third_prize_msc.png",
    },
  ];

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="mb-8 sm:mb-12 text-4xl sm:text-5xl lg:text-6xl text-center font-['Bebas_Neue'] text-[#012147] tracking-wide">
        Prizes
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-5xl mx-auto">
        {prizes.map((prize, index) => (
          <div
            key={prize.rank}
            className={`w-full sm:w-[250px] lg:w-[280px] transform hover:-translate-y-2 transition-all duration-300 ${
              index === 0 ? "sm:scale-105" : ""
            }`}
          >
            <div className="h-full rounded-lg shadow-lg overflow-hidden bg-[#012147]">
              {/* Image container with adjusted height */}
              <div className="relative h-48 sm:h-56">
                <img
                  src={prize.image}
                  alt={prize.rank}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Prize details with adjusted padding */}
              <div className={`${prize.color} p-4 sm:p-6 text-center`}>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {prize.rank}
                </h2>
                <p className="text-3xl sm:text-4xl font-bold text-white">
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