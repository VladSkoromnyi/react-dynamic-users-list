import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Task } from '../Task';
import { Modal } from '../Modal';
// import { initialTasks } from '../../api/tasks';

export const TasksPanel = () => {
	const [tasks, setTasks] = useState([])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [listLengthSettings, setListLengthSettings] = useState({
		toggleText: 'View all',
		listLength: 3,
		isViewAll: false,
	})

	// localStorage.setItem(
	// 	'localTasksStore',
	// 	JSON.stringify(initialTasks)
	// 	)

	useEffect(() => {
		if (localStorage.getItem('localTasksStore')) {
			setTasks(
				JSON.parse(localStorage.getItem('localTasksStore'))
			)
		}		
	}, [])

	const handleListLength = () => {
		if (!listLengthSettings.isViewAll) {
			setListLengthSettings((prev) => ({
				...prev,
				toggleText: 'View less',
				isViewAll: true,
			}))
		} else {
			setListLengthSettings((prev) => ({
				...prev,
				toggleText: 'View all',
				isViewAll: false,
			}))
		}

	}

	const addNewTask = ({	title, category }) => {
		if (title) {
			const newId = Math.random().toString(36).substring(2, 9)
			const newTask = {
				id: newId,
				title: title,
				category: category,
			}

			setTasks([ newTask, ...tasks ])
			localStorage.setItem(
				'localTasksStore', 
				JSON.stringify([ newTask, ...tasks ])
			)
			
			setIsModalOpen(false)
		}
	}

	const removeTask = (id) => {
		const deleted = tasks.filter(item => {
			return item.id !== id
		})

		setTimeout(() => setTasks(deleted), 500)
		localStorage.setItem(
			'localTasksStore', 
			JSON.stringify(deleted)
		)
	}

	return (
		<>
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
					<Link 
						to="/users"
						onClick={() => handleListLength()}
					>
						{listLengthSettings.toggleText}
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

						<button 
							onClick={setIsModalOpen}
							type="button"
						>
							+
						</button>		
					</li>

					{
						tasks?.map((item, i) => {
							if (!listLengthSettings.isViewAll && i >= 3) {
								return null;
							}

							const {
								id,
								title,
								category,
							} = item

							return (
								<Task 
									key={id}
									id={id}
									title={title}
									category={category}
									removeTask={removeTask}
								/>
							)
						})
					}
				</ul>
			</div>
		</div>
		{
			isModalOpen 
				? <Modal addNewTask={addNewTask} setIsModalOpen={setIsModalOpen} />	
				: null
		}
		</>
	)
}
