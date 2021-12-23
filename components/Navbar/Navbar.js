import styles from './Navbar.module.css';
import Image from 'next/image';
import logo from '../../images/logo.svg';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo__container}>
        <div className={styles.logo}>
          <Image src={logo} alt='logo'></Image>
        </div>
        <p className={styles.logo__text}>BoomBalloonLV</p>
      </div>
      <button>Menu</button>
    </nav>
  );
}

export default Navbar;
