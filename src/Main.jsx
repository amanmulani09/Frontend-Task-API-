import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);

  const [userData,setUserData ] = useState([])
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userData]);



  
  const btnClick = (e)=>{

    

    switch(e.target.innerText){
      case '7': 
    return featchUser(7)
   
     case '8':
      return featchUser(8)
      case '9': 
      return featchUser(9)
     case '10':
      return featchUser(10)
      case '11':
        return featchUser(11)
        case '12':
          return featchUser(12)
        default: 
        return null;

    }



  }

  const featchUser = (n)=>{
    const userId = n;
    axios.get(`https://reqres.in/api/users/${userId}`).then((res)=>{
      console.log(res.data)
      setUserData(res.data.data)
    })
  }

  return (
    <div className="main">
      <div className="card">
        <div className="img">

          <img src={userData.avatar} alt="" />
          <div className="info">

         <span className="name     "> {userData.first_name ? userData.first_name : <p className="error">Please Click To any Button</p>}            
            </span>
         <span className="surname">           {userData.last_name}</span> <br/>
         <span className="email">{userData.email}</span>
          </div>
        </div>
      
      </div>

      <div className="btnContainer">
        {data.map((element) => {
          return <button key={element.id} onClick={btnClick}>{element.id}</button>;
        })}
      </div>
    </div>
  );
};
export default Main;
