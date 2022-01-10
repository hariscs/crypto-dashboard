import Logo from '../Logo';
import styles from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div>
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
		</div>
	);
};

export default Sidebar;
