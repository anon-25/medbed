import Footer from "./components/Footer";

const videoCards = [
  {
    title: "Sarah Divine's Testimonial",
    location: "Melbourne, Australia",
    video: "https://medbedhealingcenter.com/vid/sdtest.mp4",
  },
  {
    title: "Dr. Jackie's Testimonial",
    location: "Oklahoma, USA",
    video: "https://medbedhealingcenter.com/vid/drjtest.mp4",
  },
  {
    title: "Tina Burner's Testimonial",
    location: "Texas, USA",
    video: "https://medbedhealingcenter.com/vid/tina.mp4",
  },
  {
    title: "Marcus's Testimonial",
    location: "Arizona, USA",
    video: "https://medbedhealingcenter.com/vid/marcus.mp4",
  },
];

const evenMoreFaq = [
  {
    title: "What should I do to prepare?",
    content:
      "Stay hydrated, eat clean meals, avoid alcohol or recreational substances, and get plenty of rest before your session.",
  },
  {
    title: "Can I bring a companion or family member?",
    content:
      "Yes, but please notify us in advance so we can accommodate them appropriately.",
  },
  {
    title: "What should I wear?",
    content: "Comfortable, loose-fitting clothing is recommended.",
  },
  {
    title: "Are there any pre-screening requirements?",
    content:
      "Yes, you will be asked to complete a health questionnaire and a short interview to assess your readiness.",
  },
  {
    title: "What will I feel during the session?",
    content:
      "Experiences vary. Some feel warmth, tingling, or deep relaxation, while others feel very little but see results afterward.",
  },
  {
    title: "Is the procedure painful?",
    content: "No, Med Bed healing is entirely non-invasive and painless.",
  },
  {
    title: "Can I talk during the session?",
    content:
      "Yes, but silence is encouraged to allow for full energetic integration.",
  },
  {
    title: "How long does a session last?",
    content:
      "Sessions typically range from 1 to 3 hours depending on the individual’s needs.",
  },
  {
    title: "What if I feel emotional or tired during or after the session?",
    content:
      "This is common and part of the body's natural integration process. Emotional releases are healthy and welcome.",
  },
  {
    title: "How does the Med Bed work?",
    content:
      "Med Beds operate through a combination of frequency therapy, photonic healing, and quantum diagnostics, aligning energy patterns at a cellular level.",
  },
  {
    title: "Who developed the Med Bed technology?",
    content:
      "The technology is believed to be derived from advanced quantum research, with roots in classified programs and energy medicine.",
  },
  {
    title: "Does it use AI or scanning technology?",
    content:
      "Yes, Med Beds may use advanced diagnostics and AI to scan the body and guide frequency-based healing.",
  },
  {
    title: "Is there an age limit?",
    content:
      "We serve adults 18 and over. Minors may be considered in special cases with guardian consent.",
  },
  {
    title: "Can pregnant women use Med Beds?",
    content:
      "We recommend waiting until after delivery unless the session is approved by your medical provider.",
  },
  {
    title: "Are there risks or side effects?",
    content:
      "The sessions are non-invasive, but temporary fatigue, emotional release may occur.",
  },
  {
    title:
      "Is this related to med beds mentioned in disclosure or secret space programs?",
    content:
      "Our Med Bed technology is inspired by those accounts, though we focus on practical and accessible applications.",
  },
  {
    title: "Is this affiliated with the military or government?",
    content: "No, our centers are private and independently operated.",
  },
  {
    title: "Will I be asleep during the session?",
    content:
      "No, you remain awake and aware, though you may enter a deeply relaxed meditative state.",
  },
  {
    title: "Can I bring my pet for healing?",
    content:
      "Not at this time. Our sessions are currently designed for humans only.",
  },
  {
    title: "Can I document my experience?",
    content:
      "Yes, with permission. However, no photography or filming is allowed in certain areas of the center for privacy and energy regulation.",
  },
  {
    title: "How do I contact support or ask additional questions?",
    content:
      "You can reach us anytime via the contact form on our website, by email, or through our support phone line.",
  },
  {
    title: "How long is the training?",
    content:
      "6 weeks for those with prior medical experience; longer for those without. The training includes both online and in-person modules.",
  },
  {
    title: "Will I receive certification?",
    content:
      "Yes. Graduates receive a Med Bed Healing Certification and may apply for roles within our network or start their own center.",
  },
  {
    title: "How can I purchase a Med Bed?",
    content:
      "You can fill out the Med Bed purchase form on our website, contact us directly by email @ Med Bed Booking. or reach us via whatsapp @: Med Bed Team",
  },
  {
    title: "How much does the training cost?",
    content:
      "The training requires a one-time registration fee of $500 USD, which includes all materials, support, and certification.",
  },
];

