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
	const [user, setUser] = useState(null);
	// const path = `../../assets/images/${userId}.png`;

  const getData = useCallback(async () => {
    const data = await getUser(userId);

    setUser(data);
  }, [userId]);

  useEffect(() => {
    getData();
  }, [getData, userId])

	console.log(user)

	return (
		<div className="CurrentUser container">
			<div className="CurrentUser__head">
				<div className="CurrentUser__head-avatar">
					{/* <img src={path} alt={user.name} /> */}
				</div>				
			</div>

			<h2 className="CurrentUser__name">
				{user.name}
			</h2>

			<p className="CurrentUser__phrase">
				{user.company.catchPhrase}
			</p>

			<div className="CurrentUser__info">
				<h2 className="CurrentUser__info-title">
					Address
				</h2>

				<p className="CurrentUser__info-description">
					{user.address.street}, {user.address.suite}
				</p>

				<p className="CurrentUser__info-description">
					{user.address.city}, {user.address.zipcode}
				</p>
			</div>

			<div className="CurrentUser__info">
				<h2 className="CurrentUser__info-title">
					Phone
				</h2>

				<p className="CurrentUser__info-description">
					+{user.phone.split(' ')[0]}
				</p>
			</div>

			<div className="CurrentUser__info">
				<h2 className="CurrentUser__info-title">
					Website
				</h2>

				<p className="CurrentUser__info-description">
					<a 
						href={`http://${user.website}`} 
						target="_blank" 
						rel="noreferrer"
					>
						{user.website}
					</a>
				</p>
			</div>

		</div>
	)
}
