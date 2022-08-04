import './index.scss'

export const ChartControls = ({ data, setData }) => {
	console.log(data)

	const handleChangeLabel = (id, value, field) => {
		setData(prev => {
			return prev.map(item => {
				if (item.id === id) {
					return {
						...item,
						[field]: value,
					}
				}

				return item
			})
		})

		localStorage.setItem(
			'localChartData',
			JSON.stringify(
				data.map(item => {
					if (item.id === id) {
						return {
							...item,
							[field]: value,
						}
					}
	
					return item
				})
			)
		)
	}

	const addChartItem = () => {
		const newItem = {
			id: Math.random().toString(36).substring(2, 9),
			label: '',
			gain: 0,
		}
		setData(prev => [ ...prev, newItem ])
		localStorage.setItem('localChartData', JSON.stringify([ ...data, newItem ]))
	}

	const removeChartItem = (id) => {
		const deleted = data.filter(item => {
			return item.id !== id
		})

		setTimeout(() => setData(deleted), 500)
		localStorage.setItem(
			'localChartData', 
			JSON.stringify(deleted)
		)
	}

	return (
		<>
			<ul className="ChartControls">
				{
					data.map(item => {
						const {
							id,
							label,
							gain
						} = item

						return (
							<li
								key={id}
								className='ChartControls__item'
							>
								<input 
									className='ChartControls__input'
									type='text'
									value={label}
									onChange={({target}) => handleChangeLabel(id, target.value, 'label')}
								/>

								<button
									className='ChartControls__remove'
									onClick={() => removeChartItem(id)}
								>
									+
								</button>

								<input 
									className='ChartControls__input'
									type='number'
									value={gain}
									onChange={({target}) => handleChangeLabel(id, target.value, 'gain')}
								/>
							</li>
						)
					})
				}
				<li>
					<button
						onClick={() => addChartItem()}
						className='ChartControls__button'
					>
						add
					</button>
				</li>
			</ul>
		</>
	)
}
