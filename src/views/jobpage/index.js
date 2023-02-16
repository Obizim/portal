// import { Link } from "react-router-dom";
// import { Button } from "../../components/forms/button";
import { Search } from "../../components/forms/search";
import { JobCards } from "../../components/jobcards/jbcard";
import "./jobpage.css";

export const JobPage = () => {
  return (
    <section className="viewsJobs">
      <header className="header_bg">
          <h2 className="bg_title">Search for jobs</h2>
          <Search />
      </header>

      <div>
        <div className="filters">
          <label className="labelTitle" htmlFor="filter">Filter by</label>
          <div className="checkboxes">
          <div>
          <input type="checkbox" id="internship" name="internship" value="Internship" />
          <label for="internship">Internship</label>
              </div>
              <div>
                  <input type="checkbox" id="partTime" name="partTime" value="partTime" />
                  <label for="partTime">Part time</label>
              </div>
              <div>
                  <input type="checkbox" id="fulltime" name="fulltime" value="fulltime" />
                  <label for="fulltime">Full-time</label>
              </div>
          </div>
      </div>

      <JobCards />
      </div>
    </section>
  );
};
