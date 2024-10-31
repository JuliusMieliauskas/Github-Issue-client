export async function fetchIssue(
  repo: string,
  issueNumber: number
): Promise<any> {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/issues/${issueNumber}`
  )
  const issuesData = await response.json()
  return issuesData
}

export async function fetchIssueComments(url: string) {
  const response = await fetch(url)
  const commentsData = await response.json()
  return commentsData
}
