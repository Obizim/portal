import "./forms.css";
export const Input = ({ name, type, placeholder }) => {
  return (
    <div className="inputForm">
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} placeholder={placeholder} />
    </div>
  );
};


export const Select = () => {
    return (
        <div className="authSelect">
          <label htmlFor="identity">Individual/Recruiter</label>
          <select name="identity" id="identity">
            <option value="individual">Individual</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </div>
    )
}