import { useRef } from 'react';
import style from './App.module.css';
import useGetData from './hooks/useFetchAPI';
import { User, UserData } from './utils/types';

function App() {
  const refTopPage = useRef<HTMLElement>(null);
  const refEndPage = useRef<HTMLElement>(null);
	const { data, error, loading } = useGetData<UserData>(
		'https://dummyjson.com/users?limit=60'
	);

  const moveToButton = () => {
    refEndPage.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const moveToTop = () => {
    refTopPage.current?.scrollIntoView({ behavior: 'smooth' });
  }


	return (
		<main ref={refTopPage} className={style.container}>
			<header className={style.section}>Scroll Top and Button</header>
			<button className={style.btn} onClick={moveToButton}>Scroll to button</button>
			<section style={{textAlign: 'center'}}>
				{loading && <p>Loading...</p>}
				{error && <p>Error: {error}</p>}
        {
          data?.users.map((user: User) => (
            <div key={user.id}>
              <p>{user.firstName} {user.lastName} - <span className={style.textBold}>{user.email}</span></p>
            </div>
          ))
        }
			</section>
			<button className={style.btn} onClick={moveToTop}>Scroll to top</button>

      <footer ref={refEndPage} className={style.section}>This is a final footer - wts</footer>
		</main>
	);
}

export default App;
