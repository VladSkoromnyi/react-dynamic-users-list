import './index.scss';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { chartGainsData } from '../../assets/chartData';
import { useEffect, useState } from 'react';
import { ChartControls } from '../ChartControls';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const Home = () => {
	const [data, setData] = useState([])

	const chartData = {
		labels: data.map(item => item.label),
		datasets: [
			{
				label: '# of Votes',
				data: data.map(item => item.gain),
				backgroundColor: [
					'rgba(255, 99, 132, 0.5)',
					'rgba(54, 162, 235, 0.5)',
					'rgba(255, 206, 86, 0.5)',
					'rgba(75, 192, 192, 0.5)',
					'rgba(153, 102, 255, 0.5)',
					'rgba(255, 159, 64, 0.5)',
				],
				borderWidth: 1,
			},
		],
	};

	useEffect(() => {
		if (localStorage.getItem('localChartData')) {
			setData(JSON.parse(localStorage.getItem('localChartData')))
		} else {
			setData([])
		}
	}, [])

	return (
		<div className="Home container">
			<h1 className="Home__title">
				Page in develop
			</h1>

			<div className="Home__chart">
				<div className="Home__chart-block">
					<PolarArea data={chartData} />				
				</div>

				<div className="Home__chart-block">
					<ChartControls 
						data={data}
						setData={setData}
					/>
				</div>				
			</div>	
		</div>
	)
}
