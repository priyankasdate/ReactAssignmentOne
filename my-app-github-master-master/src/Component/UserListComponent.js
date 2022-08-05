
import React, { useEffect ,useState } from 'react'
import axios from 'axios'
import ImageComp from './ImageComp'

function UserDetailsComp() {

  const [user, setUser] = useState([])
  useEffect ( () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data)
        // console.log(response);
      })
  })

  return (
    <>
      {
        <div className='user'>
      <table>
       
        {user.map((value , key)=>{
          return(
            <tr key={key}>
              <th>{value.name}</th>
              <td>{value.email}</td>
              <td>{value.phone}</td>
              <td>{value.company.name}</td>
              <td>{value.website}</td>
              <td>{value.address.street},{value.address.suite},{value.address.city},{value.address.zipcode}</td>
            </tr>
          )
        })}
      </table>
      </div>
      /* <div className='container'>
        <div className='row'>
          {
            user.map((value) => {
              return (

                <div className="card mb-3" style={{ width: "18rem" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h1 >{value.name}</h1>
                        <p >Email : {value.email}</p>
                        <p >Phone :{value.phone}</p>
                        <p >Company : {value.company.name}</p>
                        <p >Website : {value.website}</p>
                        <p >Address : {value.address.street},{value.address.suite},{value.address.city},{value.address.zipcode}</p>

                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div> */}

    </>
  )
}

export default UserDetailsComp







