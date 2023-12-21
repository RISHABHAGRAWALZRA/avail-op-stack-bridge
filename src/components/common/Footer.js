import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/style/common/footer.scss";
import { BsDiscord } from "react-icons/bs";
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub, AiFillBook } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa"
const Footer = () => {
  return (
    <>
      <footer className='app_footer'>
        {/* <Container fluid> */}
        <div className='footer_text_wrap'>
          <ul>
            <li><Link to="/">Help center</Link></li>
          </ul>
        </div>
        <div className='footer_icn_wrap'>
          <ul>
            <li><Link to="https://www.linkedin.com/company/availproject/"><AiFillLinkedin /></Link></li>
            <li><Link to="https://github.com/availproject"><AiFillGithub /></Link></li>
            <li><Link to="https://twitter.com/AvailProject"><AiFillTwitterCircle /></Link></li>
            <li><Link to="https://discord.gg/y6fHnxZQX8"><BsDiscord /></Link></li>
          </ul>
        </div>
        {/* </Container> */}
      </footer>
    </>
  )
}

export default Footer