
export const Task = ({ id, title, category, removeTask }) => {
	return (
		<li
			key={id}
			className="TasksPanel__block-item"
		>
			<p>
				<label>
					<input 
						onChange={() => removeTask(id)}
						type="checkbox" 
					/>
	
					{title}
				</label>
			</p>

			<span className={`ticket-status ${category}`}>
				{category}
			</span>
		</li>			
	)
}
