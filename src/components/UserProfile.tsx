import type { UserType } from '../types/UserType'

interface UserProfileProps {
    user: UserType
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.image} alt={user.name} />
      <p>Title: {user.title}</p>
    </div>
  )
}

export default UserProfile