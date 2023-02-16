import { Link } from "react-router-dom";
import { Button } from "../../components/forms/button";
import "./jobpage.css";

export const JobDetails = () => {
  return (
    <section className="jobPage">
      <div className="jpcard">
        <div className="jp_heading">
        <div className="jp_image">
          <img src="https://images.unsplash.com/photo-1471421298428-1513ab720a8e" alt="" />
        </div>
          <h3>Junior Architect</h3>
        </div>

        <div className="contents">
          <div className="jp_cl">
            <p>Company: Linear</p>
            <p>Posted: 2 days ago</p>
          </div>
          <div className="jp_cl">
            <p>Location: London</p>
            <p>Salary range: $30,000</p>
          </div>
          <p className="jp_description">
            You will join one of our offices around the world for 8 - 10 weeks,
            usually in the summer, to work in teams and directly with our
            clients. In this role you will help our clients in private, public,
            and social sectors solve their most pressing problems. You will also
            work with many experts, from data scientists and researchers to
            {/* software and app designers What you'll do You'll work in teams of
            typically 3 - 5 consultants to identify, and oftentimes implement,
            potential solutions for a specific client problem or challenge.
            Together, you will help clients make lasting improvements to their
            performance and realize their most important goals. Over the course
            of each project, you will gather and analyze information, formulate
            and test hypotheses, and develop and communicate recommendations.
            You'll also present results to client management and implement
            recommendations in collaboration with client team members. */}
          </p>
        </div>
        <Link to="/job/number/apply"><Button value="Apply now" /></Link>
      </div>

      <div className="related_jobs">
        <h2>Related Jobs</h2>

        <div className="r-jobs">
            <span>Interior Design. Goldman Sachs</span>
            <span>Interior Design. Goldman Sachs</span>
            <span>Interior Design. Goldman Sachs</span>
        </div>
      </div>
    </section>
  );
};
