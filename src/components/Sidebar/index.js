import './index.scss';
import { NavLink } from 'react-router-dom';

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
					<NavLink
						to="/"
						className="Sidebar__nav-link icon icon--home"
					>
						<i className="fa-solid fa-chart-pie"></i>
						Overview
					</NavLink>
				</li>
				<li className="Sidebar__nav-item">
					<NavLink
						to="users"
						className="Sidebar__nav-link"
					>
						<i className="fa-solid fa-users-rectangle"></i>
						Users
					</NavLink>
				</li>
				<li className="Sidebar__nav-item">
					<NavLink
						to="ideas"
						className="Sidebar__nav-link"
					>
						<i className="fa-solid fa-lightbulb"></i>
						Ideas
					</NavLink>
				</li>		
				<li className="Sidebar__nav-item">
					<NavLink
						to="contacts"
						className="Sidebar__nav-link"
					>
						<i className="fa-solid fa-users"></i>
						Contacts
					</NavLink>
				</li>
				<li className="Sidebar__nav-item">
					<NavLink
						to="agents"
						className="Sidebar__nav-link"
					>
						<i className="fa-solid fa-user-tie"></i>
						Agents
					</NavLink>
				</li>
				<li className="Sidebar__nav-item">
					<NavLink
						to="articles"
						className="Sidebar__nav-link"
					>
						<i className="fa-solid fa-book"></i>
						Articles
					</NavLink>
				</li>	
				<li className="Sidebar__nav-item">
					<span></span>
				</li>	
				<li className="Sidebar__nav-item">
					<NavLink
						to="settings"
						className="Sidebar__nav-link"
					>
						<i className="fa-solid fa-gear"></i>
						Settings
					</NavLink>
				</li>	
				<li className="Sidebar__nav-item">
					<NavLink
						to="subscription"
						className="Sidebar__nav-link"
					>
						<i className="fa-solid fa-star"></i>
						Subscription
					</NavLink>
				</li>			
			</ul>

		</div>
	)
}
