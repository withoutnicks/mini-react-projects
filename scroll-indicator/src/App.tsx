import { useCallback, useEffect, useState } from "react"
import { Scroll } from "./components/Scroll"

function App() {
  const [scroll, setScroll] = useState(0)

  const onScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const maxScroll = scrollHeight - clientHeight
    const porcent = (scrollTop / maxScroll ) * 100
    setScroll(porcent)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  return (
    <>
      <Scroll scroll={scroll} />
    <main className="w-[40rem] py-4 mx-auto">
      <h1 className="text-3xl font-bold text-center my-2">Text example</h1>
      <section className="flex flex-col gap-2 text-pretty my-4">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus cumque suscipit pariatur debitis dolorum ipsa doloremque nisi quis accusantium ullam? Itaque accusamus laboriosam provident sapiente odio illo dignissimos at facilis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur et quidem quod perspiciatis non, voluptatum quam, ut recusandae corrupti neque, magni porro. Sequi nemo fugiat praesentium quas minus aperiam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quod facere! Culpa expedita voluptatibus perspiciatis, delectus explicabo molestias, nemo minus ipsum quaerat eveniet repellendus. Quod, repellat!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod expedita, repellendus, obcaecati nisi velit, ut veniam nisi repudiandae explicabo autem earum maxime. Ea, quod architecto!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, vero, quisquam, architecto, deleniti quae expedita repellendus atque quibusdam et voluptatum enim! Error, asperiores perspiciatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus neque. Quo, cumque! Aut, delectus nisi. Quia, quo repellendus. Aperiam, commodi? Quo, quia.</p>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, vero, quisquam, architecto, deleniti quae expedita repellendus atque quibusdam et voluptatum enim! Error, asperiores perspiciatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus neque. Quo, cumque! Aut, delectus nisi. Quia, quo repellendus. Aperiam, commodi? Quo, quia.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, vero, quisquam, architecto, deleniti quae expedita repellendus atque quibusdam et voluptatum enim! Error, asperiores perspiciatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus neque. Quo, cumque! Aut, delectus nisi. Quia, quo repellendus. Aperiam, commodi? Quo, quia.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, vero, quisquam, architecto, deleniti quae expedita repellendus atque quibusdam et voluptatum enim! Error, asperiores perspiciatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus neque. Quo, cumque! Aut, delectus nisi. Quia, quo repellendus. Aperiam, commodi? Quo, quia.</p>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, vero, quisquam, architecto, deleniti quae expedita repellendus atque quibusdam et voluptatum enim! Error, asperiores perspiciatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus neque. Quo, cumque! Aut, delectus nisi. Quia, quo repellendus. Aperiam, commodi? Quo, quia.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, vero, quisquam, architecto, deleniti quae expedita repellendus atque quibusdam et voluptatum enim! Error, asperiores perspiciatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus neque. Quo, cumque! Aut, delectus nisi. Quia, quo repellendus. Aperiam, commodi? Quo, quia.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, vero, quisquam, architecto, deleniti quae expedita repellendus atque quibusdam et voluptatum enim! Error, asperiores perspiciatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus neque. Quo, cumque! Aut, delectus nisi. Quia, quo repellendus. Aperiam, commodi? Quo, quia.</p>
        <hr />
      </section>
      <footer>
        <span>2024 Example Corp. All rights reserved.</span>
      </footer>
    </main>
    </>
  )
}

export default App
