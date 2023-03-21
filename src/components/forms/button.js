import styles from '@/components/forms/Form.module.css'

export const Button = ({type, value}) => {
    return( 
        <button className={styles.formSubmit} type={type}>{value}</button>
    )
}