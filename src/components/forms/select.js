import styles from "@/components/forms/Form.module.css";

export const Select = () => {
    return (
        <div className={styles.authSelect}>
          <label htmlFor="identity">Individual/Recruiter</label>
          <select name="identity" id="identity">
            <option value="individual">Individual</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </div>
    )
}