import React from "react";
import { IoEarth } from "react-icons/io5";

const UserInfo = () => {
  return (
    <>
      <form className="w-full border-b border-gray-300 pb-6">
        <h3 className="font-semibold text-2xl">Enter your details</h3>

        <p className="text-[#60646C] mt-4 mb-10">
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </p>

        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Full name *"
            className="p-4 border-2 border-gray-300 rounded-2xl w-full outline-none"
          />
          <div className="flex max-sm:flex-col justify-between gap-6">
            <div className="flex items-center gap-2 p-4 text-[#60646C] w-1/2 max-sm:w-full border-[2px] border-gray-300 rounded-2xl">
              <IoEarth />
              <select className="outline-none w-full text-gray-400">
                <option value="">Country code *</option>
                <option value="+92">+92</option>
                <option value="+91">+91</option>
              </select>
            </div>
            <div className="w-1/2 max-sm:w-full">
              <input
                type="number"
                placeholder="Phone number *"
                className="p-4 border-2 border-gray-300 rounded-2xl w-full outline-none"
              />
            </div>
          </div>
          <div className="flex max-sm:flex-col justify-center gap-6">
            <input
              type="email"
              placeholder="Email *"
              className="p-4 border-2 border-gray-300 rounded-2xl w-full outline-none"
            />
            <input
              type="email"
              placeholder="Confirm email *"
              className="p-4 border-2 border-gray-300 rounded-2xl w-full outline-none"
            />
          </div>
        </div>
      </form>

      <form className="w-full border-b border-gray-300 pb-6 mt-16">
        <h3 className="font-semibold text-2xl">Additional Information</h3>

        <p className="text-[#60646C] mt-4 mb-10">
          We need a few more details to complete your reservation.
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex max-sm:flex-col justify-between gap-6">
            <div className="w-1/2 max-sm:w-full">
              <input
                type="text"
                placeholder="Input label *"
                className="p-4 border-2 border-gray-300 rounded-2xl w-full outline-none"
              />
            </div>
            <select className="outline-none p-4 text-gray-400 w-1/2 max-sm:w-full border-[2px] border-gray-300 rounded-xl">
              <option value="">Select *</option>
              <option value="+92">+92</option>
              <option value="+91">+91</option>
            </select>
          </div>

          <select className="outline-none p-4 text-gray-400 w-full border-[2px] border-gray-300 rounded-xl">
            <option value="">Multiselect *</option>
            <option value="+92">+92</option>
            <option value="+91">+91</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default UserInfo;
