import Button from './Button';
import styles from './DashboardMain.module.css';

const DashboardMain = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main__nav}>
				<h2 className={styles.main__navTitle}>Dashboard</h2>
				<div className={styles.main__navInfo}>
					<a href='/' className={styles.nav__btn}>
						<i class='fas fa-th-large'></i>
						Change view
					</a>
					<i class='fas fa-bell'></i>
				</div>
			</div>

			{/* dashboard header */}

			<div className={styles.main__header}>
				<div>
					<h2 className={styles.main__headerTitle}>
						Buy & Sell Crypto in minutes
					</h2>
					<p className={styles.main__headerSubtitle}>
						Join the world's largest crypto exchange
					</p>
					<form className={styles.header__form}>
						<input
							type='text'
							placeholder='Email address'
							className={styles.main__headerInput}
						/>
						<Button text='Register now' />
					</form>
				</div>

				<div className={styles.main__headerCards}>
					<div
						className={`${styles.main__headerCard} ${styles.main__headerCardOne}`}
					>
						<h3>Maker Fee Rebates</h3>
						<p>Upgraded Spot Market Program</p>
					</div>
					<div
						className={`${styles.main__headerCard} ${styles.main__headerCardTwo}`}
					>
						<h3>Referral Program</h3>
						<p>Quarterly Futures</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardMain;
