"use client";

import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import {
  FiChevronRight,
  FiUpload,
  FiMail,
  FiPhone,
  FiFileText,
  FiStar,
  FiTrash2,
  FiInbox,
  FiGrid,
  FiCheckCircle,
  FiFilter,
  FiRefreshCw,
  FiMoreHorizontal,
  FiMenu,
  FiX,
  FiUser,
  FiCalendar,
  FiTag,
  FiDownload,
} from "react-icons/fi";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdStar,
  MdStarOutline,
} from "react-icons/md";

const Communication = () => {
  const [activeTab, setActiveTab] = useState("Neue E-Mail");
  const [selectAll, setSelectAll] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const [showMenu, setShowMenu] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [viewMode, setViewMode] = useState("list"); // "list" or "detail"

  const [messages, setMessages] = useState([
    {
      id: 1,
      email: "deadline@example.com",
      sender: "Deadline Management System",
      subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      content: `Sehr geehrter Benutzer,
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  
  Bitte beachten Sie die anstehenden Fristen in der Anlage.
  
  Mit freundlichen Grüßen,
  Ihr Deadline Team`,
      assignee: "Emily K.",
      category: "Frist",
      status: "Ausstehend",
      time: "17:30",
      date: "Heute",
      checked: false,
      starred: false,
      attachments: ["fristen_dokument.pdf", "zeitplan.jpg"],
    },
    {
      id: 2,
      email: "review@example.com",
      sender: "Review Department",
      subject: "Incididunt ut labore et dolore magna aliqua - Draft Brief Review",
      content: `Hallo Team,
  
  Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  
  Bitte überprüfen Sie den Anhang und geben Sie uns Feedback bis morgen.
  
  Vielen Dank für Ihre Zusammenarbeit,
  Review Department`,
      assignee: "Emily K.",
      category: "Aufgabe",
      status: "Im Gange",
      time: "16:55",
      date: "Heute",
      checked: false,
      starred: false,
      attachments: ["brief_draft_v2.docx", "review_checklist.pdf"],
    },
    {
      id: 3,
      email: "personal@example.com",
      sender: "Personal Draft System",
      subject: "Laboris nisi ut aliquip ex ea commodo consequat - Personal Draft",
      content: `Lieber Benutzer,
  
  Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  
  Ihre persönlichen Entwürfe wurden aktualisiert und sind zur Überprüfung bereit. Bitte nehmen Sie sich Zeit, die Änderungen durchzugehen.
  
  Bei Fragen stehen wir Ihnen gerne zur Verfügung.
  
  Beste Grüße,
  Personal Draft System`,
      assignee: "Emily K.",
      category: "Aufgabe",
      status: "Ausstehend",
      time: "16:15",
      date: "Heute",
      checked: false,
      starred: false,
      attachments: ["personal_draft_v3.docx"],
    },
    {
      id: 4,
      email: "deadline@example.com",
      sender: "Project Management",
      subject: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      content: `Sehr geehrte Team-Mitglieder,
  
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  
  Wir möchten Sie auf die anstehenden Meilensteine des Projekts hinweisen. Bitte stellen Sie sicher, dass alle Aufgaben termingerecht abgeschlossen werden.
  
  Bei Verzögerungen kontaktieren Sie bitte umgehend das Projektmanagement.
  
  Mit freundlichen Grüßen,
  Projektleitung`,
      assignee: "Im Gange",
      category: "Aufgabe",
      status: "Ausstehend",
      time: "Oct 19",
      date: "19. Oktober",
      checked: false,
      starred: false,
      attachments: ["meilensteine_plan.pdf", "projekt_timeline.xlsx"],
    },
    {
      id: 5,
      email: "personal@example.com",
      sender: "Draft Coordination",
      subject: "Aliquam pulvinar vestibulum blandit. Duis elementum",
      content: `Guten Tag,
  
  Aliquam pulvinar vestibulum blandit. Duis elementum, nisl eget aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
  
  Die Überarbeitung der Dokumente schreitet gut voran. Wir haben mehrere Verbesserungsvorschläge erhalten, die nun eingearbeitet werden.
  
  Bitte prüfen Sie die aktuelle Version und teilen Sie uns Ihr Feedback mit.
  
  Freundliche Grüße,
  Draft Coordination Team`,
      assignee: "Najam R.",
      category: "Aufgabe",
      status: "Im Gange",
      time: "Oct 8",
      date: "8. Oktober",
      checked: false,
      starred: false,
      attachments: ["draft_version_final.docx", "feedback_sammlung.pdf"],
    },
    {
      id: 6,
      email: "deadline@example.com",
      sender: "Completion Department",
      subject: "In a lorem ipsum, integer sollicitudin",
      content: `Sehr geehrte Damen und Herren,
  
  In a lorem ipsum, integer sollicitudin, lorem eget aliquet ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
  
  Wir freuen uns, Ihnen mitteilen zu können, dass die Aufgabe erfolgreich abgeschlossen wurde. Alle Meilensteine wurden erreicht und die Qualitätskontrolle ist positiv verlaufen.
  
  Vielen Dank für Ihre hervorragende Arbeit.
  
  Beste Grüße,
  Completion Department`,
      assignee: "Emily K.",
      category: "Aufgabe",
      status: "Vollendet",
      time: "Oct 1",
      date: "1. Oktober",
      checked: false,
      starred: false,
      attachments: ["abschlussbericht.pdf", "qualitätszertifikat.pdf"],
    },
    {
      id: 7,
      email: "deadline@example.com",
      sender: "Inventory Management",
      subject: "Dorem sed ante et magna suscipit nulla facilis",
      content: `Hallo Team,
  
  Dorem sed ante et magna suscipit nulla facilis. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
  
  Der Gegenstand wurde erfolgreich inventarisiert und ist nun im System erfasst. Alle relevanten Daten wurden überprüft und freigegeben.
  
  Die Dokumentation finden Sie im Anhang.
  
  Mit freundlichen Grüßen,
  Inventory Management`,
      assignee: "Emily K.",
      category: "Gegenstand",
      status: "Vollendet",
      time: "Sep 25",
      date: "25. September",
      checked: false,
      starred: false,
      attachments: ["inventarliste.pdf", "gegenstands_dokumentation.docx"],
    },
    {
      id: 8,
      email: "review@example.com",
      sender: "Quality Assurance",
      subject: "Vestibulum eu quam nec neque pellentesque",
      content: `Sehr geehrte Kollegen,
  
  Vestibulum eu quam nec neque pellentesque. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
  
  Die Qualitätsprüfung des Gegenstands ist abgeschlossen. Alle Tests wurden erfolgreich durchgeführt und die Ergebnisse entsprechen den Anforderungen.
  
  Das Zertifikat ist beigefügt.
  
  Freundliche Grüße,
  Quality Assurance Team`,
      assignee: "Emily K.",
      category: "Gegenstand",
      status: "Vollendet",
      time: "Sep 18",
      date: "18. September",
      checked: false,
      starred: false,
      attachments: ["qualitätsprüfung.pdf", "zertifikat_qa.docx"],
    },
    {
      id: 9,
      email: "deadline@example.com",
      sender: "Talent Management",
      subject: "Sit fac fac Talent 2020 in Facilisis",
      content: `Liebes Team,
  
  Sit fac fac Talent 2020 in Facilisis. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
  
  Das Talent Management Programm 2020 wurde erfolgreich abgeschlossen. Wir bedanken uns bei allen Beteiligten für das Engagement und die erfolgreiche Zusammenarbeit.
  
  Der Abschlussbericht steht zur Verfügung.
  
  Beste Grüße,
  Talent Management`,
      assignee: "Emily K.",
      category: "Aufgabe",
      status: "Vollendet",
      time: "Sep 11",
      date: "11. September",
      checked: false,
      starred: false,
      attachments: ["talent_abschlussbericht.pdf", "feedback_umfrage.pdf"],
    },
    {
      id: 10,
      email: "deadline@example.com",
      sender: "Legal Department",
      subject: "Aliquam pulvinar vestibulum blandit. Duis",
      content: `Sehr geehrte Damen und Herren,
  
  Aliquam pulvinar vestibulum blandit. Duis elementum, nisl eget aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
  
  Wir möchten Sie auf die bevorstehenden Fristen im rechtlichen Bereich hinweisen. Bitte beachten Sie die Termine und reichen Sie die erforderlichen Dokumente rechtzeitig ein.
  
  Bei Fragen stehen wir Ihnen gerne zur Verfügung.
  
  Mit freundlichen Grüßen,
  Rechtsabteilung`,
      assignee: "Emily K.",
      category: "Frist",
      status: "Vollendet",
      time: "Sep 10",
      date: "10. September",
      checked: false,
      starred: false,
      attachments: ["rechtliche_fristen.pdf", "dokumentvorlagen.zip"],
    },
    {
      id: 11,
      email: "deadline@example.com",
      sender: "Event Management",
      subject: "Hom nay, SV FFTU Hoa Lac Dat dia la i",
      content: `Guten Tag zusammen,
  
  Hom nay, SV FFTU Hoa Lac Dat dia la i. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
  
  Die Veranstaltungsplanung wurde erfolgreich abgeschlossen. Alle Vorbereitungen sind getroffen und die Teilnehmerbestätigungen liegen vor.
  
  Wir freuen uns auf eine erfolgreiche Veranstaltung.
  
  Freundliche Grüße,
  Event Management Team`,
      assignee: "Emily K.",
      category: "Aufgabe",
      status: "Vollendet",
      time: "Aug 29",
      date: "29. August",
      checked: false,
      starred: false,
      attachments: ["veranstaltungsplan.pdf", "teilnehmerliste.xlsx"],
    },
    {
      id: 12,
      email: "personal@example.com",
      sender: "Draft System Admin",
      subject: "In a lorem ipsum, integer sollicitudin",
      content: `Hallo Benutzer,
  
  In a lorem ipsum, integer sollicitudin, lorem eget aliquet ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl.
  
  Ihr persönlicher Entwurf für den Gegenstand wurde finalisiert und archiviert. Sie können jederzeit auf die Daten zugreifen.
  
  Bei Bedarf an Anpassungen kontaktieren Sie uns bitte.
  
  Beste Grüße,
  System Administration`,
      assignee: "Emily K.",
      category: "Gegenstand",
      status: "Vollendet",
      time: "Aug 25",
      date: "25. August",
      checked: false,
      starred: false,
      attachments: ["entwurf_archiv.pdf", "zugangsdaten.txt"],
    },
    {
      id: 13,
      email: "review@example.com",
      sender: "Compliance Department",
      subject: "Vestibulum eu quam nec neque pellentesque",
      content: `Sehr geehrte Team-Mitglieder,
  
  Vestibulum eu quam nec neque pellentesque. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
  
  Die Überprüfung der Compliance-Fristen ist abgeschlossen. Alle Anforderungen wurden erfüllt und die Dokumentation ist vollständig.
  
  Die Bestätigung finden Sie im Anhang.
  
  Mit freundlichen Grüßen,
  Compliance Abteilung`,
      assignee: "Emily K.",
      category: "Frist",
      status: "Vollendet",
      time: "Aug 16",
      date: "16. August",
      checked: false,
      starred: false,
      attachments: ["compliance_bericht.pdf", "fristen_nachweis.docx"],
    },
    {
      id: 14,
      email: "deadline@example.com",
      sender: "Project Office",
      subject: "Hom nay, SV FFTU Hoa Lac Dat dia la i",
      content: `Liebes Projektteam,
  
  Hom nay, SV FFTU Hoa Lac Dat dia la i. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
  
  Die Projektfristen wurden alle eingehalten und das Projekt erfolgreich abgeschlossen. Wir bedanken uns für die gute Zusammenarbeit und die termingerechte Umsetzung.
  
  Der Projektabschlussbericht ist verfügbar.
  
  Beste Grüße,
  Projektbüro`,
      assignee: "Emily K.",
      category: "Frist",
      status: "Vollendet",
      time: "Aug 5",
      date: "5. August",
      checked: false,
      starred: false,
      attachments: ["projekt_abschluss.pdf", "leistungsnachweis.docx"],
    },
    {
      id: 15,
      email: "deadline@example.com",
      sender: "Technical Department",
      subject: "Lke mdi lay vit up 3 nh hoa de dic",
      content: `Guten Tag,
  
  Lke mdi lay vit up 3 nh hoa de dic. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
  
  Die technische Dokumentation für den Gegenstand ist vollständig und wurde freigegeben. Alle Spezifikationen sind erfüllt und die Tests waren erfolgreich.
  
  Die Dokumente stehen zur Verfügung.
  
  Mit freundlichen Grüßen,
  Technische Abteilung`,
      assignee: "Emily K.",
      category: "Gegenstand",
      status: "Vollendet",
      time: "Jul 31",
      date: "31. Juli",
      checked: false,
      starred: false,
      attachments: ["technische_dokumentation.pdf", "tests_protokoll.docx"],
    },
    {
      id: 16,
      email: "review@example.com",
      sender: "Business Development",
      subject: "FFT Koa Biz Talent 2020 In Fac Invel",
      content: `Sehr geehrte Damen und Herren,
  
  FFT Koa Biz Talent 2020 In Fac Invel. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
  
  Das Business Talent Programm 2020 wurde erfolgreich abgeschlossen. Die Teilnehmer haben hervorragende Ergebnisse erzielt und das Programm wurde sehr positiv evaluiert.
  
  Wir freuen uns auf die weitere Zusammenarbeit.
  
  Freundliche Grüße,
  Business Development`,
      assignee: "Emily K.",
      category: "Aufgabe",
      status: "Vollendet",
      time: "Jun 26",
      date: "26. Juni",
      checked: false,
      starred: false,
      attachments: ["talent_programm_abschluss.pdf", "evaluierung_ergebnisse.xlsx"],
    },
    {
      id: 17,
      email: "deadline@example.com",
      sender: "Legal Compliance",
      subject: "Hom nay, SV FFTU Hoa Lac Dat dia la i",
      content: `Guten Tag,
  
  Hom nay, SV FFTU Hoa Lac Dat dia la i. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
  
  Die gesetzlichen Fristen für dieses Quartal wurden alle eingehalten. Die Dokumentation ist vollständig und wurde an die zuständigen Stellen übermittelt.
  
  Vielen Dank für Ihre Unterstützung.
  
  Mit freundlichen Grüßen,
  Legal Compliance Team`,
      assignee: "Emily K.",
      category: "Frist",
      status: "Vollendet",
      time: "Jun 20",
      date: "20. Juni",
      checked: false,
      starred: false,
      attachments: ["quartals_abschluss.pdf", "fristen_nachweis.docx"],
    },
    {
      id: 18,
      email: "deadline@example.com",
      sender: "Administration",
      subject: "Hom nay, SV FFTU Hoa Lac Dat dia la i",
      content: `Sehr geehrte Damen und Herren,
  
  Hom nay, SV FFTU Hoa Lac Dat dia la i. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
  
  Die administrativen Fristen wurden erfolgreich bearbeitet und abgeschlossen. Alle erforderlichen Schritte sind dokumentiert und archiviert.
  
  Die Prozessdokumentation steht zur Einsicht bereit.
  
  Freundliche Grüße,
  Verwaltungsabteilung`,
      assignee: "Emily K.",
      category: "Frist",
      status: "Vollendet",
      time: "Jun 20",
      date: "20. Juni",
      checked: false,
      starred: false,
      attachments: ["administrative_abschluss.pdf", "prozess_dokumentation.docx"],
    }
  ]);

  // ✅ Select All Toggle
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setMessages((prev) =>
      prev.map((msg) => ({ ...msg, checked: !selectAll }))
    );
  };

  // ✅ Toggle Single Check
  const toggleCheck = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, checked: !msg.checked } : msg
      )
    );
  };

  // ✅ Toggle Star
  const toggleStar = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, starred: !msg.starred } : msg
      )
    );
  };

  // ✅ Delete Selected
  const deleteSelected = () => {
    setMessages((prev) => prev.filter((msg) => !msg.checked));
    setSelectAll(false);
  };

  // ✅ Refresh (reset)
  const refreshList = () => {
    setSelectAll(false);
    setFilterStatus("All");
    setMessages((prev) =>
      prev.map((msg) => ({ ...msg, checked: false }))
    );
  };

  // ✅ Filter by Status
  const filteredMessages =
    filterStatus === "All"
      ? messages
      : messages.filter((msg) => msg.status === filterStatus);

  // ✅ Status Color
  const getStatusColor = (status) => {
    switch (status) {
      case "Ausstehend":
        return "bg-blue-100 text-blue-700";
      case "Im Gange":
        return "bg-yellow-100 text-yellow-700";
      case "Vollendet":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // ✅ Handle message click
  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    setViewMode("detail");
  };

  // ✅ Handle back to list
  const handleBackToList = () => {
    setViewMode("list");
    setSelectedMessage(null);
  };

  const tabs = [
    "Neue E-Mail",
    "In Bearbeitung",
    "Erledigt",
    "AI-detected",
    "Manual review required",
    "Upload",
  ];

  // Mobile message item component
  const MobileMessageItem = ({ msg }) => (
    <div 
      className="bg-gray-700 rounded-lg p-3 mb-2 cursor-pointer hover:bg-gray-600 transition-colors"
      onClick={() => handleMessageClick(msg)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {msg.checked ? (
            <MdCheckBox
              className="text-blue-600 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleCheck(msg.id);
              }}
            />
          ) : (
            <MdCheckBoxOutlineBlank
              className="text-gray-400 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleCheck(msg.id);
              }}
            />
          )}
          {msg.starred ? (
            <MdStar
              className="text-yellow-500 cursor-pointer text-lg"
              onClick={(e) => {
                e.stopPropagation();
                toggleStar(msg.id);
              }}
            />
          ) : (
            <MdStarOutline
              className="text-gray-400 cursor-pointer text-lg"
              onClick={(e) => {
                e.stopPropagation();
                toggleStar(msg.id);
              }}
            />
          )}
        </div>
        <span className="text-xs text-gray-300">{msg.time}</span>
      </div>

      <div className="space-y-1">
        <div className="font-medium text-white truncate">{msg.email}</div>
        <div className="text-gray-300 text-xs truncate">{msg.subject}</div>
        <div className="flex items-center justify-between mt-2">
          <span className={`px-2 py-1 rounded text-xs ${getStatusColor(msg.status)}`}>
            {msg.status}
          </span>
          <div className="text-xs text-gray-400">
            {msg.assignee} • {msg.category}
          </div>
        </div>
      </div>
    </div>
  );

  // Message Detail View Component - Responsive
  const MessageDetailView = () => (
    <div className="flex-1 flex flex-col bg-[#2D3748] rounded-lg overflow-hidden">
      {/* Message Header - Responsive */}
      <div className="bg-[#444B58] p-3 sm:p-4 border-b border-gray-600">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <button
            onClick={handleBackToList}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm sm:text-base"
          >
            <FaArrowLeftLong size={16} />
            <span className="hidden xs:inline">Zurück</span>
          </button>
          <div className="flex items-center gap-1 sm:gap-2">
            <button className="p-1 sm:p-2 text-gray-400 hover:text-white transition-colors">
              <FiTrash2 size={16} className="sm:w-4 sm:h-4" />
            </button>
            <button 
              className="p-1 sm:p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => selectedMessage && toggleStar(selectedMessage.id)}
            >
              {selectedMessage?.starred ? (
                <MdStar className="text-yellow-500 sm:w-5 sm:h-5 w-4 h-4" />
              ) : (
                <MdStarOutline className="sm:w-5 sm:h-5 w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <h1 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
          {selectedMessage?.subject}
        </h1>
        
        <div className="flex flex-col xs:flex-row xs:items-center justify-between text-xs sm:text-sm text-gray-300 gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <FiUser size={14} className="sm:w-4 sm:h-4" />
              <span className="truncate">{selectedMessage?.sender}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail size={14} className="sm:w-4 sm:h-4" />
              <span className="truncate">{selectedMessage?.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FiCalendar size={14} className="sm:w-4 sm:h-4" />
            <span>{selectedMessage?.date} • {selectedMessage?.time}</span>
          </div>
        </div>
      </div>

      {/* Message Meta Info - Responsive */}
      <div className="bg-[#3A4556] px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-600">
        <div className="flex flex-col xs:flex-row xs:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <FiTag size={14} className="sm:w-4 sm:h-4" />
            <span>Kategorie: {selectedMessage?.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiUser size={14} className="sm:w-4 sm:h-4" />
            <span>Zugewiesen: {selectedMessage?.assignee}</span>
          </div>
          <span className={`px-2 py-1 rounded text-xs ${getStatusColor(selectedMessage?.status)} self-start xs:self-auto`}>
            {selectedMessage?.status}
          </span>
        </div>
      </div>

      {/* Message Content - Responsive */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 bg-[#2D3748]">
        <div className="max-w-4xl mx-auto">
          {/* Attachments */}
          {selectedMessage?.attachments && selectedMessage.attachments.length > 0 && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#3A4556] rounded-lg">
              <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Anhänge</h3>
              <div className="flex flex-wrap gap-2">
                {selectedMessage.attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-[#444B58] rounded text-xs sm:text-sm text-gray-300 hover:bg-[#4A5568] transition-colors cursor-pointer"
                  >
                    <FiFileText size={14} className="sm:w-4 sm:h-4" />
                    <span className="max-w-[120px] xs:max-w-[150px] sm:max-w-none truncate">{file}</span>
                    <FiDownload size={12} className="text-blue-400 ml-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Message Body */}
          <div className="bg-[#3A4556] rounded-lg p-4 sm:p-6">
            <div className="text-gray-300 whitespace-pre-line leading-relaxed text-sm sm:text-base">
              {selectedMessage?.content}
            </div>
          </div>

          {/* Action Buttons - Responsive */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-600">
            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base flex-1 xs:flex-none">
              <FiMail size={16} className="sm:w-4 sm:h-4" />
              <span>Antworten</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm sm:text-base flex-1 xs:flex-none">
              <FiChevronRight size={16} className="sm:w-4 sm:h-4" />
              <span>Weiterleiten</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm sm:text-base flex-1 xs:flex-none">
              <FiCheckCircle size={16} className="sm:w-4 sm:h-4" />
              <span>Als erledigt markieren</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen overflow-hidden w-full text-sm font-medium">
      {/* Header - Responsive */}
      <div className="flex justify-between items-center px-3 xs:px-4 sm:px-5 lg:px-6 py-3 shadow">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="lg:hidden flex items-center justify-center w-8 h-8 xs:w-9 xs:h-9 text-[#1A1A1A80] rounded-full border border-[#1A1A1A80] hover:bg-gray-100 hover:text-black transition-all duration-200"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          >
            {mobileSidebarOpen ? <FiX size={16} className="xs:w-4 xs:h-4" /> : <FiMenu size={16} className="xs:w-4 xs:h-4" />}
          </button>
          <h1 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-semibold text-black whitespace-nowrap">
            Kommunikation
          </h1>
        </div>

        <div className="flex items-center gap-2 xs:gap-3">
          {/* Back Button */}
          <button className="hidden sm:flex items-center gap-2 px-2 xs:px-3 sm:px-4 py-1 xs:py-2 text-[#1A1A1A80] rounded-full border border-[#1A1A1A80] hover:bg-gray-100 hover:text-black transition-all duration-200 text-xs sm:text-sm">
            <FaArrowLeftLong className="text-[#1A1A1A80] flex-shrink-0 w-3 h-3 xs:w-3.5 xs:h-3.5" />
            <span className="hidden lg:inline">Geh zurück</span>
            <span className="lg:hidden">Zurück</span>
          </button>

          {/* Legal Notice Button */}
          <button className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 text-xs xs:text-sm font-medium whitespace-nowrap">
            <span className="hidden xs:inline">Rechtliche Hinweise</span>
            <span className="xs:hidden">Rechtl. Hinweise</span>
            <FiChevronRight className="flex-shrink-0 w-3 h-3 xs:w-3.5 xs:h-3.5" />
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-76px)]">
        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Sidebar - Responsive */}
        <div className={`
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50
          w-64 xs:w-72 lg:w-[25%] bg-[#E6E6E6] border-r rounded-l-2xl border-gray-300 p-3 sm:p-4
          transition-transform duration-300 ease-in-out
        `}>
          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg mb-4 sm:mb-6 transition text-sm sm:text-base">
            <FiUpload className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Hochladen</span>
          </button>

          <div className="space-y-1">
            <SidebarItem icon={<FiMail className="w-4 h-4 sm:w-5 sm:h-5" />} label="E-Mail" active />
            <SidebarItem icon={<FiGrid className="w-4 h-4 sm:w-5 sm:h-5" />} label="ERV" />
            <SidebarItem icon={<FiPhone className="w-4 h-4 sm:w-5 sm:h-5" />} label="Telefon" />
            <SidebarItem icon={<FiFileText className="w-4 h-4 sm:w-5 sm:h-5" />} label="Entwurf" />
            <SidebarItem icon={<FiStar className="w-4 h-4 sm:w-5 sm:h-5" />} label="Merk" />
            <SidebarItem icon={<FiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />} label="Wichtig" />
            <SidebarItem icon={<FiTrash2 className="w-4 h-4 sm:w-5 sm:h-5" />} label="Gelöscht" />
            <SidebarItem icon={<FiInbox className="w-4 h-4 sm:w-5 sm:h-5" />} label="Mail" />
          </div>
        </div>

        {/* Main Content */}
        {viewMode === "list" ? (
          <div className="flex-1 flex flex-col bg-[#444B58] p-2 sm:p-3 lg:p-4 overflow-hidden">
            {/* Top Bar - Responsive */}
            <div className="flex items-center justify-between text-white text-xs px-2 sm:px-3 lg:px-3 py-2 rounded-t-md">
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                <button onClick={handleSelectAll} className="flex items-center">
                  {selectAll ? (
                    <MdCheckBox className="text-blue-500 text-base sm:text-lg" />
                  ) : (
                    <MdCheckBoxOutlineBlank className="text-gray-400 text-base sm:text-lg" />
                  )}
                </button>
                <button
                  onClick={refreshList}
                  className="hover:text-blue-400 transition p-1"
                >
                  <FiRefreshCw className="text-sm sm:text-base" />
                </button>
                <button
                  onClick={deleteSelected}
                  className="hover:text-red-400 transition p-1"
                >
                  <FiTrash2 className="text-sm sm:text-base" />
                </button>
                <button
                  onClick={() =>
                    setFilterStatus(
                      filterStatus === "All" ? "Ausstehend" : "All"
                    )
                  }
                  className="hover:text-yellow-400 transition p-1"
                >
                  <FiFilter className="text-sm sm:text-base" />
                </button>
              </div>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="hover:text-gray-300 transition p-1"
              >
                <FiMoreHorizontal className="text-sm sm:text-base" />
              </button>

              {showMenu && (
                <div className="absolute right-2 sm:right-4 lg:right-10 mt-8 bg-gray-700 rounded shadow-lg text-white text-xs p-2 space-y-1 z-10">
                  <button
                    onClick={() =>
                      setMessages((prev) =>
                        prev.map((msg) =>
                          msg.checked ? { ...msg, starred: true } : msg
                        )
                      )
                    }
                    className="block w-full text-left hover:bg-gray-600 px-3 py-1 rounded"
                  >
                    Mark as Starred
                  </button>
                  <button
                    onClick={deleteSelected}
                    className="block w-full text-left hover:bg-gray-600 px-3 py-1 rounded"
                  >
                    Delete Selected
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Table - Unchanged for large screens */}
            <div className="hidden lg:block rounded-md w-full overflow-hidden shadow-sm flex-1">
              {/* Table Header */}
              <div className="text-white text-xs font-semibold flex items-center sticky top-0 bg-[#444B58]">
                <div className="w-8 py-3 flex justify-center">
                  <MdCheckBoxOutlineBlank />
                </div>
                <div className="w-8 py-3 flex justify-center">
                  <FiStar />
                </div>
                <div className="flex-1 py-3 px-3">
                  {/* Tabs as first row */}
                  <div className="flex items-center gap-5 text-xs font-semibold">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-1 ${activeTab === tab
                          ? "text-[#FFFFFF] border-b-2 border-blue-600"
                          : "text-[#FFFFFF80]"
                          }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Table Body - Scrollbar Hidden */}
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]">
                <div className="[&::-webkit-scrollbar]:hidden">
                  {filteredMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="flex items-center text-xs text-white border-b border-white hover:bg-gray-700 transition-colors cursor-pointer"
                      onClick={() => handleMessageClick(msg)}
                    >
                      <div className="w-8 py-3 flex justify-center" onClick={(e) => e.stopPropagation()}>
                        {msg.checked ? (
                          <MdCheckBox
                            className="text-blue-600 cursor-pointer"
                            onClick={() => toggleCheck(msg.id)}
                          />
                        ) : (
                          <MdCheckBoxOutlineBlank
                            className="text-gray-400 cursor-pointer"
                            onClick={() => toggleCheck(msg.id)}
                          />
                        )}
                      </div>

                      <div className="w-8 py-3 flex justify-center" onClick={(e) => e.stopPropagation()}>
                        {msg.starred ? (
                          <MdStar
                            className="text-yellow-500 cursor-pointer"
                            onClick={() => toggleStar(msg.id)}
                          />
                        ) : (
                          <MdStarOutline
                            className="text-gray-400 cursor-pointer"
                            onClick={() => toggleStar(msg.id)}
                          />
                        )}
                      </div>

                      <div className="flex-1 px-3 py-3 truncate font-medium text-white">
                        {msg.email}
                      </div>

                      <div className="flex-1 px-3 py-3 truncate text-white">
                        {msg.subject}
                      </div>

                      <div className="w-28 px-3 py-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                            msg.status
                          )}`}
                        >
                          {msg.status}
                        </span>
                      </div>

                      <div className="w-24 px-3 py-3 truncate text-white">
                        {msg.assignee}
                      </div>

                      <div className="w-24 px-3 py-3 truncate text-white">
                        {msg.category}
                      </div>

                      <div className="w-16 px-3 py-3 text-right text-white">
                        {msg.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile & Tablet List - Enhanced for smaller screens */}
            <div className="lg:hidden flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]">
              <div className="[&::-webkit-scrollbar]:hidden space-y-2 p-1">
                {filteredMessages.map((msg) => (
                  <MobileMessageItem key={msg.id} msg={msg} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <MessageDetailView />
        )}
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => (
  <button
    className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded transition text-sm sm:text-base ${active
        ? "bg-[#444B58] font-semibold rounded-r-full text-white"
        : "text-gray-700 hover:bg-gray-300"
      }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Communication;