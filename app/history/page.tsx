"use client";

import { useState } from "react";
import { Colors } from "@/components/Colors";
import Link from "next/link";
import { IoMdArrowRoundForward, IoMdArrowBack } from "react-icons/io";
import {
  FiClock,
  FiSearch,
  FiTrash2,
  FiBookmark,
  FiCalendar,
  FiFilter,
  FiEye,
} from "react-icons/fi";

interface HistoryItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  viewedAt: string;
  dateGroup: "Today" | "Yesterday" | "Earlier This Week";
  progress: number;
  bookmarked: boolean;
}

const initialHistory: HistoryItem[] = [
  {
    id: 1,
    title: "Next-Gen Neural Architectures: What Comes After Transformers?",
    excerpt:
      "Researchers are rethinking memory, efficiency, and reasoning as new model paradigms challenge traditional scaling laws.",
    category: "Artificial Intelligence",
    readTime: "6 min read",
    viewedAt: "2 hours ago",
    dateGroup: "Today",
    progress: 100,
    bookmarked: true,
  },
  {
    id: 2,
    title: "Solid-State Batteries Finally Arrive in Flagship Devices",
    excerpt:
      "Thinner form factors and multi-day endurance mark the biggest leap in mobile hardware design in over a decade.",
    category: "Smartphones & Hardware",
    readTime: "4 min read",
    viewedAt: "5 hours ago",
    dateGroup: "Today",
    progress: 65,
    bookmarked: false,
  },
  {
    id: 3,
    title: "How Emerging Tech Hubs Are Redefining Global Venture Capital",
    excerpt:
      "Founders outside traditional Silicon Valley corridors are building profitable, AI-native infrastructure at record speed.",
    category: "Startups & Innovation",
    readTime: "5 min read",
    viewedAt: "Yesterday at 8:40 PM",
    dateGroup: "Yesterday",
    progress: 100,
    bookmarked: true,
  },
  {
    id: 4,
    title: "Spatial Computing Operating Systems: A Developer Breakdown",
    excerpt:
      "Comparing latency pipelines, gesture APIs, and cross-platform rendering engines for mixed-reality apps.",
    category: "Gaming & Web3",
    readTime: "8 min read",
    viewedAt: "Yesterday at 2:15 PM",
    dateGroup: "Yesterday",
    progress: 40,
    bookmarked: false,
  },
  {
    id: 5,
    title: "Zero-Knowledge Proofs in Consumer Fintech Applications",
    excerpt:
      "How privacy-preserving verification is enabling instant cross-border compliance without exposing user data.",
    category: "Startups & Innovation",
    readTime: "7 min read",
    viewedAt: "Nov 23, 2026",
    dateGroup: "Earlier This Week",
    progress: 100,
    bookmarked: false,
  },
];

