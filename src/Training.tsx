import { FaCheckCircle, FaCertificate, FaUsers } from "react-icons/fa";

const locations = [
  "North America",
  "Europe",
  "South Africa",
  "Asia-Pacific",
  "Latin America",
];

const support = [
  "One-on-one mentorship with expert instructors",
  "Access to a private support community",
  "Lifetime access to updated training modules",
  "Guided spiritual development & energy calibration sessions",
];

const certification = [
  "You will receive a Certified Med Bed Practitioner Certificate",
  "You will be added to our official registry of authorized healers",
  "Eligible to apply for healing center partnerships or purchase placement rights",
];

const firstLearn = [
  "Med Bed Setup & Safety Procedures",
  "Quantum Diagnostics & Body Scanning",
  "DNA Restoration, Organ Regeneration & Frequency Medicine",
  "Emotional & Energetic Trauma Healing",
];

const secondLearn = [
  "Patient Intake & Healing Protocol Customization",
  "Live Healing Demonstrations (Remote or In-Person)",
  "Ethics, Responsibility & Spiritual Integrity",
];

const trainingOptions = [
  {
    title: "Online Training",
    description: "Interactive virtual classes + downloadable materials",
  },
  {
    title: "In-Person Training",
    description:
      "Hands-on experience with med beds at our certified healing centers",
  },
  {
    title: "Custom Schedule",
    description: "Weekday and weekend sessions available",
  },
];

export default function Training() {
  return (
    <div className="font-inter bg-[#E3EAFF]">
      <header className="text-white px-8 py-6 rounded-b-lg text-center bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="md:text-5xl text-2xl font-medium ">Med Bed Training Program</h1>
        <p className="md:text-xl pt-2">
          Welcome to the Med Bed Healing Center's Official Training Program
        </p>
      </header>
      <div className="contain py-10 px-3 md:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
          <h2 className="font-inter text-xl md:text-[30px] mb-6 font-semibold text-[#1d4ed8]">
            About the Program
          </h2>
          <p className="md:text-xl text-[#374151]">
            Become a Certified Quantum Healing Practitioner. Our Med Bed
            Training Program is designed for passionate individuals, wellness
            professionals, and healing centers ready to operate Quantum Healing
            Med Beds with confidence and integrity. Whether you're new to energy
            work or experienced in alternative medicine, our program will guide
            you step-by-step through the advanced principles of vibrational
            healing and med bed operation.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
          <h2 className="font-inter text-xl md:text-[30px] mb-6 font-semibold text-[#1d4ed8]">
            What You'll Learn
          </h2>
          <div className="flex justify-between md:flex-row flex-col md:text-center text-left">
            <ul className="md:text-xl text-[#374151] space-y-3">
              {firstLearn.map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-green-500 md:text-[16px] text-sm mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="md:text-xl pt-3 md:pt-0 text-[#374151] space-y-3">
              {secondLearn.map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-green-500 md:text-[16px] text-sm mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
          <h2 className="font-inter text-xl md:text-[30px] mb-6 font-semibold text-[#1d4ed8]">
            Video Introduction
          </h2>
          <div className="video">
            <video controls width={1136} height={621}>
              <source
                src="https://medbedhealingcenter.com/vid/mbtvid.mp4"
                className="object-contain"
              />
            </video>
          </div>
          <p className="text-[#4b5563] md:text-[16px] text-sm mt-3">
            A brief introduction to the Med Bed Training Program and what you
            can expect to learn.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
          <h2 className="font-inter text-xl md:text-[30px] mb-6 font-semibold text-[#1d4ed8]">
            Training Options
          </h2>
          <div className="flex md:flex-row gap-6 md:gap-0 flex-col justify-between">
            {trainingOptions.map((option, index) => (
              <div
                className="md:max-w-[32%] p-6 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-purple-100 to-pink-50 shadow-md rounded-lg flex flex-col gap-4"
                key={index}
              >
                <p className="font-medium md:text-xl text-[#7e22ce]">
                  {" "}
                  {option.title}{" "}
                </p>
                <p className="md:text-[16px] text-sm"> {option.description} </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
          <h2 className="font-inter text-xl md:text-[30px] mb-6 font-semibold text-[#1d4ed8]">
            Certification
          </h2>
          <p className="text-[#374151] md:text-xl mb-3">
            Official Certification Upon Completion. After successfully
            completing the program and passing your evaluation:
          </p>
          <div className="flex gap-3 md:gap-0 flex-col">
            {certification.map((option, index) => (
              <p
                key={index}
                className="font-medium flex items-center justify-center gap-3 md:text-center text-left md:text-xl text-[#374151]"
              >
                <FaCertificate className="text-[#3B82F6]" /> {option}{" "}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
          <h2 className="font-inter text-xl md:text-[30px] mb-6 font-semibold text-[#1d4ed8]">
            Mentorship & Support
          </h2>
          <p className="text-[#374151] md:text-xl mb-3">
            You're Never Alone On This Journey. Every student gets:
          </p>
          <div className="flex flex-col gap-3">
            {support.map((option, index) => (
              <p
                key={index}
                className="font-medium flex items-center justify-start gap-3 md:text-center text-left  md:text-xl text-[#374151]"
              >
                <FaUsers className="text-[#A855F7]" /> {option}{" "}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
          <h2 className="font-inter text-xl md:text-[30px] mb-6 font-semibold text-[#1d4ed8]">
            Ready to Begin?
          </h2>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer text-white px-6 py-3 rounded-full font-semibold md:text-xl hover:scale-110 transition-transform duration-300">
            <a href="https://wa.me/+14482009390">
            Click Here to Register for Training
            </a>
          </button>
          <p className="mt-4 text-xs md:text-lg">
            A $500 USD registration fee is required to secure your training
            spot. Once we receive your application and fee, you’ll receive a
            welcome package and your training schedule.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center mb-8">
          <h2 className="font-inter text-xl md:text-[30px] mb-6 font-semibold text-[#1d4ed8]">
            Training Locations
          </h2>
          <p className="mt-4 md:text-xl">
            Global Reach, Local Connection. Due to privacy and security,
            training center locations are revealed after registration. We
            operate in trusted partner centers across:
          </p>
          <div className="flex flex-wrap md:flex-row flex-col gap-[2%] mt-4">
            {locations.map((item, index) => (
              <p key={index} className="p-4 mb-4 shadow-md font-semibold text-xs md:text-lg md:w-[32%] hover:scale-105 transition-transform duration-300 text-[#4338ca] bg-gradient-to-br from-indigo-50 to-teal-50 rounded-lg">
                {" "}
                {item}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-[#1F2937] p-4">
        <p className="text-white text-center">&copy; {new Date().getFullYear()} Med Bed Healing Center. All rights reserved.</p>
      </footer>
    </div>
  );
}
