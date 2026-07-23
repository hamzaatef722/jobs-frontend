import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/jobs";

const JobsContext = createContext();

const initialState = {
  jobs: [],
  isLoading: true,
  currentJob: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "jobs/loaded":
      return { ...state, isLoading: false, jobs: action.payload };

    case "job/loaded":
      return { ...state, isLoading: false, currentJob: action.payload };

    case "job/added":
      return {
        ...state,
        isLoading: false,
        jobs: [...state.jobs, action.payload],
      };

    case "job/deleted":
      return {
        ...state,
        isLoading: false,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };

    case "job/updated":
      return {
        ...state,
        isLoading: false,
        jobs: state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job,
        ),
        currentJob: action.payload,
      };

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function JobsProvider({ children }) {
  const [{ jobs, currentJob, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(function () {
    async function fetchJobs() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        dispatch({ type: "jobs/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading jobs...",
        });
      }
    }

    fetchJobs();
  }, []);

  async function getJob(jobId) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/${jobId}`);
      const data = await res.json();
      dispatch({ type: "job/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading jobs...",
      });
    }
  }

  async function addJob(newJob) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        body: JSON.stringify(newJob),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "job/added", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error adding jobs...",
      });
    }
  }

  async function deleteJob(jobId) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/${jobId}`, {
        method: "DELETE",
      });
      dispatch({ type: "job/deleted", payload: jobId });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the job...",
      });
    }
  }

  async function updateJob(updatedJob) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/${updatedJob.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedJob),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "job/updated", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error updating the job...",
      });
    }
  }

  return (
    <JobsContext.Provider
      value={{
        jobs,
        isLoading,
        error,
        currentJob,
        getJob,
        addJob,
        deleteJob,
        updateJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

function useJobs() {
  const context = useContext(JobsContext);
  if (context === undefined)
    throw new Error("JobsContext was used outside the JobsProvider");
  return context;
}

export { JobsProvider, useJobs };
