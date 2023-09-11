import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


const UserInfo = () => {
  const naviagate = useNavigate()
  const {info, isLoading} = useSelector((store) => store.user)
  console.log(info)
  
  if (isLoading){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <h1> Name : {`${info.firstname} ${info.lastname}`}</h1>
      <h2> College Attending: {info.college_attending}</h2>
      <h3> Favorite Sport: {info.fav_sport}</h3>
      <h3> Favorite Color: {info.fav_color}</h3>
      <h3> Favorite Food: {info.fav_food}</h3>
      <h3> Favorite Celebrity: {info.fav_celeb}</h3>
      <button onClick={() => naviagate("/edit")}> Edit Applicant</button>
    </div>
  )
  
}
export default UserInfo;
