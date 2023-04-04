import { Button } from "@/components/forms/button";
import { Input } from "@/components/forms/input";
import Styles from "@/pages/post-jobs/postJobs.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PostJobs() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    salary: "",
  });
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState()
  const { jobTitle, companyName, location, salary } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({jobTitle, companyName, location, salary, file, desc});
  };

  return (
    <section className={Styles.PostContainer}>
      <h2 className={Styles.title}>Post a job</h2>
      <form onSubmit={onSubmit} className={Styles.PostForm}>
        <Input
          value={jobTitle}
          name="jobTitle"
          click={onChange}
          type="text"
          placeholder="Job Title"
        />
        <Input
          value={companyName}
          name="companyName"
          click={onChange}
          type="text"
          placeholder="Company Name"
        />
        <Input
          value={location}
          name="location"
          click={onChange}
          type="text"
          placeholder="Location"
        />
        <Input
          value={salary}
          name="salary"
          click={onChange}
          type="text"
          placeholder="Salary"
        />
        <Input
          name="CompanyImage"
          click={handleFileChange}
          type="file"
          placeholder="Company Logo"
        />
        <ReactQuill
          theme="snow"
          value={desc}
          onChange={setDesc}
          className={Styles.editor}
        />
        <Button type="submit" value="Submit" />
      </form>
    </section>
  );
}
