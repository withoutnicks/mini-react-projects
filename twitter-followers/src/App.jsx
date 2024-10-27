import { UserComponent } from './components/UserComponent';

function App() {
	return (
		<section className='bg-transparent border border-gray-600 p-4 rounded-xl'>
			<h1 className='text-2xl font-extrabold'>How to follow</h1>
			<br />
			<article className='flex flex-col gap-4'>
				<UserComponent
					avatar='https://pbs.twimg.com/profile_images/1780663633485139968/4uZ0EOkL_400x400.jpg'
					name='Gemita'
					username='gemita_123'
					verify
				/>
				<UserComponent
					avatar='https://pbs.twimg.com/profile_images/1822322092420841487/6VaSigAn_400x400.jpg'
					name='Carnaval Tercermundista'
					username='CTercermundista'
				/>
				<UserComponent
					avatar='https://pbs.twimg.com/profile_images/1841664111610101761/5gNredUe_400x400.jpg'
					name='Agathix 🐍'
					username='Agathix_'
					verify
				/>
			</article>
			<br />
			<footer className='text-blue-600 hover:underline cursor-pointer'>Show more</footer>
		</section>
	);
}

export default App;
