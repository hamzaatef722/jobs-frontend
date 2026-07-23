import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "../Context/JobsContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner";

function EditJobPage() {
  const { id } = useParams();

  const navigate = useNavigate();
  const { isLoading, currentJob, getJob, error, updateJob } = useJobs();
  const fieldClass =
    "min-h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 text-lg outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100";
  const labelClass = "mb-3 block text-base font-semibold text-slate-900";

  const [type, setType] = useState(currentJob.type);
  const [title, setTitle] = useState(currentJob.title);
  const [description, setDescription] = useState(currentJob.description);
  const [salary, setSalary] = useState(currentJob.salary);
  const [location, setLocation] = useState(currentJob.location);
  const [companyName, setCompanyName] = useState(currentJob.company?.name);
  const [companyDescription, setCompanyDescription] = useState(
    currentJob.company?.description,
  );
  const [contactEmail, setContactEmail] = useState(
    currentJob.company?.contactEmail,
  );
  const [contactPhone, setContactPhone] = useState(
    currentJob.company?.contactPhone,
  );

  useEffect(() => {
    getJob(id);
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedJob = {
      id,
      type,
      title,
      description,
      salary,
      location,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    updateJob(updatedJob);
    toast.success("Job Updated Successfully");
    navigate(`/jobs/${currentJob.id}`);
  }

  if (isLoading || !currentJob.id) return <Spinner />;
  if (error) return <div className="p-8 text-center text-lg text-rose-600">{error}</div>;

  return (
    <section className="min-h-screen bg-[#f4f6fb] px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-slate-200/80 bg-white px-6 py-10 shadow-2xl shadow-slate-200/80 sm:px-12">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-10 text-center text-4xl font-bold text-indigo-600 sm:text-5xl">
              Update Job
            </h2>

            <div className="space-y-7">
              <div>
                <label htmlFor="type" className={labelClass}>
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  className={fieldClass}
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Job Listing Name</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className={fieldClass}
                  placeholder="e.g. Front-End Engineer"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="description" className={labelClass}>
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className={`${fieldClass} min-h-40 py-4`}
                  rows="4"
                  placeholder="Add duties, expectations, requirements..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="grid gap-7 md:grid-cols-2">
                <div>
                  <label htmlFor="salary" className={labelClass}>
                    Salary
                  </label>
                  <select
                    id="salary"
                    name="salary"
                    className={fieldClass}
                    required
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  >
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - 60K">$50K - $60K</option>
                    <option value="$60K - 70K">$60K - $70K</option>
                    <option value="$70K - 80K">$70K - $80K</option>
                    <option value="$80K - 90K">$80K - $90K</option>
                    <option value="$90K - 100K">$90K - $100K</option>
                    <option value="$100K - 125K">$100K - $125K</option>
                    <option value="$125K - 150K">$125K - $150K</option>
                    <option value="$150K - 175K">$150K - $175K</option>
                    <option value="$175K - 200K">$175K - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className={fieldClass}
                    placeholder="City, State"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-indigo-50/70 p-6 sm:p-8">
                <h3 className="mb-7 text-2xl font-bold text-slate-900">
                  Company Info
                </h3>

                <div className="mb-7">
                  <label htmlFor="company" className={labelClass}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className={fieldClass}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="mb-7">
                  <label htmlFor="company_description" className={labelClass}>
                    Company Description
                  </label>
                  <textarea
                    id="company_description"
                    name="company_description"
                    className={`${fieldClass} min-h-36 py-4`}
                    rows="4"
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="grid gap-7 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact_email" className={labelClass}>
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="contact_email"
                      name="contact_email"
                      className={fieldClass}
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact_phone" className={labelClass}>
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      id="contact_phone"
                      name="contact_phone"
                      className={fieldClass}
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="w-full rounded-2xl bg-gradient-to-r from-indigo-700 to-violet-500 px-4 py-4 text-xl font-bold text-white shadow-xl transition hover:-translate-y-0.5"
                  type="submit"
                >
                  Update Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EditJobPage;
