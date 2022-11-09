import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>coral Data</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>all corals</Link>
          </li>
          <li>
            <Link href='/new-coral'>post coral</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
