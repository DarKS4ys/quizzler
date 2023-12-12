import Link from 'next/link';
import styles from '@/app/components/styles/button.module.css';

const ShinyButton = () => {
  return (
    <div>
      <Link target='_blank' rel="noopener noreferrer" href="https://www.dropbox.com/scl/fi/k47ley7uyx0t6h8e64fdm/Quizzler.apk?rlkey=4cts8t4qjtaiqcp3o8lx665bp&dl=1">
        <button className={styles.button}>HEMEN İNDİR</button>
      </Link>
    </div>
  );
};
export default ShinyButton;
