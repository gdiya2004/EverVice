// import { NavLink } from "react-router-dom";
// import { useAuth } from "../store/auth";
// export const About = () => {
//   const {user}=useAuth();
//   return (
//     <>
//      <img src="./images/event.jpg"/>
//     </>
//   );
// };
import React from 'react';

export const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Planning an event should be exciting, not overwhelming! At <strong>EverVice</strong>, 
                we simplify the process by connecting you with trusted event service providers based on your location. 
                Whether you need a <strong>caterer, decorator, DJ, photographer, electrician</strong>, or any other service, 
                we bring the best options right to your fingertips.
            </p>
            
            <p>
                Our platform is designed to <strong>save you time and effort</strong> by curating a list of reliable vendors near you. 
                Simply enter your location, choose the service you need, and explore a selection of professionals who can help 
                bring your event to life.
            </p>
            
            <p>
                We believe in making event planning <strong>hassle-free, efficient, and personalized</strong>. 
                With verified listings and a user-friendly interface, we ensure that you find the right services without any stress. 
                Whether you're organizing a wedding, a corporate event, or a private gathering, 
                <strong>EverVice</strong> is your go-to solution for all your event needs.
            </p>

            <h2>📍 Find. Connect. Celebrate. 🎉</h2>
        </div>
    );
};

