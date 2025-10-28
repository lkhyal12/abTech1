import {
  Facebook,
  Instagram,
  Linkedin,
  LocateIcon,
  LocationEdit,
  Mail,
  Map,
  MapIcon,
  MapPinned,
  Pin,
  Twitter,
} from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen flex flex-col items-center pt-25 pb-5 px-4 sm:px-5 md:px-10 lg:px-30 xl:px-40"
    >
      <h1 className="sectionTitle text-secondary">
        Get In <span className="text-primary">Touch</span>
      </h1>

      <p className="text-center w-full md:w-2/3 my-5 text-primary font-medium">
        If you have a project in mind or are interested in collaborating, feel
        free to reach out. I'm always open to discussing new opportunities.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center mt-10 w-full">
        <div className="flex-1 max-md:w-full">
          <h3 className="text-primary font-semibold text-xl sm:text-2xl text-center">
            Contact Information
          </h3>
          <div className="flex items-center gap-3 mt-5">
            <div className="bgCard rounded-full  p-3">
              <Mail size={35} className="text-primary" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <h4 className="text-primary text-lg font-bold">Email</h4>
              <p className="text-primary">lkhyal.ab@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <div className="bgCard rounded-full  p-3">
              <MapPinned size={35} className="text-primary" />
              {/* <MapPinned /> */}
            </div>
            <div className="flex flex-col items-center gap-1">
              <h4 className="text-primary text-lg font-bold">Location</h4>
              <p className="text-primary">Oujda, Morocco</p>
            </div>
          </div>

          <div className="connectWithMe flex flex-col items-center justify-center mt-8">
            <h3 className="text-primary font-semibold text-lg">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-5 mt-4">
              <a href="#">
                <Facebook className="text-primary" size={25} />
              </a>

              <a href="#">
                <Instagram className="text-primary" size={25} />
              </a>
              <a href="#">
                <Linkedin className="text-primary" size={25} />
              </a>
              <a href="#">
                <Twitter className="text-primary" size={25} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 max-md:w-full px-5 py-6 bgCard shadow-sm rounded-md">
          <h3 className="text-primary font-semibold text-xl sm:text-2xl text-center mb-5">
            Send a message
          </h3>
          <form className="flex flex-col gap-5">
            <input
              className="w-full outline-0 borderColor rounded-md p-2 text-[18px] text-primary"
              type="text"
              placeholder="Name..."
            />
            <input
              className="w-full outline-0 borderColor rounded-md p-2 text-[18px] text-primary"
              type="email"
              placeholder="Email..."
            />
            <textarea
              className="w-full outline-0 borderColor rounded-md p-2 text-[18px] text-primary"
              placeholder="Your Message"
            />
            <button
              type="submit"
              className="btnBg rounded-full font-semibold cursor-pointer py-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
