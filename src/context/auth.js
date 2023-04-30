import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const getJobs = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://portal-server.cyclic.app/api/jobs`
      );
      const data = res;
      setJobs(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, []);


  const searchJobs = async () => {
    try {
      if(searchQuery || locationQuery ) {
        const res = await axios.get(
          `https://portal-server.cyclic.app/api/jobs?title=${searchQuery}&location=${locationQuery}`
        );
        const data = res;
        setJobs(data.data);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    getJobs()
  }, [getJobs])

  return (
    <authContext.Provider
      value={{
        user,
        setUser,
        searchQuery,
        setSearchQuery,
        locationQuery,
        setLocationQuery,
        jobs,
        getJobs,
        searchJobs
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
