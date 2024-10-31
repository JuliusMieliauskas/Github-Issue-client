export async function getEmoji(emoji: string) {
  const allEmojis = await fetch("https://api.github.com/emojis")
  const emojis = await allEmojis.json()
  return emojis[emoji]
}
