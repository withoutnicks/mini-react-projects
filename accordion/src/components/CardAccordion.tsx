type Props = {
  title: string,
  content: string,
  group?: string | ''
  isMultiAccordion?: boolean, 
}

export const CardAccordion = ({title, content, group, isMultiAccordion} : Props) => {
  return (
    <details name={isMultiAccordion ? undefined : group} > 
      <summary>{title}</summary>
      <p>{content}</p>
    </details>
  )
}