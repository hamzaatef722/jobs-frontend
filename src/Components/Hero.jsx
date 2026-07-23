import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBriefcase,
  FaMagic,
  FaPlusCircle,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center bg-gradient-to-br from-[#230076] via-[#5b09c8] to-[#9a42a4] px-5 py-16 text-white sm:py-20">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm sm:text-base font-medium shadow-inner shadow-white/10 backdrop-blur">
          <FaMagic className="text-white" />
          <span>The React talent marketplace</span>
        </div>
        <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Become a React Dev
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl">
          Find the React job that fits your skills and needs - or post one to
          hire the perfect developer.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/jobs"
            className="inline-flex h-14 items-center gap-3 rounded-2xl bg-white px-7 text-lg font-semibold text-indigo-700 shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-indigo-50"
          >
            <FaBriefcase />
            Browse Jobs
          </Link>
          <Link
            to="/add-job"
            className="inline-flex h-14 items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-7 text-lg font-semibold text-white shadow-xl shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            <FaPlusCircle />
            Post a Job
            <FaArrowRight className="text-base" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
