import { useSelector } from "react-redux"

const UserCard = () => {
  const {user} = useSelector(state=>state.users)
  return (
    <div style={{ display:'flex',justifyContent:'center',marginTop:'30px', gap:"100px"}}>
      <span>name:{user.name}</span>
      <span>email:{user.email}</span>
      <span>age:{user.age}</span>
      <span>gender:{user.gender}</span>
      <span>profile:{user.profile}</span>
    </div>
  )
}

export default UserCard
