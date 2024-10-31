/* eslint-disable */

"use client"

import { useRouter } from "next/navigation"
import { Card, CardDescription, CardHeader, CardTitle } from "./card"
import { formatDate } from "@/lib/utils"
import { MessageSquare } from "lucide-react"

export function IssueCard(props: {
  issueName: string
  author: string
  createdAt: Date
  commentsCount: number
  labels: any[]
  redirectUrl: string
}) {
  const router = useRouter()
  return (
    <Card
      onClick={() => {
        router.push(props.redirectUrl)
      }}
    >
      <CardHeader className="flex justify-start">
        <CardTitle className="flex justify-between">
          <div>{props.issueName}</div>
          <div className="flex">
            <MessageSquare size="16px" />
            <span className="ml-2">{props.commentsCount}</span>
          </div>
        </CardTitle>
        <CardDescription className="flex gap-x-8">
          <span className="">
            Opened by: <span className="font-bold">{props.author}</span>
          </span>
          <span>{formatDate(props.createdAt)}</span>
          {/* {props.labels.map((label: any) => {
            return (
              <IssueTag
                key={_.uniqueId()}
                tagName={label.name}
                tagColor={label.color}
              />
            )
          })} */}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
