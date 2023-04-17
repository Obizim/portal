import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { AuthNav } from "@/components/nav/authNav";
import { authContext } from "@/context/auth";
import { Hahmlet } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import axios from 'axios'
import { toast } from "react-toastify";
import { Loading } from "@/components/loading";

const inter = Hahmlet({ subsets: ["latin"] });
export default function Layouts({ children }) {
  const { user,setUser } = useContext(authContext);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const userToken = Cookies.get('userToken')
    if (userToken) {
      setLoading(true)
      axios.get('http://localhost:4000/api/users/me', {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then((res) =>{
        setUser(res.data)
        setLoading(false)
      }).catch(e => {
        toast.error(`${e}`,{
          theme: "colored"
        });
      })
    }
  }, [setUser]);

  return (
    <section className={inter.className}>
      {loading ? <Loading /> : <>
      {!user ? <AuthNav /> : <Nav />}
      <main>{children}</main>
      <Footer />
      </>}
    </section>
  );
}
