import './index.scss';
import { 
	useCallback, 
  useEffect, 
  useState 
} from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../api/getUsers';

export const CurrentUser = () => {
	const { userId } = useParams();
	const [user, setUser] = useState([])
	const path = `../../assets/images/${userId}.png`;

  const getData = useCallback(async () => {
    const data = await getUser(userId);

    setUser(data);
  }, [userId]);

  useEffect(() => {
    getData();
  }, [getData, userId])

	return (
		<div className="CurrentUser container">
			<div className="CurrentUser__head">
			</div>

			<div className="CurrentUser__avatar">
				<img src={path} alt={user.name} />
			</div>
			{user.name}
		</div>
	)
}
