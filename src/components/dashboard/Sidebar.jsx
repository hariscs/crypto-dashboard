import Logo from '../Logo';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<>
			<Logo bgcolor='blue' clr='white' />
			<div className={styles.sidebar__container}>
				<ul className={`${styles.sidebar} ${styles.sidebar__menu}`}>
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
						Join the conversations in any of our worldwide communities.
					</p>
					<div className={styles.sidebar__icons}>
						<a href='/' className={styles.sidebar__icon}>
							<i class='fab fa-telegram-plane'></i>
						</a>
						<a href='/' className={styles.sidebar__icon}>
							<i class='fab fa-twitter'></i>
						</a>
					</div>
				</div>

				<ul className={styles.sidebar__menu}>
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

				<a href='/' className={styles.sidebar__btn}>
					<i class='fas fa-comment-alt'></i>
					Support
				</a>
			</div>
		</>
	);
};

export default Sidebar;
