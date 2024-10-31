/* eslint-disable */

export async function getIssuesForRepo(
  repo: string,
  page: number
): Promise<{
  totalPages: number
  issuesData: any[]
}> {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/issues?per_page=30&page=${page}`
  )
  const linkHeader = response.headers.get("link")
  let totalPages = page
  if (linkHeader) {
    const links = linkHeader.split(",")
    const lastLink = links.find((link) => link.includes('rel="last"'))
    if (lastLink) {
      totalPages = parseInt(lastLink.split("&page=")[1].split(">")[0])
    }
  }

  const issuesData = await response.json()
  return { totalPages, issuesData }
}
