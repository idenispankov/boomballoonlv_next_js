import styles from './ContactBar.module.css';
import Image from 'next/image';
import Logo from '../../images/logo.svg';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

function ContactBar() {
  return (
    <div className={styles.contact_bar}>
      <div className={styles.contact_bar__container}>
        <div className={styles.logo__container}>
          <Image src={Logo} width={50} height={50} alt='logo' />
          <h2 className={styles.logo__text}>BoomBalloonLV</h2>
        </div>
        <div className={styles.icons__container}>
          <AiOutlineMail className={styles.icon} />
          <AiOutlinePhone className={styles.icon} />
          <FiFacebook className={styles.icon} />
          <AiOutlineInstagram className={styles.icon} />
          <FaTiktok className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default ContactBar;
