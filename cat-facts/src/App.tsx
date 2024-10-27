import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

function App() {
  const { facts, newFact } = useCatFact()
  const { imgUrl } = useCatImage(facts)

  const handleFact = async () => {
    newFact()
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className='text-2xl font-bold my-4'>
        Furry Factos <Separator />
      </h1>
      <Button onClick={handleFact}>New Fact</Button>
      <div className='max-w-[45rem]'>
        {facts && <p className="text-lg my-4 text-center">{facts}</p>}
        <img src={imgUrl} alt="cat say..." className='size-[20rem] mx-auto' />
      </div>
    </main>
  )
}

export default App
