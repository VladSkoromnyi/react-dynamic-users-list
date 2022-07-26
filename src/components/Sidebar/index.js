import './index.scss';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
	const activeClassName = 'Sidebar__nav-link Sidebar__nav-link--active'; 
	const inactiveClassName = 'Sidebar__nav-link';

	return (
		<div className="Sidebar unselectable">
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
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
					>
						<i className="fa-solid fa-chart-pie"></i>
						Overview
					</NavLink>
				</li>
				<li className="Sidebar__nav-item">
					<NavLink
						to="users"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
					>
						<i className="fa-solid fa-users-rectangle"></i>
						Users
					</NavLink>
				</li>
				<li className="Sidebar__nav-item">
					<NavLink
						to="ideas"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
					>
						<i className="fa-solid fa-lightbulb"></i>
						Ideas
					</NavLink>
				</li>		
				<li className="Sidebar__nav-item">
					<NavLink
						to="contacts"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
					>
						<i className="fa-solid fa-users"></i>
						Contacts
					</NavLink>
				</li>
				<li className="Sidebar__nav-item">
					<NavLink
						to="agents"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
					>
						<i className="fa-solid fa-user-tie"></i>
						Agents
					</NavLink>
				</li>
				<li className="Sidebar__nav-item">
					<NavLink
						to="articles"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
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
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
					>
						<i className="fa-solid fa-gear"></i>
						Settings
					</NavLink>
				</li>	
				<li className="Sidebar__nav-item">
					<NavLink
						to="subscription"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
					>
						<i className="fa-solid fa-star"></i>
						Subscription
					</NavLink>
				</li>			
			</ul>

		</div>
	)
}
