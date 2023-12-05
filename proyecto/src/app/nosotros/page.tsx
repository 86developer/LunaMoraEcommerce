import React from "react"
import ContactForm from "./ContactForm"

export default function ContactPage(){


return(
  <div className="min-h-screen bg-pink-100"  >
    
  
  <div  className="bg-pink-100 flex flex-col sm:max-w-6xl mx-auto sm:flex-row sm:space-x-1 px-1  ">
    <main className=" flex-1 p-10 my-5  bg-white rounded-lg">
      <h1 className=" font-bold text-center text-gray-800">Envianos un mensaje</h1>
      <ContactForm />
    </main>

    <aside className="sm:h-[500px] sm:basis-1/3   my-5 p-10   bg-white rounded-lg">
    
      <h1 className="text-center text-gray-800">
        Contáctanos por whatsapp
        <br />
        +54223123456
        <br />
        Dirección:Bla bla bla
      </h1>

  
    </aside>

  </div>
  </div>
  
)

}