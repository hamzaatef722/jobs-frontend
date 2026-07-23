import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function ViewAllJobs() {
  return (
    <section className="bg-[#f4f6fb] px-6 pb-20 text-center">
      <Link
        to="/jobs"
        className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
      >
        View All Jobs
        <FaArrowRight />
      </Link>
    </section>
  );
}

export default ViewAllJobs;
