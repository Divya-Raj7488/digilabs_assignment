import Image from "next/image"


const Navbar = () => {
  return (
    <div className="navbarContainer">
     <div className="nameAndLogo">
      {/* <Image/> */}
      <div>company Name</div>
     </div>
     <div className="navbarMenuItems"></div>
     <div className="loginAndSignupBtn">
      <button>Login</button>
      <button>Signup</button>
     </div>
    </div>
  )
}

export default Navbar
