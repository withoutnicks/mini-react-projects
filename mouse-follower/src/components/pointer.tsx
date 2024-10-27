interface Props {
  x: number;
  y: number;
}

export const Pointer = ({x, y} : Props) => {
  return (
    <div 
      className="absolute bg-transparent border rounded-full opacity-80 pointer-events-none -left-5 -top-5 size-10"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >

    </div>
  )
}