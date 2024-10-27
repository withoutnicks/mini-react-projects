import { Title, Button, Center } from "@mantine/core"

interface Props {
  isOpen: boolean,
  closeModal: () => void
}

export const DialogComponent = ({isOpen, closeModal}: Props) => {
  return (
    <>
      <dialog open={isOpen}>
        <Title ta={"center"} my={"sm"}>is that a cat?</Title>
        <img src="https://i.pinimg.com/564x/fd/15/3c/fd153c2c8c2d541795fb17a30e6e969c.jpg" alt="welcome my profile" />
        <Center my={"xs"}>
          <Button variant="light" color="rgba(0, 0, 0, 1)" onClick={() => closeModal()}>Yes, close modal 😂</Button>
        </Center>
      </dialog>
    </>
  )
}