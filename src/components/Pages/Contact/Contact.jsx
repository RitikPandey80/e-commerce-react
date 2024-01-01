import { BiSolidPhoneCall, BiLogoInstagramAlt } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <>
    <div className="antialiased bg-gray-400 py-6">
      <div className="flex w-full justify-center items-center">
        <div
          className="bg-cyan-700 flex md:flex-row md:space-x-6 md:space-y-0 flex-col 
          space-y-6 w-full max-w-4xl p-8 rounded-xl shadow-lg overflow-hidden text-white sm:p-12">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact us</h1>
              <p className="pt-2 text-cyan-100 text-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus est repellendus ex? Quisquam voluptas placeat tenetur
                veritatis maiores totam.
              </p>
            </div>
            <div className="flex flex-col space-y-6 text-white">
              <div className="inline-flex space-x-2 items-center">
                <span className="text-2xl text-teal-300 hover:scale-110">
                  <BiSolidPhoneCall />
                </span>
                <span> +(123) 456 7890 </span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <span className="text-2xl text-teal-300 hover:scale-110">
                  <IoMdMail />
                </span>
                <span>contact@ecommerce web.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <span className="text-2xl text-teal-300 hover:scale-110">
                  <IoLocation />
                </span>
                <span>11, Street 342, Newyork USA-1001.</span>
              </div>
            </div>
            <div className="flex space-x-6 text-3xl">
              <a href="#" className="hover:scale-110">
                <BsFacebook />
              </a>
              <a href="#" className="hover:scale-110">
                <BsTwitter />
              </a>
              <a href="#" className="hover:scale-110">
                <BsLinkedin />
              </a>
              <a href="#" className="hover:scale-110">
                <BiLogoInstagramAlt />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-40 h-40 z-0 -right-28 -top-28 bg-teal-400 rounded-full">
            </div>
            <div className="absolute w-40 h-40 z-0 -left-28 -bottom-16 bg-teal-400 rounded-full">
            </div>
          <div className="bg-white rounded-xl relative z-10 shadow-lg p-8 text-gray-600 md:w-80">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label for="" className="text-sm font-semibold">
                  Your Name :
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"/>
              </div>

              <div>
                <label for="" className="text-sm font-semibold">
                  Email Address :
                </label>
                <input
                  type="email "
                  placeholder="Your Email"
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500"/>
              </div>

              <div>
                <label for="" className="text-sm font-semibold">
                  Message :
                </label>
                <textarea
                  type="email" rows="4"
                  placeholder="Message..."
                  className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500">
                </textarea>
              </div>
              <button className="inline-block self-end bg-cyan-700 rounded-lg text-white 
              font-bold px-6 py-2 uppercase text-sm hover:text-black hover:bg-teal-400">
                Send Message</button>
            </form>
          </div>
          </div>
        </div>
      </div>
      <div className="w-[65%] mx-auto my-10">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774440.6918292686!2d-75.16228482216879!3d40.692496790726764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1697096773685!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </>
  );
};

export default Contact;
