function jadenTalk(text) {
  const clearedText = text.replace(/[.,!?]/g, "")

  const result = clearedText.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
  return result

}

module.exports = jadenTalk