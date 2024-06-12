import React from 'react';

const Contact = () => {
  return (
    <section className="bg-black py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* <span className="text-4xl md:text-8xl font-extrabold text-white opacity-15 block">CONTACT</span> */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-600 mb-4 relative inline-block">
            GET IN <span className="text-green-500">TOUCH</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-between mt-12">
          <div className="flex-1 min-w-full md:min-w-0 md:max-w-md mb-6 md:mb-0 px-2">
            <h1 className="text-2xl md:text-3xl text-white font-extrabold">DON'T BE SHY!</h1>
            <p className="mt-2 text-lg text-justify text-white">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
          <div className="flex-1 min-w-full md:min-w-0 md:max-w-md px-2">
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-6">
                <div className="grid grid-cols-1 gap-y-6">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input type="text" name="name" id="username" autoComplete="username" className="block flex-1 border-0 bg-transparent py-2 px-4 text-white placeholder-slate-400 focus:ring-0" placeholder="Enter Name" />
                  </div>
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input type="email" name="email" id="email" autoComplete="email" className="block flex-1 border-0 bg-transparent py-2 px-4 text-white placeholder-slate-400 focus:ring-0" placeholder="Enter Email" />
                  </div>
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <input type="text" name="subject" id="subject" autoComplete="subject" className="block flex-1 border-0 bg-transparent py-2 px-4 text-white placeholder-slate-400 focus:ring-0" placeholder="Enter Subject" />
                  </div>
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                    <textarea id="message" name="message" rows="3" className="block w-full rounded-md border-0 bg-transparent py-2 px-4 text-white placeholder-slate-400 focus:ring-0" placeholder="Your Message"></textarea>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg" type="submit">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-full md:min-w-0 md:max-w-md px-2">
            <div className="mt-6 md:mt-0 space-y-6">
              <div className="flex items-center space-x-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8 text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                </svg>
                <div>
                  <div className="text-lg text-slate-400 font-bold">MAIL ME</div>
                  <div className="text-xl text-slate-300 font-bold">rajashish072@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8 text-green-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div>
                  <div className="text-lg text-slate-400 font-bold">CALL ME</div>
                  <div className="text-xl text-slate-300 font-bold">+91 6261213153</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
