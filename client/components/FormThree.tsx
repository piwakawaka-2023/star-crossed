import { NewUser } from '../../models/Users'
import { FormEvent, ChangeEvent, useState } from 'react'
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

  function handleAvatar(evt: ChangeEvent<HTMLInputElement>) {
    if (evt.target.files !== null) {
      const avatarArr = newUser.avatar
      avatarArr.push(evt.target.files[0])
      console.log(evt.target.files[0])
      setNewUser({
        ...newUser,
        avatar: avatarArr,
      })
    }
  }
  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value, id } = evt.target
    setNewUser({
      ...newUser,
      [id]: value,
    })
  }

  async function submit(evt: FormEvent) {
    evt.preventDefault()

    setNewUser({
      ...newUser,
    })
    dispatch(addUserThunk(newUser))
    window.location.replace('http://localhost:5173/login')
  }
  function back(evt: FormEvent) {
    evt.preventDefault()
    setFormPage(formPage - 1)
  }

  return (
    <div className="form3Container">
      <h1>Upload a profile photo:</h1>
      <label id="avatar">
        Upload
        <input id="avatar" name="avatar" type="file" onChange={handleAvatar} />
      </label>

      <div className="formInput">
        <label htmlFor="bio">Write your bio:</label>
        <input
          type="text"
          id="bio"
          value={newUser.bio}
          onChange={handleChange}
        />
      </div>
      <div className="buttonPair">
        <button id="f3_back" onClick={back}>
          Back
        </button>
        <button id="f3_next" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  )
}
