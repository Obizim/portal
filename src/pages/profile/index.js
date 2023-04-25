import { useContext, useEffect, useState } from "react";
import { authContext } from "@/context/auth";
import Styles from "@/pages/profile/profile.module.css";
import { Input } from "@/components/forms/input";
import { Button } from "@/components/forms/button";
import { FiArrowLeft } from "react-icons/fi";

const Profile = () => {
  const { user } = useContext(authContext);
  console.log(user);
  // const [formData, setFormData] = useState({
  //   newName: user.name,
  //   number: user.number,
  //   address: user.address,
  // });
  // const { newName, number, address } = formData;

  // const onChange = (e) => {
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(formData);
  }

  return (
    <section className={Styles.container}>
      <FiArrowLeft />
      <p>{user?.name ?? ""}</p>
      <form className={Styles.formUpdate} onSubmit={onSubmit}>
      <Input
          // value={newName}
          name="newName"
          // click={onChange}
          type="text"
          placeholder="Enter Name"
        />
        {/* <p className={Styles.email}>Email: {user.email}</p> */}
        <Input
          // value={number}
          name="number"
          // click={onChange}
          type="number"
          placeholder="Phone Number"
        />
        <Input
          // value={address}
          name="address"
          // click={onChange}
          type="text"
          placeholder="Address"
        />
        <Button type="submit" value="Update" />
      </form>
    </section>
  );
}

export default Profile