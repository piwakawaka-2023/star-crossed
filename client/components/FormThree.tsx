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

  function submit(evt: FormEvent) {
    evt.preventDefault()
    setNewUser({
      ...newUser,
      preference: JSON.stringify(newUser.preference),
    })
    dispatch(addUserThunk(newUser))
    window.location.replace('http://localhost:5173/login')
  }
  function back(evt: FormEvent) {
    evt.preventDefault()
    setFormPage(formPage - 1)
  }

  return (
    <>
      <h1>Upload a profile photo:</h1>
      <input
        id="avatar"
        name="avatar"
        type="file"
        onChange={handleAvatar}
      ></input>
      <div className="formInput">
        <label htmlFor="bio">Write your bio:</label>
        <input
          type="text"
          id="bio"
          value={newUser.bio}
          onChange={handleChange}
        />
      </div>
      <button onClick={back}>Back</button>
      <button onClick={submit}>Submit</button>
    </>
  )
}
