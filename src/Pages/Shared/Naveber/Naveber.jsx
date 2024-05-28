import { useContext, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";


const Naveber = () => {
  const [cart] = useCart()
  const { user, logout } = useContext(AuthContext)
  const [userId, setUserId] = useState(null)
  const handleLogout = () => {
    logout()
    .then(result => {
      console.log(result.user);
      setUserId(result.user)
  })

  }
  const naveLinks = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/order/salad'>Order</Link></li>

    <Link to="/">
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">+{cart.length}</span>
        <button className="btn"><MdOutlineShoppingCart></MdOutlineShoppingCart></button>
      </div>
    </Link>
  </>
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {naveLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss Restaurent</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {naveLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? <button onClick={handleLogout} className="btn mr-3">LogOut</button>
          :
          <li><Link to='/login'>Login</Link></li>
        }
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Naveber;