import { useMemo, useState } from "react";
import { ChevronDown, Image, Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
  url?: string;
  borderColor: string;
  gradient: string;
  accentColor?: string;
};

type TeamSeason = {
  label: string;
  coreTeam: TeamMember[];
  domainLeads: TeamMember[];
};

const Team = () => {
  const facultyCoordinators = [
    {
      image: "/photos/hod.png",
      title: "Dr. C.V. Guru Rao",
      subtitle: "Head of CSE Department",
      handle: "@cvgururao",
      borderColor: "#5533eaff",
      gradient: "linear-gradient(145deg, #5533eaff, #000)",
      url: "https://www.linkedin.com/in/gurucvrao/",
    },
    {
      image: "/photos/KBMadhuri.jpg",
      title: "Dr. K.B.Madhuri",
      subtitle: "Professor & Dean, School of CSE, IT & CA",
      handle: "@kbmadhuri",
      borderColor: "#eadb33ff",
      gradient: "linear-gradient(145deg, #eadb33ff, #000)",
    },
    {
      image: "/photos/Ajay.jpg",
      title: "Ajay Kumar",
      subtitle: "Associate Professor, Dept of CSE",
      handle: "@ajay",
      borderColor: "#ea8533ff",
      gradient: "linear-gradient(145deg, #ea8533ff, #000)",
    },
    {
      image: "/photos/seetalakshmi.jpg",
      title: "Sathee Lakshmi",
      subtitle: "Assistant Professor, Dept of CSE",
      handle: "@satheelakshmi",
      borderColor: "#ea3367ff",
      gradient: "linear-gradient(145deg, #ea3367ff, #000)",
    },
    {
      image: "/photos/leteefa.jpg",
      title: "Lateefa",
      subtitle: "Assistant Professor, Dept of CSE",
      handle: "@lateefa",
      borderColor: "#33eab0ff",
      gradient: "linear-gradient(145deg, #33eab0ff, #000)",
    },
  ];

  const teamSeasons: Record<string, TeamSeason> = {
    "2025-26": {
      label: "Team 2025-26",
      coreTeam: [
        {
          name: "Bagadi Bharat",
          role: "President",
          image: "/photos/2025-26/BHARAT.jpg",
          url: "https://www.linkedin.com/in/bagadi-bharat/",
          borderColor: "#FF6B6B",
          gradient: "linear-gradient(145deg, #FF6B6B, #000)",
          accentColor: "#FF8C8C",
        },
        {
          name: "Powrohitham Rushitha Datta",
          role: "Vice President",
          image: "/photos/2025-26/rushitha.jpg",
          url: "https://www.linkedin.com/in/powrohitham-rushitha-datta/",
          borderColor: "#3B82F6",
          gradient: "linear-gradient(145deg, #3B82F6, #000)",
          accentColor: "#60A5FA",
        },
        {
          name: "A.Uhanjani",
          role: "Secretary",
          image: "/photos/2025-26/Uha.jpg",
          url: "https://www.linkedin.com/in/uhanjani-akula/",
          borderColor: "#10B981",
          gradient: "linear-gradient(145deg, #10B981, #000)",
          accentColor: "#6EE7B7",
        },
        {
          name: "Bongu Hari Hara Charan",
          role: "Treasurer",
          image: "/photos/2025-26/CHARAN.png",
          url: "https://www.linkedin.com/in/bhhc/",
          borderColor: "#F59E0B",
          gradient: "linear-gradient(145deg, #F59E0B, #000)",
          accentColor: "#FBBF24",
        },
      ],
      domainLeads: [
        {
          name: "Yaswanth Hanumanthu",
          role: "Blockchain lead",
          image: "/photos/2025-26/Yeswanth.jpg",
          url: "https://www.linkedin.com/in/yaswanth-hanumanthu-07b390290/",
          borderColor: "#8B5CF6",
          gradient: "linear-gradient(145deg, #8B5CF6, #000)",
          accentColor: "#A78BFA",
        },
        {
          name: "Sai Bhargavi Gembali",
          role: "Cloud Computing Domain Lead",
          image: "/photos/2025-26/BHARGAVI.jpg",
          url: "https://www.linkedin.com/in/saibhargavi-gembali-4b0550350/",
          borderColor: "#06B6D4",
          gradient: "linear-gradient(145deg, #06B6D4, #000)",
          accentColor: "#22D3EE",
        },
        {
          name: "Prasanna Villa",
          role: "Competitive Programming Domain lead",
          image: "/photos/2025-26/PRASANNA.jpg",
          url: "https://www.linkedin.com/in/prasanna-villa/",
          borderColor: "#A855F7",
          gradient: "linear-gradient(145deg, #A855F7, #000)",
          accentColor: "#C084FC",
        },
        {
          name: "Pulavarthi Thanusri",
          role: "Cybersecurity Domain Lead",
          image: "/photos/2025-26/THANUSRI.jpg",
          url: "https://www.linkedin.com/in/thanu-sri-1219b52a4/",
          borderColor: "#EF4444",
          gradient: "linear-gradient(145deg, #EF4444, #000)",
          accentColor: "#FCA5A5",
        },
        {
          name: "B Sarat",
          role: "Data Analytics lead",
          image: "/photos/2025-26/SARAT.jpg",
          url: "https://www.linkedin.com/in/sarat-basava-a07094301/",
          borderColor: "#F97316",
          gradient: "linear-gradient(145deg, #F97316, #000)",
          accentColor: "#FB923C",
        },
        {
          name: "Tankala Sai Sanjana",
          role: "DSA domain lead",
          image: "/photos/2025-26/SANJANA.jpg",
          url: "https://www.linkedin.com/in/sanjana-tankala-75b854300/",
          borderColor: "#14B8A6",
          gradient: "linear-gradient(145deg, #14B8A6, #000)",
          accentColor: "#5EEAD4",
        },
        {
          name: "Shaikh Ramjanvali",
          role: "Networking Lead",
          image: "/photos/2025-26/ramjanvali.jpg",
          url: "https://www.linkedin.com/in/ramjanvali-shaik-6b8ba535b/",
          borderColor: "#2563EB",
          gradient: "linear-gradient(145deg, #2563EB, #000)",
          accentColor: "#60A5FA",
        },
        {
          name: "Siri Baratam",
          role: "Web development domain lead",
          image: "/photos/2025-26/SIRI.jpg",
          url: "https://www.linkedin.com/in/siri-baratam-dev/",
          borderColor: "#0EA5E9",
          gradient: "linear-gradient(145deg, #0EA5E9, #000)",
          accentColor: "#38BDF8",
        },
        {
          name: "Pinipe Lilly Asmi",
          role: "Designing Lead",
          image: "/photos/2025-26/LILLY.png",
          url: "https://www.linkedin.com/in/lilly-asmi/",
          borderColor: "#EC4899",
          gradient: "linear-gradient(145deg, #EC4899, #000)",
          accentColor: "#F472B6",
        },
        {
          name: "K L Aparna",
          role: "Documentation supporting lead",
          image: "/photos/2025-26/Aparna.jpg",
          url: "https://www.linkedin.com/in/aparna-kondiparthy-576aab290/",
          borderColor: "#F97316",
          gradient: "linear-gradient(145deg, #F97316, #000)",
          accentColor: "#FB923C",
        },
        {
          name: "MANIDEEPAK KONDRA",
          role: "PR & Logistics Head",
          image: "/photos/2025-26/MANIDEEPAK.jpg",
          url: "https://www.linkedin.com/in/manideepak-kondra-02a007301/",
          borderColor: "#D946EF",
          gradient: "linear-gradient(145deg, #D946EF, #000)",
          accentColor: "#E879F9",
        },
      ],
    },
    "2024-25": {
      label: "Team 2024-25",
      coreTeam: [
        {
          name: "Lavanya",
          role: "President",
          image: "/photos/lavanya.jpg",
          url: "https://www.linkedin.com/in/lavanya-bethina/",
          borderColor: "#FF6B6B",
          gradient: "linear-gradient(145deg, #FF6B6B, #000)",
          accentColor: "#FF8C8C",
        },
        {
          name: "Aravind",
          role: "Vice President",
          image: "/photos/aravind.jpg",
          url: "https://linkedin.com/in/aravind-tham",
          borderColor: "#3B82F6",
          gradient: "linear-gradient(145deg, #3B82F6, #000)",
          accentColor: "#60A5FA",
        },
        {
          name: "Fathima",
          role: "Secretary",
          image: "/photos/fathima.jpg",
          url: "https://www.linkedin.com/in/tatheer-fathima-5ba16b275/",
          borderColor: "#10B981",
          gradient: "linear-gradient(145deg, #10B981, #000)",
          accentColor: "#6EE7B7",
        },
        {
          name: "Laxmi",
          role: "Treasurer",
          image: "/photos/laxmi.jpg",
          url: "https://www.linkedin.com/in/laxmikandivalasa/",
          borderColor: "#F59E0B",
          gradient: "linear-gradient(145deg, #F59E0B, #000)",
          accentColor: "#FBBF24",
        },
      ],
      domainLeads: [
        {
          name: "Moenuddin",
          role: "Blockchain Lead",
          image: "/photos/moenuddin.jpg",
          url: "https://www.linkedin.com/in/mohammad-moeenuddin-558846226/",
          borderColor: "#8B5CF6",
          gradient: "linear-gradient(145deg, #8B5CF6, #000)",
          accentColor: "#A78BFA",
        },
        {
          name: "Asmitha",
          role: "Cloud Computing Lead",
          image: "/photos/asmitha.jpg",
          url: "https://www.linkedin.com/in/ashmitha-yenimireddy-617581290/",
          borderColor: "#06B6D4",
          gradient: "linear-gradient(145deg, #06B6D4, #000)",
          accentColor: "#22D3EE",
        },
        {
          name: "Prasanna",
          role: "Competitive Programming Lead",
          image: "/photos/prasanna.jpg",
          borderColor: "#EC4899",
          gradient: "linear-gradient(145deg, #EC4899, #000)",
          accentColor: "#F472B6",
        },
        {
          name: "Vamsi",
          role: "Cybersecurity Lead",
          image: "/photos/vamsi.jpg",
          borderColor: "#A855F7",
          gradient: "linear-gradient(145deg, #A855F7, #000)",
          accentColor: "#D8B4FE",
        },
        {
          name: "Navya Sri",
          role: "Data Analytics Lead",
          image: "/photos/navyasri.jpg",
          borderColor: "#F97316",
          gradient: "linear-gradient(145deg, #F97316, #000)",
          accentColor: "#FB923C",
        },
        {
          name: "Lakshmi Raj",
          role: "DSA Lead",
          image: "/photos/lakshmiraj.jpg",
          url: "https://www.linkedin.com/in/lakshmirajvagu",
          borderColor: "#14B8A6",
          gradient: "linear-gradient(145deg, #14B8A6, #000)",
          accentColor: "#2DD4BF",
        },
        {
          name: "Poojitha",
          role: "Networking Lead",
          image: "/photos/poojitha.jpg",
          url: "https://www.linkedin.com/in/sarvamangala-poojitha-115742262/",
          borderColor: "#2563EB",
          gradient: "linear-gradient(145deg, #2563EB, #000)",
          accentColor: "#60A5FA",
        },
        {
          name: "Varma",
          role: "Web Development Lead",
          image: "/photos/varma.jpg",
          url: "https://www.linkedin.com/in/varma-sagi-89a024253/",
          borderColor: "#0EA5E9",
          gradient: "linear-gradient(145deg, #0EA5E9, #000)",
          accentColor: "#38BDF8",
        },
        {
          name: "Yamini",
          role: "Designing Lead",
          image: "/photos/yamini.jpg",
          url: "https://www.linkedin.com/in/yamini-reddipilli/",
          borderColor: "#D946EF",
          gradient: "linear-gradient(145deg, #D946EF, #000)",
          accentColor: "#E879F9",
        },
        {
          name: "Suvarna",
          role: "Documentation Lead",
          image: "/photos/suvarna.jpg",
          url: "https://www.linkedin.com/in/sarada-suvarna-tekumalla-107400254/",
          borderColor: "#FF6B6B",
          gradient: "linear-gradient(145deg, #FF6B6B, #000)",
          accentColor: "#FF8C8C",
        },
        {
          name: "Hari Sai",
          role: "Social Media Handler",
          image: "/photos/harisai.jpg",
          url: "https://www.linkedin.com/in/harisai-surishetti/",
          borderColor: "#10B981",
          gradient: "linear-gradient(145deg, #10B981, #000)",
          accentColor: "#6EE7B7",
        },
        {
          name: "Kushal Sai",
          role: "Discipline Lead",
          image: "/photos/kushal.jpg",
          url: "https://www.linkedin.com/in/kushal-sai2118/",
          borderColor: "#EF4444",
          gradient: "linear-gradient(145deg, #EF4444, #000)",
          accentColor: "#FCA5A5",
        },
      ],
    },
  };

  const seasonsSorted = useMemo(() => {
    const keys = Object.keys(teamSeasons);
    return keys.sort((a, b) => {
      const aStart = parseInt(a.split("-")[0], 10);
      const bStart = parseInt(b.split("-")[0], 10);
      return aStart - bStart;
    });
  }, [teamSeasons]);

  const latestSeason = seasonsSorted[seasonsSorted.length - 1];
  const pastSeasons = seasonsSorted.slice(0, seasonsSorted.length - 1);

  const [selectedSeason, setSelectedSeason] = useState(latestSeason);
  const [showPastBoards, setShowPastBoards] = useState(true);

  const selectedTeam = teamSeasons[selectedSeason];

  const renderMemberImage = (member: TeamMember) => {
    if (member.image) {
      return (
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      );
    }

    return (
      <div
        className="flex h-full w-full items-center justify-center bg-black/30 text-white"
        style={{ background: member.gradient }}
      >
        <div className="flex flex-col items-center gap-3">
          <Image size={48} />
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
            Photo coming soon
          </span>
        </div>
      </div>
    );
  };

  const CoreTeamGrid = ({ seasonKey }: { seasonKey: string }) => {
    const season = teamSeasons[seasonKey];
    return (
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-white mb-10 text-center">
          Core Team - {season.label}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {season.coreTeam.map((member, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-3 border-2"
              style={{
                borderColor: member.borderColor,
                boxShadow: `0 10px 40px -10px ${member.borderColor}40, 0 0 20px -5px ${member.borderColor}20`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 50px -5px ${member.borderColor}80, 0 0 30px ${member.borderColor}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 10px 40px -10px ${member.borderColor}40, 0 0 20px -5px ${member.borderColor}20`;
              }}
            >
              <div
                className="relative h-96 overflow-hidden"
                style={{ background: member.gradient }}
              >
                {renderMemberImage(member)}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {member.url && (
                      <a
                        href={member.url}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 text-white"
                        style={{ borderColor: member.borderColor }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="p-6 text-center"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))",
                }}
              >
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="font-semibold" style={{ color: member.borderColor }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const DomainLeadsGrid = ({ seasonKey }: { seasonKey: string }) => {
    const season = teamSeasons[seasonKey];
    return (
      <div>
        <h3 className="text-3xl font-bold text-white mb-10 text-center">
          Domain Leads - {season.label}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {season.domainLeads.map((member, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-3 border-2"
              style={{
                borderColor: member.borderColor,
                boxShadow: `0 10px 40px -10px ${member.borderColor}40, 0 0 20px -5px ${member.borderColor}20`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 50px -5px ${member.borderColor}80, 0 0 30px ${member.borderColor}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 10px 40px -10px ${member.borderColor}40, 0 0 20px -5px ${member.borderColor}20`;
              }}
            >
              <div
                className="relative h-84 overflow-hidden"
                style={{ background: member.gradient }}
              >
                {renderMemberImage(member)}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, ${member.borderColor}cc, transparent)`,
                  }}
                >
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {member.url && (
                      <a
                        href={member.url}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 text-white"
                        style={{ borderColor: member.borderColor }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="p-6 text-center"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))",
                }}
              >
                <h4
                  className="text-lg font-bold text-white mb-1 group-hover:transition-colors duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = member.accentColor ?? "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                >
                  {member.name}
                </h4>
                <p className="font-semibold text-sm" style={{ color: member.borderColor }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the passionate individuals driving innovation and excellence
          </p>
        </div>

        <div className="mb-16 flex justify-center">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-xl shadow-black/20 backdrop-blur-sm sm:flex-row sm:gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-400">
              Team Year
            </span>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="min-w-[220px] rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-base font-semibold text-white outline-none transition focus:border-blue-400"
            >
              {Object.keys(teamSeasons)
                .slice()
                .reverse()
                .map((key) => (
                  <option key={key} value={key}>
                    {teamSeasons[key].label}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            Faculty Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {facultyCoordinators.map((faculty, index) => (
              <div
                key={index}
                className="group rounded-3xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-3 border-2"
                style={{
                  borderColor: faculty.borderColor,
                  boxShadow: `0 10px 40px -10px ${faculty.borderColor}40, 0 0 20px -5px ${faculty.borderColor}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 50px -5px ${faculty.borderColor}80, 0 0 30px ${faculty.borderColor}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 40px -10px ${faculty.borderColor}40, 0 0 20px -5px ${faculty.borderColor}20`;
                }}
              >
                <div
                  className="relative h-86 overflow-hidden flex items-center justify-center border-b-2"
                  style={{
                    background: faculty.gradient,
                    borderBottomColor: faculty.borderColor,
                  }}
                >
                  <img
                    src={faculty.image}
                    alt={faculty.title}
                    className="h-full w-full object-cover group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8 text-center">
                  <h4
                    className="text-2xl font-bold text-white mb-2 transition-colors duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = faculty.borderColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                  >
                    {faculty.title}
                  </h4>
                  <p
                    className="font-semibold text-lg mb-1"
                    style={{ color: faculty.borderColor }}
                  >
                    {faculty.subtitle}
                  </p>
                  {faculty.url && (
                    <a
                      href={faculty.url}
                      className="mt-4 inline-block px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-white"
                      style={{ backgroundColor: faculty.borderColor }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New/current team: show normally */}
        <CoreTeamGrid seasonKey={selectedSeason} />
        <DomainLeadsGrid seasonKey={selectedSeason} />

        {/* Past team(s): below in a collapsed accordion manner */}
        {pastSeasons.length > 0 && (
          <div className="mt-14">
            <div className="past-tenure-accordion">
              <button
                className="past-tenure-header"
                onClick={() => setShowPastBoards((s) => !s)}
              >
                <span>Past Team Boards</span>
                <ChevronDown
                  className={`accordion-icon ${showPastBoards ? "open" : ""}`}
                />
              </button>

              {showPastBoards && (
                <div className="past-tenure-content">
                  {pastSeasons.map((seasonKey) => (
                    <div key={seasonKey} className="mt-12">
                      <CoreTeamGrid seasonKey={seasonKey} />
                      <DomainLeadsGrid seasonKey={seasonKey} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Accordion styling (scoped via classNames) */}
        <style>{`
          .past-tenure-accordion {
            border-radius: 16px;
            border: 1px solid rgba(255,255,255,0.10);
            background: rgba(255,255,255,0.04);
            overflow: hidden;
          }
          .past-tenure-header {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 18px 16px;
            color: #fff;
            font-weight: 700;
            background: rgba(255,255,255,0.03);
            border: none;
            cursor: pointer;
          }
          .past-tenure-content {
            padding: 8px 16px 18px;
            animation: slideDown 0.4s ease;
          }
          .accordion-icon {
            transition: transform 0.25s ease;
          }
          .accordion-icon.open {
            transform: rotate(180deg);
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Team;

