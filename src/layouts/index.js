import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Layouts({children}) {
  return (
    <section className={inter.className}>
      <main>{ children }</main>
      <Footer />
    </section>
  );
};
