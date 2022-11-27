import React, { useContext } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";
import { ThemeCustomContext } from "settings/theme-context";

export default function Contact() {
  const { theme } = useContext(ThemeCustomContext);

  return (
    <div className="container-fluid" id="contact-component" style={{ backgroundColor: "#f5f6f8" }}>
      <div
        className="container mx-auto rounded-xl h-auto py-14"
        //style={{ backgroundColor: theme.backgroundColor }}
      >
        <div className="flex-col justify-center items-center text-center">
          <h1 className="tracking-wide font-sans font-extrabold lg:text-4xl sm:text-3xl text-4xl ">
            Turn your ideas into reality
          </h1>
          <p className="text-md md:text-xl pt-2 pb-12 italic w-full"> - We want to hear about it - </p>
        </div>
        <div className="flex flex-wrap gap-1 justify-center text-center gap-4">
          <div className="shrink-0 basis-1/4">
            <PhoneIcon className=" text-5xl" />
            <p className="text-md py-1"> Call us now </p>
            <p className="text-md py-2 text-black "> (+84) 123 456 789 </p>
          </div>
          <div className="shrink-0 basis-1/4">
            <EmailIcon className=" text-5xl" />
            <p className="text-md py-1"> Text us </p>
            <p className="text-md pt-2 pb-1 text-black "> abc.xyz@gmail.com </p>
            <p className="text-md text-black "> (Mr.Thuan) </p>
          </div>
          <div className="shrink-0 basis-1/4">
            <ContactsIcon className=" text-5xl" />
            <p className="text-md py-1"> Address </p>
            <p className="text-md py-2 text-black ">
              {" "}
              123 abc Street, Ward 3, District 10, Ho Chi Minh City, Viet Nam{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
