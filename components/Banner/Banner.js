import styles from './Banner.module.css';
import Image from 'next/image';
import Background from '../../public/images/cover_home.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={Background} layout='responsive' alt='hhh' />
      {/* <div className={styles.banner__image}></div> */}
    </div>
  );
}
