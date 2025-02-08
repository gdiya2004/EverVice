import { useState } from "react";
import {useAuth} from "../store/auth"

export const Contact = ({isOpen,onClose}) => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData,setUserData]=useState(true);
  const {user}=useAuth();
  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    })
    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const contact_data=await fetch("http://localhost:5004/api/form/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(contact),
      });
      if(contact_data.ok){
        setContact(
          {
            username: "",
            email: "",
            message: "",
          }
        );
        const data=contact_data.json();
        console.log(data);
        alert("Mssg sent successfully")
      }else{
        console.log("err in contact")
      }
    }catch(err){
      console.log(err);
    }
    // console.log(contact);
  };

  if(!isOpen) return null ;
  return (
    <>
      <section className="section-registration2" onClick={onClose}>
        <div
          className="container grid2 grid-two-cols"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>

          <section className="registration-form">
            <h1 className="main heading mb-3">CONTACT US</h1>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  placeholder="username"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="email"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  placeholder="message"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};