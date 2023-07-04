import { NewUser } from '../../models/Users'
import { FormEvent } from 'react'
import { addUserThunk } from '../actions/profile'
import { useAppDispatch } from '../hooks/hooks'

interface Props {
  newUser: NewUser
  formPage: number
  setNewUser: React.Dispatch<React.SetStateAction<NewUser>>
  setFormPage: React.Dispatch<React.SetStateAction<number>>
}

export default function FormThree(props: Props) {
  const { newUser, setNewUser, formPage, setFormPage } = props
  const dispatch = useAppDispatch()

  function submit(evt: FormEvent) {
    evt.preventDefault()
    setNewUser({
      ...newUser,
      preference: JSON.stringify(newUser.preference),
    })
    dispatch(addUserThunk(newUser))
  }
  function back(evt: FormEvent) {
    evt.preventDefault()
    setFormPage(formPage - 1)
  }

  return (
    <div className="form3Container">
      <img src="images/icons/profileImg.png" alt="profile" />
      <h2>You&apos;ll upload an image here soon!</h2>
      <div className="buttonPair">
      <button  id='f3_back' onClick={back}>Back</button>
      <button  id='f3_next' onClick={submit}>Submit</button>
      </div>
      
    </div>
  )
}
