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
    <div className="w-[100%] mx-auto p-6 h-screen overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-4xl font-bold">Angelegenheiten</h1>
        <button className="px-6 py-2 bg-blue-600 text-[16px] text-white rounded shadow hover:bg-blue-700 transition">
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

      <div className="w-full flex justify-between">
        {/* Main Flex Layout */}
        <div className="flex w-[76.5%] flex-col justify-start gap-2">
          {/* Stats - flex row */}
          <div className="flex justify-between gap-2.5 mb-2">
            <div className="w-[50%] gap-3 py-3 bg-[var(--bg-color)] rounded flex flex-col justify-center items-start px-10">
              <h2 className="text-2xl font-[600]">Offene Angelegenheiten</h2>
              <h1 className="text-6xl font-[400]">03</h1>
              <div className="flex items-center gap-2">
                <img src="/assets/images/dashboard/warning.svg" alt="" />
                <p>Ausstehend</p>
              </div>
            </div>

            <div className="w-[50%] gap-3 py-3 bg-[var(--bg-color)] rounded flex flex-col justify-center items-start px-10 relative">
              <h2 className="text-2xl font-[600]">
                Abgeschlossene Angelegenheiten
              </h2>
              <h1 className="text-6xl font-[400]">14</h1>
              <div className="flex items-center gap-2">
                <img
                  src="/assets/images/dashboard/bar.svg"
                  className="absolute bottom-2"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Vertragszeitplan (left) */}
          <div className="flex flex-col items-start px-10 justify-center w-full py-3 bg-[var(--bg-color)] rounded">
            {/* Heading */}
            <h1 className="text-3xl font-semibold text-[var(--black-color)]">
              Kategorien
            </h1>

            <div className="flex w-full justify-start gap-5 items-center mt-2">
              {/* Chart with Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[200px] h-[200px]" // 🔹 size chhota kiya
              >
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={50} // 🔹 kam kiya
                      outerRadius={90} // 🔹 kam kiya
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

              {/* Legends */}
              <div className="mt-6 space-y-3">
                {data.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className="flex items-center gap-2">
                      {item.icon} {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Risiken Section */}
          <div className="bg-[var(--bg-color)] px-4 rounded w-full min-h-[140px] flex justify-center items-center">
            <div className="w-full flex flex-col gap-2">
              {/* Heading */}
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
        <div className="flex flex-col justify-between items-start gap-1.5 w-[22%]">
          <div className="bg-[var(--bg-color)] p-2 rounded shadow w-full">
            <h2 className="font-bold mb-1">Dringend</h2>
            <ul className="text-[10px] w-[90%] space-y-1.5">
              {Dringend.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-1.5">
                    <img src={item.icon} alt="" />

                    <div className="flex flex-col">
                      <p className="text-[14px] text-black">{item.head}</p>
                      <span className={`${item.textColor} text-[12px]`}>
                        {item.text}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Berichte & Trends Section */}
          <div className="p-2 flex flex-col justify-center items-start bg-[var(--bg-color)] w-full">
            <h1>Al-Score</h1>
            <div className="w-full flex p-1 justify-center items-center">
              <HalfCircleProgress value={100} size={140} strokeWidth={13} />
            </div>
          </div>

          <div className="bg-[var(--bg-color)] p-2 rounded shadow text-center w-full min-h-[80px] flex flex-col justify-center items-center">
            <h2 className="font-bold">AI-Klausel-Risiko</h2>
            <div className="flex justify-center items-center gap-2">
              <p className="text-blue-600 font-semibold">Aktiv</p>
              <div className="h-[20px] w-[20px] rounded-full bg-[#0056FF]"></div>
            </div>
          </div>

          <div className="bg-[var(--bg-color)] p-2 w-full rounded shadow flex flex-col justify-center items-start gap-1.5">
            <h2 className="font-bold">Vertrauenswert</h2>
            <div className="flex justify-between items-center w-full">
              <p className="text-sm text-gray-600">80%</p>
              <div className="w-[80%] h-2 bg-gray-200 rounded overflow-hidden">
                <motion.div
                  className="h-2 bg-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </div>
          </div>

          <div className="bg-[var(--bg-color)] px-2 py-4 rounded shadow w-full">
            <h2 className="font-bold mb-2">Rechtliche Hinweise</h2>
            <ul className="text-[14px] w-[90%] text-[var(--black-color)] space-y-0.5">
              {Zeitleiste.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-1.5">
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
