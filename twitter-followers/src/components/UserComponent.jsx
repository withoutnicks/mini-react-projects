import { useState, useEffect } from 'react';

export const UserComponent = ({ avatar, name, username, verify = false }) => {
	const [following, setFollowing] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem(`follow-${username}`)
    if (savedState) {
      setFollowing(JSON.parse(savedState));
    }
  }, [username])

	const handleFollowToggle = () => {
		setFollowing(prev => {
      const newFollowing = !prev;
      localStorage.setItem(`follow-${username}`, JSON.stringify(newFollowing));
      return newFollowing;
    });
	};

	return (
		<article className='w-96 flex justify-between items-center'>
			<div className='flex gap-2'>
				<img
					className='size-12 rounded-full object-cover'
					src={avatar}
					alt={name}
				/>
				<div>
					<h2 className='font-bold'>
						{name} {verify && <span>🔹</span>}
					</h2>
					<h3 className='text-gray-500'>@{username}</h3>
				</div>
			</div>
			<button
				onClick={handleFollowToggle}
        aria-pressed={following}
				className={`text-white px-4 py-2 rounded-2xl h-fit transition font-bold ${
					following
						? 'bg-transparent border border-gray-600 hover:text-red-600 hover:border-red-600'
						: 'bg-white text-black'
				}`}
			>
				{following ? 'Following' : 'Follow'}
			</button>
		</article>
	);
};
