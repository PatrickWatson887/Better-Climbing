import Geocode from 'react-geocode'

Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_PUBLIC_KEY)
Geocode.setLanguage('en')
Geocode.setRegion('gb')

export default async function geocode(address: string) {
  let results = { lat: 0, lng: 0 }
  try {
    const response = await Geocode.fromAddress(address)
    response.results[0].types.forEach((type: string) => {
      if (type === 'locality') {
        results = response.results[0].geometry.location
      }
    })
  } catch {}

  return results
}
