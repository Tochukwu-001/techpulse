import { Colors } from "@/components/Colors";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  FiCpu,
  FiSmartphone,
  FiTrendingUp,
  FiLayers,
  FiClock,
  FiMail,
} from "react-icons/fi";

const featuredArticles = [
  {
    id: 1,
    category: "Artificial Intelligence",
    title: "Next-Gen Neural Architectures: What Comes After Transformers?",
    excerpt:
      "Researchers are rethinking memory, efficiency, and reasoning as new model paradigms challenge traditional scaling laws.",
    readTime: "6 min read",
    date: "Nov 25, 2026",
  },
  {
    id: 2,
    category: "Smartphones & Hardware",
    title: "Solid-State Batteries Finally Arrive in Flagship Devices",
    excerpt:
      "Thinner form factors and multi-day endurance mark the biggest leap in mobile hardware design in over a decade.",
    readTime: "4 min read",
    date: "Nov 23, 2026",
  },
  {
    id: 3,
    category: "Startups & Innovation",
    title: "How Emerging Tech Hubs Are Redefining Global Venture Capital",
    excerpt:
      "Founders outside traditional Silicon Valley corridors are building profitable, AI-native infrastructure at record speed.",
    readTime: "5 min read",
    date: "Nov 20, 2026",
  },
];

