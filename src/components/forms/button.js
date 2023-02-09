import './forms.css'

export const Button = ({type, value}) => {
    return( 
        <button className='formSubmit' type={type}>{value}</button>
    )
}