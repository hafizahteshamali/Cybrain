"use client"

import { useState } from "react"
import { FiSearch, FiChevronDown } from "react-icons/fi"
import { MdCircle } from "react-icons/md"

const Deadline2 = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSource, setSelectedSource] = useState("Alle Quellen")
  const [selectedArea, setSelectedArea] = useState("Alle Gebiete")
  const [selectedLawyer, setSelectedLawyer] = useState("Alle Anwälte")

  const caseData = [
    {
      case: "A-23/4",
      law: "Appeal - §464 ZPO",
      startDate: "Oct-24-2025",
      autoEnd: "Nov 07, 2025",
      finalEnd: "Nov 08, 2025",
      gap: "+1",
      print: [
        "/assets/images/dashboard/gridicons_cross-circle.svg",
        "/assets/images/dashboard/lets-icons_print-light.svg",
      ],
      status: "critical",
      ra: "M: +1",
      outlook: [
        "/assets/images/dashboard/gridicons_cross-circle.svg",
        "/assets/images/dashboard/material-symbols-light_mail-outline-sharp.svg",
      ],
      action: "Bearbeiten",
      notes: "Einfügen und Regenerieren",
    },
    {
      case: "B-19/1",
      law: "Appeal - §464 ZPO",
      startDate: "Oct-20-2025",
      autoEnd: "Nov-03-2025",
      finalEnd: "Nov-06-2025",
      gap: "+3",
      print: [
        "/assets/images/dashboard/teenyicons_tick-circle-solid.svg",
        "/assets/images/dashboard/lets-icons_print-light.svg",
      ],
      status: "safe",
      ra: "Mr. H",
      outlook: [
        "/assets/images/dashboard/teenyicons_tick-circle-solid.svg",
        "/assets/images/dashboard/material-symbols-light_mail-outline-sharp.svg",
      ],
      action: "Sicht",
      notes: "",
    },
    {
      case: "C-15/3",
      law: "Appeal - §464 ZPO",
      startDate: "Oct-15-2025",
      autoEnd: "Oct-16-2025",
      finalEnd: "Oct-16-2025",
      gap: "+0",
      print: [
        "/assets/images/dashboard/teenyicons_tick-circle-solid.svg",
        "/assets/images/dashboard/lets-icons_print-light.svg",
      ],
      status: "safe",
      ra: "Mr. N",
      outlook: [
        "/assets/images/dashboard/teenyicons_tick-circle-solid.svg",
        "/assets/images/dashboard/material-symbols-light_mail-outline-sharp.svg",
      ],
      action: "Sicht",
      notes: "",
    },
    {
      case: "D-12/9",
      law: "Appeal - §464 ZPO",
      startDate: "Oct-01-2025",
      autoEnd: "Oct-02-2025",
      finalEnd: "Oct-02-2025",
      gap: "+0",
      print: [
        "/assets/images/dashboard/gridicons_cross-circle.svg",
        "/assets/images/dashboard/lets-icons_print-light.svg",
      ],
      status: "warning",
      ra: "Mr. H",
      outlook: [
        "/assets/images/dashboard/gridicons_cross-circle.svg",
        "/assets/images/dashboard/material-symbols-light_mail-outline-sharp.svg",
      ],
      action: "Überprüfen",
      notes: "Einfügen und Regenerieren",
    },
    {
      case: "E-17/9",
      law: "Appeal - §464 ZPO",
      startDate: "Oct-03-2025",
      autoEnd: "Oct-05-2025",
      finalEnd: "Oct-05-2025",
      gap: "+0",
      print: [
        "/assets/images/dashboard/gridicons_cross-circle.svg",
        "/assets/images/dashboard/lets-icons_print-light.svg",
      ],
      status: "warning",
      ra: "Mr. H",
      outlook: [
        "/assets/images/dashboard/gridicons_cross-circle.svg",
        "/assets/images/dashboard/material-symbols-light_mail-outline-sharp.svg",
      ],
      action: "Überprüfen",
      notes: "Einfügen und Regenerieren",
    },
    {
      case: "F-22/9",
      law: "Appeal - §464 ZPO",
      startDate: "Oct-20-2025",
      autoEnd: "Oct-22-2025",
      finalEnd: "Oct-22-2025",
      gap: "+0",
      print: [
        "/assets/images/dashboard/gridicons_cross-circle.svg",
        "/assets/images/dashboard/lets-icons_print-light.svg",
      ],
      status: "warning",
      ra: "Mr. H",
      outlook: [
        "/assets/images/dashboard/gridicons_cross-circle.svg",
        "/assets/images/dashboard/material-symbols-light_mail-outline-sharp.svg",
      ],
      action: "Überprüfen",
      notes: "Einfügen und Regenerieren",
    },
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "critical":
        return "text-red-500"
      case "safe":
        return "text-green-500"
      case "warning":
        return "text-orange-500"
      default:
        return "text-gray-500"
    }
  }

  const getStatusLabel = (status) => {
    switch (status.toLowerCase()) {
      case "critical":
        return "Critical"
      case "safe":
        return "Safe"
      case "warning":
        return "Warning"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="lg:h-screen lg:overflow-hidden">
      {/* Header */}
      <div className="px-2 sm:px-4 md:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/dashboard/logo.png"
            className="w-16 sm:w-20 md:w-[100px] object-contain"
            alt="Logo"
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="text-gray-700 text-xs sm:text-sm md:text-base">Emily K.</p>
          <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-[50px] md:w-[50px] rounded-full overflow-hidden flex justify-center items-center">
            <img
              src="/assets/images/dashboard/default_profile.jpg"
              className="h-full w-full object-cover"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 text-center">
        <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-[600] text-[#1A1A1A] tracking-wide">
          GESETZLICHES FRISTENMANAGEMENTSYSTEM
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#1A1A1A] mt-1 md:mt-2">
          ÖSTERREICHISCHE ANWALTSKANZLEI
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row bg-[#E8E8E8] lg:justify-between justify-center gap-1 sm:gap-2 px-1 sm:px-3 md:px-4 py-1 sm:py-2">
        {/* Main Content */}
        <div className="flex flex-col w-full lg:w-[73%] mb-2 lg:mb-0">
          {/* Filters */}
          <div className="rounded-lg">
            <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 md:gap-3 items-center mb-1.5 sm:mb-2">
              <div className="flex flex-wrap gap-1 sm:gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none">
                  <button className="flex items-center justify-between w-full sm:w-auto gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-400 hover:bg-gray-100 rounded text-xs font-medium text-gray-700 transition-colors">
                    {selectedSource}
                    <FiChevronDown size={14} />
                  </button>
                </div>
                <div className="relative flex-1 sm:flex-none">
                  <button className="flex items-center justify-between w-full sm:w-auto gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-400 hover:bg-gray-100 rounded text-xs font-medium text-gray-700 transition-colors">
                    {selectedArea}
                    <FiChevronDown size={14} />
                  </button>
                </div>
                <div className="relative flex-1 sm:flex-none">
                  <button className="flex items-center justify-between w-full sm:w-auto gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-400 hover:bg-gray-100 rounded text-xs font-medium text-gray-700 transition-colors">
                    {selectedLawyer}
                    <FiChevronDown size={14} />
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full sm:w-auto flex items-center gap-1.5 border border-gray-400 rounded-full px-2.5 sm:px-3 py-1">
                <FiSearch size={14} className="text-gray-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Suchen"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent outline-none text-xs flex-1 text-gray-700 placeholder-gray-500"
                />
                <button className="p-0.5 hover:bg-gray-100 rounded flex-shrink-0">
                  <img
                    src="/assets/images/dashboard/mdi_mixer-settings.svg"
                    alt="Settings"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border-b border-gray-400 overflow-hidden">
            <div className="overflow-x-auto scrollbar-hide">
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
              <table className="w-full text-[8px] sm:text-[9px] md:text-[10px]">
                <thead className="">
                  <tr className="border-b border-gray-300">
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[6%]">Case</th>
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[12%]">Law</th>
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[8%]">Start date</th>
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[8%]">Auto End</th>
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[8%]">Final End</th>
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[5%]">GAP</th>
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[7%]">Print</th>
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[8%]">Status</th>
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[6%]">RA</th>
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[7%]">Outlook</th>
                    <th className="px-0.5 sm:px-1 py-1 text-left font-semibold text-gray-700 w-[12%]">Aktion</th>
                  </tr>
                </thead>
                <tbody>
                  {caseData.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-400 hover:bg-gray-50 transition-colors">
                      <td className="px-0.5 sm:px-1 py-1 w-[6%]">
                        <div className="font-medium text-gray-900">{row.case}</div>
                      </td>
                      <td className="px-0.5 sm:px-1 py-1 text-[#1A1A1A] truncate w-[12%]">{row.law}</td>
                      <td className="px-0.5 sm:px-1 py-1 text-[#1A1A1A] w-[8%]">{row.startDate}</td>
                      <td className="px-0.5 sm:px-1 py-1 text-[#1A1A1A] w-[8%]">{row.autoEnd}</td>
                      <td className="px-0.5 sm:px-1 py-1 text-[#1A1A1A] w-[8%]">{row.finalEnd}</td>
                      <td className="px-0.5 sm:px-1 py-1 text-[#1A1A1A] w-[5%]">{row.gap}</td>
                      <td className="px-0.5 sm:px-1 py-1 w-[7%]">
                        <div className="flex gap-0.5">
                          {row.print.map((item, index) => (
                            <img
                              key={index}
                              src={item || "/placeholder.svg"}
                              alt=""
                              className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 object-contain"
                            />
                          ))}
                        </div>
                      </td>
                      <td className="px-0.5 sm:px-1 py-1 w-[8%]">
                        <div className="flex items-center gap-0.5">
                          <MdCircle size={6} className={getStatusColor(row.status)} />
                          <span className="text-[#1A1A1A] font-medium">{getStatusLabel(row.status)}</span>
                        </div>
                      </td>
                      <td className="px-0.5 sm:px-1 py-1 text-[#1A1A1A] w-[6%]">{row.ra}</td>
                      <td className="px-0.5 sm:px-1 py-1 w-[7%]">
                        <div className="flex gap-0.5">
                          {row.outlook.map((item, index) => (
                            <img
                              key={index}
                              src={item || "/placeholder.svg"}
                              alt=""
                              className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 object-contain"
                            />
                          ))}
                        </div>
                      </td>
                      <td className="px-0.5 sm:px-1 py-1 w-[12%]">
                        <div className="flex flex-col lg:flex-row gap-0.5">
                          <button className="text-[7px] sm:text-[8px] text-gray-600 border border-[#1A1A1A33] hover:bg-gray-200 px-1 py-0.5 rounded-full transition-colors whitespace-nowrap">
                            {row.action}
                          </button>
                          {row.notes && (
                            <button className="text-[7px] sm:text-[8px] text-gray-600 border border-[#1A1A1A33] hover:bg-gray-200 px-1 py-0.5 rounded-full transition-colors whitespace-nowrap">
                              {row.notes}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[25%]">
          <div className="rounded-lg border border-gray-400 mb-2">
            <div className="p-1.5 sm:p-2">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Letzte</h3>
              <div className="text-base sm:text-lg font-bold text-gray-900 mb-0.5">Oct-24-2025</div>
              <div className="text-xs text-[#1A1A1A] mb-1.5">A-23/4</div>
            </div>

            <div className="flex gap-1 sm:gap-2 pb-3 sm:pb-4 mb-0.5 sm:mb-1 border-b border-gray-400 px-1.5 sm:px-2 overflow-x-auto scrollbar-hide">
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
              <button className="flex justify-center items-center min-w-[70px] py-0.5 border border-gray-400 rounded-full text-[10px] font-medium text-gray-700 transition-colors whitespace-nowrap">
                Offen
              </button>
              <button className="flex justify-center items-center min-w-[70px] py-0.5 rounded-full text-[10px] font-medium text-red-700 bg-[#E812241A] transition-colors whitespace-nowrap">
                Genehmigt
              </button>
              <button className="flex justify-center items-center min-w-[70px] py-0.5 border border-gray-400 rounded-full text-[10px] font-medium text-gray-700 transition-colors whitespace-nowrap">
                Gesamtzug
              </button>
            </div>

            <div className="space-y-1 text-[10px] p-1.5 sm:p-2 max-h-[300px] sm:max-h-[400px] overflow-y-auto scrollbar-hide">
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
              <p className="font-semibold">Audit Trail</p>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/mdi_clipboard-text-date.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div>
                  <div className="font-medium text-gray-700">Startdatum: 24. October 2025</div>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <img src="/assets/images/dashboard/mdi_file.svg" alt="" className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <div className="text-[#1A1A1A]">Quelle: E-Mail</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/mingcute_time-fill.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">Frist: Relativ</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/ooui_references-rtl.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">Gesetzesverweis (§): § 464 ZPO</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/mdi_clipboard-text-time.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">Dauer: 14 Tage</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/material-symbols_time-auto-rounded.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">Automatisches Ende: 07. November 2025</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/fluent_send-clock-28-filled.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">Endgültiges Ende: 08 November 2025</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/solar_alarm-sleep-bold.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">Urlaub: 1 Tag</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/material-symbols_space-dashboard.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">GAP: +1 Tag</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/mdi_cross-circle.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">Druckprüfung: Drucken fehlgeschlagen</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/lets-icons_check-fill.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">KI-Berechnung: (System) – 24. October 2025, 10:00 Uhr</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/lets-icons_check-fill.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">
                  Menschliche Verifizierung: Anna Associate – 24. October 2025, 11:30 Uhr
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/ic_round-pending.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">Anwaltsgenehmigung: Ausstehend</div>
              </div>
              <div className="flex items-start gap-1.5">
                <img
                  src="/assets/images/dashboard/ic_round-pending.svg"
                  alt=""
                  className="w-3 h-3 mt-0.5 flex-shrink-0"
                />
                <div className="text-[#1A1A1A]">Kalendersynchronisierung: Ausstehend</div>
              </div>
            </div>

            {/* Kommentar Section */}
            <div className="rounded-lg px-2 sm:px-4 py-1.5 sm:py-2">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 sm:mb-1">Kommentar</h3>
              <p className="text-[10px] text-[#1A1A1A] leading-relaxed">
                Der Eintrag muss innerhalb von 14 Tagen nach Zustellung eingereicht werden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deadline2
