import React ,{useState} from 'react'
import axios from 'axios'

function UserDetailsComponent() {

    const [user,setUser]= useState([])
    const fetchUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
           setUser(response.data)
          // console.log(response);
        })
        }
    
  return (
    <>
    <div>
    <button className='btn btn-primary' onClick={fetchUsers}>FetchUsers</button>
    </div>
   <div className='container'>
    <div className='row'> 
       {  
        user.map((value)=>{
            return(
                <div className='col-4'>
                <div className="card" style={{width: "1 8rem"}}>
          <img src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h1 className="card-title">{value.name}</h1>
            <p className="card-text">Email : {value.email}</p>
            <p className="card-text">Phone :{value.phone}</p>
            <p className="card-text">Website : {value.website}</p>
            <p className="card-text">Website : {value.address.street}, {value.address.suite}, {value.address.city}, {value.address.zipcode}</p>
            <p className="card-text">company : {value.company.name}</p>
          </div>
        </div>
                </div>
            )
        })
       }
    </div>
   </div>

    </>
  )
  }

export default UserDetailsComponent