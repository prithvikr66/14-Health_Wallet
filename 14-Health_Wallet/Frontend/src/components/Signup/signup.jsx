import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here, you can access 'username', 'email', and 'password'
  };

  return (
    <div className="backdrop-blur-lg inset-0">
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[30rem] h-auto md:h-[37rem]">
          <h1 className="text-5xl text-center font-semibold mb-7">Sign Up!</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="mb-1 block text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <hr className="my-3 " />
          <div className="flex justify-center gap-3 border border-black p-[10px] rounded-lg">
            {/* <img src={Google} className="w-[30px] h-[30px]" alt="" /> */}
            <button className="text-[20px]">
              Signup with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
