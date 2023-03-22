import styles from "@/components/forms/Form.module.css";

export const Input = ({ name, type, placeholder }) => {
  return (
    <div className={styles.inputForm}>
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} placeholder={placeholder} />
    </div>
  );
};
