import { ChangeEvent, FormEvent, useState } from 'react'
import { NewUser } from '../../models/Users'
import { fetchStarSigns } from '../apis/starSigns'
import { StarSign } from '../../models/StarSigns'

interface Props {
  newUser: NewUser
  formPage: number
  setNewUser: React.Dispatch<React.SetStateAction<NewUser>>
  setFormPage: React.Dispatch<React.SetStateAction<number>>
}

export default function FormOne(props: Props) {
  const { newUser, setNewUser, formPage, setFormPage } = props

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value, id } = evt.target
    setNewUser({
      ...newUser,
      [id]: value,
    })
  }

  async function getStarSign(evt: FormEvent) {
    evt.preventDefault()
    console.log('finding your star sign')
    const [year, month, day] = newUser.birthday.split('-')
    const starSigns = (await fetchStarSigns()) as StarSign[]
    console.log(starSigns)
    console.log(`${month} / ${day}`)
    starSigns.forEach((sign) => {
      //split sign date range and run comparison
      //if month matches, check day
      const range = sign.date_range.split('-')
      const [monthOne, dayOne] = range[0].split('/')
      const [monthTwo, dayTwo] = range[1].split('/')
      if (
        (Number(month) === Number(monthOne) && Number(day) >= Number(dayOne)) ||
        (Number(month) === Number(monthTwo) && Number(day) <= Number(dayTwo))
      ) {
        setNewUser({
          ...newUser,
          star_sign_id: sign.id,
        })
        console.log(newUser)
      }
    })
    // setFormPage(formPage + 1)
  }

  return (
    <form onSubmit={getStarSign}>
      <div className="formInput">
        <label htmlFor="name">Tell us your name, cutie!</label>
        <input
          type="text"
          id="name"
          value={newUser.name}
          onChange={handleChange}
        />
      </div>
      <div className="formInput">
        <label htmlFor="birthday">Please select your date of birth:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={newUser.birthday}
          onChange={handleChange}
        />
        <button>Next</button>
      </div>
    </form>
  )
}
