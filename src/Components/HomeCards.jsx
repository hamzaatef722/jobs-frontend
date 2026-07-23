import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";

function HomeCards() {
  return (
    <section className="bg-[#f4f6fb] px-5 py-12 sm:py-16">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card bg="bg-white">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              For Developers
            </h2>
            <p className="mt-3 mb-6 text-base sm:text-lg text-slate-600">
              Browse our React jobs and start your career today.
            </p>
            <Link
              to="/jobs"
              className="inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Browse Jobs
              <FaArrowRight />
            </Link>
          </Card>
          <Card bg="bg-indigo-100/70">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              For Employers
            </h2>
            <p className="mt-3 mb-6 text-base sm:text-lg text-slate-600">
              List your job to find the perfect developer for the role.
            </p>
            <Link
              to="/add-job"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-700 to-violet-500 px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5"
            >
              Add Job
              <FaArrowRight />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default HomeCards;
