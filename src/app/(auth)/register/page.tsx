import Link from 'next/link';
import React from 'react';

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Container Box */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        {/* Heading with Gradient Text */}
        <h2 className="text-4xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text text-center">
          ThumbnailYT
        </h2>
        
        {/* Form */}
        <form className="space-y-4">
          {/* Name Section */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Type your name"
              required
            />
          </div>

          {/* Email Section */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Confirm Password Section */}
          <div>
            <label className="block text-black-700 text-sm font-medium mb-2" htmlFor="cpassword">
               Password
            </label>
            <input
              id="cpassword"
              type="password"
              className="w-full p-3 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label className="block text-black-700 text-sm font-medium mb-2" htmlFor="password">
              Confirm Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-3 border border-black-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Confirm Password"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-md font-semibold hover:from-pink-500 hover:to-purple-600 transition duration-200"
            >Submit
            </button>
          </div>
        </form>

        {/* Already have an account? */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <strong>
              <Link href="/login" className="text-purple-500 hover:underline">
                Login
              </Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
