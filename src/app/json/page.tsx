import { IssueCard } from "@/components/ui/issue-card"
import { PaginationControls } from "@/components/ui/pagination-control"
import { getIssuesForRepo } from "../actions/get-issues"

export default async function Json({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const currentPage = parseInt(searchParams.page || "1")

  const { totalPages, issuesData } = await getIssuesForRepo(
    "nlohmann/json",
    currentPage
  )
  return (
    <div className="w-full mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold">JSON</h1>
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
