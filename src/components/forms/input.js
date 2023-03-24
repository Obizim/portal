import styles from "@/components/forms/Form.module.css";

export const Input = ({ value, name, click, type, placeholder }) => {
  return (
    <div className={styles.inputForm}>
      <label className={styles.labelFor} htmlFor={value}>{name}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={click}
        placeholder={placeholder}
      />
    </div>
  );
};
