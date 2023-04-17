import Link from "next/link";
import axios from 'axios'
import Styles from "@/pages/job-boards/Jobs.module.css"
import { Button } from "@/components/forms/button";
import { useState } from "react";
import { Input } from "@/components/forms/input";

export default function JbDetail({jobData}) {
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
            <h3>{jobData[0].jobTitle}</h3>
          </div>

          <div className={Styles.contents}>
            <div className={Styles.jp_cl}>
              <p>Company: {jobData[0].companyName}</p>
              <p>Posted: 2 days ago</p>
            </div>
            <div className={Styles.jp_cl}>
              <p>Location: {jobData[0].location}</p>
              <p>Salary: {jobData[0].salary}</p>
            </div>
            <p className={Styles.type}>{jobData[0].type}</p>
            <div className={Styles.jp_description}>
              <h2>Job description</h2>
            <div dangerouslySetInnerHTML={{__html: jobData[0].desc}}></div>
            </div>
          </div>
        </div>
      )}

      {tabToggle === 2 && <>
      <form className={Styles.applyForm}>
      <Input
          // value="firstname"
          name="firstname"
          // click={onChange}
          type="text"
          placeholder="First Name"
        />
      <Input
          // value="lastname"
          name="lastname"
          // click={onChange}
          type="text"
          placeholder="Last Name"
        />
        <Input
          // value="email"
          name="email"
          // click={onChange}
          type="email"
          placeholder="Email address"
        />
        <Input
          // value={email}
          name="CV"
          // click={onChange}
          type="file"
          placeholder="Upload CV"
        />
        <Button type="submit" value="Apply Now" />
      </form>
      </>}
      </section>
    </section>
  );
}

export const getStaticProps = async ({ params }) => {
  const id = params.id; 
  const jobData = await axios.get(`http://localhost:4000/api/jobs/${id}`);
  return {
    props: {
      jobData: jobData.data,
    },
  };
};

export const getStaticPaths = async () => {
  const jobs = await axios.get("http://localhost:4000/api/jobs");
  const data = jobs.data
  const paths = data.map((jobId) => {
    return {
      params: { id: jobId._id.toString() }
    }
  });
  return {
    paths,
    fallback: false,
  };
};