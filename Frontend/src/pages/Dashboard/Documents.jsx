import React from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Dringend } from "../../assets/ConstantData";

const documents = [
  { name: "Mietvertrag_10234.pdf", uploader: "S. Meier", date: "2024-09-02", size: "2MB" },
  { name: "Arbeitsvertrag_B.pdf", uploader: "K. Steiner", date: "2024-06-28", size: "6MB" },
  { name: "Kaufvertrag_C.pdf", uploader: "L. Novak", date: "2025-05-23", size: "4.5MB" },
  { name: "Mietvertrag_102.pdf", uploader: "M. Najam", date: "2025-08-23", size: "5MB" },
  { name: "Mietvertrag_20054.pdf", uploader: "S. Ilyas", date: "2025-08-01", size: "3MB" },
  { name: "Mietvertrag_44544.pdf", uploader: "S. Moin", date: "2025-08-01", size: "3MB" },
  { name: "Mietvertrag_44544.pdf", uploader: "S. Moin", date: "2025-08-01", size: "7MB" },
  { name: "Mietvertrag_10234.pdf", uploader: "S. Meier", date: "2024-09-02", size: "3.2MB" },
];

const urgent = [
  { text: "Vertrag ToDoListe sichern", date: "01.02.2025", color: "text-gray-700" },
  { text: "Vertrag 56623", date: "01.03.2025", color: "text-red-600" },
  { text: "Vertrag 1237", date: "01.03.2025", color: "text-red-600" },
];

// Half Circle Progress
const HalfCircleProgress = ({ value, size = 120, strokeWidth = 12 }) => {
  const radius = size / 2;
  const circumference = Math.PI * (radius - strokeWidth);
  const progress = (value / 100) * circumference;

  return (
    <svg width={size} height={size / 2} className="overflow-visible">
      {/* Background */}
      <path
        d={`M ${strokeWidth} ${radius}
            A ${radius - strokeWidth} ${radius - strokeWidth} 0 0 1 ${size - strokeWidth} ${radius}`}
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      {/* Progress */}
      <motion.path
        d={`M ${strokeWidth} ${radius}
            A ${radius - strokeWidth} ${radius - strokeWidth} 0 0 1 ${size - strokeWidth} ${radius}`}
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

const Documents = () => {
  return (
    <div className="w-full lg:h-screen lg:overflow-hidden flex flex-col p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <h1 className="text-2xl sm:text-4xl font-bold">Unterlagen</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">
          Vertrag hochladen
        </button>
      </div>

      {/* Search */}
      <div className="relative w-full mb-6">
        <input
          type="text"
          placeholder="Suchen"
          className="pl-10 pr-4 w-full py-2 border border-gray-300 rounded focus:outline-none bg-[var(--bg-color)]"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-4 w-full flex-1 overflow-hidden">
        {/* Table Section */}
        <div className="w-full lg:w-3/4 bg-[var(--bg-color)] rounded shadow overflow-auto">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-[#D4D4D4]">
              <tr>
                <th className="px-4 py-4 font-[400]">Vertrag</th>
                <th className="px-4 py-4 font-[400]">Hochgeladen</th>
                <th className="px-4 py-4 font-[400]">Datum</th>
                <th className="px-4 py-4 font-[400]">Größe</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-gray-50 text-xs sm:text-sm"
                >
                  <td className="px-2 sm:px-4 py-4">
                    <span className="sm:hidden">
                      {doc.name.length > 10 ? doc.name.slice(0, 10) + "..." : doc.name}
                    </span>
                    <span className="hidden sm:inline">{doc.name}</span>
                  </td>

                  <td className="px-2 sm:px-4 py-4">
                    <span className="sm:hidden">
                      {doc.uploader.length > 6 ? doc.uploader.slice(0, 6) + "..." : doc.uploader}
                    </span>
                    <span className="hidden sm:inline">{doc.uploader}</span>
                  </td>

                  <td className="px-2 sm:px-4 py-4">
                    <span className="sm:hidden">{doc.date.slice(2, 7)}</span>
                    <span className="hidden sm:inline">{doc.date}</span>
                  </td>

                  <td className="px-2 sm:px-4 py-4">
                    {doc.size}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-1/4 flex flex-col gap-5">
          {/* AI Score */}
          <div className="bg-[var(--bg-color)] rounded shadow px-3 py-5 flex flex-col items-center">
            <h2 className="font-semibold mb-1.5">AI-Score</h2>
            <HalfCircleProgress value={100} />
          </div>

          {/* AI-Klausel-Risiko */}
          <div className="bg-[var(--bg-color)] rounded shadow px-3 py-5 flex flex-col items-center">
            <h2 className="font-semibold mb-2">AI-Klausel-Risiko</h2>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-medium">Aktiv</span>
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
          </div>

          {/* Vertrauenwert */}
          <div className="bg-[var(--bg-color)] rounded shadow px-3 py-5">
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

          {/* Dringend */}
          <div className="bg-[var(--bg-color)] px-3 py-7 rounded shadow">
            <h2 className="font-bold mb-1">Dringend</h2>
            <ul className="space-y-0.5">
              {Dringend.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-3">
                    <img src="/assets/images/dashboard/Ellipse-9.svg" alt="" className="w-2 h-2" />
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
        </div>
      </div>
    </div>
  );
};

export default Documents;