const categories = [
  {
    name: "AI & Machine Learning",
    description: "Breakthrough models, robotics, and real-world automation.",
    count: "140+ Articles",
    icon: FiCpu,
  },
  {
    name: "Gadgets & Mobile",
    description: "In-depth reviews, wearables, and next-gen consumer hardware.",
    count: "95+ Articles",
    icon: FiSmartphone,
  },
  {
    name: "Startups & Business",
    description: "Funding rounds, founder stories, and market shifts.",
    count: "110+ Articles",
    icon: FiTrendingUp,
  },
  {
    name: "Gaming & Web3",
    description: "Cloud engines, spatial computing, and interactive worlds.",
    count: "80+ Articles",
    icon: FiLayers,
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-slate-900">
      {/* Hero Section */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-dvh bg-black/60 flex items-center justify-center">
          <div className="text-white lg:w-3/4 space-y-7 max-lg:p-3 max-md:py-10">
            <h1 className="font-bold md:text-5xl max-md:text-3xl">
              Tech never sleeps,{" "}
              <span style={{ color: Colors.orange }} className="italic">
                stay curious!
              </span>
            </h1>
            <p className="text-2xl font-thin">
              In a world where technology never stops evolving, staying informed
              has become a necessity; From the latest smartphones and AI
              breakthrough to digital innovations, tech startups, gaming and
              emerging trends, Techpulse keeps you connected to everything
              shaping the future. Whether you're a tech enthusiast, student,
              entrepreneur, or simply curious about what's next, we've got the
              stories, updates and insights to keep you informed and inspired.
            </p>
            <div className="flex items-center gap-5 max-md:flex-col">
              <Link
                href="#trending"
                style={{ backgroundColor: Colors.orange }}
                className="text-white rounded-full px-8 py-3 flex items-center gap-1 text-xl max-md:w-full justify-center hover:opacity-90 transition"
              >
                Get Started <IoMdArrowRoundForward />
              </Link>
              <Link
                href="#latest"
                className="border border-white rounded-full px-8 py-3 text-xl max-md:w-full text-center hover:bg-white hover:text-slate-900 transition"
              >
                View Latest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Categories (Light Theme) */}
      <section id="trending" className="py-20 bg-slate-50">
        <div className="lg:w-3/4 mx-auto max-lg:px-4 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p
                style={{ color: Colors.orange }}
                className="font-semibold uppercase tracking-wider text-sm"
              >
                Explore Topics
              </p>
              <h2
                style={{ color: Colors.blue }}
                className="font-bold text-3xl md:text-4xl"
              >
                Curated beats for every{" "}
                <span style={{ color: Colors.orange }} className="italic">
                  innovator
                </span>
              </h2>
            </div>
            <p className="text-slate-600 font-light max-w-md">
              Dive straight into the industries and breakthroughs driving tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href="/"
                  className="group bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition duration-200"
                >
                  <div
                    style={{ backgroundColor: `${Colors.blue}10`, color: Colors.blue }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-105 transition"
                  >
                    <Icon />
                  </div>
                  <div className="space-y-2">
                    <h3
                      style={{ color: Colors.blue }}
                      className="font-bold text-xl"
                    >
                      {category.name}
                    </h3>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div
                    style={{ color: Colors.orange }}
                    className="pt-2 text-sm font-medium flex items-center gap-1"
                  >
                    {category.count} <IoMdArrowRoundForward />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Stories (Light Theme) */}
      <section id="latest" className="py-20 bg-white">
        <div className="lg:w-3/4 mx-auto max-lg:px-4 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p
                style={{ color: Colors.orange }}
                className="font-semibold uppercase tracking-wider text-sm"
              >
                Fresh Off The Press
              </p>
              <h2
                style={{ color: Colors.blue }}
                className="font-bold text-3xl md:text-4xl"
              >
                Latest stories &{" "}
                <span style={{ color: Colors.orange }} className="italic">
                  deep dives
                </span>
              </h2>
            </div>
            <Link
              href="/"
              style={{ color: Colors.blue }}
              className="font-semibold flex items-center gap-1 hover:underline"
            >
              Browse all articles <IoMdArrowRoundForward />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                className="border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between bg-white hover:shadow-xl transition duration-200"
              >
                <div>
                  {/* Decorative Header Banner */}
                  <div
                    style={{ backgroundColor: Colors.blue }}
                    className="h-44 p-6 flex flex-col justify-between relative overflow-hidden"
                  >
                    <span
                      style={{ backgroundColor: Colors.orange }}
                      className="self-start text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {article.category}
                    </span>
                    <div className="text-white/20 font-bold text-5xl select-none self-end">
                      0{article.id}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FiClock /> {article.readTime}
                      </span>
                    </div>
                    <h3
                      style={{ color: Colors.blue }}
                      className="font-bold text-xl leading-snug"
                    >
                      {article.title}
                    </h3>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/"
                    style={{ color: Colors.orange }}
                    className="font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read Full Story <IoMdArrowRoundForward />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Techpulse / Stats Strip */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="lg:w-3/4 mx-auto max-lg:px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p
              style={{ color: Colors.blue }}
              className="text-3xl md:text-4xl font-bold"
            >
              50K+
            </p>
            <p className="text-slate-600 text-sm font-light">Monthly Readers</p>
          </div>
          <div className="space-y-1">
            <p
              style={{ color: Colors.orange }}
              className="text-3xl md:text-4xl font-bold"
            >
              420+
            </p>
            <p className="text-slate-600 text-sm font-light">In-Depth Features</p>
          </div>
          <div className="space-y-1">
            <p
              style={{ color: Colors.blue }}
              className="text-3xl md:text-4xl font-bold"
            >
              Daily
            </p>
            <p className="text-slate-600 text-sm font-light">Tech Briefings</p>
          </div>
          <div className="space-y-1">
            <p
              style={{ color: Colors.orange }}
              className="text-3xl md:text-4xl font-bold"
            >
              100%
            </p>
            <p className="text-slate-600 text-sm font-light">Noise-Free Insights</p>
          </div>
        </div>
      </section>

      {/* Newsletter CTA (Light Theme) */}
      <section className="py-20 bg-white">
        <div className="lg:w-3/4 mx-auto max-lg:px-4">
          <div
            style={{ borderColor: `${Colors.blue}20` }}
            className="bg-slate-50 border rounded-3xl p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-4 lg:w-3/5">
              <div
                style={{ color: Colors.orange }}
                className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider"
              >
                <FiMail className="text-lg" /> Weekly Digest
              </div>
              <h2
                style={{ color: Colors.blue }}
                className="font-bold text-3xl md:text-4xl"
              >
                Never miss a beat in{" "}
                <span style={{ color: Colors.orange }} className="italic">
                  tech.
                </span>
              </h2>
              <p className="text-slate-600 text-lg font-light">
                Join thousands of founders, developers, and curious minds getting
                the week’s biggest breakthroughs delivered every Sunday morning.
              </p>
            </div>

            <form className="w-full lg:w-2/5 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email..."
                className="flex-1 bg-white border border-slate-300 rounded-full px-6 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500"
              />
              <button
                type="submit"
                style={{ backgroundColor: Colors.orange }}
                className="text-white font-medium rounded-full px-7 py-3.5 flex items-center justify-center gap-1 hover:opacity-90 transition cursor-pointer"
              >
                Subscribe <IoMdArrowRoundForward />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ backgroundColor: Colors.blue }}
        className="text-white py-14"
      >
        <div className="lg:w-3/4 mx-auto max-lg:px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="font-bold text-2xl tracking-tight">
              Tech<span style={{ color: Colors.orange }}>pulse</span>
            </span>
            <p className="text-slate-300 font-light text-sm max-w-sm">
              Stories, updates, and insights keeping you connected to everything
              shaping the future.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            <Link href="#trending" className="hover:text-white transition">
              Topics
            </Link>
            <Link href="#latest" className="hover:text-white transition">
              Latest Stories
            </Link>
            <Link href="/" className="hover:text-white transition">
              About
            </Link>
            <Link href="/" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        <div className="lg:w-3/4 mx-auto max-lg:px-4 mt-10 pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Techpulse. All rights reserved.</p>
          <p>Tech never sleeps, stay curious.</p>
        </div>
      </footer>
    </main>
  );
}