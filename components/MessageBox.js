"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdOutlineMessage } from "react-icons/md";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { IoSend } from "react-icons/io5";

const MessageBox = () => {
  const [message, setMessage] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, clientEmail }),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus(true);
      setLoading(false);
    }
    setMessage("");
    setClientEmail("");
  };

  return (
    <Popover>
      {/* Floating trigger button in bottom-right corner */}
      <PopoverTrigger className="fixed z-50 bg-white text-black p-3 rounded-full right-6 bottom-6 hover:scale-110 active:scale-100 cursor-pointer shadow-md transition-all duration-200 ease-in-out">
        <MdOutlineMessage className="text-xl" />
      </PopoverTrigger>

      {/* Popover content */}

      {status === false ? (
        <PopoverContent className="w-96 h-[400px] mr-6 mb-6 bg-white/5 backdrop-blur-3xl text-white flex flex-col border-none p-1 shadow-lg animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Heading section */}
          <div className="w-full px-4 pt-4 flex flex-col gap-1">
            <h1 className="text-2xl font-semibold">👋 Let’s Work Together</h1>
            <p className="text-sm text-white/70">
              Have a project in mind? Let’s connect and make it happen.
            </p>
          </div>

          {/* Divider line */}
          <div className="border-t border-white/10 mx-4 my-3" />

          <form onSubmit={handleSubmit}>
            {/* Email and message input */}
            <div className="w-full flex flex-col gap-4 px-4">
              <Input
                onChange={(e) => setClientEmail(e.target.value)}
                type="email"
                className="text-white placeholder:text-white/50 bg-white/10 rounded-md border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder={`What’s the best email to reach you?`}
              />
              <Textarea
                onChange={(e) => setMessage(e.target.value)}
                className="h-[150px] text-white placeholder:text-white/50 bg-white/10 rounded-md border border-white/20 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
                placeholder={`Share your idea, and let’s get started!`}
              />
            </div>

            {/* Submit button */}
            <div className="w-full flex justify-center items-center mt-4">
              <button className="w-[90%] py-2 bg-white text-black rounded-md font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 ease-in-out hover:bg-[#B98901] hover:text-white hover:shadow-lg active:scale-95 cursor-pointer">
                <IoSend className="text-lg" />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </PopoverContent>
      ) : (
        <PopoverContent className="w-96 h-[280px] mr-6 mb-6 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl text-white flex flex-col items-center justify-center border border-white/10 p-6 rounded-xl shadow-xl animate-in fade-in zoom-in-75 duration-500">
          {/* Animated success icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500/30 animate-bounce mb-4 shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-400 animate-pulse"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Thank you heading */}
          <h2 className="text-xl font-bold tracking-tight text-center text-white">
            Thanks for reaching out!
          </h2>

          {/* Subtext */}
          <p className="text-sm text-white/70 text-center mt-2 max-w-[85%] leading-relaxed">
            Your message has been delivered. I’ll respond shortly — stay tuned
            ✨
          </p>

          {/* Stylish "Message Sent" badge */}
          <div className="mt-4 px-4 py-1 rounded-full bg-green-600/20 text-green-300 text-xs tracking-wide font-medium shadow-sm border border-green-400/30 animate-in fade-in slide-in-from-bottom-2">
            ✅ Message Sent
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default MessageBox;
