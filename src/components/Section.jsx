import React, { useRef, useEffect } from 'react'
import video from "./vedo/final_3.mp4"
import Slider from './Slider';
import Carousel from './Carousel';
function Section() {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <>

            <body>
                {/* <img className='bg-gradient-to-t  p-2  h-72 w-screen h-full ' src="http://ts4.mm.bing.net/th?id=OIP.TZDKqkP7ZHRqLkPVrsMFjgHaEK&pid=15.1" alt="" /> */}
              
                <section>
                    <div className="max-w-7xl mx-auto p-6">
                        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">One-stop shop for all things interiors</h1>
                        <p className="text-center text-gray-600 mb-8">Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. With a wide range of furniture & decor, we have your back from start to finish.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="/pic/modular.avif" alt="Modern kitchen with marble countertops and wooden cabinets" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-lg font-bold text-gray-800">Modular Interiors</h2>
                                    <p className="text-gray-600">Functional kitchen, wardrobe and storage</p>
                                    <div className="mt-4 text-right">
                                        <i className="fas fa-chevron-right text-gray-800"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="/pic/full-home.avif" alt="Cozy living room with modern furniture and decor" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-lg font-bold text-gray-800">Full Home Interiors</h2>
                                    <p className="text-gray-600">Turnkey interior solutions for your home</p>
                                    <div className="mt-4 text-right">
                                        <i className="fas fa-chevron-right text-gray-800"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="/pic/bad.avif" alt="Luxurious bedroom with elegant decor" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-lg font-bold text-gray-800">Luxury Interiors</h2>
                                    <p className="text-gray-600">Tailored interiors that redefine elegance</p>
                                    <div className="mt-4 text-right">
                                        <i className="fas fa-chevron-right text-gray-800"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src="/pic/reno.avif" alt="Room under renovation with exposed brick and new flooring" className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-lg font-bold text-gray-800">Renovations</h2>
                                    <p className="text-gray-600">Expert solutions to upgrade your home</p>
                                    <div className="mt-4 text-right">
                                        <i className="fas fa-chevron-right text-gray-800"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section><div className="container mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    </div>

                    <Slider/>

                </div></section>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl w-full">
                        <div className="flex flex-col md:flex-row">
                            <div className="bg-purple-800 text-white p-8 md:w-1/2 flex flex-col justify-center">
                                <h1 className="text-4xl font-bold mb-4">Come, see endless designs at our <span className="text-red-400">Experience Centre</span></h1>
                                <p className="text-lg mb-6">Walk into any of our centres in 50+ cities</p>
                                <button className="bg-red-400 text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-red-500 transition duration-300">
                                    Find one near you <i className="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                            <div className="md:w-1/2">
                                <img src="/pic/bad.avif" alt="Modern living room with stylish furniture and large windows" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
                <section><div class="bg-gray-900 text-white">
    <div class="text-center py-12">
        <h2 class="text-blue-400 text-lg">OUR ACHIEVEMENTS</h2>
        <h1 class="text-3xl font-bold mt-2">Have 10 Years Of Experiences</h1>
        <p class="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
    </div>
    <div class="flex flex-wrap justify-center text-center space-x-8">
        <div class="flex flex-col items-center">
            <i class="fas fa-user-tie text-4xl mb-2"></i>
            <h3 class="text-2xl font-bold">802+</h3>
            <p class="text-gray-400">Qualified Mentors</p>
        </div>
        <div class="flex flex-col items-center">
            <i class="fas fa-user-graduate text-4xl mb-2"></i>
            <h3 class="text-2xl font-bold">317+</h3>
            <p class="text-gray-400">Happy Clients</p>
        </div>
        <div class="flex flex-col items-center">
            <i class="fas fa-calendar-alt text-4xl mb-2"></i>
            <h3 class="text-2xl font-bold">63+</h3>
            <p class="text-gray-400">Appointments</p>
        </div>
        <div class="flex flex-col items-center">
            <i class="fas fa-thumbs-up text-4xl mb-2"></i>
            <h3 class="text-2xl font-bold">51%</h3>
            <p class="text-gray-400">Job Satisfaction</p>
        </div>
        </div>
</div>
</section>
                


                <section>
                    <div className="text-center md:text-left md:flex md:items-center md:justify-between">
                        <div className="md:w-1/2 p-4">
                            <h1 className="text-4xl font-bold text-gray-700 mb-4">What is Home Renovation?</h1>
                            <p className="text-xl font-medium text-gray-700 mb-4">A simple and user-friendly online program for interior design.</p>
                            <p className="text-gray-600">
                                Rumtudu's intuitive interface and powerful tools will help you quickly and efficiently visualize your interior project. Plan, design and decorate your apartment, home, office or other premises. Get professional results without special training.
                            </p>
                        </div>
                        
                        <div className="md:w-1/2 p-4 flex justify-center">
                            <img src="/pic/home_bl_2_img.webp" alt="3D model of an interior design layout" className="max-w-full h-auto" />
                        </div>
                        
                    </div>
                    <Carousel/>
                    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6">
                        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Arrange furniture and décor items</h1>
                            <p className="text-gray-600">
                                Hundreds of different furniture and décor with the possibility of customization. Change sizes, combine finishing materials. A huge number of combinations are available and the initial version can be changed beyond recognition.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img src="/pic/capabilities_5.webp" alt="Gray armchair" className="w-1/2 md:w-auto" />

                        </div>
                    </div>
                </section>
                <section>
                    
                <div className="relative min-h-screen flex items-center justify-center">
                    <video src="/vedo/final_3.mp4" alt="Hand holding a house key" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                    <div className="relative z-10 flex flex-col items-start p-8 bg-gradient-to-r from-transparent to-gray-900">
                        <h1 className="text-3xl font-bold mb-8">Your Renovation Journey</h1>
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-gray-900 font-bold">1</div>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-calendar-alt text-yellow-500"></i>
                                        <h2 className="text-xl font-semibold">Appointment</h2>
                                    </div>
                                    <p>Book Free Inspection</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-gray-900 font-bold">2</div>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-pencil-alt text-yellow-500"></i>
                                        <h2 className="text-xl font-semibold">Inspection</h2>
                                    </div>
                                    <p>Site Visit by Expert</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-gray-900 font-bold">3</div>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-calculator text-yellow-500"></i>
                                        <h2 className="text-xl font-semibold">Estimate</h2>
                                    </div>
                                    <p>Get Detailed Quote</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-gray-900 font-bold">4</div>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-clipboard-check text-yellow-500"></i>
                                        <h2 className="text-xl font-semibold">Booking Confirmation</h2>
                                    </div>
                                    <p>Pay Token Amount</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-gray-900 font-bold">5</div>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <i className="fas fa-lightbulb text-yellow-500"></i>
                                        <h2 className="text-xl font-semibold">Work Starts !</h2>
                                    </div>
                                    <p>Execution by Dedicated Team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        
                        <img src="/pic/order.png" alt="3D floor plan with measurements" className="w-full md:w-1/2 rounded-lg shadow-md" />
                        <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
                            <h1 className="text-3xl font-bold text-blue-500">We'll draw for you!</h1>
                            <p className="mt-4 text-gray-600">ORDER 3D LAYOUT <br />    We will do the boring part of the work of building the walls, and you can start the interior design right away.</p>
                            <div className="mt-4">
                                <p className="text-gray-600">From: <span className="text-blue-500">Planning</span></p>
                                <p className="text-gray-600">Create: <span className="text-blue-500">within 24 hours</span></p>
                            </div>
                            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">MORE INFORMATION</button>
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

            </body>




        </>
    )
}

export default Section