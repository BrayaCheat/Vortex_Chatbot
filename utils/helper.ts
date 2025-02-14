export const profileList = () => {
  const path = '/profiles'
  const profiles = []
  for(let i = 0; i < 10; i++){
    profiles.push(`${path}/profile${i+1}.png`)
  }
  return profiles
}