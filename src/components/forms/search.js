import "./forms.css";

export const Search = () => {
  return (
    <form className="form">
      <input type="text" placeholder="What position are you looking for?" />
      <input type="text" placeholder="Location" />
      <button type="submit" className="submit">
        Search job
      </button>
    </form>
  );
};
