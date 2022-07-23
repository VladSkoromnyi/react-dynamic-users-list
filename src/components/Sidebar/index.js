import './index.scss';

export const Sidebar = () => {
	return (
		<div className="Sidebar">
			<div className="Sidebar__logo">
				<div className="Sidebar__logo-img"></div>
				<h3 className="Sidebar__logo-title">
					Dashboard
				</h3>
			</div>

			<ul className="Sidebar__nav">
				<li className="Sidebar__nav-item">
					<a
						className="Sidebar__nav-link icon icon--home"
						href="/#"
					>
						<i className="fa-solid fa-chart-pie"></i>
						Overview
					</a>
				</li>
				<li className="Sidebar__nav-item">
					<a
						className="Sidebar__nav-link"
						href="/users"
					>
						<i className="fa-solid fa-users-rectangle"></i>
						Users
					</a>
				</li>
				<li className="Sidebar__nav-item">
					<a
						className="Sidebar__nav-link"
						href="/"
					>
						<i className="fa-solid fa-lightbulb"></i>
						Ideas
					</a>
				</li>		
				<li className="Sidebar__nav-item">
					<a
						className="Sidebar__nav-link"
						href="/"
					>
						<i className="fa-solid fa-users"></i>
						Contacts
					</a>
				</li>
				<li className="Sidebar__nav-item">
					<a
						className="Sidebar__nav-link"
						href="/"
					>
						<i className="fa-solid fa-user-tie"></i>
						Agents
					</a>
				</li>
				<li className="Sidebar__nav-item">
					<a
						className="Sidebar__nav-link"
						href="/"
					>
						<i className="fa-solid fa-book"></i>
						Articles
					</a>
				</li>	
				<li className="Sidebar__nav-item">
					<span></span>
				</li>	
				<li className="Sidebar__nav-item">
					<a
						className="Sidebar__nav-link"
						href="/"
					>
						<i className="fa-solid fa-gear"></i>
						Settings
					</a>
				</li>	
				<li className="Sidebar__nav-item">
					<a
						className="Sidebar__nav-link"
						href="/"
					>
						<i className="fa-solid fa-star"></i>
						Subscription
					</a>
				</li>			
			</ul>

		</div>
	)
}
