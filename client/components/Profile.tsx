/****************
 *    Profile   *
 ****************/

import { UserProfile } from '../../models/profile'
import data from '../../data/db.json'

export default function Profile() {
  const testProfile = data[0]
  return <h3>{testProfile.name}&apos s Profile</h3>
}
