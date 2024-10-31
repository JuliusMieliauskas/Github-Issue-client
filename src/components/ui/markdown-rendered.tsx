import ReactMarkdown, { Components } from "react-markdown"

// Define props for custom components
interface CustomHeadingProps {
  level: number
  children: React.ReactNode
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ level, children }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements // Dynamically create heading tag
  return <HeadingTag className="text-2xl font-bold my-4">{children}</HeadingTag>
}

const CustomParagraph: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <p className="text-gray-800">{children}</p>
}

const CustomLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <a href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  )
}

const CustomList: React.FC<{
  ordered?: boolean
  children: React.ReactNode
}> = ({ ordered, children }) => {
  const listClass = "list-disc pl-5 mb-4 text-gray-800" // Tailwind classes for unordered lists
  const orderedClass = "list-decimal pl-5 mb-4 text-gray-800" // Tailwind classes for ordered lists

  return <ul className={ordered ? orderedClass : listClass}>{children}</ul>
}

const CustomBlockquote: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <blockquote className="mt-6 border-l-4 border-stone-600 pl-6 italic">
      {children}
    </blockquote>
  )
}

const CustomCode: React.FC<{ children: React.ReactNode; inline?: boolean }> = ({
  children,
}) => {
  return (
    <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  )
}

const CustomDiv: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="gap-y-2">{children}</div>
}

const CustomPre: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="bg-gray-100 p-4 rounded">{children}</div>
}

interface MarkdownRendererProps {
  markdownContent: string
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  markdownContent,
}) => {
  const components: Components = {
    h1: ({ ...props }) => (
      <CustomHeading level={1} {...props}>
        {props.children}
      </CustomHeading>
    ),
    h2: ({ ...props }) => (
      <CustomHeading level={2} {...props}>
        {props.children}
      </CustomHeading>
    ),
    h3: ({ ...props }) => (
      <CustomHeading level={3} {...props}>
        {props.children}
      </CustomHeading>
    ),
    p: ({ ...props }) => (
      <CustomParagraph {...props}>{props.children}</CustomParagraph>
    ),
    a: ({ ...props }) => (
      <CustomLink href={props.href as string} {...props}>
        {props.children}
      </CustomLink>
    ),
    ul: ({ ...props }) => <CustomList {...props}>{props.children}</CustomList>,
    ol: ({ ...props }) => (
      <CustomList ordered {...props}>
        {props.children}
      </CustomList>
    ),
    blockquote: ({ ...props }) => (
      <CustomBlockquote {...props}>{props.children}</CustomBlockquote>
    ),
    code: ({ ...props }) => (
      <CustomCode {...props}>{props.children}</CustomCode>
    ),
    div: ({ ...props }) => <CustomDiv {...props}>{props.children}</CustomDiv>,
    pre: ({ ...props }) => <CustomPre {...props}>{props.children}</CustomPre>,
  }

  return (
    <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
  )
}
