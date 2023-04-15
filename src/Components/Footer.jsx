import React from 'react'
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
    return(
    <div className='footer'>
        <FaTwitterSquare style={{width: '30px', height: '30px'}}/>
        <FaFacebookSquare style={{width: '30px', height: '30px'}}/>
        <FaInstagramSquare style={{width: '30px', height: '30px'}}/>
        <FaLinkedin style={{width: '30px', height: '30px'}}/>
        <FaGithubSquare  style={{width: '30px', height: '30px'}}/>
    </div>
    )
}

export default Footer