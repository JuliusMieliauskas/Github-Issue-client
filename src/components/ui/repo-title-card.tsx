"use client"

import { useRouter } from "next/navigation"
import { Card, CardDescription, CardHeader, CardTitle } from "./card"

export function RepoTitleCard(props: {
  repoName: string
  originalAuthor: string
}) {
  const router = useRouter()
  return (
    <Card
      className="w-[250px]"
      onClick={() => router.push("/" + props.repoName.toLowerCase())}
    >
      <CardHeader className="flex items-center">
        <CardTitle>{props.repoName}</CardTitle>
        <CardDescription className="flex">
          By <span className="font-bold ml-1">{props.originalAuthor}</span>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
