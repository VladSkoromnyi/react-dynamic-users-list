import './index.scss';
import { 
	useCallback, 
  useEffect, 
  useState 
} from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../api/getUsers';

export const Users = () => {
  
	const [users, setUsers] = useState([])

  const getData = useCallback(async () => {
    const data = await getUsers();

    setUsers(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData])


  console.log(users);

	return (
		<div className="Users container">
			<h1 className="Users__title">
				All users
			</h1>

			<ul className="Users__column Users__column--headers">
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
				{users.map(user => {
					const {
						id,
						name,
						email,
						website,
					} = user;
					const company = user.company.name;
					const { bs } = user.company;

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
										{name}
									</li>
									<li className="Users__column-item">
										{company}
									</li>
									<li className="Users__column-item">
										{email}
									</li>
									<li className="Users__column-item">
										Distance
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
