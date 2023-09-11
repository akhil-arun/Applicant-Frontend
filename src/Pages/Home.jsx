import Image from '../assets/user-profile.jpeg'
import UserInfo from '../Components/UserInfo'
import { useState, useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { getUserInfo } from '../features/userSlice'



const Home = () => {
  const dispatch = useDispatch()
  const [info, setInfo] = useState(false)
 

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  
  return (
    <div>
      <img src = {Image} onClick={() => setInfo(!info)}></img>
      {info && <UserInfo/>}
    </div>
  )
}
export default Home
