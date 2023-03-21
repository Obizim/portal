import styles from '@/components/forms/Form.module.css'

export const Search = () => {
    return (
      <form className={styles.form}>
        <input type="text" placeholder="What position are you looking for?" />
        <input type="text" placeholder="Location" />
        <button type="submit" className={styles.submit}>
          Search job
        </button>
      </form>
    );
  };