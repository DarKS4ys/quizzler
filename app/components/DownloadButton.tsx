import Link from 'next/link';
import styles from '@/app/components/styles/button.module.css';

const ShinyButton = () => {
  return (
    <div>
      <Link target='_blank' rel="noopener noreferrer" href="https://expo.dev/artifacts/eas/rgrGVmz9gvHNdCe9zR3Fi9.apk">
        <button className={styles.button}>HEMEN İNDİR</button>
      </Link>
    </div>
  );
};
export default ShinyButton;
