import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Pointer } from '@/components/pointer'

function App() {
  const [active, setActive] = useState(false)
  const [position, setPosition] = useState({x: 0, y:0})

  useEffect(() => {
    const handleMove = (evt: PointerEvent) => {
      const { clientX, clientY } = evt
      setPosition({ x: clientX, y: clientY })
      console.log(clientX, clientY)
    }

    if (active) window.addEventListener('pointermove', handleMove)
    if (!active) setPosition({x: 0, y: 0})

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [active])

  return (
    <main className="h-screen flex flex-col items-center justify-center dark:bg-zinc-900 dark:text-white">
      <Pointer x={position.x} y={position.y} />
      <Button onClick={() => setActive(!active)}>
        {active ? 'Desactivar' : 'Activar'} Puntero
      </Button>
    </main>
  )
}

export default App
