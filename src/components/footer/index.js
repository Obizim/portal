import Styles from '@/components/footer/footer.module.css'

export const Footer = () => {
  return (
    <footer className={Styles.footer_container}>
      <div className={Styles.footer}>
        <div>
          <h1 className={Styles.footer_title}>gradlink</h1>
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
