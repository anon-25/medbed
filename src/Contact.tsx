import { FaWhatsapp, FaTelegram, FaEnvelope, FaFacebook } from "react-icons/fa";

const icons = [
    {
        icon: FaWhatsapp,
        link: "https://wa.me/1234567890",
        label: "WhatsApp"
    }, 
    {
        icon: FaTelegram,
        link: "https://t.me/yourchannel",
        label: "Telegram"
    },
    {
        icon: FaEnvelope,
        link: "mailto:text@gmail.com",
        label: "Email"
    },
    {
        icon: FaFacebook,
        link: "https://www.facebook.com/yourpage",
        label: "Facebook"
    }
]

export default function Contact() {
    const handleForm = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data Submitted:", data);
    }
  return (
    <div className="wrap flex items-center justify-center">
      <div className="flex flex-col gap-4 max-w-[80%] p-8 items-center shadow-sm rounded-[10px]">
        <h1 className="font-noto font-medium text-2xl md:text-[40px] text-[#2c3e50]">
          Contact Us
        </h1>
        <h2 className="font-noto text-sm md:text-left text-center md:text-lg text-[#66798e]">
          Feel free to reach out to us with any questions or inquiries. We'd
          love to hear from you!
        </h2>

        <form onSubmit={(e) => handleForm(e)} className="form flex mt-4 flex-col md:w-[400px] gap-4">
          <input
            className="p-3 outline-none rounded-lg border border-[#cfd8dc]"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
          />
          <input
            className="p-3 outline-none rounded-lg border border-[#cfd8dc]"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="border border-[#cfd8dc] outline-none p-3 h-[140px]"
          ></textarea>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              value="Send Messsage"
              className="bg-[#4299E1] py-3 px-6 rounded-lg cursor-pointer text-white font-noto w-fit"
            />
          </div>
        </form>
        <div className="flex items-center mt-8">
          {icons.map((item, index) => (
            <div className="p-4 icons cursor-pointer mx-2 rounded-full bg-[#E2E8F0]">
                <a href={item.link} key={index} className=""> <item.icon className="md:text-2xl" /> </a>
            </div>
          ))}
        </div>
        <p className="font-noto text-sm text-[#a0aec0]">
        &copy; {new Date().getFullYear()} Med Bed Healing Center. All rights reserved.
        </p>
      </div>
    </div>
  );
}
