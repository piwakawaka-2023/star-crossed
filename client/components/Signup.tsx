import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
import { NewUser } from '../../models/Users'
import FormThree from './FormThree'

//Builds new user objects for the db at component level
//Has multiple children which are form pages

export default function Signup() {
  const { user } = useAuth0()
  const [newUser, setNewUser] = useState({
    auth0_id: user?.sub,
    name: '',
    age: NaN,
    email: user?.email,
    gender: '',
    preference: [],
    bio: 'Tell us about yourself!',
    birthday: '',
    image: 'images/user',
    star_sign_id: NaN,
    matches: '',
    compatibility: '',
  } as NewUser)
  const [formPage, setFormPage] = useState(0)
  useEffect(() => {
    console.log(user)
  })

  return (
    <>
      <h1>Signup here</h1>
      {formPage === 0 && (
        <FormOne
          newUser={newUser}
          formPage={formPage}
          setNewUser={setNewUser}
          setFormPage={setFormPage}
        />
      )}
      {formPage === 1 && (
        <FormTwo
          newUser={newUser}
          formPage={formPage}
          setNewUser={setNewUser}
          setFormPage={setFormPage}
        />
      )}
      {formPage === 2 && (
        <FormThree
          newUser={newUser}
          formPage={formPage}
          setNewUser={setNewUser}
          setFormPage={setFormPage}
        />
      )}
    </>
  )
}
