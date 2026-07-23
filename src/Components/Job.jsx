import { useState } from "react";
import { FaArrowRight, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Job({ job }) {
  const [showDescription, setShowDescription] = useState(false);

  function handleToggle() {
    setShowDescription((prevState) => !prevState);
  }

  return (
    <div className="relative flex min-h-[420px] flex-col rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/80 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-100">
      <div className="flex h-full flex-col p-8">
        <div className="mb-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-950">
            <FaBriefcase className="text-xs text-indigo-800" />
            {job.type}
          </div>
          <h3 className="text-xl font-bold leading-snug text-slate-900">
            {job.title}
          </h3>
        </div>

        <div className="mb-3 text-base leading-7 text-slate-600">
          {showDescription
            ? job.description
            : job.description.slice(0, 100) + "..."}
        </div>
        <button
          onClick={() => handleToggle()}
          className="mb-5 w-fit text-base font-medium text-indigo-700 hover:text-indigo-900"
        >
          {showDescription ? "Show less" : "Show more"}
        </button>

        <div className="mb-6 border-t border-slate-200"></div>

        <h3 className="mb-8 text-lg font-bold text-indigo-700">
          {job.salary} / Year
        </h3>

        <div className="mt-auto flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 text-base font-medium text-rose-600">
            <FaMapMarkerAlt className="text-rose-600" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="inline-flex h-11 items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-indigo-700 to-violet-500 px-5 text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5"
          >
            Read More
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Job;
