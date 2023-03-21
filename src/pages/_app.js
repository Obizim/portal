import Layouts from "@/layouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
        <Component {...pageProps} />
    </Layouts>
  );
}
