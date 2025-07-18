'user client'
import React from 'react';
export default function WhyChooseGma() {
  const leftFeatures = [
    { text: "Student-Centered Curriculum", color: "bg-gradient-to-r from-[#cdc072] to-[#cdc072]" },
    { text: "Innovative Learning Environment", color: "bg-gradient-to-r from-cyan-400 to-blue-400" },
    { text: "Global Outlook with Indian Values", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { text: "Experiential Learning Methods", color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { text: "Culture of Excellence", color: "bg-gradient-to-r from-yellow-400 to-green-400" }
  ];

  const rightFeatures = [
    { text: "Personalized Academic Support", color: "bg-gradient-to-r from-orange-500 to-red-500" },
    { text: "Interactive & Inspiring Classrooms", color: "bg-gradient-to-r from-yellow-400 to-green-400" },
    { text: "Exploration Beyond Textbooks (ATL)", color: "bg-gradient-to-r from-red-500 to-orange-500" },
    { text: "Future-Ready K–12 Infrastructure", color: "bg-gradient-to-r from-cyan-400 to-blue-400" },
    { text: "Outstanding Board Results", color: "bg-gradient-to-r from-[#cdc072] to-[#cdc072]" }
  ];

  return (
    <div className="bg-gradient-to-br from-teal-800 via-sky-600 to-teal-800 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-white mb-4 lg:mb-8">
            Why Choose GMA International School?
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed px-4">
              At GMA International School, we nurture global citizens with strong values, academic excellence, and a lifelong love for learning. Our student-centric approach blends innovation with tradition, ensuring each child receives personalized guidance in a safe, inclusive environment.
            </p>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mt-2 px-4">
              With a curriculum designed for holistic development and 21st-century skills, GMA International is more than just a school — it’s a foundation for future leaders.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-24">
          {/* Left Features */}
          <div className="flex flex-col space-y-2 lg:space-y-6 order-2 lg:order-1">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex justify-center lg:justify-end">
                <div className={`${feature.color} rounded-full px-6 py-3 lg:px-8 md:py-4 md:px-8 lg:py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
                  <span className="text-white font-semibold text-sm lg:text-base">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              {/* Outer Ring */}
              <div className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-br from-[#cdc072] to-[#cdc072] p-2 shadow-2xl">
                {/* Inner Circle with Logo */}
                <div className="w-full h-full rounded-full bg-gray-800 bg-opacity-80 flex items-center justify-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="grid grid-cols-6 gap-2 h-full w-full p-4">
                      {[...Array(36)].map((_, i) => (
                        <div key={i} className="bg-white/10 rounded-full"></div>
                      ))}
                    </div>
                  </div>

                  {/* Logo Container */}
                  <div className="relative z-10 bg-white rounded-full p-6 lg:p-8 shadow-xl">
                    <img src='./images/why-gma.jpeg' alt="GMA Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col space-y-2 lg:space-y-6 order-3">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="flex justify-center lg:justify-start">
                <div className={`${feature.color} rounded-full px-6 py-3 lg:px-8 lg:py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
                  <span className="text-white font-semibold text-sm lg:text-base">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connecting Lines */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {/* Left Lines */}
          <div className="absolute -left-40 xl:-left-60 -z-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={`left-${i}`}
                className="absolute w-16 xl:w-20 h-0.5 bg-white/30"
                style={{
                  top: `${0 + i * 80}px`,
                  right: '100%'
                }}
              ></div>
            ))}
          </div>

          {/* Right Lines */}
          <div className="absolute -right-40 xl:-right-55">
            {[...Array(5)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="absolute w-16 xl:w-20 h-0.5 bg-white/30"
                style={{
                  top: `${0 + i * 80}px`,
                  left: '100%'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
