import axios from "axios";
import { useRouter } from "next/router";
import {toast} from 'react-toastify'
import Cookies from 'js-cookie'
import { Button } from "@/components/forms/button";
import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import Styles from "@/pages/auth/auth.module.css";
import { useContext, useState } from "react";
import Link from "next/link";
import { authContext } from "@/context/auth";
import { Loading } from "@/components/loading";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    role: "individual",
    name: "",
    email: "",
    password: "",
  });
  const { role, name, email, password } = formData;
  const { setUser } = useContext(authContext);
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
        setLoading(true);
        const res = await axios.post("https://portal-server.cyclic.app/api/users", formData)
        let data = res.data
        Cookies.set('userToken', data.token, { expires: 7 })
        setUser(data)
        router.push("/job-boards");
        toast.success('Registration successful',{
          theme: "colored"
        });
        setLoading(false);
      }catch(e) {
        toast.error(`${e.response.data.message}`,{
          theme: "colored"
        });
        setLoading(false);
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
        <div className={Styles.load_flex}>
          <Button type="submit" value="Create Account" />
          {loading && <Loading /> }
        </div>
      </form>

      <div className={Styles.notYet}>Already registered? <Link href="/auth">Login!</Link></div>
    </section>
  );
}
