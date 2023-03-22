import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Layouts({ children }) {
  return (
    <section className={inter.className}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
