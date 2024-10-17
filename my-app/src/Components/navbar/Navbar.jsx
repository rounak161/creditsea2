// import React, { useState } from "react";
// import classes from "./navbar.module.css";
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from "../../redux/authSlice";
// import { FaBell, FaComments, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
//       <div className={classes.wrapper}>
//         <div className={classes.left}>
//           <Link to='/'>
//             <h2 className={classes.title}>Credit App</h2>
//           </Link>
//         </div>
//         <div className={classes.center}>
//           <ul className={classes.list}>
//             <li className={classes.listItem}><a href='#'>Home</a></li>
//             <li className={classes.listItem}><a href='#about'>Payment</a></li>
//             <li className={classes.listItem}><a href='#services'>BudgetCard</a></li>
//           </ul>
          
//           {/* Icons added in the center section */}
//           <div className={classes.icons}>
//             <Link to='/notifications' className={classes.icon}>
//               <FaBell style={{ color: 'yellow' }} />
//             </Link>
//             <Link to='/chat' className={classes.icon}>
//               <FaComments style={{ color: 'yellow' }} />
//             </Link>
//             <Link to='/profile' className={classes.icon}>
//               <FaUser style={{ color: 'yellow' }} />
//             </Link>
//           </div>
//         </div>
//         <div className={classes.right}>
//           {!user ? (
//             <>
//               <Link to='/login' className={classes.login}>Login</Link>
//               <Link to='/signup' className={classes.signup}>Sign up</Link>
//             </>
//           ) : (
//             <>
//               <Link to='/create'>Create</Link>
//               <p className={classes.username}>{user.username}</p>
//               <span className={classes.logout} onClick={handleLogout}>Logout</span>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import classes from "./navbar.module.css";
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from "../../redux/authSlice";
// import { FaBell, FaComments, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
//       <div className={classes.wrapper}>
//         <div className={classes.left}>
//           <Link to='/'>
//             <h2 className={classes.title}>Credit App</h2>
//           </Link>
//         </div>
//         <div className={classes.center}>
//           <ul className={classes.list}>
//             <li className={classes.listItem}><a href='#'>Home</a></li>
//             <li className={classes.listItem}><a href='#about'>Payment</a></li>
//             <li className={classes.listItem}><a href='#services'>BudgetCard</a></li>
//           </ul>
           
//         </div>
//         <div className={classes.right}>
//           {!user ? (
//             <> 
//               <div className={classes.icons}>
//             <Link to='/notifications' className={classes.icon}>
//               <FaBell />
//             </Link>
//             <Link to='/chat' className={classes.icon}>
//               <FaComments />
//             </Link>
//             <Link to='/profile' className={classes.icon}>
//               <FaUser />
//             </Link>
//           </div>
//               <Link to='/login' className={classes.login}>Login</Link>
//               <Link to='/signup' className={classes.signup}>Sign up</Link>
//             </>
//           ) : (
//             <>
//               <Link to='/create'>Create</Link>
//               <p className={classes.username}>{user.username}</p>
//               <span className={classes.logout} onClick={handleLogout}>Logout</span>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import classes from "./navbar.module.css";
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from "../../redux/authSlice";
// import { FaBell, FaComments, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { user } = useSelector((state) => state.auth);  // Access user state from Redux
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Handle scroll to toggle navbar style
//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   // Logout function to clear user session
//   const handleLogout = () => {
//     dispatch(logout());  // Dispatch the logout action
//     navigate('/login');  // Redirect to the login page
//   };

//   return (
//     <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
//       <div className={classes.wrapper}>
//         <div className={classes.left}>
//           <Link to='/'>
//             <h2 className={classes.title}>Credit App</h2>
//           </Link>
//         </div>

//         <div className={classes.center}>
//           <ul className={classes.list}>
//             <li className={classes.listItem}><a href='#'>Home</a></li>
//             <li className={classes.listItem}><a href='#about'>Payment</a></li>
//             <li className={classes.listItem}><a href='#services'>BudgetCard</a></li>
//           </ul>
//         </div>

