import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";

export default function Contact() {
  return (
    <div className="container-fluid mx-auto h-auto py-28 bg-yellow-500" id="contact-component">
      <div className="flex-col text-white justify-center items-center text-center">
        <h1 className="tracking-wide font-sans font-extrabold lg:text-4xl sm:text-3xl text-4xl ">
          Turn your ideas into reality
        </h1>
        <p className="text-md md:text-xl pt-2 pb-12 italic w-full"> - We want to hear about it - </p>
      </div>
      <div className="flex flex-wrap gap-1 justify-center text-center gap-4">
        <div className="shrink-0 basis-1/4">
          <PhoneIcon className="text-white text-5xl" />
          <p className="text-md py-1 text-gray-800"> Call us now </p>
          <p className="text-md py-2 text-white"> (+84) 123 456 789 </p>
        </div>
        <div className="shrink-0 basis-1/4">
          <EmailIcon className="text-white text-5xl" />
          <p className="text-md py-1 text-gray-800"> Text us </p>
          <p className="text-md pt-2 pb-1 text-white"> abc.xyz@gmail.com </p>
          <p className="text-md text-white"> (Mr.Thuan) </p>
        </div>
        <div className="shrink-0 basis-1/4">
          <ContactsIcon className="text-white text-5xl" />
          <p className="text-md py-1 text-gray-800"> Address </p>
          <p className="text-md py-2 text-white"> 123 abc Street, Ward 3, District 10, Ho Chi Minh City, Viet Nam </p>
        </div>
      </div>
    </div>
  );
}
