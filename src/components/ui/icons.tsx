export function AvatarIcon(props: { src: string; size?: number }) {
  return (
    <div className="flex-shrink-0">
      <img
        src={props.src}
        alt={props.src}
        width={props.size || 16}
        height={props.size || 16}
        className="rounded-full"
      />
    </div>
  )
}

export function Tag(props: {
  text: string
  color: string
  icon?: React.ReactNode
}) {
  const colorString = `bg-${props.color}`
  return (
    <span
      className={`flex flex-row items-center gap-x-2 px-2 py-1 text-xs font-bold rounded-full bg-green-600 ${colorString} text-white`}
    >
      {props.icon}
      {props.text}
    </span>
  )
}
