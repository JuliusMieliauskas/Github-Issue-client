import { fetchIssue, fetchIssueComments } from "@/app/actions/fetch-issue-data"
import { Tag } from "@/components/ui/icons"
import { CheckCircle } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { CommentChain } from "@/components/ui/comment-chain"

export default async function IssuePage({
  params,
}: {
  params: { id: string }
}) {
  const issue = await fetchIssue("cocos/cocos-engine", parseInt(params.id))
  const comments = await fetchIssueComments(issue.comments_url)

  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="flex flex-col text-3xl w-2/3 justify-start gap-y-2 pb-4">
        {issue.title}

        <div className="flex flex-row gap-x-4 text-sm font-light items-center">
          {issue.closed_at && (
            <Tag text={"Closed"} color={"purple-600"} icon={<CheckCircle />} />
          )}
          <div className="flex gap-x-2">
            Opened by
            <p className="font-semibold">{issue.user.login}</p>
            on
            {" " + formatDate(new Date(issue.created_at))}
          </div>
        </div>
      </h2>
      <div className="flex flex-col w-2/3 mb-8">
        <CommentChain
          comments={[
            { ...issue, body: issue.body, user: issue.user },
            ...comments,
          ]}
        />
      </div>
    </div>
  )
}
