import { Route, BrowserRouter, Routes } from "react-router-dom";
import { JobsProvider } from "./Context/JobsContext";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import JobsPage from "./Pages/JobsPage";
import JobPage from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";
import NotFoundedPage from "./Pages/NotFoundedPage";

function App() {
  return (
    <JobsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/jobs/:id" element={<JobPage />} />
            <Route path="/add-job" element={<AddJobPage />} />
            <Route path="/edit-job/:id" element={<EditJobPage />} />
            <Route path="*" element={<NotFoundedPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </JobsProvider>
  );
}

export default App;
