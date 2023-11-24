import React from 'react'

export default function UserComponent(props) {
    
  return (
    <>
        <ul className="flex flex-col items-center gap-3 border-2 rounded-3xl item pt-2 pb-2 shadow-xl card">
            <li className="text-2xl transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg">{props.data.first_name} {props.data.last_name}</li>
            <img className="img2"src={props.data.avatar} alt="" width="150px" />
            <li>User Id : {props.data.id}</li> 

            <li>Mail to : <a href="https://www.google.co.in/">{props.data.email}</a></li>
            <li className="pl-4 pr-4 pt-2 pb-2 border-2 btn2 duration-700 ease-in-out transform hover:scale-110 hover:shadow-lg"><button className="font-semibold ">Go To Profile</button></li>
        </ul>
    </>
  )
}
