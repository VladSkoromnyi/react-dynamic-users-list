import './index.scss';
import { Link } from 'react-router-dom';

export const TasksPanel = () => {
	return (
		<div className="TasksPanel">
			<div className="TasksPanel__block container">
				<div className="TasksPanel__block-title">
					<h2>
						Unresolved tickets
					</h2>
					<Link to="/users">
						View details
					</Link>
				</div>
				
				<div className="TasksPanel__block-description">
					<span>Group:</span> Support
				</div>

				<ul className="TasksPanel__block-list">
					<li className="TasksPanel__block-item">
						<p>
							Waiting on Feature Request
						</p>

						<span>
							4238
						</span>
					</li>
					<li className="TasksPanel__block-item">
						<p>
							Awaiting Customer Response
						</p>

						<span>
							1005
						</span>
					</li>
					<li className="TasksPanel__block-item">
						<p>
							Awaiting Developer Fix
						</p>

						<span>
							914
						</span>
					</li>
					<li className="TasksPanel__block-item">
						<p>
							Pending
						</p>

						<span>
							281
						</span>
					</li>
				</ul>
			</div>

			<div className="TasksPanel__block container">
				<div className="TasksPanel__block-title">
					<h2>
						Tasks
					</h2>
					<Link to="/users">
						View all
					</Link>
				</div>
				
				<div className="TasksPanel__block-description">
					<span>Today</span>
				</div>

				<ul className="TasksPanel__block-list">
					<li className="TasksPanel__block-item">
						<p className="grey">
							Create new task
						</p>

						<button type="button">
							+
						</button>
					</li>
					<li className="TasksPanel__block-item">
						<p>
							<label>
								<input type="checkbox" />

								Finish ticket update
							</label>
						</p>

						<span className="ticket-status low">
							Urgent
						</span>
					</li>
					<li className="TasksPanel__block-item">
						<p>
							<label>
								<input type="checkbox" />

								Create new ticket example
							</label>
						</p>

						<span className="ticket-status normal">
							New
						</span>
					</li>
					<li className="TasksPanel__block-item">
						<p>
							<label>
								<input type="checkbox" />

								Update ticket report
							</label>
						</p>

						<span className="ticket-status default">
							Default
						</span>
					</li>
				</ul>
			</div>
		</div>
	)
}
