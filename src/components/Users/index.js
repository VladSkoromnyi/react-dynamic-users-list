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
			<ul className="Users__list">
				{users.map(user => {
					const {
						id,
						name,
					} = user;

					return (
						<li 
							key={id}
							className="Users__item"
						>
							<Link
								className="Users__link" 
								to={`/users/${id}`}
							>
								{name}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
