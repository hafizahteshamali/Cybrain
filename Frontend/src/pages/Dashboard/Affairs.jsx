import React from "react";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaSearch,
} from "react-icons/fa";
import {
  ContractCenterData1,
  contracts,
  ContractScheduleData,
  data,
  Dringend,
  event,
  NoticeData,
  risks,
  Zeitleiste,
} from "../../assets/ConstantData";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const HalfCircleProgress = ({ value, size = 160, strokeWidth = 12 }) => {
  const radius = size / 2;
  const circumference = Math.PI * (radius - strokeWidth);

  // final stroke length for given value
  const progress = (value / 100) * circumference;

  return (
    <svg width={size} height={size / 2} className="overflow-visible">
      {/* Background track */}
      <path
        d={`
          M ${strokeWidth} ${radius}
          A ${radius - strokeWidth} ${radius - strokeWidth} 0 0 1 ${
          size - strokeWidth
        } ${radius}
        `}
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
        fill="transparent"
      />

      {/* Animated Progress arc */}
      <motion.path
        d={`
          M ${strokeWidth} ${radius}
          A ${radius - strokeWidth} ${radius - strokeWidth} 0 0 1 ${
          size - strokeWidth
        } ${radius}
        `}
        stroke="#2563eb"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        strokeLinecap="round"
        fill="transparent"
        animate={{ strokeDashoffset: circumference - progress }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Center Text */}
      <text
        x="50%"
        y={radius - 10}
        textAnchor="middle"
        className="text-[14px] font-[400] text-[var(--black-color)]"
      >
        Normal
      </text>
    </svg>
  );
};

const Affairs = () => {
  return (
    <div className="w-full mx-auto p-4 lg:py-2 lg:px-4 lg:h-screen lg:overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Angelegenheiten</h1>
        <button className="px-4 sm:px-6 py-2 bg-blue-600 text-sm sm:text-[16px] text-white rounded shadow hover:bg-blue-700 transition w-full sm:w-auto">
          Vertrag hochladen
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full mb-2">
        <input
          type="text"
          placeholder="Suchen"
          className="pl-10 pr-4 w-full py-2 border border-gray-300 rounded focus:outline-none bg-white"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Main Content */}
        <div className="w-full lg:w-[72%] xl:w-[76.5%] flex flex-col gap-4 lg:gap-2">
          {/* Stats - flex row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 gap-2 py-4 sm:py-2 bg-[var(--bg-color)] rounded flex flex-col justify-center items-start px-6 sm:px-10">
              <h2 className="text-xl sm:text-2xl font-[600]">Offene Angelegenheiten</h2>
              <h1 className="text-5xl sm:text-6xl font-[400]">03</h1>
              <div className="flex items-center gap-2">
                <img src="/assets/images/dashboard/warning.svg" alt="" />
                <p>Ausstehend</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 gap-3 py-4 sm:py-2 bg-[var(--bg-color)] rounded flex flex-col justify-center items-start px-6 sm:px-10 relative">
              <h2 className="text-xl sm:text-2xl font-[600]">
                Abgeschlossene Angelegenheiten
              </h2>
              <h1 className="text-5xl sm:text-6xl font-[400]">14</h1>
              <div className="flex items-center gap-2">
                <img
                  src="/assets/images/dashboard/bar.svg"
                  className="absolute bottom-2"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Kategorien Section */}
          <div className="bg-[var(--bg-color)] p-4 sm:p-6 md:p-8 lg:py-2 lg:px-10 rounded">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--black-color)] mb-4">
              Kategorien
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              {/* Chart with Animation */}
              <div className="w-full md:w-2/5 flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[180px] md:h-[150px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={70}
                        dataKey="value"
                        paddingAngle={0}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </motion.div>
              </div>

              {/* Legends */}
              <div className="w-full flex flex-col gap-2">
                {data.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <span
                      className="w-4 h-4 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className="flex items-center gap-2 text-sm sm:text-base">
                      {item.icon} {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Zeitleiste Section */}
          <div className="bg-[var(--bg-color)] p-4 min-h-[90px] rounded">
            <div className="w-full flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-gray-800">
                Zeitleiste
              </h2>

              {/* Timeline Bar */}
              <div className="relative w-full h-1 bg-gray-400 rounded">
                {/* Single Event Marker */}
                <div
                  className={`absolute top-[-6px] flex flex-col items-center ${
                    event.position === "left" ? "left-0" : "right-0"
                  }`}
                >
                  {/* Marker Dot */}
                  <div className="w-3 h-3 bg-blue-600 rounded-full shadow"></div>

                  {/* Label */}
                  <span
                    className={`mt-2 text-sm text-gray-700 ${
                      event.position === "left" ? "text-left" : "text-right"
                    }`}
                  >
                    {event.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Widgets */}
        <div className="w-full lg:w-[28%] xl:w-[22%] flex flex-col gap-1">
          <div className="bg-[var(--bg-color)] px-2 py-1 rounded shadow">
            <h2 className="font-bold mb-1">Dringend</h2>
            <ul className="space-y-0.5">
              {Dringend.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-3">
                    <img src={item.icon} alt="" className="w-5 h-5" />
                    <div className="flex flex-col">
                      <p className="text-[12px] text-black">{item.head}</p>
                      <span className={`${item.textColor} text-[10px]`}>
                        {item.text}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Berichte & Trends Section */}
          <div className="px-2 py-2 flex flex-col justify-center items-center bg-[var(--bg-color)] rounded">
            <h2 className="font-bold mb-1">Al-Score</h2>
            <HalfCircleProgress value={100} size={140} strokeWidth={13} />
          </div>

          <div className="bg-[var(--bg-color)] px-2 py-1 rounded shadow text-center flex flex-col justify-center items-center">
            <h2 className="font-bold mb-1">AI-Klausel-Risiko</h2>
            <div className="flex justify-center items-center gap-1">
              <p className="text-blue-600 font-semibold">Aktiv</p>
              <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-[#0056FF]"></div>
            </div>
          </div>

          <div className="bg-[var(--bg-color)] px-2 py-1 rounded shadow flex flex-col justify-center items-start gap-1.5">
            <h2 className="font-bold">Vertrauenswert</h2>
            <div className="flex justify-between items-center w-full">
              <p className="text-sm text-gray-600">80%</p>
              <div className="w-3/4 h-2 bg-gray-200 rounded overflow-hidden">
                <motion.div
                  className="h-2 bg-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </div>
          </div>

          <div className="bg-[var(--bg-color)] px-2 py-1 rounded shadow">
            <h2 className="font-bold mb-1.5">Rechtliche Hinweise</h2>
            <ul className="text-sm sm:text-base text-[var(--black-color)] space-y-1">
              {Zeitleiste.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-2 text-[12px]">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affairs;