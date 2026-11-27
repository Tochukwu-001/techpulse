"use client";

import { useState } from "react";
import { Colors } from "@/components/Colors";
import Link from "next/link";
import { IoMdArrowRoundForward, IoMdArrowBack } from "react-icons/io";
import {
  FiMapPin,
  FiSearch,
  FiGlobe,
  FiClock,
  FiPhone,
  FiMail,
  FiUsers,
  FiExternalLink,
} from "react-icons/fi";

interface LocationHub {
  id: number;
  city: string;
  country: string;
  region: "Africa" | "North America" | "Europe" | "Asia";
  role: string;
  isHeadquarters?: boolean;
  address: string;
  timezone: string;
  email: string;
  phone: string;
  teamSize: string;
  focusAreas: string[];
}

const locationsData: LocationHub[] = [
  {
    id: 1,
    city: "Lagos",
    country: "Nigeria",
    region: "Africa",
    role: "Global Editorial & Innovation Hub",
    isHeadquarters: true,
    address: "14 Adeola Odeku Street, Victoria Island, Lagos",
    timezone: "WAT (UTC+1)",
    email: "lagos@techpulse.io",
    phone: "+234 800 832 4785",
    teamSize: "45+ Editors & Engineers",
    focusAreas: ["African Startups", "Fintech", "AI Infrastructure"],
  },
  {
    id: 2,
    city: "Abuja",
    country: "Nigeria",
    region: "Africa",
    role: "Tech Policy & Enterprise Desk",
    address: "42 Adetokunbo Ademola Crescent, Wuse 2, Abuja",
    timezone: "WAT (UTC+1)",
    email: "abuja@techpulse.io",
    phone: "+234 800 832 4786",
    teamSize: "18 Analysts & Reporters",
    focusAreas: ["Digital Policy", "Public Sector Tech", "Telecoms"],
  },
  {
    id: 3,
    city: "San Francisco",
    country: "United States",
    region: "North America",
    role: "Silicon Valley & AI Research Bureau",
    address: "548 Market St, Suite 41200, San Francisco, CA",
    timezone: "PST (UTC-8)",
    email: "sf@techpulse.io",
    phone: "+1 (415) 890-3412",
    teamSize: "30+ Correspondents",
    focusAreas: ["Foundation Models", "Venture Capital", "Hardware"],
  },
  {
    id: 4,
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    role: "EMEA Newsroom & Events Studio",
    address: "90 High Holborn, Holborn, London WC1V 6LJ",
    timezone: "GMT (UTC+0)",
    email: "london@techpulse.io",
    phone: "+44 20 7946 0821",
    teamSize: "24 Editors & Producers",
    focusAreas: ["DeepTech", "Cybersecurity", "Tech Summits"],
  },
  {
    id: 5,
    city: "Nairobi",
    country: "Kenya",
    region: "Africa",
    role: "East Africa Startup & ClimateTech Desk",
    address: "Riverside Drive, Westlands, Nairobi",
    timezone: "EAT (UTC+3)",
    email: "nairobi@techpulse.io",
    phone: "+254 20 765 4321",
    teamSize: "15 Journalists",
    focusAreas: ["CleanTech", "Mobile Payments", "AgriTech"],
  },
  {
    id: 6,
    city: "Singapore",
    country: "Singapore",
    region: "Asia",
    role: "APAC Semiconductors & Robotics Bureau",
    address: "1 Raffles Place, #20-61 Tower 2, Singapore",
    timezone: "SGT (UTC+8)",
    email: "apac@techpulse.io",
    phone: "+65 6789 4320",
    teamSize: "20+ Analysts",
    focusAreas: ["Semiconductors", "Robotics", "Gaming & Web3"],
  },
];

const regions = ["All", "Africa", "North America", "Europe", "Asia"] as const;

