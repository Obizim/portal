import axios from "axios";
import { useRouter } from "next/router";
import {toast} from 'react-toastify'
import Cookies from 'js-cookie'
import { Button } from "@/components/forms/button";
import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import Styles from "@/pages/auth/auth.module.css";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    role: "individual",
    name: "",
    email: "",
    password: "",
  });
  const { role, name, email, password } = formData;
  const router = useRouter();

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      toast.error("Please fill all missing fields !!",{
        theme: "colored"
      });
    } else if (password.length < 5) {
      toast.error("Minimum Password is 6 characters !!",{
        theme: "colored"
      });
    }else{
      try{
        const res = await axios.post("http://localhost:4000/api/users", formData)
        let data = res.data
        Cookies.set('userToken', data.token, { expires: 7 })
        router.reload()
        router.push("/jobs");
        toast.success('Registration successful',{
          theme: "colored"
        });
        return data
      }catch(e) {
        toast.error(`${e.response.data.message}`,{
          theme: "colored"
        });
      }
    }
  };
  return (
    <section className={Styles.authContainer}>
      <h2 className={Styles.title}>Create Account</h2>
      <form onSubmit={onSubmit} className={Styles.authForm}>
        <Select value={role} name="role" click={onChange} />
        <Input
          value={name}
          name="name"
          click={onChange}
          type="text"
          placeholder="Name/Company Name"
        />
        <Input
          value={email}
          name="email"
          click={onChange}
          type="email"
          placeholder="Email address"
        />
        <Input
          value={password}
          name="password"
          click={onChange}
          type="password"
          placeholder="Password"
        />
        <Button type="submit" value="Create account" />
      </form>
    </section>
  );
}
