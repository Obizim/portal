import Styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const Loading = () => {
  return (
    <section>
      <div className={Styles.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
