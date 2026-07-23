import Hero from "../Components/Hero";
import HomeCards from "../Components/HomeCards";
import JobList from "../Components/JobList";
import ViewAllJobs from "../Components/ViewAllJobs";
function HomePage() {
  return (
    <>
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- Developers and Employers --> */}
      <HomeCards />
      {/* <!-- Browse Jobs --> */}
      <JobList isHome={true} />
      <ViewAllJobs />
    </>
  );
}

export default HomePage;
