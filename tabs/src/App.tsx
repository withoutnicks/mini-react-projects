import { useState } from "react";
import { TabComponent } from "./components/TabComponent";
import Systems from './mock/data.json'

type TabNames = 'windows' | 'macos' | 'linux';

function App() {
  const [currentTab, setCurrentTab] = useState<TabNames>('windows')

	return (
		<main className='h-screen flex flex-col items-center justify-center'>
			<h1 className='text-3xl font-bold my-4'>Principal Systems</h1>

			<section>
				<article className='flex list-none justify-center'>
          {Systems.map((system) => (
            <TabComponent
              key={system.name}
              titleTab={system.name}
              isSelected={currentTab === system.name}
              changeTab={() => setCurrentTab(system.name as TabNames)}
            />
          ))}
				</article>
				<article className="my-8">
					<img
						className='h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0'
            src={Systems.find((system) => system.name === currentTab)?.logo}
						alt='image description'
					/>
				</article>
			</section>
		</main>
	);
}

export default App;
