import { Colors } from "@/components/Colors";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <section className="min-h-dvh bg-black/60 flex items-center justify-center">
        <div className="text-white lg:w-3/4 space-y-7 max-lg:p-3 max-md:py-10">
          <h1 className="font-bold md:text-5xl max-md:text-3xl">
            Tech never sleeps, <span style={{color: Colors.orange}} className="italic">stay curious!</span>
          </h1>
          <p className="text-2xl font-thin">
            In a world where technology never stops evolving, staying informed
            has become a necessity; From the latest smartphones and AI
            breakthrough to digital innovations, tech startups, gaming and
            emerging trends, Techpulse keeps you connected to everything shaping
            the future. Whether your a tech enthusiast, students, entrepreneur,
            or simply curious about what's next, we've got the stories, updates
            and insights to keep you informed and inspired.
          </p>
          <div className="flex items-center gap-5 max-md:flex-col">
            <Link href={"/"} style={{backgroundColor: Colors.orange}} className="text-white rounded-full px-8 py-3 flex items-center gap-1 text-xl max-md:w-full justify-center">Get Started <IoMdArrowRoundForward /></Link>
            <Link href={"/"} className="border rounded-full px-8 py-3 text-xl max-md:w-full text-center">View Latest</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
