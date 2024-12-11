import React from 'react'

import Navbar from './Navbar'
const Services = () => {
  return (
  <>
  
   <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
                    <h1 className="text-4xl font-bold mb-4">For business</h1>
                    <p className="text-lg mb-8">A program for 3D design of premises on your website for the development of your business.</p>
                    <div className="relative w-full max-w-4xl">
                        <img src="/pic/bizness_img.png" alt="Laptop with 3D design software" className="w-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-11/12 h-5/6 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                    <img src="/pic/bizness_img.png" alt="3D design of a house" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <img src="https://placehold.co/50x50" alt="Your logo" className="w-10 h-10 rounded-full" />
                                            <span className="ml-2 text-gray-700 font-semibold">YOUR COMPANY</span>
                                        </div>
                                        <div className="flex space-x-4">
                                            <span className="text-gray-400">|</span>
                                            <span className="text-gray-400">|</span>
                                            <span className="text-gray-400">|</span>
                                            <span className="text-gray-400">|</span>
                                            <span className="text-gray-400">|</span>
                                            <span className="text-gray-400">|</span>
                                            <span className="text-gray-400">|</span>
                                            <span className="text-gray-400">|</span>
                                            <span className="text-gray-400">|</span>
                                            <span className="text-gray-400">|</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col items-center">
                                            <img src="https://placehold.co/50x50" alt="Your logo" className="w-10 h-10 rounded-full mb-2" />
                                            <img src="https://placehold.co/50x50" alt="Your logo" className="w-10 h-10 rounded-full mb-2" />
                                            <img src="https://placehold.co/50x50" alt="Your logo" className="w-10 h-10 rounded-full mb-2" />
                                            <img src="https://placehold.co/50x50" alt="Your logo" className="w-10 h-10 rounded-full mb-2" />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span className="text-gray-700 font-semibold">YOUR CATALOG</span>
                                            <div className="flex flex-col items-center mt-2">
                                                <img src="https://placehold.co/30x30" alt="Catalog icon" className="w-8 h-8 mb-2" />
                                                <img src="https://placehold.co/30x30" alt="Catalog icon" className="w-8 h-8 mb-2" />
                                                <img src="https://placehold.co/30x30" alt="Catalog icon" className="w-8 h-8 mb-2" />
                                                <img src="https://placehold.co/30x30" alt="Catalog icon" className="w-8 h-8 mb-2" />
                                                <img src="https://placehold.co/30x30" alt="Catalog icon" className="w-8 h-8 mb-2" />
                                                <img src="https://placehold.co/30x30" alt="Catalog icon" className="w-8 h-8 mb-2" />
                                                <img src="https://placehold.co/30x30" alt="Catalog icon" className="w-8 h-8 mb-2" />
                                                <img src="https://placehold.co/30x30" alt="Catalog icon" className="w-8 h-8 mb-2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center max-w-4xl mx-auto px-4">
                <p class="text-gray-500 text-lg leading-relaxed">
                    will be a useful tool for companies from various industries: real estate, renovation, interior design, furniture, décor and many others.
                    Depending on the industry in which your company operates, there are different scenarios for using and integrating  with your company's
                    website and business processes. Write how exactly you want to use RUMTUDA in your business, and we will select the conditions that are best suited for you.
                </p>
            </div>
            <div class="flex flex-col items-center justify-center min-h-screen bg-white p-4">
                    <div class="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
                        <div class="flex flex-col md:flex-row justify-between">
                            <div class="md:w-1/2 mb-8 md:mb-0">
                                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Got a question about using </h2>
                                <p class="text-gray-600">If you need additional information regarding any of the features of Roomtodo space planner, please don’t hesitate to contact us by any of these channels.</p>
                            </div>
                            <div class="md:w-1/2">
                                <form class="space-y-4">
                                    <div>
                                        <label class="block text-gray-700">Your email</label>
                                        <input type="email" class="w-full border border-gray-300 p-2 rounded-md" required />
                                    </div>
                                    <div>
                                        <label class="block text-gray-700">Message</label>
                                        <textarea class="w-full border border-gray-300 p-2 rounded-md h-32" required></textarea>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="mr-2" />
                                        <label class="text-gray-700">I'm not a robot</label>
                                    </div>
                                    <div>
                                        <button type="submit" class="bg-lime-500 text-white px-4 py-2 rounded-md">SEND</button>
                                    </div>
                                </form>
                            </div>
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

export default Services