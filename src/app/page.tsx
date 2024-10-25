import { RepoTitleCard } from "@/components/ui/repo-title-card"
import { Label } from "@/components/ui/label"

export default async function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-y-4 pb-64">
      <Label className="text-2xl text-bold">
        Choose one of the following repos
      </Label>
      <RepoTitleCard repoName="Hummingbot" originalAuthor="hummingbot" />
      <RepoTitleCard repoName="Cocos-Engine" originalAuthor="cocos" />
      <RepoTitleCard repoName="JSON" originalAuthor="nlohmann" />
    </div>
  )
}