const categories = [
  "All",
  "Artificial Intelligence",
  "Smartphones & Hardware",
  "Startups & Innovation",
  "Gaming & Web3",
];

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>(initialHistory);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleRemoveItem = (id: number) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleBookmark = (id: number) => {
    setHistory((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bookmarked: !item.bookmarked } : item
      )
    );
  };

  const handleClearAll = () => {
    setHistory([]);
  };

  const filteredHistory = history.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const dateGroups: Array<"Today" | "Yesterday" | "Earlier This Week"> = [
    "Today",
    "Yesterday",
    "Earlier This Week",
  ];

  const completedCount = history.filter((item) => item.progress === 100).length;

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 flex flex-col justify-between">
      <div>
        {/* Top Header Banner */}
        <section
          style={{ backgroundColor: Colors.blue }}
          className="text-white py-14"
        >
          <div className="lg:w-3/4 mx-auto max-lg:px-4 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition"
            >
              <IoMdArrowBack /> Back to Home
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <p
                  style={{ color: Colors.orange }}
                  className="font-semibold uppercase tracking-wider text-sm"
                >
                  Activity & Reading Log
                </p>
                <h1 className="font-bold text-3xl md:text-5xl">
                  Your Reading{" "}
                  <span style={{ color: Colors.orange }} className="italic">
                    History
                  </span>
                </h1>
                <p className="text-slate-300 font-light text-lg max-w-2xl">
                  Pick up right where you left off, revisit favorite insights,
                  or manage your recently viewed stories on Techpulse.
                </p>
              </div>

              {/* Quick Reading Summary Pills */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 border border-white/15 rounded-2xl px-5 py-3 text-center">
                  <p className="text-2xl font-bold">{history.length}</p>
                  <p className="text-xs text-slate-300 font-light">Viewed</p>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-2xl px-5 py-3 text-center">
                  <p
                    style={{ color: Colors.orange }}
                    className="text-2xl font-bold"
                  >
                    {completedCount}
                  </p>
                  <p className="text-xs text-slate-300 font-light">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Controls: Search, Filter & Clear */}
        <section className="py-8 border-b border-slate-200 bg-white sticky top-0 z-10">
          <div className="lg:w-3/4 mx-auto max-lg:px-4 space-y-5">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search your reading history..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-full pl-11 pr-5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500"
                />
              </div>

              {/* Clear All Button */}
              {history.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-red-600 hover:bg-red-50 border border-red-200 rounded-full px-5 py-2.5 transition cursor-pointer"
                >
                  <FiTrash2 /> Clear All History
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs text-slate-400 flex items-center gap-1 mr-1 shrink-0">
                <FiFilter /> Filter:
              </span>
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={
                      isActive
                        ? {
                            backgroundColor: Colors.orange,
                            borderColor: Colors.orange,
                          }
                        : undefined
                    }
                    className={`px-4 py-1.5 rounded-full text-xs font-medium border transition shrink-0 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* History Timeline Content */}
        <section className="py-12">
          <div className="lg:w-3/4 mx-auto max-lg:px-4 space-y-12">
            {filteredHistory.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-5 max-w-xl mx-auto">
                <div
                  style={{
                    backgroundColor: `${Colors.blue}10`,
                    color: Colors.blue,
                  }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto"
                >
                  <FiEye />
                </div>
                <div className="space-y-2">
                  <h2
                    style={{ color: Colors.blue }}
                    className="font-bold text-2xl"
                  >
                    No reading history found
                  </h2>
                  <p className="text-slate-600 font-light text-sm">
                    {history.length === 0
                      ? "Your reading history is completely clear. Start exploring the latest breakthroughs in tech."
                      : "No articles match your current search or category filter."}
                  </p>
                </div>
                <div className="pt-2">
                  {history.length === 0 ? (
                    <Link
                      href="/"
                      style={{ backgroundColor: Colors.orange }}
                      className="inline-flex items-center gap-2 text-white font-medium rounded-full px-7 py-3 hover:opacity-90 transition"
                    >
                      Explore Latest Stories <IoMdArrowRoundForward />
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                      }}
                      style={{ backgroundColor: Colors.blue }}
                      className="text-white font-medium rounded-full px-7 py-3 text-sm hover:opacity-90 transition cursor-pointer"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              </div>
            ) : (
              dateGroups.map((group) => {
                const itemsInGroup = filteredHistory.filter(
                  (item) => item.dateGroup === group
                );

                if (itemsInGroup.length === 0) return null;

                return (
                  <div key={group} className="space-y-5">
                    {/* Date Group Heading */}
                    <div className="flex items-center gap-2">
                      <FiCalendar style={{ color: Colors.orange }} />
                      <h2
                        style={{ color: Colors.blue }}
                        className="font-bold text-xl"
                      >
                        {group}
                      </h2>
                      <span className="text-xs text-slate-400 font-medium">
                        ({itemsInGroup.length})
                      </span>
                    </div>

                    {/* History Cards List */}
                    <div className="space-y-4">
                      {itemsInGroup.map((item) => (
                        <article
                          key={item.id}
                          className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition"
                        >
                          <div className="space-y-3 flex-1">
                            {/* Top Meta Row */}
                            <div className="flex flex-wrap items-center gap-3 text-xs">
                              <span
                                style={{
                                  backgroundColor: `${Colors.blue}10`,
                                  color: Colors.blue,
                                }}
                                className="font-semibold px-3 py-1 rounded-full"
                              >
                                {item.category}
                              </span>
                              <span className="text-slate-500 flex items-center gap-1">
                                <FiClock /> {item.readTime}
                              </span>
                              <span className="text-slate-400">•</span>
                              <span className="text-slate-500">
                                Viewed {item.viewedAt}
                              </span>
                            </div>

                            {/* Title & Excerpt */}
                            <div className="space-y-1.5">
                              <Link href="/">
                                <h3
                                  style={{ color: Colors.blue }}
                                  className="font-bold text-xl hover:underline"
                                >
                                  {item.title}
                                </h3>
                              </Link>
                              <p className="text-slate-600 font-light text-sm leading-relaxed max-w-3xl">
                                {item.excerpt}
                              </p>
                            </div>

                            {/* Reading Progress Bar */}
                            <div className="pt-1 flex items-center gap-3 max-w-xs">
                              <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                  style={{
                                    width: `${item.progress}%`,
                                    backgroundColor:
                                      item.progress === 100
                                        ? Colors.blue
                                        : Colors.orange,
                                  }}
                                  className="h-full rounded-full"
                                />
                              </div>
                              <span className="text-xs font-medium text-slate-500">
                                {item.progress === 100
                                  ? "Finished"
                                  : `${item.progress}% read`}
                              </span>
                            </div>
                          </div>

                          {/* Right Side Actions */}
                          <div className="flex items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 shrink-0">
                            <button
                              onClick={() => handleToggleBookmark(item.id)}
                              title={
                                item.bookmarked
                                  ? "Remove Bookmark"
                                  : "Save Article"
                              }
                              style={
                                item.bookmarked
                                  ? {
                                      color: Colors.orange,
                                      borderColor: Colors.orange,
                                    }
                                  : undefined
                              }
                              className={`p-2.5 rounded-full border transition cursor-pointer ${
                                item.bookmarked
                                  ? "bg-orange-50"
                                  : "border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400"
                              }`}
                            >
                              <FiBookmark />
                            </button>

                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              title="Remove from history"
                              className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:text-red-600 hover:border-red-300 transition cursor-pointer"
                            >
                              <FiTrash2 />
                            </button>

                            <Link
                              href="/"
                              style={{ backgroundColor: Colors.orange }}
                              className="text-white text-sm font-medium rounded-full px-5 py-2.5 inline-flex items-center gap-1 hover:opacity-90 transition"
                            >
                              {item.progress === 100 ? "Read Again" : "Continue"}{" "}
                              <IoMdArrowRoundForward />
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer
        style={{ backgroundColor: Colors.blue }}
        className="text-white py-12 mt-12"
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