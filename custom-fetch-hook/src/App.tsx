import useGetData from "./hooks/useFetchAPI";
import Button from "./ui/button";

interface FactDog {
  facts:   string[];
  success: boolean;
}

function App() {
  const { data , loading, error, getNewData } = useGetData<FactDog>("https://dog-api.kinduff.com/api/facts");

	return (
		<main className='flex flex-col items-center justify-center min-h-screen bg-zinc-900'>
			<h1 className='text-3xl font-bold text-center text-white'>Use custom fetch hook</h1>
      <br />
      <p className="text-white max-w-lg mx-auto text-center">
        {loading ? "Loading..." : error ? error : data?.facts[0]}
      </p>
      <br />
      <Button text="Get a new fact" ActionClick={getNewData} />
		</main>
	);
}

export default App;
