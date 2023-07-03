import { useState } from 'react'
import { ChangeEvent, FormEvent } from 'react'
import { useAppDispatch } from '../hooks/hooks'

import { editUserThunk } from '../actions/profile'

interface Props {
  profileId: number
  formId: string
}

function EditDropDown(props: Props) {
  const dispatch = useAppDispatch()

  const { formId, profileId } = props
  const [formData, setFormData] = useState({})

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = evt.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(editUserThunk(profileId, formData))
  }

  return (
    <div className="dropdown">
      <button>edit</button>
      <div id="myDropdown" className="dropdown-content">
        <form onSubmit={handleSubmit}>
          <label htmlFor={formId}>{formId}</label>
          <input
            type="string"
            name={formId}
            id={formId}
            onChange={handleChange}
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditDropDown

// <button onClick={dropDown} className="dropbtn">
//    edit
// </button>
