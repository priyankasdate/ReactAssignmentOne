import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./UserComponent.css"
import UserListComponent from './UserListComponent';


function UserDetailsComponent() {

  const [namesArray, setNamesArray] = useState([]);
  const [user, setUser] = useState([]);
 
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
        let namesTempArray = [];
        for (let i = 0; i < user.length; i++) {
          namesTempArray.push(user[i].name);

        }
        setNamesArray(namesTempArray);
        console.log(namesArray);
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