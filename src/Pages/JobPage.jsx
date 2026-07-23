import { useParams } from "react-router-dom";
import { useJobs } from "../Context/JobsContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaBriefcase,
  FaDollarSign,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPen,
  FaPhone,
  FaTrashAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

import Spinner from "../Components/Spinner";

function JobPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, currentJob, getJob, error, deleteJob } = useJobs();

  function handleDeleteJob() {
    const confirm = window.confirm("Are you sure you want to delete this job");
    if (!confirm) return;
    deleteJob(id);
    toast.success("Job Deleted Successfully");
    navigate("/jobs");
  }

  useEffect(() => {
    getJob(id);
  }, [id]);

  if (isLoading || !currentJob.id) return <Spinner />;
  if (error) return <div className="p-8 text-center text-lg text-rose-600">{error}</div>;

  return (
    <section className="min-h-screen bg-[#f4f6fb]">
      <div className="mx-auto max-w-[1450px] px-6 py-12">
        <div className="mb-10">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-3 text-base font-semibold text-indigo-700 hover:text-indigo-900"
          >
            <FaArrowLeft /> Back to Job Listings
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
          <main className="space-y-8 lg:col-span-2">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/80">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-950">
                <FaBriefcase className="text-indigo-800" />
                {currentJob.type}
              </div>
              <h1 className="mb-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                {currentJob.title}
              </h1>
              <div className="flex items-center gap-3 text-lg font-medium text-rose-600">
                <FaMapMarkerAlt />
                <p>{currentJob.location}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/80">
              <h3 className="mb-5 text-2xl font-bold text-indigo-700">
                Job Description
              </h3>

              <p className="mb-10 text-lg leading-8 text-slate-800">
                {currentJob.description}
              </p>

              <h3 className="mb-4 text-2xl font-bold text-indigo-700">
                Salary
              </h3>

              <p className="flex items-center gap-3 text-xl font-bold text-slate-900">
                <FaDollarSign className="text-indigo-700" />
                {currentJob.salary} / Year
              </p>
            </div>
          </main>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/80">
              <h3 className="mb-6 text-2xl font-bold text-slate-900">
                Company Info
              </h3>

              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                {currentJob.company?.name}
              </h2>

              <p className="text-base leading-7 text-slate-600">
                {currentJob.company?.description}
              </p>

              <hr className="my-6 border-slate-200" />

              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Contact Email:
              </h3>

              <p className="mb-6 flex items-center gap-3 rounded-2xl bg-indigo-100 px-4 py-3.5 text-base font-medium text-indigo-950">
                <FaEnvelope />
                {currentJob.company?.contactEmail}
              </p>

              <h3 className="mb-3 text-base font-semibold text-slate-900">
                Contact Phone:
              </h3>

              <p className="flex items-center gap-3 rounded-2xl bg-indigo-100 px-4 py-3.5 text-base font-medium text-indigo-950">
                <FaPhone />
                {currentJob.company?.contactPhone}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/80">
              <h3 className="mb-6 text-2xl font-bold text-slate-900">
                Manage Job
              </h3>
              <Link
                to={`/edit-job/${currentJob.id}`}
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-4 py-3.5 text-center text-lg font-semibold text-white transition hover:bg-emerald-700"
              >
                <FaPen />
                Edit Job
              </Link>
              <button
                onClick={handleDeleteJob}
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-rose-600 px-4 py-3.5 text-lg font-semibold text-white transition hover:bg-rose-700"
              >
                <FaTrashAlt />
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default JobPage;
