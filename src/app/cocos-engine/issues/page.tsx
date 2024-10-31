/* eslint-disable */

import { IssueCard } from "@/components/ui/issue-card"
import { getIssuesForRepo } from "../../actions/get-issues"
import { PaginationControls } from "@/components/ui/pagination-control"

export default async function CocosEngine({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const currentPage = parseInt(searchParams.page || "1")

  const { totalPages, issuesData } = await getIssuesForRepo(
    "cocos/cocos-engine",
    currentPage
  )
  return (
    <div className="w-full mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Cocos Engine</h1>
      <div className="flex flex-col gap-y-4 mt-8 w-2/3">
        {issuesData.map((issue: any) => {
          return (
            <IssueCard
              key={issue.id}
              issueName={issue.title}
              author={issue.user.login}
              createdAt={new Date(issue.created_at)}
              commentsCount={issue.comments}
              labels={issue.labels}
              redirectUrl={`/cocos-engine/issues/${issue.number}`}
            />
          )
        })}
      </div>

      <div className="mt-8 mb-4">
        <PaginationControls totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  )
}
