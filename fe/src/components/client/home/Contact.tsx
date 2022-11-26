import React, { useContext } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";
import { ThemeCustomContext } from "settings/theme-context";

export default function Contact() {
  const { theme } = useContext(ThemeCustomContext);

  return (
    <div className="container-fluid" id="contact-component">
      <div
        className="container mx-auto rounded-xl h-auto py-10"
        //style={{ backgroundColor: theme.backgroundColor }}
      >
        <div className="flex-col justify-center items-center text-center">
          <h1 className="tracking-wide font-sans font-extrabold text-2xl md:text-4xl text-black">
            Turn your ideas into reality
          </h1>
          <p className="text-md md:text-xl pt-2 pb-12 italic w-full"> - We want to hear about it - </p>
        </div>
        <div className="flex flex-wrap justify-center text-center md:gap-0 gap-6">
          <div className="shrink-0 md:basis-1/3">
            <PhoneIcon className="text-2xl md:text-5xl text-black" />
            <p className="text:sm md:text-md py-1 text-black "> (+84) 123 456 789 </p>
            <p className="text:sm md:text-md text-black "> (Mr.xxx) </p>
          </div>
          <div className="shrink-0 md:basis-1/3">
            <EmailIcon className="text-2xl md:text-5xl text-black" />
            <p className="text:sm md:text-md py-1 text-black "> abc.xyz@gmail.com </p>
          </div>
          <div className="shrink-0 md:basis-1/3 basis-1/2">
            <ContactsIcon className="text-2xl md:text-5xl text-black" />
            <p className="text:sm md:text-md py-1 text-black ">
              {" "}
              123 abc Street, Ward 3, <br />
              District 10, Ho Chi Minh City, Viet Nam{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
