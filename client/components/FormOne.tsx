import { ChangeEvent, FormEvent } from 'react'
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

  function getAge(year: string, month: string, day: string) {
    const calendar = {
      jan: 1,
      feb: 2,
      mar: 3,
      apr: 4,
      may: 5,
      jun: 6,
      jul: 7,
      aug: 8,
      sep: 9,
      oct: 10,
      nov: 11,
      dec: 12,
    }
    const today = new Date(Date.now())
    const [wkday, thisMonth, thisDay, thisYear] = String(today).split(' ')
    const thisMonthNumber =
      calendar[thisMonth.toLowerCase() as keyof typeof calendar]
    let age = 0
    if (Number(month) === thisMonthNumber && Number(day) < Number(thisDay)) {
      age = Number(thisYear) - Number(year) - 1
    } else if (Number(month) > thisMonthNumber) {
      age = Number(thisYear) - Number(year) - 1
    } else {
      age = Number(thisYear) - Number(year)
    }
    return age
  }

  async function getStarSign(evt: FormEvent) {
    evt.preventDefault()
    const [year, month, day] = newUser.birthday.split('-')
    const starSigns = (await fetchStarSigns()) as StarSign[]
    const age = await getAge(year, month, day)
    starSigns.forEach((sign) => {
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
          age: age,
          compatibility: sign.default_compatibility,
        })
      }
    })
    setFormPage(formPage + 1)
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
        <div id="btn_solo">
          <button className="buttonSolo">Next</button>
        </div>
      </div>
    </form>
  )
}
