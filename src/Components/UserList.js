import React from 'react'
import UserCard from './UserCard'

const UserList = ({list}) => {
    // console.log(list)
  return (
    <div>{list&&React.Children.toArray(list.map(user=><UserCard user={user}/>))}</div>
  )
}

export default UserList