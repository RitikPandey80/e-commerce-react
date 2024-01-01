import {FaUserAlt} from "react-icons/fa";

const Login = () => {
  return (
    <>

    <div className="flex items-center justify-center h-screen bg-[#e0e0d1]">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="text-3xl flex gap-2 mx-[90px] font-semibold">
            <span className="w-[45px] h-[45px] flex rounded-full border border-black bg-slate-300
               justify-center items-center"> <i><FaUserAlt /></i>
            </span> Login</h1>
        <hr className="mt-3"></hr>
        <div className="mt-3">
            <label for="username" className="block text-base mb-2"> Username : </label>
            <input type="text" id="username" placeholder="Enter Username..."
            className="border w-full text-base px-2 py-1  
            focus:outline-none focus:ring-0 focus:border-gray-600">
             </input>
        </div>

        <div className="mt-3">
            <label for="password" className="block text-base mb-2"> Password : </label>
            <input type="password" id="password" placeholder="Enter Password..."
            className="border w-full text-base px-2 py-1  
            focus:outline-none focus:ring-0 focus:border-gray-600">
             </input>
        </div>

        <div className="mt-3 flex justify-between items-center">
            <div>
                <input type="checkbox"/><label> Remember Me</label>
            </div>
            <div>
                <a href="#" className="text-indigo-800 font-semibold">Forgot Password?</a>
            </div>
        </div>

        <div className="mt-5">
            <button type="submit" 
            className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full
             rounded-sm hover:bg-transparent hover:text-indigo-700 font-semibold">
                Login</button>
            </div>
      </div>
    </div>


    </>
  )
}

export default Login
