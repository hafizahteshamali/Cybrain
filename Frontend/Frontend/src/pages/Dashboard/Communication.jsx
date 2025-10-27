import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";

const Communication = () => {
  const messages = [
    {
      id: 1,
      email: "client@example.com",
      text: "Können wir den Vertrag verkürzen?",
      time: "Jetzt",
      details: {
        file: "Mustervertrag2.pdf",
        date: "2024-09-02",
        task: "Parallel nutzen der Vertrag verkürzt werden",
      },
    },
    {
      id: 2,
      email: "ed@example.com",
      text: "Vertragsentwurf beigefügt",
      time: "Vor 25Minuten",
      details: {
        file: "Mustervertrag1.pdf",
        date: "2024-08-28",
        task: "Vertrag prüfen und Feedback geben",
      },
    },
    {
      id: 3,
      email: "ed@example.com",
      text: "Schickst du mir die Bedingungen?",
      time: "Vor 3 Tagen",
      details: {
        file: "Bedingungen.pdf",
        date: "2024-08-20",
        task: "Bedingungen vergleichen und bestätigen",
      },
    },
    {
      id: 4,
      email: "ed@example.com",
      text: "Schickst du mir die Bedingungen?",
      time: "Vor 3 Tagen",
      details: {
        file: "Bedingungen.pdf",
        date: "2024-08-20",
        task: "Bedingungen vergleichen und bestätigen",
      },
    },
    {
      id: 5,
      email: "ed@example.com",
      text: "Schickst du mir die Bedingungen?",
      time: "Vor 3 Tagen",
      details: {
        file: "Bedingungen.pdf",
        date: "2024-08-20",
        task: "Bedingungen vergleichen und bestätigen",
      },
    },
    {
      id: 6,
      email: "ed@example.com",
      text: "Schickst du mir die Bedingungen?",
      time: "Vor 3 Tagen",
      details: {
        file: "Bedingungen.pdf",
        date: "2024-08-20",
        task: "Bedingungen vergleichen und bestätigen",
      },
    },
    {
      id: 7,
      email: "ed@example.com",
      text: "Schickst du mir die Bedingungen?",
      time: "Vor 3 Tagen",
      details: {
        file: "Bedingungen.pdf",
        date: "2024-08-20",
        task: "Bedingungen vergleichen und bestätigen",
      },
    },
    // ...rest same
  ];

  const [activeMessage, setActiveMessage] = useState(messages[0]);

  return (
    <div className="w-full lg:h-screen lg:overflow-hidden flex flex-col bg-gray-100 p-4 sm:p-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-3">
        <h1 className="text-3xl sm:text-4xl font-bold">Kommunikation</h1>
        <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 text-sm sm:text-base">
          Vertrag hochladen
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative w-full mb-4">
        <input
          type="text"
          placeholder="Suchen"
          className="pl-10 pr-4 w-full py-2 border border-gray-300 rounded focus:outline-none bg-[var(--bg-color)] text-sm sm:text-base"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>

      {/* Main Section */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden gap-4">
        {/* Left Sidebar */}
        <div className="lg:w-1/3 border border-gray-300 bg-[var(--bg-color)] flex flex-col rounded-lg lg:rounded-none">
          <h2 className="px-4 py-2 text-gray-600 border-b border-gray-400 font-medium bg-[#D4D4D4]">
            Heute
          </h2>
          <div className="flex flex-col overflow-y-auto">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveMessage(msg)}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer border-b border-gray-300 ${
                  activeMessage.id === msg.id
                    ? ""
                    : "hover:bg-gray-100"
                }`}
              >
                {/* Blue dot only if active */}
                {activeMessage.id === msg.id && (
                  <div className="w-3 h-3 rounded-full bg-blue-600 shrink-0"></div>
                )}

                <div className="flex flex-col flex-1 py-2">
                  <div className="w-full flex justify-between items-center">
                    <p className="font-medium text-gray-800 text-sm sm:text-base">
                      {msg.email}
                    </p>
                    <span className="text-xs text-gray-400">{msg.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    {msg.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-[var(--bg-color)] p-4 sm:p-6 overflow-y-auto rounded-lg lg:rounded-none">
          {activeMessage && (
            <motion.div
              key={activeMessage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[var(--bg-color)] rounded-lg p-4 sm:p-6"
            >
              <div className="w-full py-3 border-b-2 border-gray-400">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 break-words">
                  {activeMessage.email}
                </h3>
              </div>
              <p className="mt-2 text-[var(--black-color)] text-sm sm:text-base break-words">
                {activeMessage.text}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap sm:flex-nowrap gap-3 mt-4">
                <button className="flex items-center justify-center flex-1 sm:flex-none h-[45px] gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base">
                  <img
                    src="/anwalt/assets/images/dashboard/proicons_chat.svg"
                    alt=""
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                  Antworten
                </button>
                <button className="flex items-center justify-center flex-1 sm:flex-none h-[45px] gap-2 px-3 py-2 border border-gray-400 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm sm:text-base">
                  <TiArrowBack className="text-lg sm:text-xl text-[var(--black-color)]" />{" "}
                  An alle Antworten
                </button>
                <button className="flex items-center justify-center flex-1 sm:flex-none h-[45px] gap-2 px-3 py-2 border border-gray-400 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm sm:text-base">
                  <TiArrowForward className="text-lg sm:text-xl text-[var(--black-color)]" />{" "}
                  Weiterleiten
                </button>
              </div>

              {/* Contract Details */}
              <div className="mt-6">
                <h4 className="font-[400] text-[var(--black-color)] mb-4 sm:mb-6 text-xl sm:text-2xl">
                  Vertragsdetails
                </h4>
                <div className="flex items-start sm:items-center gap-2 text-gray-700">
                  <img src="/anwalt/assets/images/dashboard/bx_file.svg" alt="" />
                  <div className="flex flex-col">
                    <span className="text-[var(--black-color)] text-sm sm:text-base break-words">
                      {activeMessage.details.file}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {activeMessage.details.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tasks */}
              <div className="mt-6">
                <h4 className="font-[400] text-[var(--black-color)] mb-4 sm:mb-6 text-xl sm:text-2xl">
                  Aufgaben
                </h4>
                <div className="flex items-start sm:items-center gap-2 text-gray-700">
                  <img
                    src="/anwalt/assets/images/dashboard/hugeicons_task-edit-01.svg"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-[var(--black-color)] text-sm sm:text-base break-words">
                      {activeMessage.details.task}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Communication;
