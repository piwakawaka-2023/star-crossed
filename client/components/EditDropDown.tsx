import { useState } from 'react'
import * as actions from '../actions/profile'
import { useAppDispatch } from '../hooks/hooks'

interface Props {
  props: { id: number; name: string }
}

function EditDropDown({ props }: Props) {
  const dispatch = useAppDispatch()

  function dropDown() {
    document.getElementById('myDropdown').classList.toggle('show')
  }

  //* handling the form
  const [formData, setFormData] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(actions.editUserThunk(props.id, { [props.name]: formData }))
  }

  return (
    <div className="dropdown">
      <button onClick={dropDown} className="dropbtn">
        edit
      </button>
      <div id="myDropdown" className="dropdown-content">
        <form onSubmit={handleSubmit}>
          <label htmlFor={props.name}>{props.name}</label>
          <input
            type="string"
            name={props.name}
            id={props.name}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  )
}

export default EditDropDown
