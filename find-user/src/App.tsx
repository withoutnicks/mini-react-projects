import { useState } from 'react';
import { CardProfile } from './components/CardProfile';
import { GithubProfile } from './types';
import IconSearch from './icons/iconSearch';

function App() {
	const [user, setUser] = useState('');
	const [error, setError] = useState<string>('');
	const [profile, setProfile] = useState<GithubProfile>();

	const getUserProfile = async (username: string) => {
		setError('');
		setProfile(undefined);
		try {
			const response = await fetch(`https://api.github.com/users/${username}`);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			setProfile(data);
			setError('');
		} catch (err) {
			setError((err as Error).message);
			setProfile(undefined)
		}
	};

	return (
		<main className='w-[800px] mx-auto h-screen'>
			<h1 className='text-2xl font-bold my-6 text-center'>Find user GitHub</h1>
			<form 
				className='relative mb-6'
				onSubmit={(evt) => {
          evt.preventDefault();
          getUserProfile(user.trim());
        }}
			>
				<input
					type='text'
					className='bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full ps-10 p-2.5  dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500'
					placeholder='withoutnicks, midudev, mouredev...'
					value={user}
					onChange={(evt) => setUser(evt.target.value)}
				/>
				<button
					type='button'
					className='absolute inset-y-0 start-0 flex items-center ps-3.5 cursor-pointer'
					onClick={() => getUserProfile(user.trim())}
				>
					<IconSearch />
				</button>
			</form>

			{!error && profile && (
				<CardProfile
					avatar_url={profile.avatar_url}
					username={profile.login}
					name={profile.name}
					bio={profile.bio}
					html_url={profile.html_url}
					repos_url={profile.repos_url}
				/>
			)}

			{error && <p className='text-red-500 text-md text-center'>{error}</p>}
		</main>
	);
}

export default App;
