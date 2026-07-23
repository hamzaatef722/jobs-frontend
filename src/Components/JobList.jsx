import { useJobs } from "../Context/JobsContext";
import { FaSearch } from "react-icons/fa";
import Job from "./Job";
import { useState } from "react";

import Spinner from "../Components/Spinner";

function JobList({ isHome = false }) {
  const { jobs, isLoading } = useJobs();
  let jobsList = isHome ? jobs.slice(0, 3) : jobs;

  const filterLabels = [
    "All",
    "Full-Time",
    "Part-Time",
    "Remote",
    "Internship",
  ];
  const [type, setType] = useState("All");
  const [search, setSearch] = useState("");

  jobsList =
    type === "All" ? jobsList : jobsList.filter((job) => job.type === type);
  const roles = jobsList.length;

  jobsList = jobsList.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company?.name?.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSetLabel(label) {
    setType(label);
  }

  return (
    <section className="bg-[#f4f6fb] px-5 py-16">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-indigo-600 sm:text-5xl">
            {isHome ? "Recent Jobs" : "All Jobs"}
          </h2>
          {!isHome && (
            <p className="mt-4 text-xl text-slate-600">
              {roles > 0
                ? `${roles} open roles waiting for you.`
                : "there is no jobs in this role yet."}
            </p>
          )}
        </div>

        {!isHome && (
          <div className="mb-10 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-xl shadow-slate-200/70 lg:flex-row lg:items-center">
            <div className="flex min-h-14 flex-1 items-center gap-4 rounded-2xl border border-slate-300 bg-slate-50 px-5 text-slate-500">
              <FaSearch />
              <input
                className="w-full bg-transparent text-lg outline-none placeholder:text-slate-500"
                placeholder="Search by title, company or location..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {filterLabels.map((label) => (
                <button
                  onClick={() => handleSetLabel(label)}
                  key={label}
                  className={
                    label === type
                      ? "rounded-2xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white"
                      : "rounded-2xl bg-indigo-100/80 px-6 py-3.5 text-base font-semibold text-indigo-950 transition hover:bg-indigo-200"
                  }
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {jobsList.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default JobList;
