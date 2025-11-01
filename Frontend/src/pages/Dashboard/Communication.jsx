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
      deadline: "Frist Datum: Oct 20 2025, 20:30",
      sender: "Deadline Management System",
      subject: "Deadline@example...",
      content: `Sehr geehrter Benutzer,
    
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Bitte beachten Sie die anstehenden Fristen in der Anlage. Mit freundlichen Grüßen, Ihr Deadline Team`,
      assignee: "Emily K.",
      category: "Frist",
      status: "Ausstehend",
      time: "17:30",
      date: "Heute",
      checked: false,
      starred: false,
      customer: "Emily K.",
      topic: "Ausziehend",
      caseNumber: "541255478854",
      priority: "EMP/F",
      department: "GREENJÄRGER-REFIZIER",
      detailedContent: `**Frist**
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 2,
      email: "review@example.com",
      deadline: "Frist Datum: Oct 20 2025, 20:30",
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
      customer: "Emily K.",
      topic: "Ausziehend",
      caseNumber: "541255478855",
      priority: "EMP/F",
      department: "GREENJÄRGER-REFIZIER",
      detailedContent: `**Frist**
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 3,
      email: "personal@example.com",
      deadline: "Frist Datum: Oct 20 2025, 20:30",
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
      customer: "Emily K.",
      topic: "Ausziehend",
      caseNumber: "541255478856",
      priority: "EMP/F",
      department: "GREENJÄRGER-REFIZIER",
      detailedContent: `**Frist**
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 4,
      email: "deadline@example.com",
      deadline: "Frist Datum: Oct 20 2025, 20:30",
      sender: "Project Management",
      subject: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      content: `Sehr geehrte Team-Mitglieder,
    
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    
  Wir möchten Sie auf die anstehenden Meilensteine des Projekts hinweisen. Bitte stellen Sie sicher, dass alle Aufgaben termingerecht abgeschlossen werden.
    
  Bei Verzögerungen kontaktieren Sie bitte umgehend das Projektmanagement.
    
  Mit freundlichen Grüßen,
  Projektleitung`,
      assignee: "Max M.",
      category: "Aufgabe",
      status: "Ausstehend",
      time: "15:45",
      date: "Heute",
      checked: false,
      starred: false,
      customer: "Max M.",
      topic: "Projektabschluss",
      caseNumber: "541255478857",
      priority: "URG/H",
      department: "PROJEKT-MANAGEMENT",
      detailedContent: `**Frist**
  
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 5,
      email: "support@example.com",
      deadline: "Frist Datum: Oct 20 2025, 20:30",
      sender: "Customer Support",
      subject: "Duis aute irure dolor in reprehenderit in voluptate",
      content: `Sehr geehrter Kunde,
    
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    
  Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden. Vielen Dank für Ihre Geduld.
    
  Freundliche Grüße,
  Ihr Support Team`,
      assignee: "Sarah L.",
      category: "Support",
      status: "Im Gange",
      time: "14:20",
      date: "Heute",
      checked: false,
      starred: false,
      customer: "Sarah L.",
      topic: "Kundenanfrage",
      caseNumber: "541255478858",
      priority: "MED/G",
      department: "KUNDEN-SUPPORT",
      detailedContent: `**Frist**
  
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 6,
      email: "billing@example.com",
      deadline: "Frist Datum: Oct 20 2025, 20:30",
      sender: "Accounting Department",
      subject: "Excepteur sint occaecat cupidatat non proident",
      content: `Sehr geehrte Damen und Herren,
    
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
  Ihre Rechnung Nr. 2025-001 steht zur Zahlung bereit. Bitte überweisen Sie den Betrag innerhalb der nächsten 14 Tage.
    
  Mit freundlichen Grüßen,
  Buchhaltung`,
      assignee: "Thomas R.",
      category: "Rechnung",
      status: "Ausstehend",
      time: "13:10",
      date: "Heute",
      checked: false,
      starred: false,
      customer: "Thomas R.",
      topic: "Rechnungsstellung",
      caseNumber: "541255478859",
      priority: "EMP/F",
      department: "BUCHHALTUNG",
      detailedContent: `**Frist**
  
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 7,
      email: "hr@example.com",
      deadline: "Frist Datum: Oct 20 2025, 20:30",
      sender: "Human Resources",
      subject: "Sunt in culpa qui officia deserunt mollit anim",
      content: `Liebes Team,
    
  Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
  Die nächste Personalversammlung findet am 25.10.2025 statt. Bitte tragen Sie sich in die Teilnehmerliste ein.
    
  Beste Grüße,
  Personalabteilung`,
      assignee: "Lisa B.",
      category: "Personal",
      status: "Vollendet",
      time: "11:45",
      date: "Heute",
      checked: false,
      starred: false,
      customer: "Lisa B.",
      topic: "Personalversammlung",
      caseNumber: "541255478860",
      priority: "MED/G",
      department: "PERSONALABTEILUNG",
      detailedContent: `**Frist**
  
  Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 8,
      email: "legal@example.com",
      deadline: "Frist Datum: Oct 20 2025, 20:30",
      sender: "Legal Department",
      subject: "Consectetur adipiscing elit sed do eiusmod",
      content: `Sehr geehrte Kollegen,
    
  Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
  Die Vertragsunterlagen wurden überprüft und sind zur Unterschrift bereit. Bitte lassen Sie uns die unterzeichneten Dokumente zukommen.
    
  Mit freundlichen Grüßen,
  Rechtsabteilung`,
      assignee: "Michael K.",
      category: "Rechtlich",
      status: "Im Gange",
      time: "10:30",
      date: "Heute",
      checked: false,
      starred: false,
      customer: "Michael K.",
      topic: "Vertragsprüfung",
      caseNumber: "541255478861",
      priority: "URG/H",
      department: "RECHTSABTEILUNG",
      detailedContent: `**Frist**
  
  Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 9,
      email: "marketing@example.com",
      deadline: "Frist Datum: Oct 20 2025, 20:30",
      sender: "Marketing Team",
      subject: "Ut enim ad minim veniam quis nostrud",
      content: `Hallo zusammen,
    
  Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    
  Die Marketingkampagne für Q4 2025 ist gestartet. Bitte teilen Sie uns mit, wenn Sie Materialien benötigen.
    
  Viele Grüße,
  Marketing Team`,
      assignee: "Anna S.",
      category: "Marketing",
      status: "Vollendet",
      time: "09:15",
      date: "Heute",
      checked: false,
      starred: false,
      customer: "Anna S.",
      topic: "Marketing Kampagne",
      caseNumber: "541255478862",
      priority: "MED/G",
      department: "MARKETING",
      detailedContent: `**Frist**
  
  Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 10,
      email: "it@example.com",
      deadline: "Frist Datum: Oct 20 2025, 20:30",
      sender: "IT Support",
      subject: "Exercitation ullamco laboris nisi ut aliquip",
      content: `Sehr geehrte Nutzer,
    
  Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
    
  Geplante Wartungsarbeiten finden am Wochenende statt. Das System wird vorübergehend nicht verfügbar sein.
    
  Mit freundlichen Grüßen,
  IT Abteilung`,
      assignee: "David W.",
      category: "IT",
      status: "Ausstehend",
      time: "08:45",
      date: "Heute",
      checked: false,
      starred: false,
      customer: "David W.",
      topic: "Systemwartung",
      caseNumber: "541255478863",
      priority: "EMP/F",
      department: "IT-ABTEILUNG",
      detailedContent: `**Frist**
  
  Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 11,
      email: "sales@example.com",
      deadline: "Frist Datum: Oct 19 2025, 20:30",
      sender: "Sales Department",
      subject: "Duis aute irure dolor in reprehenderit",
      content: `Liebe Vertriebskollegen,
    
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    
  Das Sales Meeting wurde auf nächste Woche verschoben. Neue Termine folgen in Kürze.
    
  Beste Grüße,
  Vertriebsleitung`,
      assignee: "Robert P.",
      category: "Vertrieb",
      status: "Vollendet",
      time: "17:20",
      date: "Gestern",
      checked: false,
      starred: false,
      customer: "Robert P.",
      topic: "Sales Meeting",
      caseNumber: "541255478864",
      priority: "MED/G",
      department: "VERTRIEB",
      detailedContent: `**Frist**
  
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 12,
      email: "quality@example.com",
      deadline: "Frist Datum: Oct 19 2025, 20:30",
      sender: "Quality Assurance",
      subject: "Velit esse cillum dolore eu fugiat",
      content: `Sehr geehrte Mitarbeiter,
    
  Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
    
  Das Qualitätsaudit wurde erfolgreich abgeschlossen. Vielen Dank für die gute Vorbereitung.
    
  Mit freundlichen Grüßen,
  Qualitätssicherung`,
      assignee: "Julia M.",
      category: "Qualität",
      status: "Vollendet",
      time: "15:40",
      date: "Gestern",
      checked: false,
      starred: false,
      customer: "Julia M.",
      topic: "Qualitätsaudit",
      caseNumber: "541255478865",
      priority: "EMP/F",
      department: "QUALITÄTSSICHERUNG",
      detailedContent: `**Frist**
  
  Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 13,
      email: "training@example.com",
      deadline: "Frist Datum: Oct 19 2025, 20:30",
      sender: "Training Center",
      subject: "Nulla pariatur excepteur sint occaecat",
      content: `Liebe Teilnehmer,
    
  Nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
    
  Das Training "Projektmanagement" startet nächsten Montag. Bitte bringen Sie Ihre Unterlagen mit.
    
  Freundliche Grüße,
  Training Center`,
      assignee: "Markus T.",
      category: "Training",
      status: "Im Gange",
      time: "14:15",
      date: "Gestern",
      checked: false,
      starred: false,
      customer: "Markus T.",
      topic: "Projektmanagement Training",
      caseNumber: "541255478866",
      priority: "MED/G",
      department: "TRAINING-CENTER",
      detailedContent: `**Frist**
  
  Nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 14,
      email: "research@example.com",
      deadline: "Frist Datum: Oct 19 2025, 20:30",
      sender: "Research & Development",
      subject: "Cupidatat non proident sunt in culpa",
      content: `Sehr geehrtes Forschungsteam,
    
  Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
    
  Die Forschungsdaten für Projekt Alpha sind verfügbar. Bitte beginnen Sie mit der Analyse.
    
  Mit freundlichen Grüßen,
  F&E Abteilung`,
      assignee: "Dr. Schmidt",
      category: "Forschung",
      status: "Ausstehend",
      time: "12:30",
      date: "Gestern",
      checked: false,
      starred: false,
      customer: "Dr. Schmidt",
      topic: "Projekt Alpha",
      caseNumber: "541255478867",
      priority: "URG/H",
      department: "FORSCHUNG-ENTWICKLUNG",
      detailedContent: `**Frist**
  
  Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 15,
      email: "logistics@example.com",
      deadline: "Frist Datum: Oct 18 2025, 20:30",
      sender: "Logistics Department",
      subject: "Officia deserunt mollit anim id est",
      content: `Hallo Logistik-Team,
    
  Officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    
  Die Lieferung für Kunde 1234 ist versandbereit. Bitte bestätigen Sie den Versandtermin.
    
  Viele Grüße,
  Logistik`,
      assignee: "Frank L.",
      category: "Logistik",
      status: "Im Gange",
      time: "16:55",
      date: "Vorgestern",
      checked: false,
      starred: false,
      customer: "Frank L.",
      topic: "Lieferung Kunde 1234",
      caseNumber: "541255478868",
      priority: "EMP/F",
      department: "LOGISTIK",
      detailedContent: `**Frist**
  
  Officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 16,
      email: "compliance@example.com",
      deadline: "Frist Datum: Oct 18 2025, 20:30",
      sender: "Compliance Office",
      subject: "Laborum lorem ipsum dolor sit amet",
      content: `Sehr geehrte Mitarbeiter,
    
  Laborum lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    
  Das jährliche Compliance-Training muss bis Ende des Monats absolviert werden. Bitte beachten Sie die Frist.
    
  Mit freundlichen Grüßen,
  Compliance Office`,
      assignee: "Sabine H.",
      category: "Compliance",
      status: "Ausstehend",
      time: "14:20",
      date: "Vorgestern",
      checked: false,
      starred: false,
      customer: "Sabine H.",
      topic: "Compliance Training",
      caseNumber: "541255478869",
      priority: "URG/H",
      department: "COMPLIANCE-OFFICE",
      detailedContent: `**Frist**
  
  Laborum lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 17,
      email: "facility@example.com",
      deadline: "Frist Datum: Oct 18 2025, 20:30",
      sender: "Facility Management",
      subject: "Consectetur adipiscing elit sed do",
      content: `Liebe Kollegen,
    
  Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    
  Die Gebäudereinigung findet diese Woche am Freitag statt. Bitte räumen Sie Ihre Arbeitsplätze.
    
  Freundliche Grüße,
  Facility Management`,
      assignee: "Peter Z.",
      category: "Facility",
      status: "Vollendet",
      time: "11:45",
      date: "Vorgestern",
      checked: false,
      starred: false,
      customer: "Peter Z.",
      topic: "Gebäudereinigung",
      caseNumber: "541255478870",
      priority: "MED/G",
      department: "FACILITY-MANAGEMENT",
      detailedContent: `**Frist**
  
  Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
    },
    {
      id: 18,
      email: "security@example.com",
      deadline: "Frist Datum: Oct 17 2025, 20:30",
      sender: "Security Team",
      subject: "Eiusmod tempor incididunt ut labore",
      content: `Sehr geehrte Nutzer,
    
  Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    
  Das Sicherheitsupdate wurde erfolgreich installiert. Bitte starten Sie Ihre Systeme neu.
    
  Mit freundlichen Grüßen,
  Sicherheitsteam`,
      assignee: "Alex B.",
      category: "Sicherheit",
      status: "Vollendet",
      time: "09:30",
      date: "3 Tage",
      checked: false,
      starred: false,
      customer: "Alex B.",
      topic: "Sicherheitsupdate",
      caseNumber: "541255478871",
      priority: "URG/H",
      department: "SICHERHEITSTEAM",
      detailedContent: `**Frist**
  
  Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
      actions: [
        "Vervenim",
        "Wetertelten en RA", 
        "Erstellen Sie eine interne Aufgabe"
      ]
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

  // Message Detail View Component - Dark theme matching the image
  const MessageDetailView = () => (
    <div className="flex-1 flex flex-col bg-[#444B58] rounded-lg overflow-hidden">
      {/* Header with Back Button and Actions - Dark theme */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-[#444B58]">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToList}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <FaArrowLeftLong size={16} />
            <span>Zurück</span>
          </button>
          <div className="h-6 w-px bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-300 hover:text-white transition-colors">
              <FiTrash2 size={16} />
            </button>
            <button
              className="p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => selectedMessage && toggleStar(selectedMessage.id)}
            >
              {selectedMessage?.starred ? (
                <MdStar className="text-yellow-500" />
              ) : (
                <MdStarOutline className="text-gray-300" />
              )}
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
            <FiCheckCircle size={16} />
            <span>Als erledigt markieren</span>
          </button>
          <button className="p-2 text-gray-300 hover:text-white transition-colors">
            <FiMoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* Main Content Area - Dark theme */}
      <div className="flex-1 overflow-y-auto p-6 bg-[#444B58]">
        <div className="max-w-4xl mx-auto rounded-lg">
          {/* Email Header - Dark theme */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl font-bold text-white">
                {selectedMessage?.subject}
              </h1>
              <span className="text-sm text-gray-400">{selectedMessage?.time}</span>
            </div>
            
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-400">Von:</span>
                <span>{selectedMessage?.sender} &lt;{selectedMessage?.email}&gt;</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-400">An:</span>
                <span className="text-white">Sie</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-400">Datum:</span>
                <span>{selectedMessage?.date}, {selectedMessage?.time}</span>
              </div>
            </div>
          </div>

          {/* Case Information Table - Dark theme exactly like the image */}
          <div className="p-6 border-b border-gray-700">
            <div className="mb-4">
              <div className="text-lg font-bold text-red-400 mb-2">
                {selectedMessage?.deadline}
              </div>
            </div>
            
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="py-3 pr-4 font-medium text-gray-300 w-32">Kunde</td>
                  <td className="py-3 text-white">{selectedMessage?.customer}</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-3 pr-4 font-medium text-gray-300">Thema</td>
                  <td className="py-3 text-white">{selectedMessage?.topic}</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-300">Fallnummer:</td>
                  <td className="py-3 font-bold text-white">{selectedMessage?.caseNumber}</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-4 pt-4 border-t border-gray-600">
              <div className="text-sm font-bold text-gray-300 mb-2">ASTRKURER</div>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="font-medium text-gray-300">EMP/F</span>
                </div>
                <div>
                  <span className="font-medium text-gray-300">GREENJÄRGER-REFIZIER</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Content - Dark theme */}
          <div className="p-6 border-b border-gray-700">
            <div className="prose max-w-none">
              <h2 className="text-xl font-bold text-white mb-4">Frist</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons - Dark theme exactly like the image */}
          <div className="p-6">
            <div className="flex flex-wrap gap-3">
              {selectedMessage?.actions?.map((action, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors text-sm font-medium"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reply Section - Dark theme */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                <FiMail size={16} />
                <span>Antworten</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors text-sm">
                <FiChevronRight size={16} />
                <span>Weiterleiten</span>
              </button>
            </div>
            
            <div className="border border-gray-600 rounded-lg">
              <div className="border-b border-gray-600 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>Von: Ihr Name</span>
                  <span>•</span>
                  <span>An: {selectedMessage?.sender}</span>
                </div>
              </div>
              <div className="p-4">
                <textarea 
                  className="w-full h-32 border border-gray-600 text-white rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Schreiben Sie Ihre Antwort..."
                />
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <FiFileText size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors">
                      <FiUpload size={16} />
                    </button>
                  </div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Senden
                  </button>
                </div>
              </div>
            </div>
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