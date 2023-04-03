import Styles from '@/components/footer/footer.module.css'

export const Footer = () => {
  return (
    <footer className={Styles.footer_container}>
      <div className={Styles.footer}>
        <div>
          <h1 className={Styles.footer_title}>gradlink</h1>
          <p>Middlesex University, London Hendon Campus NW4 BT</p>
        </div>

        <ul>
          <li>Privacy</li>
          <li>Careers</li>
          <li>About us</li>
          <li>Cookie Policy</li>
        </ul>

        <ul>
          <li>Terms of use</li>
          <li>&copy; gradlink 2023</li>
        </ul>
      </div>
    </footer>
  );
};