//         <div className={classes.right}>
//           {user ? (
//             // Show this if the user is logged in
//             <>
//               <div className={classes.icons}>
//                 <Link to='/notifications' className={classes.icon}>
//                   <FaBell />
//                 </Link>
//                 <Link to='/chat' className={classes.icon}>
//                   <FaComments />
//                 </Link>
//                 <Link to='/profile' className={classes.icon}>
//                   <FaUser />
//                 </Link>
//               </div>
//               <p className={classes.username}>{user.user}</p>  {/* Display username */}
               

//               <span className={classes.logout} onClick={handleLogout}>Logout</span>  {/* Logout button */}
//             </>
//           ) : (
//             // Show this if the user is not logged in
//             <>
//               <Link to='/login' className={classes.login}>Login</Link>
//               <Link to='/signup' className={classes.signup}>Sign up</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import classes from "./navbar.module.css";
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from "../../redux/authSlice";
// import { FaBell, FaComments, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
//   const { user } = useSelector((state) => state.auth);  // Access user state from Redux
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.pageYOffset !== 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleLogout = () => {
//     dispatch(logout());  // Dispatch the logout action
//     navigate('/login');  // Redirect to the login page
//   };

//   // Toggle dropdown menu visibility
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Log the user object to the console
//   console.log(user);  // Check the user object to see if it contains the username

//   return (
//     <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
//       <div className={classes.wrapper}>
//         <div className={classes.left}>
//           <Link to='/'>
//             <h2 className={classes.title}>Credit App</h2>
//           </Link>
//         </div>

//         <div className={classes.center}>
//           <ul className={classes.list}>
//             <li className={classes.listItem}><a href='#'>Home</a></li>
//             <li className={classes.listItem}><a href='#about'>Payment</a></li>
//             <li className={classes.listItem}><a href='#services'>BudgetCard</a></li>
//           </ul>
//         </div>

//         <div className={classes.right}>
//           {user ? (
//             <>
//               <div className={classes.icons}>
//                 <Link to='/notifications' className={classes.icon}>
//                   <FaBell />
//                 </Link>
//                 <Link to='/chat' className={classes.icon}>
//                   <FaComments />
//                 </Link>
//                 <Link to='/profile' className={classes.icon}>
//                   <FaUser />
//                 </Link>
//               </div>
              
//               <div className={classes.dropdown}>
//                 <span className={classes.username} onClick={toggleDropdown}>
//                   {user.username}
//                 </span>
//                 {dropdownOpen && (
//                   <div className={classes.dropdownMenu}>
//                     {user.role === 'admin' && (
//                       <Link to='/admin' className={classes.dropdownItem}>Admin Dashboard</Link>
//                     )}
//                     {user.role === 'verifier' && (
//                       <Link to='/verifier' className={classes.dropdownItem}>Verifier Dashboard</Link>
//                     )}
//                     <span className={classes.logout} onClick={handleLogout}>Logout</span>  {/* Logout button */}
//                   </div>
//                 )}
//               </div>
//             </>
//           ) : (
//             <>
//               <Link to='/login' className={classes.login}>Login</Link>
//               <Link to='/signup' className={classes.signup}>Sign up</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../redux/authSlice";
import { FaBell, FaComments, FaUser, FaHome, FaCreditCard, FaWallet } from 'react-icons/fa'; // Import new icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>
            <h2 className={classes.title}>Credit App</h2>
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link to='/'><FaHome className={classes.icon} /> Home</Link> {/* Yellow icon */}
            </li>
            <li className={classes.listItem}>
              <Link to='/payment'><FaCreditCard className={classes.icon} /> Payment</Link> {/* Yellow icon */}
            </li>
            <li className={classes.listItem}>
              <Link to='/budget-card'><FaWallet className={classes.icon} /> BudgetCard</Link> {/* Yellow icon */}
            </li>
          </ul>
        </div>
        <div className={classes.right}>
          {user ? (
            <>
              <div className={classes.icons}>
                <Link to='/notifications' className={classes.icon}><FaBell /></Link>
                <Link to='/chat' className={classes.icon}><FaComments /></Link>
                <Link to='/profile' className={classes.icon}><FaUser /></Link>
              </div>
              <div className={classes.dropdown}>
                <span className={classes.username}>
                  {user.role}
                </span>
                <span className={classes.logout} onClick={handleLogout}>Logout</span>
              </div>
            </>
          ) : (
            <>
              <Link to='/login' className={classes.login}>Login</Link>
              <Link to='/signup' className={classes.signup}>Sign up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
