import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./UserComponent.css"
import UserListComponent from './UserListComponent';


function UserDetailsComponent() {

 
  const [user, setUser] = useState([]);
 
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
        
      })
  }, [])

  return (
    <>
      {
        <div >
          {user.map((value, key) => {
            
            let url = "https://avatars.dicebear.com/v2/avataaars/{{"+value.name+"}}.svg?options[mood][]=" 
            return (
              <UserListComponent name={value.name}
                email={value.email}
                phone={value.phone}
                company={value.company}
                website={value.website}
                address={value.address}
              url={url }
              />
            )
          })} 

        </div>
      }

  
    </>
  )
}

export default UserDetailsComponent