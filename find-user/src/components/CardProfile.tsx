interface Props {
  username: string
  name: string
  avatar_url: string
  bio: string
  html_url: string
  repos_url: string
}

export const CardProfile = ({username, name,avatar_url, bio, html_url, repos_url}: Props) => {
	return (
		<article className='w-full max-w-sm bg-white border border-zinc-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700 mx-auto'>
      <br />
			<div className='flex flex-col items-center pb-10'>
				<img
					className='w-24 h-24 mb-3 rounded-full shadow-lg'
					src={avatar_url}
					alt={name}
				/>
				<h5 className='mb-1 text-xl font-medium text-zinc-900 dark:text-white'>
					{username}
				</h5>
				<span className='text-sm text-zinc-500 dark:text-zinc-400 text-center'>
					{bio}
				</span>
				<div className='flex mt-4'>
					<a
						href={repos_url}
						className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
					>
						Repos
					</a>
					<a
						href={html_url}
						className='py-2 px-4 ms-2 text-sm font-medium text-zinc-900 focus:outline-none bg-white rounded-lg border border-zinc-200 hover:bg-zinc-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-zinc-100 dark:focus:ring-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-600 dark:hover:text-white dark:hover:bg-zinc-700'
					>
						View Profile
					</a>
				</div>
			</div>
		</article>
	);
};
