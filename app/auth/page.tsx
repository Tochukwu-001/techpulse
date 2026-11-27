"use client";

import { useState } from "react";
import { Colors } from "@/components/Colors";
import Link from "next/link";
import { IoMdArrowRoundForward, IoMdArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 flex flex-col lg:flex-row">
      {/* Left Brand / Editorial Panel */}
      <section
        style={{ backgroundColor: Colors.blue }}
        className="lg:w-1/2 text-white p-8 md:p-14 lg:p-16 flex flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl tracking-tight">
            Tech<span style={{ color: Colors.orange }}>pulse</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition"
          >
            <IoMdArrowBack /> Home
          </Link>
        </div>

        <div className="my-12 lg:my-0 space-y-6 max-w-lg">
          <div
            style={{
              backgroundColor: `${Colors.orange}20`,
              color: Colors.orange,
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full"
          >
            <FiZap /> Member Access
          </div>

          <h1 className="font-bold text-3xl md:text-5xl leading-tight">
            Tech never sleeps,{" "}
            <span style={{ color: Colors.orange }} className="italic">
              stay curious!
            </span>
          </h1>

          <p className="text-slate-300 font-light text-lg leading-relaxed">
            Sign in to sync your reading history, bookmark deep dives, and get
            personalized briefings on AI, startups, and emerging hardware.
          </p>

          <ul className="space-y-3 pt-2 text-sm text-slate-200 font-light">
            <li className="flex items-center gap-2.5">
              <FiCheckCircle
                style={{ color: Colors.orange }}
                className="shrink-0 text-base"
              />
              <span>Save stories and track your reading progress across devices</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FiCheckCircle
                style={{ color: Colors.orange }}
                className="shrink-0 text-base"
              />
              <span>Curate custom feeds by topic and regional tech hubs</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FiCheckCircle
                style={{ color: Colors.orange }}
                className="shrink-0 text-base"
              />
              <span>Early access to weekly founder & AI research digests</span>
            </li>
          </ul>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Techpulse</p>
          <p>Stories & insights shaping the future.</p>
        </div>
      </section>

      {/* Right Sign-In UI Panel */}
      <section className="lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2
              style={{ color: Colors.blue }}
              className="font-bold text-3xl"
            >
              Welcome back
            </h2>
            <p className="text-slate-600 font-light text-sm">
              Sign in to your Techpulse account to continue reading.
            </p>
          </div>

          {/* Google Auth UI Button */}
          <button
            type="button"
            className="w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-medium rounded-full px-6 py-3.5 flex items-center justify-center gap-3 transition shadow-xs cursor-pointer"
          >
            <FcGoogle className="text-2xl shrink-0" />
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-4 text-xs uppercase tracking-wider text-slate-400 shrink-0">
              or sign in with email
            </span>
            <div className="border-t border-slate-200 w-full" />
          </div>

          {/* Email & Password Form UI */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email address
              </label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-full pl-11 pr-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-slate-500 transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  style={{ color: Colors.orange }}
                  className="text-xs font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-slate-50 border border-slate-300 rounded-full pl-11 pr-12 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-slate-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              style={{ backgroundColor: Colors.orange }}
              className="w-full text-white font-medium rounded-full px-8 py-3.5 flex items-center justify-center gap-2 text-base hover:opacity-90 transition cursor-pointer"
            >
              Sign In <IoMdArrowRoundForward />
            </button>
          </form>

          {/* Footer Sign-up Link */}
          <p className="text-center text-sm text-slate-600 font-light">
            New to Techpulse?{" "}
            <Link
              href="/signup"
              style={{ color: Colors.blue }}
              className="font-semibold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}