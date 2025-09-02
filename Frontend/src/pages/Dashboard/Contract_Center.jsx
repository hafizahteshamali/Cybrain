import React from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import {
  ContractCenterData1,
  contracts,
  ContractScheduleData,
  NoticeData,
  risks,
} from "../../assets/ConstantData";

// ✅ Half Circle Progress
const HalfCircleProgress = ({ value, size = 160, strokeWidth = 12 }) => {
  const radius = size / 2;
  const circumference = Math.PI * (radius - strokeWidth);
  const progress = (value / 100) * circumference;

  return (
    <svg width={size} height={size / 2} className="overflow-visible">
      {/* Background track */}
      <path
        d={`M ${strokeWidth} ${radius} A ${radius - strokeWidth} ${
          radius - strokeWidth
        } 0 0 1 ${size - strokeWidth} ${radius}`}
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
        fill="transparent"
      />

      {/* Animated Progress arc */}
      <motion.path
        d={`M ${strokeWidth} ${radius} A ${radius - strokeWidth} ${
          radius - strokeWidth
        } 0 0 1 ${size - strokeWidth} ${radius}`}
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

const Contract_Center = () => {
  return (
    <div className="w-full mx-auto p-4 sm:p-6 lg:h-screen lg:overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:mb-2 mb-4 gap-3">
        <h1 className="text-3xl lg:text-4xl font-bold">Überblick</h1>
        <button className="px-4 sm:px-6 py-2 bg-blue-600 text-[14px] sm:text-[16px] text-white rounded shadow hover:bg-blue-700 transition">
          Vertrag hochladen
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full lg:mb-2 mb-4">
        <input
          type="text"
          placeholder="Suchen"
          className="pl-10 pr-4 w-full py-2 border border-gray-300 rounded focus:outline-none bg-white text-sm sm:text-base"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-between gap-2.5 lg:mb-2 mb-4">
        {ContractCenterData1.map((item, i) => (
          <div
            key={i}
            style={{ width: item.width }}
            className="flex flex-col justify-center items-start h-[110px] sm:h-[110px] bg-[var(--bg-color)] p-4 rounded text-center flex-1 min-w-[140px]"
          >
            <p className="text-3xl sm:text-5xl font-bold text-[var(--black-color)]">
              {item.number}
            </p>
            <p className="text-[var(--black-color)] text-left text-xs sm:text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-2">
        {/* Left Side */}
        <div className="flex flex-col justify-between gap-2 lg:w-[76.5%]">
          {/* Vertragszeitplan */}
          <div className="flex flex-col bg-[var(--bg-color)] p-3 rounded">
            <h2 className="font-bold mb-2">Vertragszeitplan</h2>
            <ul className="flex flex-col gap-2">
              {ContractScheduleData.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-600 text-sm sm:text-base"
                >
                  <img src={item.icon} className="h-4 w-4" alt="" />
                  <div className="flex flex-col">
                    <p className="text-[var(--black-color)] font-[400]">
                      {item.boldText}
                    </p>
                    <p className="text-[var(--primary-color)] text-[12px]">
                      vor 2 Stunden
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tabelle */}
          <div className="bg-[var(--bg-color)] rounded overflow-x-auto">
            <table className="w-full text-[12px] sm:text-[14px] rounded">
              <thead>
                <tr className="text-left border-b border-gray-300 bg-[#D4D4D4]">
                  <th className="px-3 sm:px-5 py-1.5">Vertrag</th>
                  <th className="px-3 sm:px-5 py-1.5">Hochgeladen</th>
                  <th className="px-3 sm:px-5 py-1.5">Datum</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((contract) => (
                  <tr
                    key={contract.id}
                    className="border-b border-gray-300 text-xs sm:text-[14px]"
                  >
                    <td className="px-3 sm:px-5 py-1.5">{contract.name}</td>
                    <td className="px-3 sm:px-5 py-1.5">
                      {contract.uploadedBy}
                    </td>
                    <td className="px-3 sm:px-5 py-1.5">{contract.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Risiken */}
          <div className="bg-[var(--bg-color)] p-3 rounded space-y-3 lg:space-y-2">
            {risks.map((risk, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[13px] sm:text-[15px] font-[500]">
                    {risk.title}
                  </span>
                  <span className="text-[var(--black-color)] text-[10px]">
                    Risiko
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded overflow-hidden relative">
                  <motion.div
                    className={`h-2 absolute top-0 left-0 ${risk.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: risk.width }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Widgets */}
        <div className="flex flex-col justify-between gap-2 lg:w-[22%]">
          {/* AI-Score */}
          <div className="px-2 py-4 flex flex-col items-center bg-[var(--bg-color)] w-full rounded">
            <h1>AI-Score</h1>
            <div className="w-full flex justify-center items-center">
              <HalfCircleProgress value={100} size={120} strokeWidth={12} />
            </div>
          </div>

          {/* AI-Klausel-Risiko */}
          <div className="bg-[var(--bg-color)] px-2 py-6 rounded shadow text-center w-full flex flex-col justify-center items-center">
            <h2 className="font-bold">AI-Klausel-Risiko</h2>
            <div className="flex justify-center items-center gap-2 mt-2">
              <p className="text-blue-600 font-semibold">Aktiv</p>
              <div className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] rounded-full bg-[#0056FF]"></div>
            </div>
          </div>

          {/* Vertrauenswert */}
          <div className="bg-[var(--bg-color)] px-3 py-5 rounded shadow">
            <h2 className="font-bold mb-2 text-center lg:text-left">Vertrauenswert</h2>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <p className="text-xl lg:text-xs sm:text-sm text-gray-600">80%</p>
              <div className="w-[100%] sm:w-[80%] h-2 bg-gray-200 rounded overflow-hidden">
                <motion.div
                  className="h-2 bg-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </div>
          </div>

          {/* Rechtliche Hinweise */}
          <div className="bg-[var(--bg-color)] px-3 py-4 rounded shadow">
            <h2 className="font-bold mb-2">Rechtliche Hinweise</h2>
            <ul className="text-[10px] sm:text-xs w-full text-gray-600 space-y-1">
              {NoticeData.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src={item.icon} alt="" className="h-3 w-3" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract_Center;
