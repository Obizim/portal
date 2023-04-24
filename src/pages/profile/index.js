import { authContext } from "@/context/auth";
import { useContext } from "react";
import Styles from "@/pages/profile/profile.module.css";

export default function Profile() {
  const { user } = useContext(authContext);

  return (
    <section className={Styles.container}>
      <h1>Name: {user.name}</h1>
      <p>Email: {user.email}</p>
    </section>
  );
}
