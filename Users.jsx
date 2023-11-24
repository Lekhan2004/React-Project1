import React from 'react'
import UserComponent from './UserComponent'
import './Parent.css'
export default function Users() {

    let users=[
        {
          id: 1,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 2,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 3,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
          id: 4,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
        {
          id: 5,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://reqres.in/img/faces/11-image.jpg",
        },
        {
          id: 6,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar: "https://reqres.in/img/faces/12-image.jpg",
        },
      {
        id: 7,
        email: "John.peterson@reqres.in",
        first_name: "Johnnathan",
        last_name: "Williams",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      }, {
        id: 8,
        email: "Lincoln.ferguson@reqres.in",
        first_name: "Willam",
        last_name: "Peters",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      ];
  return (
    <div className="grid grid-cols-4 text-center gap-4 pt-8 pb-8 users pl-8 pr-8">
        <UserComponent data={users[0]}></UserComponent>
        <UserComponent data={users[1]}></UserComponent>
        <UserComponent data={users[2]}></UserComponent>
        <UserComponent data={users[3]}></UserComponent>
        <UserComponent data={users[4]}></UserComponent>
        <UserComponent data={users[5]}></UserComponent>
        <UserComponent data={users[6]}></UserComponent>
        <UserComponent data={users[7]}></UserComponent> 
        
            {/* for(let i=0;i<users.length;i++){
            <UserComponent data={users[i]}> </UserComponent>
            } */}
        
    </div>
  )
}
