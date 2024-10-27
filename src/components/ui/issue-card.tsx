"use client"

import { useRouter } from "next/navigation"
import { Card, CardDescription, CardHeader, CardTitle } from "./card"
import _ from "lodash"
import { formatDate } from "@/lib/utils"
import { MessageSquare } from "lucide-react"

export function IssueCard(props: {
  issueName: string
  author: string
  createdAt: Date
  commentsCount: number
  labels: any[]
}) {
  const router = useRouter()
  return (
    <Card className="">
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
