import axios from "axios"
import { useState} from "react"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

const Edit = () => {
  const {info} = useSelector((store) => store.user)
  const [applicant, setApplicant] = useState(info)
  
  const handleChange = (e) => {
    setApplicant({...applicant, [e.target.name]: e.target.value})
  }

  const handleSubmit = async () => {
    try{
      const url = "http://localhost:4000/awesome/applicant/1"
      const applicant = {
        "firstname": firstname,
        "lastname": lastname 
      }
      await axios.put(url, applicant)
    }
    catch(error){
      console.log(error)
    }
  }
  
  return (
    <div>
      <button onClick={() => useNavigate('/')}></button>
      <h1> Edit </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'> First Name </label>
        <input
            type='text'
            id='firstname'
            name='firstname'
            value={applicant.firstname}
            onChange={handleChange}/>
        <label htmlFor='lastname'> Last Name </label>
        <input
            type='text'
            id='lasttname'
            name='lastname'
            value={applicant.lastname}
            onChange={handleChange}/>
      </form>

    </div>
  )
}
export default Edit