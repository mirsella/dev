function generateHashtag (str) {
  let hashtag = "#"
    str.split(' ').forEach(e => {
        hashtag += (e.charAt(0).toUpperCase() + e.slice(1))
        })
  return ((hashtag == "#" || hashtag.length > 140) ? false : hashtag)
}
