import React from 'react'
import Navbar from './Navbar'
const Howitwork = () => {
    return (
        <>
        
     
   <Navbar/>
            <div className="flex items-center justify-center">
                <img
                    src="pic/chart.avif"
                    alt="People collaborating on design with various color swatches and materials on a table"
                    className="max-w-full h-auto"
                />

            </div>
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold">
                    <span className="text-red-500">|</span> Your dream home in 5 steps!
                </h1>
                <p className="text-lg text-gray-600 mt-2">Looking to design your home interiors? Here's how you can get started.</p>
                <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-6 md:space-y-0 md:space-x-10">
                    <div className="flex flex-col items-center">
                        <img src="/images/1.avif" alt="Meet Designer" className="rounded-full h-[100px] w-[100px]" />
                        <p className="text-xl font-bold mt-2">1</p>
                        <p className="">Meet Designer</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/2.avif" alt="Book Livspace" className="rounded-full h-[100px] w-[100px]" />
                        <p className="text-xl font-bold mt-2">2</p>
                        <p className="text-gray-600">Book Livspace</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/3.avif" alt="Execution begins" className="rounded-full h-[100px] w-[100px]" />
                        <p className="text-xl font-bold mt-2">3</p>
                        <p className="text-gray-600">Execution begins</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/4.avif" alt="Final installations" className="rounded-full h-[100px] w-[100px]" />
                        <p className="text-xl font-bold mt-2">4</p>
                        <p className="text-gray-600">Final installations</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/5.avif" alt="Move in" className="rounded-full h-[100px] w-[100px]" />
                        <p className="text-xl font-bold mt-2">5</p>
                        <p className="text-gray-600">Move in</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
                <img src="/pic/1.avif" alt="" className="w-full md:w-1/2 rounded-lg" />
                <div className="mt-6 md:mt-0 md:ml-6">
                    <h2 className="text-2xl font-bold text-gray-800">Meet your designer</h2>
                    <div className="mt-4">
                        <div className="flex items-start">
                            <div className="w-4 h-4 bg-gray-300 rounded-full mt-1"></div>
                            <div className="ml-4">
                                <h3 className="text-lg font-bold text-gray-800">It all begins with a form</h3>
                                <p className="text-gray-600 mt-1">Let's get acquainted. The more we learn about you, the better we can design your home.</p>
                                <button className="mt-2 px-4 py-2 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">FILL YOUR FORM</button>
                            </div>
                        </div>
                        <div className="flex items-start mt-6">
                            <div className="w-4 h-4 bg-gray-300 rounded-full mt-1"></div>
                            <div className="ml-4">
                                <h3 className="text-lg font-bold text-gray-800">Get free consultation</h3>
                                <p className="text-gray-600 mt-1">Talk to your designer and get personalised designs and quote for your dream home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
                <div class="w-full md:w-1/2 p-4">
                    <img src="/pic/2.avif" alt="Illustration of a person working on a computer with design elements" class="rounded-lg shadow-md" />
                </div>
                <div class="w-full md:w-1/2 p-4">
                    <h1 class="text-2xl font-bold text-gray-800 mb-4">Book Livspace</h1>
                    <div class="mb-6">
                        <div class="flex items-center mb-2">
                            <span class="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
                            <h2 class="text-xl font-bold text-gray-800">Pay the booking amount to seal the deal</h2>
                            <span class="ml-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-full">MILESTONE</span>
                        </div>
                        <p class="text-gray-600">Once you're happy with what we've proposed, pay 10% of the final quote or Rs.25000 (whichever is higher) to book us.</p>
                    </div>
                    <div>
                        <div class="flex items-center mb-2">
                            <span class="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
                            <h2 class="text-xl font-bold text-gray-800">Finalise your home design</h2>
                        </div>
                        <p class="text-gray-600">It's time to deep dive into the nitty-gritties & pick your favorite materials, finishes, etc. Interim payments will be requested based on project scope, value, and timelines during the booking and design phase.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-lg p-6">
                <img src="/pic/3.avif" alt="Two people discussing a project at a table" className="rounded-lg w-full md:w-1/2" />
                <div className="mt-6 md:mt-0 md:ml-8">
                    <h2 className="text-2xl font-bold text-gray-800">Place the order</h2>
                    <div className="mt-4">
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                            <div className="ml-4">
                                <h3 className="text-lg font-bold text-gray-800">Confirm your order with 50% payment <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">MILESTONE</span></h3>
                                <p className="text-gray-600 mt-1">Finalise the design by making a cumulative 50% payment, and your project is now off to a good start.</p>
                            </div>
                        </div>
                        <div className="flex items-start mt-6">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                            <div className="ml-4">
                                <h3 className="text-lg font-bold text-gray-800">Work commences</h3>
                                <p className="text-gray-600 mt-1">Civil work begins on site. Keep a tab on your project status on 'My Account'.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center  bg-blue-900">
                <div className="flex items-center space-x-4 text-white text-2xl font-semibold">
                    <i className="fas fa-check-circle"></i>
                    <span>You're half way there. Your orders are raised!</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center p-6 bg-white rounded-lg shadow-md">
                <img src="/images/4.avif" alt="Person working on installation with tools and plants in the background" className="rounded-lg w-full md:w-1/2" />
                <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800">Final installations</h2>
                    <div className="mt-4">
                        <div className="flex items-start">
                            <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                                    Pay 100% at intimation of material dispatch
                                    <span className="ml-2 text-xs font-bold text-white bg-green-600 rounded-full px-2 py-1">MILESTONE</span>
                                </h3>
                                <p className="text-gray-600 mt-1">Once the materials are ready for dispatch, you'll be intimated. Make the balance payment and we'll head to the last leg of your project.</p>
                            </div>
                        </div>
                        <div className="flex items-start mt-4">
                            <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-800">Installation</h3>
                                <p className="text-gray-600 mt-1">Orders get delivered on-site and installation happens as per design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center  bg-purple-700">
                <div className="flex items-center space-x-4 text-white text-2xl font-bold">
                    <i className="fas fa-check-circle"></i>
                    <span>Hurrah! Complete payment has been made!</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <img src="/images/5.avif" alt="Illustration of a person relaxing in a modern living room" className="rounded-lg w-full md:w-1/2" />
                <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
                    <h1 className="text-2xl font-bold text-gray-800">Move in!</h1>
                    <p className="mt-2 text-gray-600">
                        Your dream home is now a reality! It's time to make new memories! Do avail the free professional photoshoot session of your #LivspaceHome.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-4">Understand your order types</h1>
                <p className="text-center mb-8">
                    We know our payments can seem complex. But they're really not. We've staggered them through your home interiors journey, so that you make small payments depending on how your project has progressed.
                </p>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left font-bold">Order type</th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-bold">Overview of work involved</th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-bold">Execution milestone (Make 100% payment)</th>
                                <th className="border border-gray-300 px-4 py-2 text-left font-bold">Handover</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Order type 1</td>
                                <td className="border border-gray-300 px-4 py-2">Civil & MEP (Mechanical, Electrical & Plumbing)</td>
                                <td className="border border-gray-300 px-4 py-2">MEP base work & POP (Plaster Of Paris) completion</td>
                                <td className="border border-gray-300 px-4 py-2">MEP fixtures & fittings, final painting & handover</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Order type 1</td>
                                <td className="border border-gray-300 px-4 py-2">Custom furniture (workshop)</td>
                                <td className="border border-gray-300 px-4 py-2">Carcass quality check completion</td>
                                <td className="border border-gray-300 px-4 py-2">Installation and handover</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Order type 1</td>
                                <td className="border border-gray-300 px-4 py-2">Custom furniture (on-site)</td>
                                <td className="border border-gray-300 px-4 py-2">Wood framework completion</td>
                                <td className="border border-gray-300 px-4 py-2">Installation and handover</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Order type 2</td>
                                <td className="border border-gray-300 px-4 py-2">Catalogue products</td>
                                <td className="border border-gray-300 px-4 py-2">NA</td>
                                <td className="border border-gray-300 px-4 py-2 font-bold">Make 100% payment for door delivery & installation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center py-16 px-4">
                <h1 className="text-3xl font-bold mb-4">The Team</h1>
                <p className="text-lg mb-12">Get to know the team that'll be with you every step of the way.</p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="max-w-xs text-center">
                        <img src="/images/1.avif" alt="Illustration of a design lead" className="mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">The Design Lead (DL)</h2>
                        <p>The Design Lead gets to know your requirements and your lifestyle intimately to ensure your home is a reflection of who you are.</p>
                    </div>
                    <div className="max-w-xs text-center">
                        <img src="/images/2.avif" alt="Illustration of a business manager" className="mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">The Business Manager (BM)</h2>
                        <p>To ensure your home journey is smooth sailing, your Business Manager oversees the entire design process and ensures there are no hiccups.</p>
                    </div>
                    <div className="max-w-xs text-center">
                        <img src="/images/3.avif" alt="Illustration of a project manager" className="mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">The Project Manager (PM)</h2>
                        <p>Your Project Manager steers the on-site execution. They make it their life's mission to get your home ready in time.</p>
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

export default Howitwork
