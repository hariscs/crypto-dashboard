import Logo from '../Logo';

const Sidebar = () => {
	return (
		<div>
			<Logo bgcolor='blue' clr='white' />
			<ul>
				<li>
					<i class='fas fa-home'></i>
					<a href='/'>Home</a>
				</li>
				<li>
					<i class='fas fa-chart-bar'></i>
					<a href='/'>Exchange</a>
				</li>
				<li>
					<i class='fas fa-chart-line'></i>
					<a href='/'>EasyBuy</a>
				</li>
				<li>
					<i class='fas fa-comments'></i>
					<a href='/'>C2C</a>
				</li>
				<li>
					<i class='fas fa-chart-pie'></i>
					<a href='/'>Asset</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
