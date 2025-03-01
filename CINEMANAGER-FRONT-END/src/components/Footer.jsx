import React from 'react';


function Footer() {
    return (
        <footer className="pt-44" >
            <div className="w-full h-[1px] bg-gray-600 "></div>
            <div className="flex justify-center pt-10 gap-4">
            <div className="w-[20%]">
                <h1 className="text-white text-2xl font-bold font-serif underline-offset-8">Menu</h1>
                <ul className="py-5 text-gray-700 ">
                    <li className="font-sans text-md text-gray-500 font-medium hover:text-amber-300 duration-300 py-2 cursor-pointer">Home</li>
                    <li className="font-sans text-md text-gray-500 font-medium hover:text-amber-300 duration-300 py-2 cursor-pointer">Coming
                        soon
                    </li>
                    <li className="font-sans text-md text-gray-500 font-medium hover:text-amber-300 duration-300 py-2 cursor-pointer">Order</li>
                    <li className="font-sans text-md text-gray-500 font-medium hover:text-amber-300 duration-300 py-2 cursor-pointer">Terms
                        of service
                    </li>
                    <li className="font-sans text-md text-gray-500 font-medium hover:text-amber-300 duration-300 py-2 cursor-pointer">Pricing</li>
                </ul>
                <div className="flex  items-center gap-2">

                    <svg className="w-5 h-5 text-white hover:text-amber-300 duration-300 cursor-pointer"
                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                              clip-rule="evenodd"/>
                    </svg>

                    <svg className="w-5 h-5 text-white hover:text-amber-300 duration-300 cursor-pointer"
                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                              clip-rule="evenodd"/>
                    </svg>

                    <svg className="w-5 h-5 text-white hover:text-amber-300 duration-300 cursor-pointer"
                         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                              d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                              clip-rule="evenodd"/>
                    </svg>

                </div>
            </div>
            <div className="w-[30%]">
                <h1 className="text-white text-2xl font-bold font-serif underline-offset-8">Address
                    information</h1>
                <ul className="py-5 text-gray-600 ">
                    <li className="font-sans text-md text-gray-500 font-medium py-2">California.
                        AMC Dine-In Theatres
                    </li>
                    <li className="font-sans text-md text-gray-500 font-medium py-2">Marina,
                        Street 26, Distritc 543 #108
                    </li>
                    <li className="font-sans text-md text-gray-500 font-medium py-2">goudalinour2@gmail.com</li>
                    <div className="flex  items-center gap-2">
                        <svg className="w-6 h-6 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                        </svg>
                        <p className="font-sans text-md text-gray-500 font-medium py-2">+212
                            674704065</p>
                    </div>
                </ul>
            </div>
            <div className="w-[50%]">
                <h1 className="text-white text-2xl font-bold font-serif underline-offset-8">Leave a message</h1>

                <form className="w-full py-5 flex flex-col">
                    <input className="placeholder:px-3 border border-2 border-gray-500 py-2 px-3 bg-transparent text-white"
                           type="text" placeholder="Name *"/>
                    <div className="py-3 w-full">
                        <input
                            className="placeholder:px-3 border border-2 border-gray-500 py-2 px-3 bg-transparent w-full text-white"
                            type="email" placeholder="Email Adress *"/>
                    </div>
                    <textarea className="placeholder:p-3 border border-2 border-gray-500 px-3 bg-transparent text-white"
                              placeholder="Message *" cols="30" rows="5"></textarea>
                    <div className="flex justify-end py-4">
                        <button
                            className="text-black font-medium font-serif bg-amber-300 text-md py-2 px-8 hover:bg-amber-400 duration-300">Send
                            To Us
                        </button>
                    </div>
                </form>
            </div>
            </div>

            <div className="bg-gray-500 w-full h-[1px]"></div>
            <p className="py-10 text-gray-500 font-medium font-serif text-center">© Copyrights 2025 Nour. All rights reserved</p>
        </footer>
    );
}

export default Footer;