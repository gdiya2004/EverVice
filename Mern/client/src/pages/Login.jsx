import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"
import { SignInButton} from "@clerk/clerk-react";

export const Login=({isOpen,onClose})=>{
   
    const [user,setUser]=useState({
        email:"",
        password:"",
    })
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value,
        })
    }
    const navigate=useNavigate();
    const {storeTokenInLS}=useAuth();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        // alert(user);
        console.log(user);
       try{
        const response=await fetch("http://localhost:5004/api/auth/login",
            {
             method:"POST",
             headers:{
                 'Content-Type':"application/json",
             },
             body:JSON.stringify(user),
            }
         )
         const res_data=await response.json();
         console.log(res_data);
         if(response.ok){
            setUser({email:"",password:""});
            toast.success("login successfull", { autoClose: 3000 });
            // const res_data=await response.json();

            storeTokenInLS(res_data.token);
            // localStorage.setItem("token",res_data.token);

            navigate("/");
         }else{
            // const errorData = await response.json();
            // console.log(errorData);
            toast.error(res_data.extraDetails?res_data.extraDetails:res_data.msg)
         }
       }catch(error){
        console.log("login",error);
        toast.error("An error occurred. Please try again.");
       }
    }
     if (!isOpen) return null;
    return (
      <>
        <main>
          <div className="section-registration2" onClick={onClose}>
            <div
              className="container grid2 grid-two-cols"
              onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={onClose}>
                ✖
              </button>
              <div className="registration-form">
                <h1 className="main heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="email"
                      id="email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="password"
                      id="password"
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                  {/* <SignInButton/> */}
                </form>
              </div>
            </div>
          </div>
        </main>
      </>
    );
}