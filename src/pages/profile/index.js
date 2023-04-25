import { useContext, useEffect, useState } from "react";
import { authContext } from "@/context/auth";
import Styles from "@/pages/profile/profile.module.css";
import { Input } from "@/components/forms/input";
import { Button } from "@/components/forms/button";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Loading } from "@/components/loading";
import Link from "next/link";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter()
  const { user, setUser } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name ?? "",
    number: user?.number ?? "",
    address: user?.address ?? "",
  });
  const { name, number, address } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name cannot be empty!!", {
        theme: "colored",
      });
    } else {
      try {
        setLoading(true);
        const userToken = Cookies.get("userToken");
        const res = await axios.put(
          "http://localhost:4000/api/users/me",
          formData,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        setUser(prev => ({...prev, res}))
        setLoading(false);
        toast.success("Information updated successfully", {
          theme: "colored",
        });
      } catch (e) {
        toast.error("Something went wrong", {
          theme: "colored",
        });
      }
    }
  };

  return (
    <section className={Styles.container}>
       <button type="button" className={Styles.back} onClick={() => router.back()}><FiArrowLeft /></button>
      <form className={Styles.formUpdate} onSubmit={onSubmit}>
        <Input
          value={name}
          name="name"
          click={onChange}
          type="text"
          placeholder="Enter Name"
        />
        <p className={Styles.email}>Email: {user?.email ?? ""}</p>
        <Input
          value={number}
          name="number"
          click={onChange}
          type="number"
          placeholder="Phone Number"
        />
        <Input
          value={address}
          name="address"
          click={onChange}
          type="text"
          placeholder="Address"
        />
        <div className={Styles.load_flex}>
        <Button type="submit" value="Update" />
        {loading && <Loading /> }
        </div>
      </form>
    </section>
  );
};

export default Profile;
