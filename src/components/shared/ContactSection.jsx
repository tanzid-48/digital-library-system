import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FcBusinessContact } from "react-icons/fc";
import { IoSend } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="py-20 bg-linear-to-r from-purple-100 via-pink-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="flex gap-2 items-center text-4xl font-bold">
            <FcBusinessContact /> Contact Us
          </h2>

          <p className="text-gray-600">
            If you have any questions, suggestions, or issues, feel free to
            contact us. We usually respond within 24 hours.
          </p>

          <div className="space-y-4 font-medium text-gray-700">
            <p className="flex items-center gap-2">
              <CiLocationOn className="text-xl text-purple-600" />
              Bogura, Bangladesh
            </p>

            <p className="flex items-center gap-2">
              <MdEmail className="text-xl text-purple-600" />
              mdtanzid.525@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl text-purple-600" />
              01798546510
            </p>
          </div>
        </div>
        <div className="card bg-white shadow-xl rounded-2xl">
          <div className="card-body space-y-4">
            <h3 className="text-xl font-semibold text-center">
              Send Me a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />

              <textarea
                className="textarea textarea-bordered h-28 w-full"
                placeholder="Your Message..."
              ></textarea>
              <button
                type="reset"
                className="btn bg-purple-600 text-white w-full flex items-center justify-center gap-2 p-3 rounded-md"
              >
                Send Message <IoSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
