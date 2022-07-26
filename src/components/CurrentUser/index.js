import './index.scss';
import { 
	useCallback, 
  useEffect, 
  useState 
} from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../api/getUsers';
import { TailSpin, ThreeDots } from 'react-loader-spinner';

export const CurrentUser = () => {
	const { userId } = useParams();
	const [user, setUser] = useState(null);

  const getData = useCallback(async () => {
    const data = await getUser(userId);

    setUser(data);
  }, [userId]);

  useEffect(() => {
    getData();
  }, [getData, userId])

	const importImg = (id) => {
		const avatar = require(`../../assets/images/avatars/${id}.jpg`)

		return avatar;
	}

	return (
		<div className="CurrentUser container">
			<div className="CurrentUser__head">
				<div className="CurrentUser__head-avatar">
					
				{
					!user 
						? <TailSpin color="#fff" height={140} />
						: <img src={importImg(userId)} alt={user?.name} />
				}
				</div>				
			</div>

			<h2 className="CurrentUser__name">
				{
					!user 
						? <ThreeDots color="#3851FF" height={10} />
						: user?.name
				}
				
			</h2>

			<p className="CurrentUser__phrase">
				{user?.company?.catchPhrase}
			</p>

			<div className="CurrentUser__info">
				<h2 className="CurrentUser__info-title">
					Address
				</h2>

				<p className="CurrentUser__info-description">
					{
						!user 
							? <ThreeDots color="#3851FF" height={10} />
							: user?.address?.street + ', ' + user?.address?.suite
					}
				</p>

				<p className="CurrentUser__info-description">
					{
						!user
							? ''
							: user?.address?.city + ', ' + user?.address?.zipcode
					}
				</p>
			</div>

			<div className="CurrentUser__info">
				<h2 className="CurrentUser__info-title">
					Phone
				</h2>

				<p className="CurrentUser__info-description">
					{
						!user 
							? <ThreeDots color="#3851FF" height={10} />
							: '+' + user?.phone?.split(' ')[0]
					}
				</p>
			</div>

			<div className="CurrentUser__info">
				<h2 className="CurrentUser__info-title">
					Website
				</h2>

				<p className="CurrentUser__info-description">
					{
						!user 
							? <ThreeDots color="#3851FF" height={10} />
							: <a 
									href={`http://${user?.website}`} 
									target="_blank" 
									rel="noreferrer"
								>
									{user?.website}
								</a>
					}
				</p>
			</div>

		</div>
	)
}
