import { useEffect, useState } from "react";
import { InputTag } from "./InputTag";
import emailjs from "@emailjs/browser";
import { MailCard } from "./MailCard";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);

  const handleClear = () => {
    setName("");
    setEmail("");
    setMsg("");
  };

  const sendEmail = () => {
    const emailData = {
      name: name,
      email: email,
      message: msg,
    };

    emailjs
      .send(
        "service_osbq8xg", // Replace with your service ID
        "template_e1oe5te", // Replace with your template ID
        emailData,
        "xUZN6l9WIIrlCU8YI" // Replace with your public key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setStatus(true);
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div className="relative">
      <h1 className="mt-28 ">
        <div className="block  text-white text-8xl font-bold leading-none select-none">
          LET'S WORK
        </div>
        <div className="block text-neutral-700  text-8xl font-bold leading-none select-none">
          TOGETHER
        </div>
      </h1>
      <div className="mt-10 flex gap-5 w-full">
        <InputTag header={"Name"} desc="Your Name" updateState={setName} />
        <InputTag
          header={"Email"}
          desc="Your@email.com"
          updateState={setEmail}
        />
      </div>
      <div className="mt-5">
        {" "}
        <div className="text-neutral-400 text-sm mb-2.5 font-light">
          Message
        </div>
        <div className=" ">
          <textarea
            onChange={function (e) {
              setMsg(e.target.value);
            }}
            placeholder="Message"
            className={`h-28  w-full min-w-[300px]  rounded-xl bg-[#353334]     pt-3  text-base pl-4 text-white   focus:outline-none focus:ring-2 focus:ring-lime-400   transition  duration-300  `}
          />
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <button
          onClick={function () {
            if (!name || !email || !msg) {
              alert("Please fill in all fields before submitting.");
              return;
            }
            console.log(name);
            console.log(email);
            console.log(msg);
            sendEmail();
          }}
          className="bg-lime-400 
         hover:bg-lime-500  transition-all  duration-300 ease-in-out 
         text-sm p-2.5 rounded-xl px-5 font-medium "
        >
          Submit
        </button>
      </div>
      <MailCard status={status} />
    </div>
  );
}
