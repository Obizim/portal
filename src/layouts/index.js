import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { AuthNav } from "@/components/nav/authNav";
import { authContext } from "@/context/auth";
import { Inter } from "next/font/google";
import { useContext, useEffect } from "react";
import Cookies from 'js-cookie'
import axios from 'axios'
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });
export default function Layouts({ children }) {
  const { user, setUser } = useContext(authContext);

  useEffect(() => {
    const userToken = Cookies.get('userToken')
    if (userToken) {
      axios.get('http://localhost:4000/api/users/me', {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then(res => setUser(res.data)).catch(e => {
        toast.error(`${e}`,{
          theme: "colored"
        });
      })
    }
  }, [setUser]);

  return (
    <section className={inter.className}>
      {!user ? <Nav /> : <AuthNav />}
      <main>{children}</main>
      <Footer />
    </section>
  );
}