const moreFaq = [
  {
    title: "What is the typical wait time for an appointment?",
    content:
      "Wait times vary depending on your location and availability, but we aim to schedule you within 3 to 5 days.",
  },
  {
    title: "How long is the appointment process?",
    content:
      "Typically 1 to 2 days, depending on your specific needs and the healing package selected.",
  },
  {
    title: "Can i reschedule or cancel my payment?",
    content:
      "Yes, Please provide at least 24 hours' notice for any changes to avoid forfeiture of your deposit.",
  },
  {
    title: "Do you offer emergency or priority scheduling?",
    content:
      "Yes, in limited cases, Please contact our team with supporting details to request expedited scheduling.",
  },
  {
    title: "Where are Med Bed centers located?",
    content:
      "Centers are currently available in private healing locations across all countries. You will be assigned a center nearest to your home location.",
  },
  {
    title: "Can I choose the center I go to?",
    content:
      "We do our best to match you with the most convenient location, but selection depends on availabilityand your healing needs.",
  },
  {
    title: "Is transportation provided?",
    content:
      "Yes, complimentary pick-up and drop off services are available for your appointment day upon request.",
  },
  {
    title: "Can I drive myself to the center?",
    content: "Yes, you are welcome to drive or have someone accompany you.",
  },
];

const appointmentList = [
  { country: "canada", mail: "Medbedteam.canada@gmail.com" },
  {
    country: "united kingdom",
    mail: "Medbedcentre@gmail.com",
    shortForm: "UK",
  },
  { country: "United states", shortForm: "USA" },
  { country: "germany", mail: "Medbedteam.germany@gmail.com" },
  { country: "australia", mail: "Medbedteam.australia@gmail.com" },
  { country: "Italy", mail: "Medbedteam.italy@gmail.com" },
  { country: "france", mail: "medbedhealing.france@gmail.com" },
  { country: "switzerland", mail: "medbedteam.switzerland@gmail.com" },
  { country: "japan", mail: "medbedappointment.japan@gmail.com" },
  { country: "netherlands", mail: "medbed.netherlands@gmail.com" },
];

const faq = [
  {
    title: "Is the Med Bed FDA approved or government regulated?",
    content:
      "No. Med Beds are currently part of a private healing initiative and are not regulated by the FDA or considered part of conventional medical practice.",
  },
  {
    title: "Are Med Beds safe?",
    content:
      "Yes. When operated by trained personnel, Med Beds are considered safe, non-invasive, and pain-free.",
  },
];

