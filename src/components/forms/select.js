import styles from "@/components/forms/Form.module.css";

export const Select = ({ value, name, click }) => {
  return (
    <div className={styles.authSelect}>
      <label htmlFor={name}>Individual/Recruiter</label>
      <select name={name} id={name} value={value} onChange={click}>
        <option value="individual">Individual</option>
        <option value="recruiter">Recruiter</option>
      </select>
    </div>
  );
};

export const SelectJobType = ({ value, name, click }) => {
  return (
    <div className={styles.authSelect}>
      <label htmlFor={name}>Job Type</label>
      <select name={name} id={name} value={value} onChange={click}>
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
        <option value="internship">Internship</option>
      </select>
    </div>
  );
};
