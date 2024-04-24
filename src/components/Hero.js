import React  from 'react'
import 'tailwindcss/tailwind.css';

const Hero =() => {
  return (
<div>
<body class=" bg-gray-300 p-2">
    <div class=" sm:w-full sm:items-center justify-center p-2 lg: flex flex-wrap" role="main">
      <div class=" lg:px-10">
        <h1  class=" mt-8 text-5xl font-headline tracking-tight font-extrabold text-gray-900 leading-snug">
           Hi, I am 
           <br/>
           Web Developer
        </h1>
        <p class="flex w-3/5 mt-8 text-gray-600 text-lg">
        I am new in this field, but having it with a lot of intusiasm...
        </p>
        <div class="mt-8 flex sm:justify-center" aria-level="3" role="button">
          <a class="mb-8 justify-center px-8 py-3 font-medium rounded-md text-white bg-blue-800 
          shadow uppercase hover:bg-gray-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 
          focus:ring-gray-600 ring-offset-2 outline-none focus:bg-gray-900 focus:shadow-lg active bg-green"
            href="#">
              Hire me
          </a>         
          </div>          
         </div>
         <div class="sm:w-1/2" role="img">
        <img class=" px-20 h-50 w-80 object-cover object-center sm:w-50 rounded-full hover:shadow-lg transform-transition "
          src="images/ME-removebg-preview.png"
          alt="Portfolio"
        />
      </div>      
    </div> 
  </body>
 </div>
  )
}

export default Hero