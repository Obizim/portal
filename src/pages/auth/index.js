import { Button } from "@/components/forms/button";
import { Input } from "@/components/forms/input";
import Styles from "@/pages/auth/auth.module.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const router = useRouter();

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please fill all missing fields !!",{
        theme: "colored"
      });
    }else{
      try{
        const res = await axios.post("http://localhost:4000/api/users/login", formData)
        let data = res.data
        Cookies.set('userToken', data.token, { expires: 7 })
        router.reload()
        router.push("/jobs");
        toast.success('Login successful',{
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
      <h2 className={Styles.title}>Login</h2>
      <form onSubmit={onSubmit} className={Styles.authForm}>
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
        <p className={Styles.forget}>Forgot Password?</p>
        <Button type="submit" value="Login" />
      </form>

      <div className={Styles.notYet}>Not registered yet? <Link href="/auth/signup">Register!</Link></div>
    </section>
  );
}
