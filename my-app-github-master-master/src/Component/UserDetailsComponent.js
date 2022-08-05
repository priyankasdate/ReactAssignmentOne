import React, { useEffect ,useState } from 'react'
import axios from 'axios'
 import "./UserComponent.css";


function UserDetailsComponent() {

  const [namesArray, setNamesArray] = useState([]);
  const [user, setUser] = useState([]);
  useEffect ( () => {
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
  },[])

  return (
    <>
      {
        <div >
        {user.map((value , key)=>{
          // namesArray.push(value.name);
          return(
            <div className='tbldata'>
            <table>
            <tr key={key} className="userdata">
              <tr><th>Name : {value.name}</th></tr>  

             <tr> <td>Email:  {value.email}</td></tr>

             <tr> <td>Phone: {value.phone}</td></tr>

             <tr> <td>Company: {value.company.name}</td></tr>

             <tr> <td>Website: {value.website}</td></tr>
              
             <tr> <td>Address:{value.address.street},{value.address.suite},{value.address.city},{value.address.zipcode}</td></tr>
            </tr>
            </table>
            </div>
          )
        })}
      
      </div>
      
    }
      

    </>
  )
}

export default UserDetailsComponent