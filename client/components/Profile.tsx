/****************
 *    Profile   *
 ****************/

import { UserProfile } from '../../models/profile'
import data from '../../data/db.json'

export default function Profile() {
  const testProfile = data[0]

  return (
    <div className="profile-container">
      
      <img src={'/' + testProfile.image} alt="Steve's profile" />
      {/* eslint-disable-next-line react/no-unescaped-entities*/}
      <h1>{testProfile.name}'s Profile</h1>
      <p className="profile-Info">{testProfile.age}</p>
      <p className="profile-Info">{testProfile.gender}</p>
      <p className="profile-Info">{testProfile.preference}</p>
      <p className="profile-Info">{testProfile.bio}</p>
      <p className="profile-Info">{testProfile.birthday}</p>
      <p className="profile-Info">{testProfile.starSign}</p>
      <p className="profile-Info">{testProfile.matches}</p>
      <p className="profile-Info">{testProfile.compatibility}</p>
    </div>
  )
}
