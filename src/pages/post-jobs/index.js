import { Button } from "@/components/forms/button";
import { Input } from "@/components/forms/input";
import { SelectJobType } from "@/components/forms/select";
import { Loading } from "@/components/loading";
import Styles from "@/pages/post-jobs/postJobs.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function PostJobs() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    type: "full-time",
    location: "",
    salary: "",
  });
  const [desc, setDesc] = useState("");
  const { jobTitle, companyName,type, location, salary } = formData;
  // const 
  const router = useRouter();

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      jobTitle === "" ||
      companyName === "" ||
      type === "" ||
      location === "" ||
      salary === "" ||
      desc === ""
    ) {
      toast.error("Please fill all missing fields !!", {
        theme: "colored",
      });
    } else {
      try {
        setLoading(true)
        const userToken = Cookies.get('userToken')
        const res = await axios.post("http://localhost:4000/api/jobs", {
          jobTitle,
          companyName,
          type,
          location,
          salary,
          desc,
        },{ headers: {Authorization : `Bearer ${userToken}`}} );
        let data = res.data;
        toast.success("Job post successful", {
          theme: "colored",
        });
        setLoading(false)
        router.push("/job-boards")
      } catch (e) {
        toast.error(`${e.response.data.message}`, {
          theme: "colored",
        });
      }
    }
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
        <SelectJobType value={type} name="type" click={onChange} />
        <ReactQuill
          theme="snow"
          value={desc}
          onChange={setDesc}
          className={Styles.editor}
        />
        <div className={Styles.load_flex}>
        <Button type="submit" value="Submit" /> 
        {loading && <Loading />}
        </div>
      </form>
    </section>
  );
}
