import { NewUser } from '../../models/Users'

interface Props {
  newUser: NewUser
  formPage: number
  setNewUser: React.Dispatch<React.SetStateAction<NewUser>>
  setFormPage: React.Dispatch<React.SetStateAction<number>>
}

export default function FormThree(props: Props) {
  const { newUser } = props
  const keys = Object.keys(newUser)

  return (
    <ul>
      {keys.map((key, i) => {
        return (
          <li key={i}>
            {key}: {newUser[key as keyof typeof newUser]}
          </li>
        )
      })}
    </ul>
  )
}
