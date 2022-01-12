import styles from './Dashboard.module.css';
import DashboardMain from './DashboardMain';
import Sidebar from './Sidebar';
import SidebarProfile from './SidebarProfile';

const Dashboard = () => {
	return (
		<div className={`container ${styles.dashboard}`}>
			<Sidebar />
			<DashboardMain />
			<SidebarProfile />
		</div>
	);
};

export default Dashboard;
