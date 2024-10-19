import * as fs from "fs"

export async function getHummingbotIssues() {
  const issuesData = JSON.parse(
    fs.readFileSync("./src/app/data/hummingbot-issues.json", "utf-8")
  )
  return issuesData
}

export async function getJsonIssues() {
  const issuesData = JSON.parse(
    fs.readFileSync("./src/app/data/json-issues.json", "utf-8")
  )
  return issuesData
}

export async function getCocosIssues() {
  const issuesData = JSON.parse(
    fs.readFileSync("./src/app/data/cocos-issues.json", "utf-8")
  )
  return issuesData
}