export default function Media() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center text-[#212529] mx-[38px] px-4 p-4">
        <img src="/assets/big.png" alt="Logo" width={1110} height={400} />
        <p className="italic font-serif md:text-[21px]">
          This page is dedicated to the voices of those who haev experienced
          profound physical, emotional, and energetic healing through thier Med
          Bed sessions. From Chronic illnesses reversed to new hope found. each
          story shared here reflects the true potential of natural, non-invasive
          healing when guided by intention and advanced technology
        </p>
        <p className="italic font-serif md:pb-0 pb-6 md:text-[21px]">
          We invite you to read through these testimonials -- and when you're
          ready, we look forwward to helping you write your own story of
          transformation.
        </p>
        <div className="big-card transition-all flex flex-col items-start justify-center">
          <div className="vid bg-black rounded-md md:py-[100px]">
            <video
              src="https://medbedhealingcenter.com/vid/mbintro.mp4"
              className="md:mx-[235px]"
              controls
              autoPlay
              width={640}
              height={360}
            ></video>
          </div>
          <div className="text p-6 shadow-xl transition-all rounded-b-2xl w-full">
            <h2 className="font-inter font-semibold md:text-xl mb-3 text-[#2d3748]">
              Welcome to Our Med Bed Testimonial Page
            </h2>
            <p className="font-inter mb-4 md:text-[16px] text-sm text-[#4a5568]">
              Real people, Real Healing, Real Transformation.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-[2%] mt-8">
          {videoCards.map((item, index) => (
            <div
              key={index}
              className="big-card transition-all flex flex-col md:w-[49%] mb-8 rounded-lg items-start justify-center"
            >
              <div className="vid bg-black rounded-lg w-full flex justify-center">
                <video
                  src={item.video}
                  controls
                  autoPlay
                  className="w-[228px] h-[304px] object-cover"
                />
              </div>

              <div className="text p-6 shadow-xl transition-all rounded-b-2xl w-full">
                <h2 className="font-inter font-semibold text-xl mb-3 text-[#2d3748]">
                  {item.title}
                </h2>
                <p className="font-inter italic mb-4 text-[#4a5568]">
                  {`-"${item.location}"`}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="font-inter font-medium text-2xl mb-[30px]">
          Frequently Asked Questions
        </h2>
        {faq.map((item, index) => (
          <div
            className="md:w-[60%] mb-5 faq-card transition-all shadow-xl"
            key={index}
          >
            <h3 className="bg-[#F8F9FA] pb-6 border-[#dee2e6] border rounded-t-lg font-medium text-lg text-[#2c3e40] font-inter p-4">
              {" "}
              {item.title}{" "}
            </h3>
            <p className="border border-[#dee2e6] rounded-b-lg p-5 pb-9">
              {item.content}
            </p>
          </div>
        ))}
        <h2 className="font-inter font-medium text-2xl mb-[30px]">
          Appointments & Scheduling
        </h2>
        <div className="md:w-[60%] mb-5 faq-card transition-all shadow-xl">
          <h3 className="bg-[#F8F9FA] pb-6 border-[#dee2e6] border rounded-t-lg font-medium text-lg text-[#2c3e40] font-inter p-4">
            How do i book an appointment?
          </h3>
          <p className="p-5 pb-9">
            You can request an appointment through our website or by contacting
            us directly.
          </p>
          <div className="text border-b rounded-b-lg border-[#dee2e6] p-5">
            {appointmentList.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="uppercase font-inter font-medium pb-2">
                  {item.country}
                </p>
                <a
                  className="font-inter hover:underline capitalize text-[#0056b3]"
                  href={`mailto:${
                    item.mail ? item.mail : "medbedteam@gmail.com"
                  }`}
                >
                  {" "}
                  Med bed{" "}
                  {item.shortForm ? (
                    <span className="uppercase">{item.shortForm}</span>
                  ) : (
                    item.country
                  )}{" "}
                </a>
              </div>
            ))}
            <p>
              If your country isn't listed above you can contact us @:{" "}
              <a href="mailto:medbedteam@gmail.com">Med Bed Team</a>
            </p>
          </div>
        </div>
        {moreFaq.map((item, index) => (
          <div
            className="md:w-[60%] mb-5 faq-card transition-all shadow-xl"
            key={index}
          >
            <h3 className="bg-[#F8F9FA] pb-6 border-[#dee2e6] border rounded-t-lg font-medium text-lg text-[#2c3e40] font-inter p-4">
              {" "}
              {item.title}{" "}
            </h3>
            <p className="border border-[#dee2e6] rounded-b-lg p-5 pb-9">
              {item.content}
            </p>
          </div>
        ))}
        <h2 className="font-inter font-medium text-2xl mb-[30px]">
          Before Your Appointment
        </h2>
        {evenMoreFaq.map((item, index) => (
          <div
            className="md:w-[60%] mb-5 faq-card transition-all shadow-xl"
            key={index}
          >
            <h3 className="bg-[#F8F9FA] pb-6 border-[#dee2e6] border rounded-t-lg font-medium text-lg text-[#2c3e40] font-inter p-4">
              {" "}
              {item.title}{" "}
            </h3>
            <p className="border border-[#dee2e6] rounded-b-lg p-5 pb-9">
              {item.content}
            </p>
          </div>
        ))}
        <div className="md:w-[60%] mb-5 faq-card transition-all shadow-xl">
          <p className="border border-[#dee2e6] rounded-lg p-5 pb-9">
            To apply, fill the training form on our website or contact us
            directly via email:{" "}
            <a
              href="mailto:medbedtraining@gmail.com"
              className="text-[#0056b3]"
            >
              {" "}
              Med Bed Training Team
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
