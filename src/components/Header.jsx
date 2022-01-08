import styles from './Header.module.css';
import Logo from './Logo';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className='container'>
				<ul className={`${styles.flex} ${styles.nav}`}>
					<li className={styles.nav__item}>
						<a href='/' className={styles.nav__link}>
							reasearch / ui ux design
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href='/' className={styles.nav__link}>
							2020.07 - 2020.08
						</a>
					</li>
					<li className={styles.nav__item}>
						<a href='/' className={styles.nav__link}>
							sanga son
						</a>
					</li>
				</ul>
			</div>

			<div className={`${styles.flex} ${styles.hero}`}>
				<Logo bgcolor='white' clr='blue' />
				<h1 className={styles.hero__title}>
					Mtobit Website <br /> UX/UI Renewol Concept
				</h1>
			</div>
		</div>
	);
};

export default Header;
