import './index.scss';

export const InfoPanel = () => {
	return (
		<div className="InfoPanel unselectable">
			<div className="InfoPanel__block container">
				<p>
					Active
				</p>
				<p>
					60
				</p>
			</div>
			<div className="InfoPanel__block container">
				<p>
					Online
				</p>
				<p>
					16
				</p>
			</div>
			<div className="InfoPanel__block container">
				<p>
					Filtered
				</p>
				<p>
					43
				</p>
			</div>
			<div className="InfoPanel__block container">
				<p>
					Banned
				</p>
				<p>
					64
				</p>
			</div>
		</div>
	)
}