export default function LocationsPage() {
  const [selectedRegion, setSelectedRegion] =
    useState<(typeof regions)[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locationsData.filter((hub) => {
    const matchesRegion =
      selectedRegion === "All" || hub.region === selectedRegion;
    const matchesSearch =
      hub.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hub.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hub.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hub.focusAreas.some((area) =>
        area.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesRegion && matchesSearch;
  });

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 flex flex-col justify-between">
      <div>
        {/* Hero / Header Banner */}
        <section
          style={{ backgroundColor: Colors.blue }}
          className="text-white py-16"
        >
          <div className="lg:w-3/4 mx-auto max-lg:px-4 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition"
            >
              <IoMdArrowBack /> Back to Home
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <p
                  style={{ color: Colors.orange }}
                  className="font-semibold uppercase tracking-wider text-sm flex items-center gap-2"
                >
                  <FiGlobe /> Global Presence
                </p>
                <h1 className="font-bold text-3xl md:text-5xl leading-tight">
                  Where Techpulse{" "}
                  <span style={{ color: Colors.orange }} className="italic">
                    connects the world
                  </span>
                </h1>
                <p className="text-slate-300 font-light text-lg">
                  From Lagos and Abuja to Silicon Valley, London, and Singapore—our
                  newsrooms and innovation hubs cover breakthroughs where they
                  happen.
                </p>
              </div>

              {/* Global Coverage Stats */}
              <div className="grid grid-cols-3 gap-3 shrink-0">
                <div className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3.5 text-center">
                  <p className="text-2xl font-bold">{locationsData.length}</p>
                  <p className="text-xs text-slate-300 font-light">City Hubs</p>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3.5 text-center">
                  <p
                    style={{ color: Colors.orange }}
                    className="text-2xl font-bold"
                  >
                    4
                  </p>
                  <p className="text-xs text-slate-300 font-light">Continents</p>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3.5 text-center">
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-xs text-slate-300 font-light">Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Region Filter & Search Bar */}
        <section className="py-6 bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="lg:w-3/4 mx-auto max-lg:px-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Region Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              {regions.map((region) => {
                const isActive = selectedRegion === region;
                return (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    style={
                      isActive
                        ? {
                            backgroundColor: Colors.orange,
                            borderColor: Colors.orange,
                          }
                        : undefined
                    }
                    className={`px-4 py-2 rounded-full text-xs font-medium border transition shrink-0 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    {region}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, country, or beat..."
                className="w-full bg-slate-50 border border-slate-300 rounded-full pl-10 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500"
              />
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16">
          <div className="lg:w-3/4 mx-auto max-lg:px-4">
            {filteredLocations.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-4 max-w-lg mx-auto">
                <div
                  style={{
                    backgroundColor: `${Colors.blue}10`,
                    color: Colors.blue,
                  }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto"
                >
                  <FiMapPin />
                </div>
                <h2
                  style={{ color: Colors.blue }}
                  className="font-bold text-2xl"
                >
                  No bureaus found
                </h2>
                <p className="text-slate-600 font-light text-sm">
                  No Techpulse hubs matched your current filter or search term.
                </p>
                <button
                  onClick={() => {
                    setSelectedRegion("All");
                    setSearchQuery("");
                  }}
                  style={{ backgroundColor: Colors.orange }}
                  className="text-white text-sm font-medium rounded-full px-6 py-2.5 hover:opacity-90 transition cursor-pointer"
                >
                  Show All Locations
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredLocations.map((hub) => (
                  <article
                    key={hub.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-200"
                  >
                    <div className="space-y-5">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          style={{
                            backgroundColor: `${Colors.blue}10`,
                            color: Colors.blue,
                          }}
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {hub.region}
                        </span>
                        {hub.isHeadquarters && (
                          <span
                            style={{ backgroundColor: Colors.orange }}
                            className="text-white text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            Global HQ
                          </span>
                        )}
                      </div>

                      {/* City & Role */}
                      <div className="space-y-1">
                        <h2
                          style={{ color: Colors.blue }}
                          className="font-bold text-2xl flex items-center gap-2"
                        >
                          {hub.city}
                          <span className="text-slate-400 font-normal text-base">
                            • {hub.country}
                          </span>
                        </h2>
                        <p
                          style={{ color: Colors.orange }}
                          className="text-sm font-medium"
                        >
                          {hub.role}
                        </p>
                      </div>

                      {/* Hub Details */}
                      <div className="space-y-2.5 text-sm text-slate-600 font-light border-t border-slate-100 pt-4">
                        <p className="flex items-start gap-2.5">
                          <FiMapPin
                            style={{ color: Colors.blue }}
                            className="shrink-0 mt-1"
                          />
                          <span>{hub.address}</span>
                        </p>
                        <p className="flex items-center gap-2.5">
                          <FiClock
                            style={{ color: Colors.blue }}
                            className="shrink-0"
                          />
                          <span>{hub.timezone}</span>
                        </p>
                        <p className="flex items-center gap-2.5">
                          <FiUsers
                            style={{ color: Colors.blue }}
                            className="shrink-0"
                          />
                          <span>{hub.teamSize}</span>
                        </p>
                        <p className="flex items-center gap-2.5">
                          <FiPhone
                            style={{ color: Colors.blue }}
                            className="shrink-0"
                          />
                          <span>{hub.phone}</span>
                        </p>
                      </div>

                      {/* Coverage Focus Tags */}
                      <div className="space-y-2 pt-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Key Coverage Beats
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {hub.focusAreas.map((area) => (
                            <span
                              key={area}
                              className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <a
                        href={`mailto:${hub.email}`}
                        style={{ color: Colors.blue }}
                        className="text-xs font-semibold inline-flex items-center gap-1.5 hover:underline"
                      >
                        <FiMail /> {hub.email}
                      </a>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          hub.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: Colors.orange }}
                        className="text-xs font-semibold inline-flex items-center gap-1 hover:gap-1.5 transition-all"
                      >
                        Map <FiExternalLink />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Press & Pitch CTA Section */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="lg:w-3/4 mx-auto max-lg:px-4">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <p
                  style={{ color: Colors.orange }}
                  className="font-semibold uppercase tracking-wider text-sm"
                >
                  Story Tips & Partnerships
                </p>
                <h2
                  style={{ color: Colors.blue }}
                  className="font-bold text-2xl md:text-4xl"
                >
                  Building something groundbreaking in{" "}
                  <span style={{ color: Colors.orange }} className="italic">
                    your city?
                  </span>
                </h2>
                <p className="text-slate-600 font-light text-base">
                  Connect directly with a regional bureau to pitch a startup
                  launch, invite our reporters to a demo day, or collaborate on
                  local tech events.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <a
                  href="mailto:tips@techpulse.io"
                  style={{ backgroundColor: Colors.orange }}
                  className="text-white font-medium rounded-full px-7 py-3.5 inline-flex items-center justify-center gap-2 hover:opacity-90 transition"
                >
                  Pitch a Story <IoMdArrowRoundForward />
                </a>
                <Link
                  href="/"
                  style={{
                    borderColor: Colors.blue,
                    color: Colors.blue,
                  }}
                  className="border font-medium rounded-full px-7 py-3.5 text-center hover:bg-slate-100 transition"
                >
                  Back to Articles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer
        style={{ backgroundColor: Colors.blue }}
        className="text-white py-12"
      >
        <div className="lg:w-3/4 mx-auto max-lg:px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-bold text-xl tracking-tight">
            Tech<span style={{ color: Colors.orange }}>pulse</span>
          </span>
          <p className="text-slate-300 font-light text-xs">
            © {new Date().getFullYear()} Techpulse. Tech never sleeps, stay
            curious.
          </p>
        </div>
      </footer>
    </main>
  );
}