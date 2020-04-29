import classnames from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {ReactSVG} from 'react-svg';
import config from '../data/config';
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
            <a>
              <ReactSVG
                src={`${config.imagesPath}logo.svg`}
                className={styles.logo}
              />
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/work">
            <a>Work</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
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
