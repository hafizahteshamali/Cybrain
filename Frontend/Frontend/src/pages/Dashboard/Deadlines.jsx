import React from "react";
import { motion } from "framer-motion";
import { FaCircle, FaSearch } from "react-icons/fa";

const HalfCircleProgress = ({ value, size = 120, strokeWidth = 12 }) => {
  const radius = size / 2;
  const circumference = Math.PI * (radius - strokeWidth);
  const progress = (value / 100) * circumference;

  return (
    <svg width={size} height={size / 2} className="overflow-visible">
      {/* Background */}
      <path
        d={`M ${strokeWidth} ${radius}
            A ${radius - strokeWidth} ${radius - strokeWidth} 0 0 1 ${
          size - strokeWidth
        } ${radius}`}
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      {/* Progress */}
      <motion.path
        d={`M ${strokeWidth} ${radius}
            A ${radius - strokeWidth} ${radius - strokeWidth} 0 0 1 ${
          size - strokeWidth
        } ${radius}`}
        stroke="#2563eb"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        strokeLinecap="round"
        fill="transparent"
        animate={{ strokeDashoffset: circumference - progress }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* Label */}
      <text
        x="50%"
        y={radius - 10}
        textAnchor="middle"
        className="text-sm font-medium text-gray-700"
      >
        Normal
      </text>
    </svg>
  );
};

const Deadlines = () => {
  const deadlines = [
    {
      title: "Vertrag prüfen",
      date: "Endet in 2 Tagen",
      priority: "Hoch",
      color: "bg-blue-600",
    },
    {
      title: "Mandanten kontaktieren",
      date: "Endet in 1 Tagen",
      priority: "Niedrig",
      color: "bg-red-500",
    },
    {
      title: "Vertrag prüfen 2",
      date: "Endet in 3 Tagen",
      priority: "Medium",
      color: "bg-yellow-500",
    },
    {
      title: "Frist abschließen",
      date: "Endet in 1 Tagen",
      priority: "Hoch",
      color: "bg-blue-600",
    },
    {
      title: "Mandanten kontaktieren",
      date: "Endet in 4 Tagen",
      priority: "Niedrig",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen w-full p-6 gap-4 lg:overflow-hidden">
      {/* Left Section */}
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">Fristen</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Vertrag hochladen
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full mb-4">
          <input
            type="text"
            placeholder="Suchen"
            className="pl-10 pr-4 w-full py-2 border border-gray-300 rounded focus:outline-none bg-[var(--bg-color)]"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <div className="w-[100%] flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-0">
          {/* Deadlines List */}
          <div className="w-full lg:w-[74%] p-5 bg-[var(--bg-color)]">
            <div className="w-full flex justify-end items-center gap-2 pb-4">
              <span className="text-[16px] font-[400] text-[var(--black-color)]">
                Al-Score
              </span>
              <img src="/assets/images/dashboard/error-ellips.svg" alt="" />
            </div>
            <div className="flex flex-col gap-3 overflow-hidden">
              {deadlines.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center bg-[#D4D4D4] border border-gray-400 shadow rounded-lg px-4 py-5"
                >
                  <div>
                    <h2 className="font-[400] text-[var(--black-color)]">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                  </div>
                  <span
                    className={`${item.color} text-white text-xs px-3 py-2 rounded`}
                  >
                    {item.priority}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[24%] flex flex-col gap-6">
            {/* AI Score */}
            <div className="bg-[var(--bg-color)] rounded shadow px-5 py-6 flex flex-col items-center">
              <h2 className="font-semibold mb-3">AI-Score</h2>
              <HalfCircleProgress value={100} />
            </div>

            {/* AI-Klausel-Risiko */}
            <div className="bg-[var(--bg-color)] rounded shadow px-5 py-6 flex flex-col items-center">
              <h2 className="font-semibold mb-2">AI-Klausel-Risiko</h2>
              <div className="flex items-center gap-2">
                <span className="text-blue-600 font-medium">Aktiv</span>
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
              </div>
            </div>

            {/* Vertrauenwert */}
            <div className="bg-[var(--bg-color)] rounded shadow px-5 py-6">
              <h2 className="font-semibold mb-2">Vertrauenswert</h2>
              <div className="flex items-center gap-2">
                <span>80%</span>
                <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
                  <motion.div
                    className="h-2 bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deadlines;
