import React from 'react'
import "./footer.scss"
import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";
const Footer = () => {
  return (
    <footer id='footer'>
      <div className="top">
<div className="container">
  <div className="row">
    <div className="ex col-lg-3">
      <h2>Exclusive</h2>
      <h3>Subscribe</h3>
      <p>Get 10% off your first order</p>
      <form action="">
        <input type="text" placeholder='Enter your email' />
        <span className='icon'><VscSend /></span>
      </form>
    </div>
    <div className="col-lg-2">
      <h3>Support</h3>
      <ul>
        <li>
        111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
        </li>
        <li>exclusive@gmail.com</li>
        <li>+88015-88888-9999</li>
      </ul>
    </div>
    <div className="col-lg-2">
      <h3>Account</h3>
      <ul>
        <li>My Account</li>
        <li>Login / Register</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Shop</li>
      </ul>
    </div>
    <div className="col-lg-2">
      <h3>Quick Link</h3>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="qrcod col-lg-3">
      <h3>Download App</h3>
      <span className='save'>Save $3 with App New User Only</span>
      <div className='qr'>
        <img className='size-80' src="../../../imgs/Qrcode 1.png" alt="" />
<div className='get'>
  <div className='size-30'>
<img  src="../../../imgs/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png" alt="" /></div>
<div className='size-40'>
<img  src="../../../imgs/download-appstore.png" alt="" /></div>
</div>
      </div>
      <div className='sosial'>
        <span><FaFacebookF /></span>
        <span><RxTwitterLogo /></span>
        <span><FaInstagram /></span>
        <span><FaLinkedinIn /></span>
      </div>
    </div>
  </div>
</div>
<div className=" custom">
 <LuCopyright  className='icon' />
 <p>Copyright Rimel 2022. All right reserved</p>
</div>
</div>

    </footer>
  )
}

export default Footer
