// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;








import "./App.css"
 
import Navbar from "./Components/navbar/Navbar"
import { Routes, Route, Navigate } from "react-router-dom"
// import Footer from "./Components/navbar/Navbar"
 
 
import Signup from "./Components/signup/Signup"
 
import Login from "./Components/login/Login"

import { useSelector } from 'react-redux'
import Profile from "./Components/profile/Profile"
import AboutUs from "./Components/about/AboutUs"
 
 
function App() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <Navbar />
      <AboutUs/>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App