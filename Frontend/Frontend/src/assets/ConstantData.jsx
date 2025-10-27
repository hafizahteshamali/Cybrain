import { FaFileContract, FaMoneyBill, FaSignOutAlt, FaEllipsisH } from "react-icons/fa";
import {
  FaTasks,
  FaFolder,
  FaCalendarAlt,
  FaComments,
  FaBalanceScale,
} from "react-icons/fa";

export const DashboardNavigation = [
  {
    title: "Vertragszentrum",
    path: "/dashboard",
    icon: "/anwalt/assets/images/dashboard/mdi_contract-outline.svg",
    end: true, // index route ke liye zaroori
  },
  {
    title: "Angelegenheiten",
    path: "/dashboard/angelegenheiten",
    icon: "/anwalt/assets/images/dashboard/formkit_file.svg",
  },
  {
    title: "Unterlagen",
    path: "/dashboard/unterlagen",
    icon: "/anwalt/assets/images/dashboard/pajamas_documents.svg",
  },
  {
    title: "Fristen",
    path: "/dashboard/fristen",
    icon: "/anwalt/assets/images/dashboard/mdi_clock-outline.svg",
  },
  {
    title: "Kommunikation",
    path: "/dashboard/kommunikation",
    icon: "/anwalt/assets/images/dashboard/icon-park-outline_communication.svg",
  },
  {
    title: "Rechtliche Hinweise",
    path: "/dashboard/rechtliche-hinweise",
    icon: "/anwalt/assets/images/dashboard/fa_legal.svg",
  },
];

export const ContractCenterData1 = [
  { number: "45", text: "Aktive Verträge", width: "22%" },
  { number: "9", text: "Läuft bald ab", width: "22%" },
  {
    number: "12",
    text: "Entwürfe, die noch überprüft werden müssen",
    width: "29%",
  },
  { number: "88%", text: "Compliance-Fragen", width: "22%" },
];

export const ContractScheduleData = [
  {
    icon: "/anwalt/assets/images/dashboard/clarity_contract-line.svg",
    boldText: "Vertrag erstellt",
    subtitle: "Vor 2 Stunden",
  },
  {
    icon: "/anwalt/assets/images/dashboard/mingcute_ai-line.svg",
    boldText: "Von Al markierte Klausel",
    subtitle: "Vor 1 Tag",
  },
  {
    icon: "/anwalt/assets/images/dashboard/mdi_tick.svg",
    boldText: "Überprüfung abgeschlossen",
    subtitle: "Vor 5 Tagen",
  },
];

export const contracts = [
  {
    id: 1,
    name: "Mietvertrag_10234.pdf",
    uploadedBy: "S. Meier",
    date: "2024-09-02",
  },
  {
    id: 2,
    name: "Arbeitsvertrag_B.pdf",
    uploadedBy: "K. Steiner",
    date: "2024-08-28",
  },
  {
    id: 3,
    name: "Kaufvertrag_C.pdf",
    uploadedBy: "L. Novak",
    date: "2025-08-23",
  },
];

// Dummy data for AI Score
export const aiScoreData = [
  { name: "Score", value: 70, fill: "#2563eb" },
  { name: "Rest", value: 30, fill: "#e5e7eb" },
];

// Dummy risks
export const risks = [
  {
    title: "Wettbewerbsverbotsklausel markiert",
    color: "bg-yellow-500",
    width: "60%",
  },
  {
    title: "Fehlender gesetzlicher Hinweis",
    color: "bg-red-500",
    width: "40%",
  },
  {
    title: "Geringe Zuverlässigkeit bei der Klauselextraktion",
    color: "bg-green-500",
    width: "75%",
  },
];


export const NoticeData = [
  {
    icon: "/anwalt/assets/images/dashboard/Ellipse-9.svg",
    text: "Österreichisches Bürgerliches Gesetzbuch"
  },
  {
    icon: "/anwalt/assets/images/dashboard/Ellipse-9.svg",
    text: "OGH-Entscheidungen"
  },
  {
    icon: "/anwalt/assets/images/dashboard/Ellipse-9.svg",
    text: "Datenschutzhinweis"
  },
]

export const data = [
  { name: "Vertragsverletzungen", value: 30, color: "#22c55e"}, // Green
  { name: "Zahlungsstreitigkeiten", value: 30, color: "#facc15"}, // Yellow
  { name: "Kündigungen", value: 35, color: "#2563eb"}, // Blue
  { name: "Sonstige", value: "", color: ""}, // Gray
];

export const event = { label: "Fall A Fällig 01.09.2025", position: "left" };

export const Dringend = [
  {
    iconImg: "/anwalt/assets/images/dashboard/Ellipse-9.svg",
    head: "Vertrag 104kicue siche",
    text: "01.09.2025",
    textColor: "text-black"
  },
  {
    iconImg: "/anwalt/assets/images/dashboard/Ellipse-9.svg",
    head: "Vertrag 104623",
    text: "01.09.2025",
    textColor: "text-[#EF4444]"
  },
  {
    iconImg: "/anwalt/assets/images/dashboard/Ellipse-9.svg",
    head: "Vertrag 104kicue siche",
    text: "01.09.2025",
    textColor: "text-[#EF4444]"
  },
]

export const Zeitleiste = [
  "Fall A Fällig 01.09.2025", "Fäll B- Fällig 15.09.2025", "Fäll C- Fällig 25.09.2025"
]