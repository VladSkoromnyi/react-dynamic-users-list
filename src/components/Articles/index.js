import './index.scss'
import { getPosts } from '../../api/getPosts'
import { useEffect, useState, useCallback } from 'react'

export const Articles = () => {
	const [posts, setPosts] = useState([])

  const getData = useCallback(async () => {
    const data = await getPosts();

    setPosts(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData])

	console.log(posts)

	return (
		<div className='Articles container'>
			<ul className='Articles__list'>
				{
					posts?.map((item, i) => {
						const {
							id,
							userId,
							title,
							body,
						} = item

						return (
							<li
								key={id}
								className='Articles__item'
							>
								{title}
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}
