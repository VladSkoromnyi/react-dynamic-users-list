import { 
	useCallback, 
  useEffect, 
  useState 
} from 'react';
import { getUsers } from '../../api/getUsers';
import './index.scss';

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
		<>
			<div className="Users">
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
								<a
									className="Users__link" 
									href="/users/:username"
								>
									{name}
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}
