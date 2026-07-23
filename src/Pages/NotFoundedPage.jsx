import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFoundedPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#f4f6fb] px-6 text-center">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-12 shadow-2xl shadow-slate-200/80">
        <FaExclamationTriangle className="mx-auto mb-5 text-6xl text-yellow-400" />
        <h1 className="mb-4 text-6xl font-black text-slate-950">
          404 Not Found
        </h1>
        <p className="mb-8 text-xl text-slate-600">This page does not exist</p>
        <Link
          to="/"
          className="inline-flex rounded-2xl bg-indigo-700 px-6 py-4 text-lg font-extrabold text-white transition hover:bg-indigo-900"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
}

export default NotFoundedPage;
