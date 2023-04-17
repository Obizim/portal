import Link from "next/link";
import Styles from "@/pages/job-boards/Jobs.module.css";
import { Button } from "@/components/forms/button";
import { useState } from "react";

export default function JbDetail() {
  let tabs = [
    {
      id: 1,
      title: "Overview",
    },
    {
      id: 2,
      title: "Apply",
    },
  ];
  const [tabToggle, setTabToggle] = useState(1);

  const handleTabClick = (i) => {
    console.log(i);
    setTabToggle(i);
  };
  return (
    <section className={Styles.jobPage}>
      <div className={Styles.tabs}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            className={tabToggle === tab.id ? Styles.active : ""}
            onClick={() => handleTabClick(tab.id)}>
            {tab.title}
          </button>
        ))}
      </div>

      <section className={Styles.tabContent}>
      {tabToggle === 1 && (
        <div className={Styles.jpcard}>
          <div className={Styles.jp_heading}>
            <h3>Junior Architect</h3>
          </div>

          <div className={Styles.contents}>
            <div className={Styles.jp_cl}>
              <p>Company: Linear</p>
              <p>Posted: 2 days ago</p>
            </div>
            <div className={Styles.jp_cl}>
              <p>Location: London</p>
              <p>Salary range: $30,000</p>
            </div>
            <p className={Styles.jp_description}>
              You will join one of our offices around the world for 8 - 10
              weeks, usually in the summer, to work in teams and directly with
              our clients. In this role you will help our clients in private,
              public, and social sectors solve their most pressing problems. You
              will also work with many experts, from data scientists and
              researchers to
              software and app designers What  work in teams of
          typically 3 - 5 consultants to identify, and oftentimes implement,
          potential solutions for a specific client problem or challenge.
          Together, you will help clients make lasting improvements to their
          performance and realize their most important goals. Over the course
          of each project, you will gather and analyze information, formulate
          and test hypotheses, and develop and communicate recommendations.
           also present results to client management and implement
          recommendations in collaboration with client team members.
            </p>
          </div>
        </div>
      )}

      {tabToggle === 2 && <>dsadfs</>}
      </section>
    </section>
  );
}
