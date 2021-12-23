import styles from './ContactBar.module.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

function ContactBar() {
  return (
    <div className={styles.contact_bar}>
      <AiOutlineMail className={styles.icon} />
      <AiOutlinePhone className={styles.icon} />
      <FiFacebook className={styles.icon} />
      <AiOutlineInstagram className={styles.icon} />
      <FaTiktok className={styles.icon} />
    </div>
  );
}

export default ContactBar;
