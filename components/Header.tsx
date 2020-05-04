import classnames from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './Header.module.css';

const Header: React.SFC = () => {
  const router = useRouter();

  return (
    <header
      className={classnames({
        [styles.Header]: true,
        [styles.lightTheme]: router.pathname !== '/',
      })}
    >
      <div className={styles.headerContent}>
        <div className={styles.masthead}>
          <Link href="/">
            <a className={styles.logo}>
              <div>
                <svg
                  viewBox="0 0 300 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="50" width="50" height="50" fill="#F25F4C" />
                  <rect x="200" width="50" height="50" fill="#F25F4C" />
                  <rect x="50" y="100" width="50" height="50" fill="#F25F4C" />
                  <rect y="50" width="50" height="50" fill="#F25F4C" />
                  <rect x="150" y="50" width="50" height="50" fill="#F25F4C" />
                  <rect x="250" y="75" width="50" height="50" fill="#F25F4C" />
                  <rect x="200" y="100" width="50" height="50" fill="#F25F4C" />
                </svg>
              </div>
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/work">
            <a>Work</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
