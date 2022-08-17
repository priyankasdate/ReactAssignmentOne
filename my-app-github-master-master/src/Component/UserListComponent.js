import React, { useState } from 'react'
import "./UserComponent.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function UserListComponent(props) {
    const [user] = useState([]);
    const navigate = useNavigate();
    const onEdit = (event, props) => {
        // props.history.push("/EditComp/" + props)
        navigate('/EditComp', { state: { user: props } });

    }

    const DeleteUser = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(resp => {
                console.log(resp);

            })

    }

    //console.log(props.url)
    return (
        <div className='container'>
            <table className="userdata">
                <tr>

                    <td className='imgurl'>
                        <img src={props.url} alt=""></img>
                    </td>
                    <td>
                        <tr><th> {props.name}</th></tr>

                        <tr> <td>Email: {props.email}</td></tr>

                        <tr> <td>Phone: {props.phone}</td></tr>

                        <tr> <td>Company: {props.company.name}</td></tr>

                        <tr> <td>Website: {props.website}</td></tr>

                        <tr> <td>Address: {props.address.street},{props.address.suite},{props.address.city},{props.address.zipcode}</td></tr>
                    </td>

                    <td><button onClick={(e) => onEdit(e, props)}>Edit</button></td>
                    <td><button onClick={() => DeleteUser(user.id)}>Delete</button></td>

                </tr>
            </table>
        </div>
    )
}

export default UserListComponent