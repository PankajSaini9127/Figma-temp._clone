import React from 'react'
import '../assest/Css/Footer.css'

//image
import Logo from '../assest/image/Logo.svg'
import Twitter from '../assest/image/Twitter.svg'
import Facebook from '../assest/image/Facebook.svg'
import Instagram from '../assest/image/Instagram.svg'


export default function Footer() {
  return (
    <>
    <div className='footerMainDiv'>
        <div className='footerLogoDiv'>
            <img src={Logo} alt="LaslesVPN" className='footerLogo' />
            <p className='footertext'>LaslesVPN is a private virtual network that has unique features and has high security.</p>
            <div className='footerSocialMedia'>
                <img src={Facebook} alt="facebook" className='socialMediaFooter'/>
                <img src={Twitter} alt="twitter" className='socialMediaFooter'/>
                <img src={Instagram} alt="instagram" className='socialMediaFooter'/>
            </div>
            <div className='copyRight'>
                <p>@2020LaslesVPN</p>
            </div>
        </div>
        <div className='footerProductList'>
                  <b>Product</b>
                  <ul>
                    <li className='footerListItem'>Download</li>
                    <li className='footerListItem'>Pricing</li>
                    <li className='footerListItem'>Locations</li>
                    <li className='footerListItem'>Server</li>
                    <li className='footerListItem'>Countries</li>
                    <li className='footerListItem'>Blog</li>
                  </ul>
        </div>
        <div className='footerProductList'>
            <b>Engage</b>
             <ul>
                <li className='footerListItem'>LaslesVPN?</li>
                <li className='footerListItem'>FAQ</li>
                <li className='footerListItem'>Tutorials</li>
                <li className='footerListItem'>About us</li> 
                <li className='footerListItem'>Privacy Policy</li> 
                <li className='footerListItem'>Terms of Service</li> 
             </ul>
        </div>
        <div className='footerProductList'>
            <b>Earn Money</b>
             <ul>
                <li className='footerListItem'>Affilate</li>
                <li className='footerListItem'>Become Partner</li>
             </ul>
        </div>
    </div>
    </>
  )
}
