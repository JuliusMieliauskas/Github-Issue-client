"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import { useSearchParams } from "next/navigation"

interface PaginationControlsProps {
  totalPages: number
  currentPage: number
}

export function PaginationControls({
  totalPages,
  currentPage,
}: PaginationControlsProps) {
  const searchParams = useSearchParams()

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `?${params.toString()}`
  }

  const getVisiblePages = () => {
    const delta = 1
    const range: (number | string)[] = []

    // Always add the first page
    range.push(1)

    // Define the range start and end
    const rangeStart = Math.max(2, currentPage - delta)
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta)

    // Add ellipsis if there is a gap after the first page
    if (rangeStart > 2) {
      range.push("...")
    }

    // Add all pages between the range start and end
    for (let i = rangeStart; i <= rangeEnd; i++) {
      range.push(i)
    }

    // Add ellipsis if there is a gap before the last page
    if (rangeEnd < totalPages - 1) {
      range.push("...")
    }

    // Always add the last page if there are multiple pages
    if (totalPages > 1) {
      range.push(totalPages)
    }

    return range
  }

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={createPageURL(currentPage - 1)} />
          </PaginationItem>
        )}

        {getVisiblePages().map((page, index) => (
          <PaginationItem key={index}>
            {typeof page === "number" ? (
              <PaginationLink
                href={createPageURL(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={createPageURL(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
