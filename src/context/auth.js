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
        `http://localhost:4000/api/jobs?title=${searchQuery}&location=${locationQuery}`
      );
      const data = res;
      console.log(data);
      setJobs(data.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, [searchQuery, locationQuery]);

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
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
