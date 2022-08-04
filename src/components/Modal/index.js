import './index.scss'
import { useState } from 'react'

export const Modal = ({ addNewTask, setIsModalOpen }) => {
	const [task, setTask] = useState({
		title: '',
		category: 'new',
	})

	return (
		<div className="Modal">
			<div className="Modal__content container">
				<form
					className='Modal__form'
					onSubmit={() => addNewTask(task)}
				>
					<input
						className='Modal__input Modal__input--text'
						type='text' 
						placeholder='Task title'
						value={task.title} 
						onChange={({ target }) => setTask((prev) => {
							return {...prev, title: target.value}
						})}
					/>

					<div className="radio">
						<label>
							<input
								className='Modal__input Modal__input--radio'
								type='radio'
								value='default'
								checked={false}
								onChange={({ target }) => setTask((prev) => {
									return {...prev, category: target.value}
								})}
							/>	
							<span className='ticket-status default grey'>default</span>					
						</label>
						
						<label>
							<input
								className='Modal__input Modal__input--radio'
								type='radio'
								value='urgent'
								checked={false}
								onChange={({ target }) => setTask((prev) => {
									return {...prev, category: target.value}
								})}
							/>		
							<span className='ticket-status urgent'>urgent</span>
						</label>
						
						<label>
							<input
								className='Modal__input Modal__input--radio'
								type='radio'
								value='new'
								checked={false}
								onChange={({ target }) => setTask((prev) => {
									return {...prev, category: target.value}
								})}
							/>
							<span className='ticket-status new'>new</span>				
						</label>						
					</div>



					<button 
						className={`Modal__button ${task.category}`}
					>
						Add
					</button>
				</form>

				<div 
					onClick={() => setIsModalOpen(false)}
					className="Modal__close text-overlay"
				>
					+
				</div>
			</div>
		</div>
	)
}

