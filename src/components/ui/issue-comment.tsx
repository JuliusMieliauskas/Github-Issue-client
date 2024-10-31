import { MarkdownRenderer } from "./markdown-rendered"
import { Card, CardContent, CardFooter, CardHeader } from "./card"
import { AvatarIcon } from "./icons"
import { getEmoji } from "@/app/actions/fetch-emoji"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

export function IssueComment(props: { comment: any }) {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-x-2 bg-slate-100 px-6 py-4 space-y-0">
        <AvatarIcon src={props.comment.user.avatar_url} size={20} />
        <span className="font-bold">{props.comment.user.login}</span>
        commented on {formatDate(new Date(props.comment.created_at))}
      </CardHeader>
      <CardContent className="py-4">
        <MarkdownRenderer markdownContent={props.comment.body} />
      </CardContent>
      {props.comment.reactions.total_count > 0 && (
        <CardFooter>
          <ReactionDisplay reactions={props.comment.reactions} />
        </CardFooter>
      )}
    </Card>
  )
}

export function ReactionDisplay(props: { reactions: any }) {
  return (
    <div className="flex flex-row gap-x-2">
      {Object.entries(props.reactions).map(([reaction, count]) => {
        if (typeof count !== "number") return null
        return (
          reaction !== "total_count" &&
          reaction !== "url" &&
          count > 0 && (
            <div key={reaction} className="flex flex-row gap-x-1">
              <EmojiDisplay emoji={reaction} count={count} />
            </div>
          )
        )
      })}
    </div>
  )
}

export async function EmojiDisplay(props: { emoji: string; count: number }) {
  const emojiUrl = await getEmoji(props.emoji)
  return (
    <div className="flex rounded-full border gap-x-2 px-2 py-0.5">
      <Image
        src={emojiUrl}
        alt={props.emoji}
        width={16}
        height={16}
        style={{ objectFit: "contain" }}
      />
      <div className="text-sm">{props.count}</div>
    </div>
  )
}
