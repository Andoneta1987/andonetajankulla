import React from 'react'
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,} from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div>
    <body className="bg-black text-white text-center py-5">
    <div className="w-full h-screen text-white" role="main">
    <h1 className="text-4xl font-bold inline border-b-4 border-grey-500 m-2">Contact me</h1>
    <p className="py-6">Please fill out the form below </p>
    <form class=" text-black flex flex-col w-full md-w-1 p-2 justify-center items-center bg-transparent rounded-md">
      <input type="text" name="name" placeholder="Your Name"/><br></br>
      <input type="text" name="email" placeholder="Your Email"/><br></br>
      <textarea type="textarea" name="message" placeholder="Message" rows="8"/><br></br>

    </form>
    <button className="border hover:bg-gray-800 p-2 m-2" type="submit" value="Send"> Submit </button>
    <div className="inline blue">

        <div className="flex flex-wrap gap-6 justify-center underline px-4">
           <h1><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><a href="tel:+355694436304"> +355694436304</a></h1>
           <h2><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><a href="mailto:andonetajankulla@gmil.com"> andonetajankulla@gmail.com</a></h2>
           <h3><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon><a href="linkto:www.linkedin.com/in/andonetajankulla"> Andoneta Jankulla</a></h3>
        </div>
    </div>
    </div>
    </body>
    </div>
  )
}
  

export default Contact