import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/context/auth";
import Layouts from "@/layouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
      <ToastContainer />
    </AuthProvider>
  );
}
