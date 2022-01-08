import styles from './Dashboard.module.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
	return (
		<div className={`container ${styles.dashboard}`}>
			<Sidebar />
		</div>
	);
};

export default Dashboard;
