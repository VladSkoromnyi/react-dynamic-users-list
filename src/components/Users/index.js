import './index.scss';
import { 
	useCallback, 
  useEffect, 
  useState 
} from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../api/getUsers';
import { Bars } from 'react-loader-spinner';

export const Users = () => {
	const [users, setUsers] = useState([]);

  const getData = useCallback(async () => {
    const data = await getUsers();

    setUsers(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData])

	const importImg = (id) => {
		const avatar = require(`../../assets/images/avatars/${id}.jpg`)

		return avatar;
	}

	const handlerDistance = (lat, lng) => {
		switch (true) {
			case lat < 0 && lng < 0:
				return 'high';
			
			case (lat < 0 && lng > 0) || (lat > 0 && lng < 0):
				return 'low';
			
			case lat > 0 && lng > 0:
				return 'normal';
		
			default:
				break;
		}
	}

	const reverseUsers = () => {
		setUsers([...users].reverse());
	}

	return (
		<div className="Users container">
			<div className="Users__title">
				<h1>
					All users
				</h1>
				<span onClick={reverseUsers} className="unselectable" >
					<i className="fa-solid fa-arrow-up-wide-short"></i>
					Sort
				</span>				
			</div>


			<ul className="Users__column Users__column--headers unselectable">
				<li className="Users__column-item">
					User details
				</li>
				<li className="Users__column-item">
					Company name
				</li>
				<li className="Users__column-item">
					Email
				</li>
				<li className="Users__column-item">
					Distance
				</li>
			</ul>

			<ul className="Users__list">
				{!users 
					? <Bars color="#3851FF" />
					: users?.map((user, i) => {
					const {
						id,
						name,
						email,
						website,
					} = user;
					const company = user.company.name;
					const { bs } = user.company;
					const { city } = user.address;
					const { lat, lng } = user.address.geo;

					return (
						<li 
							key={id}
							className="Users__item"
						>
							<Link
								className="Users__link" 
								to={`/users/${id}`}
							>
								<ul className="Users__column">
									<li className="Users__column-item">
										<img 
											src={importImg(id)}
											alt="avatar"  
										/>
										<div>
										<p>
											{name}
										</p>
										<p className="Users__column-description">
											{city}
										</p>
										</div>
									</li>
									<li className="Users__column-item">
										<p>
											{company}
										</p>
										<p className="Users__column-description">
											{bs}
										</p>
									</li>
									<li className="Users__column-item">
										<p>
											{email}
										</p>
										<p className="Users__column-description">
											{website}
										</p>
									</li>
									<li className="Users__column-item">
										<span className={
											handlerDistance(lat, lng)
										}>
											{handlerDistance(lat, lng)}
										</span>
									</li>
								</ul>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
