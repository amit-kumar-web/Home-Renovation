import React from 'react'
import Navbar from './Navbar'
const ContactUs = () => {
  return (
    // <div className='border-2'>

    
    // </div>
    <>
    {/* <div className="flex items-center justify-center bg-blue-400"> */}
    
    
{/* </div> */}
<Navbar/>
                 
                

                    
      
                <div className="flex flex-col md:flex-row h-screen">
                    <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: "url('pic/chair.avif')" }}>
                        <img src="pic/chair.avif" alt="Interior design with a chair, ottoman, and wall decorations" className="hidden" />
                    </div>
                    <div className="flex-1 bg-purple-700 flex items-center justify-center p-8">
                        <div className="w-full max-w-md">
                            <h1 className="text-white text-2xl font-bold mb-4">Designs for Every Budget</h1>
                            <p className="text-white mb-6">Get your dream home today. Let our experts help you</p>
                            <form className="space-y-4">
                                <input type="text" placeholder="Name" className="w-full p-3 rounded border border-gray-300" />
                                <input type="email" placeholder="Email ID" className="w-full p-3 rounded border border-gray-300" />
                                <div className="flex items-center border border-gray-300 rounded">
                                  
                                    <input type="text" placeholder="Phone number" className="flex-1 p-3 rounded-r" />
                                </div>
                                <div className="flex items-center">
                                    <input type="checkbox" id="whatsapp" className="mr-2" />
                                    <label htmlFor="whatsapp" className="text-white">Send me updates on WhatsApp</label>
                                </div>
                                <input type="text" placeholder="Property Name" className="w-full p-3 rounded border border-gray-300" />
                                <button type="submit" className="w-full bg-red-500 text-white p-3 rounded font-bold">GET FREE QUOTE</button>
                            </form>
                            <p className="text-white text-sm mt-4">By submitting this form, you agree to the <a href="#" className="text-pink-300">privacy policy</a> & <a href="#" className="text-pink-300">terms and conditions</a></p>
                        </div>
                    </div>
                </div>
                <footer className="bg-black text-white py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                          
                                <div className="flex space-x-4">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                    <i className="fab fa-pinterest"></i>
                                    <i className="fab fa-youtube"></i>
                                </div>
                            </div>
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <ul>
                                    <li className='font-bold'><a href="">About Us</a></li>
                                    <li>For business</li>
                                    <li>Documentation</li>
                                    <li>Blog</li>
                                    <li>A program for creating layouts</li>
                                    <li>Garage Planner</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <ul>
                                 <a className='font-bold' href="">   <li>Terms of Service</li></a>
                                    <li>Privacy Policy</li>
                                    <li>Order a 3D layout</li>
                                    <li>Interior design software</li>
                                    <li>Kitchen Planner</li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 mb-4 md:mb-0">
                                <ul>
                                    <a className='font-bold' href=""><li>Contact_us</li></a>
                                    <li>📍sector 15a pla Hisar 15001 </li>
                                    <li>☎9588534263</li>
                                    <li>📩amitk13077@gmail.com</li>
                                  
                                </ul>
                            </div>
                            
                        </div>
                       
                    </div>
                </footer>

              
              </>
  )
}

export default ContactUs
