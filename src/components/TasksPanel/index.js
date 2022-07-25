import './index.scss';

export const TasksPanel = () => {
	return (
		<div className="TasksPanel">
			<div className="TasksPanel__block container">
				<div className="TasksPanel__block-title">
					<h2>
						Unresolved tickets
					</h2>
					<a href="#">
						View details
					</a>
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
					<a href="#">
						View all
					</a>
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
							Finish ticket update
						</p>

						<span>
							Urgent
						</span>
					</li>
					<li className="TasksPanel__block-item">
						<p>
							Create new ticket example
						</p>

						<span>
							New
						</span>
					</li>
					<li className="TasksPanel__block-item">
						<p>
							Update ticket report
						</p>

						<span>
							Default
						</span>
					</li>
				</ul>
			</div>
		</div>
	)
}
