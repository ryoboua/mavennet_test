const basePhotoURL = "https://jsonplaceholder.typicode.com/photos"

async function fetchPhotos(lastFetchedId = 0, amount = 5) {
  let result = []

  for(let i = 0; i < amount; i++) {
      const pic = await fetch(`${basePhotoURL}/${lastFetchedId + 1 + i}`)
      .then(res => res.json())
      result.push(pic)
  }
  return result
}

export default { fetchPhotos }
