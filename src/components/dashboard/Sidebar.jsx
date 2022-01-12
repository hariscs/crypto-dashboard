import Logo from '../Logo';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={styles.sidebar__container}>
			<Logo bgcolor='blue' clr='white' />
			<ul className={styles.sidebar}>
				<li className={styles.sidebar__item}>
					<a href='/' className={styles.sidebar__link}>
						<i class='fas fa-home'></i>
						Home
					</a>
				</li>
				<li className={styles.sidebar__item}>
					<a href='/' className={styles.sidebar__link}>
						<i class='fas fa-chart-bar'></i>
						Exchange
					</a>
				</li>
				<li className={styles.sidebar__item}>
					<a href='/' className={styles.sidebar__link}>
						<i class='fas fa-chart-line'></i>
						EasyBuy
					</a>
				</li>
				<li className={styles.sidebar__item}>
					<a href='/' className={styles.sidebar__link}>
						<i class='fas fa-comments'></i>
						C2C
					</a>
				</li>
				<li className={styles.sidebar__item}>
					<a href='/' className={styles.sidebar__link}>
						<i class='fas fa-chart-pie'></i>
						Asset
					</a>
				</li>
			</ul>

			<div className={styles.sidebar__card}>
				<h3 className={styles.sidebar__cardTitle}>Join the Community</h3>
				<p className={styles.sidebar__cardSubtitle}>Mtobik is global</p>
				<p className={styles.sidebar__cardSubtitle}>
					Join the conversations in of our worldwide communities.
				</p>
				<div className={styles.sidebar__icons}>
					<a href='/'>
						<i class='fab fa-telegram-plane'></i>
					</a>
					<a href='/'>
						<i class='fab fa-twitter'></i>
					</a>
				</div>
			</div>

			<ul className={styles.sidebar}>
				<li className={styles.sidebar__item}>
					<a href='/' className={styles.sidebar__link}>
						<i class='fas fa-sign-out-alt'></i>
						Logout
					</a>
				</li>
				<li className={styles.sidebar__item}>
					<a href='/' className={styles.sidebar__link}>
						<i class='fas fa-globe-americas'></i>
						English
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
