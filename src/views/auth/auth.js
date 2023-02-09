import { Button } from "../../components/forms/button";
import { Input, Select } from "../../components/forms/input";
import "./auth.css";

export const SignIn = () => {
  return (
    <section className="authContainer">
      <h2 className="title">Login</h2>
      <form className="authForm">
        <Select />
        <Input name="Email" type="email" placeholder="Email address" />
        <Input name="Password" type="password" placeholder="Password" />
        <Button type="submit" value="Login" />
      </form>
    </section>
  );
};

export const SignUp = () => {
  return (
    <section className="authContainer">
      <h2 className="title">Create Account</h2>
      <form className="authForm">
        <Select />
        <Input name="Name" type="text" placeholder="Name/Company Name" />
        <Input name="Email" type="email" placeholder="Email address" />
        <Input name="Password" type="password" placeholder="Password" />
        <Button type="submit" value="Create account" />
      </form>
    </section>
  );
};
