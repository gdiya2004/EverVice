import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ToastContainer} from "react-toastify"
import {App} from './App.jsx'
import { AuthProvider } from "../src/store/auth.jsx"
import "react-toastify/dist/ReactToastify.css"
// import { ClerkProvider } from '@clerk/clerk-react'
import { ProductContextProvider } from '../Contexts/ProductContext.jsx'
import { FilterContextProvider } from '../Contexts/filterContext.jsx'
const {VITE_CLERK_PUBLISHABLE_KEY}=import.meta.env;
const publishableKey=VITE_CLERK_PUBLISHABLE_KEY
createRoot(document.getElementById('root')).render(
 <AuthProvider>
  {/* <ClerkProvider publishableKey={publishableKey}> */}
    
  {/* <ClerkProvider publishableKey={publishableKey}>
     */}
          <ProductContextProvider>
          <FilterContextProvider>
        <App />
        </FilterContextProvider>
    </ProductContextProvider>
   

    {/* </ClerkProvider> */}

    <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    bodyClassName="toastBody"
    />
 </AuthProvider>
)
