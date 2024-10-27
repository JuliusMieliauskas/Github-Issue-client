export function IssueTag(props: { tagName: string; tagColor: string }) {
  const color = props.tagColor.toLowerCase().toString()
  return (
    <span
      className={`text-[10px] py-1 px-4 bg-[#${color}] uppercase rounded-full`}
    >
      {props.tagName}
    </span>
  )
}
