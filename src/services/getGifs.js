const apiKey = 'e0OwLlRZRwcCo8hjMOAu01VGFBsi89Q8'

export default function getGifs({keyword = 'morty'} = {}) {
  
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  return fetch(apiURL)
  .then(res => { return res.json()})
  .then(response => {
    const {data = []} = response // valor por defecto por si data viene undefined
    const gifs = data.map((image) => {
      const {images, title, id} =  image
      const {url} =  images.downsized_medium
      return {title, id, url}
    })
    return(gifs)
  })
}