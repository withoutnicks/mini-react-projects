import { Button, Flex, Title } from "@mantine/core"
import { useState } from "react"
import { DialogComponent } from "./components/DialogComponent"

function App() {
  const [openModal, setOpenModal] = useState(false)

  const handleCloseModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <Flex h={'100vh'} justify={"center"} align={"center"} direction={"column"}>
      <Title order={1} my={"xs"}>Modal React</Title>
      <Button 
        variant="filled"
        color="rgba(0, 0, 0, 1)"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </Button>
      <DialogComponent isOpen={openModal} closeModal={handleCloseModal}  />
    </Flex>

  )
}

export default App
