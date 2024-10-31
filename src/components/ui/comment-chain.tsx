import { IssueComment } from "./issue-comment"
import { Separator } from "./separator"

export function CommentChain(props: { comments: any[] }) {
  return (
    <div>
      {props.comments.map((comment, index) => (
        <div key={comment.id}>
          {index !== 0 && <Separator className="my-4" />}
          <IssueComment comment={comment} />
        </div>
      ))}
    </div>
  )
}
