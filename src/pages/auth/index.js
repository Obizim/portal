import { Button } from "@/components/forms/button";
import { Input } from "@/components/forms/input";
import { Select } from "@/components/forms/select";
import { authContext } from "@/context/auth";
import Styles from "@/pages/auth/auth.module.css";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    role: "individual",
    email: "",
    password: "",
  });
  const { role, email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // if (name === "" || email === "" || password === "") {
    //   toast.error("Please fill all missing fields !!",{
    //     theme: "colored"
    //   });
    // } else if (password.length < 5) {
    //   toast.error("Minimum Password is 6 characters !!",{
    //     theme: "colored"
    //   });
    // }else{
    //   const data = await axios.post("http://localhost:4000/api/users",formData)
    //   setUser(data.data);
    //   console.log(data.data);
    //   // router.push("/jobs");
    // }
  };

  return (
    <section className={Styles.authContainer}>
      <h2 className={Styles.title}>Login</h2>
      <form onSubmit={onSubmit} className={Styles.authForm}>
        <Select value={role} name="role" click={onChange} />
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
        <Button type="submit" value="Login" />
      </form>
    </section>
  );
}
