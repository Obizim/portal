import styles from '@/components/forms/Form.module.css'
import { authContext } from '@/context/auth';
import { useContext } from 'react';

export const Search = () => {
  const { searchQuery, setSearchQuery, locationQuery, setLocationQuery, searchJobs } =  useContext(authContext)

  const onSubmit = (e) => {
    e.preventDefault()
    searchJobs()
  }

    return (
      <form className={styles.form} onSubmit={onSubmit}>
        <input type="text" placeholder="What position are you looking for?" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  />
        <input type="text" placeholder="Location" value={locationQuery} onChange={(e) => setLocationQuery(e.target.value)} />
        <button type="submit" className={styles.submit}>Search job</button>
      </form>
    );
  };