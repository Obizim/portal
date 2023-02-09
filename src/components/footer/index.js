import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer">
        <div>
          <h1 className="footer_title">gradlink</h1>
          <p>Middlesex University, London hendon Campus NW4 BT</p>
        </div>

        <ul>
          <li>Privacy policies</li>
          <li>Careers</li>
          <li>About us</li>
        </ul>

        <p>&copy; gradlink 2023</p>
      </div>
    </footer>
  );
};
