import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function Contact() {

  return (
    <div className="container-fluid mx-auto h-auto py-28 bg-yellow-500">
      <div className="flex-col justify-center items-center">
        <h1 className="text-white tracking-widest font-sans font-extrabold lg:text-4xl sm:text-2xl pb-4 text-center"> Turn your ideas into reality </h1>
        <h4 className="text-white font-extralight tracking-widest text-lg text-center pb-5"> - We want to hear about it - </h4>
      </div>
      <div className="grid grid-cols-3 gap-3 justify-center text-center">
        <div className="col-span-1 p-3"> 
            <PhoneIcon className="text-white text-4xl" />
            <p className="text-md text-gray-500"> Call us now </p>
            <p className="text-xl text-white"> (+84) 123 456 789 </p>
        </div>
        <div className="col-span-1 p-3"> 
            <EmailIcon className="text-white text-4xl" /> 
            <p className="text-md text-gray-500"> Text us </p>
            <p className="text-xl text-white"> abc.xyz@gmail.com </p>
            <p className="text-md text-white"> (Mr.Thuan) </p>
        </div>
        <div className="col-span-1 p-3"> 
            <ContactsIcon className="text-white text-4xl" />
            <p className="text-md text-gray-500"> Address </p>
            <p className="text-xl text-white"> 123 abc Street, Ward 3, District 10, Ho Chi Minh City, Viet Nam </p>
        </div>
      </div>

    </div>
  );
}