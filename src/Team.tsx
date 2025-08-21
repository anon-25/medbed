import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const offers = [
  "Non-invasive healing for physical, emotional, and energetic imbalances",
  "Treatments that support DNA repair, organ regeneration, nerve restoration, and more",
  "Safe, frequency-based solutions for chronic conditions, trauma, and degenerative diseases",
  "Emotional and cognitive balance through energetic alignment",
  "A training program to empower healers and professionals in this groundbreaking field",
];

const techList = [
  "Quantum energy fields",
  "Plasma & tachyon particles",
  "Scalar wave frequency",
  "Harmonic sound resonance",
  "3D vibrational body scanning",
];

const sessionList = [
  "Full-body quantum diagnostic scanning",
  "DNA and cell repair protocols",
  "Regeneration of organs, nerves, tissues",
  "Removal of toxins and inflammation",
  "Reprogramming the energetic body for balance",
  "Emotional and spiritual realignment",
];

const expectList = [
  "Session Duration: 30 to 90 minutes",
  "Most patients lie comfortably inside the Med Bed",
  "The bed scans, diagnoses, and begins frequency healing",
  "You may feel warmth, vibrations, or emotional release",
  "Immediate results may be felt, with continued benefits unfolding over time",
];

const resultList = [
  "Chronic illness autoimmune conditions",
  "Nerve damage, MS, post-stroke recovery",
  "PTSD, anxiety, depression",
  "Organ degeneran & hormonal imbalances",
  "Vaccine injury repair",
  "Pain, inflammation, and aging",
  "Spiritual blockages & energy stagnation",
];

const beds = [
  {
    name: "Holographic Med Bed",
    description:
      "This bed is designed for highly precise diagnostics and non-invasive surgical interventions. Equipped with AI-assisted laser scalpels, 3D scanners, and computer-guided surgical arms, the Holographic Med Bed scans and analyzes your body in real time, identifying internal issues and correcting them with pinpoint accuracy. Ideal for: organ repair, internal scans, and soft tissue regeneration.",
  },
  {
    name: "Regeneration Med Bed",
    description:
      "Perfect for those needing deeper structural or genetic healing, this bed utilizes DNA templates and stem-cell-based technology to regrow limbs, repair organs, and restore bone, skin, and tissue. It leverages the body’s cellular memory to return you to your optimal state of health. Ideal for: physical trauma, amputations, chronic conditions, and organ failure.",
  },
  {
    name: "Rejuvenation & Age Regression Bed",
    description:
      "This bed focuses on restoring vitality, reversing the effects of aging, and supporting mental and emotional well-being. It enhances muscle tone, skin elasticity, sensory function, and even supports mental clarity and emotional healing. Ideal for: anti-aging, PTSD recovery, hormonal balance, and overall rejuvenation.",
  },
];

export function Team() {
  return (
    <div className="text-[#212529] font-serif bg-[#F0F0F0]">
      <Navbar />
      <h1 className="text-[#212529] pt-32 text-center font-bold text-2xl md:text-[40px] font-serif">
        Healing the Body Through Energy, Frequency & Advanced Technology
      </h1>
      <div className="flex bg-white items-center flex-col justify-center mx-8 shadow rounded-[10px] mt-8 px-10 py-5">
        <div className="flex md:flex-row flex-col font-serif gap-20 md:gap-[4%] text-[20px] mt-8 justify-center text-center">
          <div className="md:w-[48%]">
            <h2 className="font-serif text-[32px] font-bold">
              Welcome to Med Bed Healing Center
            </h2>
            <p className="pb-12 pt-6">
              Welcome to Med Bed Healing Center -- a sanctuary of hope,
              restoration, and innovation. We are a dedicated healing
              organization focused on supporting the body's natural ability to
              heal itself, using the most advanced Quantum Healing Med Bed
              technology available today.
            </p>
            <p>
              At our core, we believe that the human body is a powerful,
              intelligent system capable of profound regeneration when provided
              with the right enviroment. Our Med Beds are designed to{" "}
              <span className="font-bold">
                {" "}
                harmonize frequency, restore cellular function, and awaken the
                body's inner blueprint of health--all without invasive
                procedures or pharmaceuticals.
              </span>
            </p>
          </div>
          <div className="md:w-[48%]">
            <h2 className="font-serif text-[32px] font-bold">Our Mission</h2>
            <p className="pb-12 pt-6">
              To bridge the gap between ancient wisdom and futuristic innovation
              by offering safe, holistic healing experiences through quantum,
              plasma, and vibrational energy technology.
            </p>
          </div>
        </div>
        <h2 className="md:text-[32px] text-2xl text-center pt-12 pb-6 md:pb-12 md:text-left w-full font-bold">
          What We Offer
        </h2>
        <ul className="text-left md:text-[21px] w-full list-disc">
          {offers.map((offer, index) => (
            <div key={index}>
              <li className="py-4">{offer}</li>
              <hr className="text-[#EEEEEE]" />
            </div>
          ))}
        </ul>
        <div className="flex font-serif md:flex-row flex-col gap-20 md:gap-[4%] text-[20px] mt-8 justify-center text-center">
          <div className="md:w-[48%]">
            <h2 className="font-serif text-[32px] font-bold">
              Why we're different
            </h2>
            <p className="pb-12 pt-6">
              Unlike traditional medicine, we don't mask symptoms--we activate
              your{" "}
              <span className="font-bold">
                {" "}
                body's innate intelligence to heal at the source.{" "}
              </span>{" "}
              Every healing journey at our center is personalized,
              compassionate, and grounded in the{" "}
              <span className="font-bold">
                {" "}
                belief that wellness is your natural state.
              </span>
            </p>
          </div>
          <div className="md:w-[48%]">
            <h2 className="font-serif text-[32px] font-bold">
              The Future of Healing is Now
            </h2>
            <p className="pb-12 pt-6">
              We are not just a clinic--we are a movement. A shift away from the
              toxic interventions and into{" "}
              <span className="font-bold">
                {" "}
                high frequency, soul-aligned medicine that respects your body,
                your story, and your sovereignty.
              </span>{" "}
              Let us walk with you on the journey back to balance, vitality, and
              wholeness.
            </p>
          </div>
        </div>
        <h2 className="md:text-[40px] text-2xl text-center md:text-left font-bold pb-11">
          Types of MedBeds at Med Bed Healing Center
        </h2>
        <p className="font-medium pb-10 md:text-[28px]">
          At Med Bed Healing Center, we offer a variety of cutting-edge Quantum
          Healing Med Beds designed to support the body's natural intelligence
          to heal, regenerate, and rebalance on all levels—physical, emotional,
          energetic, and even spiritual.
        </p>
        <p className="font-medium md:text-[28px]">
          Each Med Bed type is built with a specialized purpose, harnessing
          quantum energy, light frequency, plasma fields, and holographic
          diagnostics to provide personalized, non-invasive healing experiences.
        </p>
        <ul className="mt-8 list-disc">
          {beds.map((bed, index) => (
            <li key={index} className="mt-8 md:text-2xl">
              <span className="font-bold">
                {" "}
                {index + 1}. {bed.name}:{" "}
              </span>{" "}
              {bed.description}{" "}
            </li>
          ))}
        </ul>
        <p className="mt-16 font-medium text-sm md:text-[20px]">
          Each bed is operated by a trained and certified Med Bed specialist and
          aligned with your individual healing blueprint. Whether you're
          recovering from illness, looking to restore youthfulness, or seeking
          full-spectrum healing—there is a Med Bed designed for you.
        </p>
      </div>
      <h2 className="text-center mt-12 mb-8 font-bold text-[32px]">
        How Med Beds Actually work-- The Healing Philosophy
      </h2>
      <p className="mx-8 md:text-[21px] mb-12">
        At the Med Bed Healing Center, we believe the human body has an
        extraordinary ability to heal itself. Med Beds don't replae your natural
        helaing power--they amplify it using quantum frequencies, energetic
        alignment, and regenerative fields that restore the body to balance.
      </p>
      <h2 className="text-center mt-12 mb-8 font-bold text-2xl md:text-[32px]">
        The Technology Behind it--Advanced Science Meets Natural Healing
      </h2>
      <p className="mx-8 md:text-[21px] mb-12">Med Beds use a combination of.</p>
      <ul className="md:text-[21px] mx-8 list-disc">
        {techList.map((tech, index) => (
          <li key={index} className="pb-8">
            {tech}
          </li>
        ))}
      </ul>
      <p className="my-8 mb-12 mx-8 md:text-[21px]">
        These tools work together to detect blockages, correct energetic
        imbalances, and activate your body's self-healing process.
      </p>
      <h2 className="text-center mt-12 mb-8 font-bold text-2xl md:text-[32px]">
        What the Med Bed Actually Does--Your Blueprint for Healing
      </h2>
      <p className="mx-8 md:text-[21px] mb-12">Every session includes:</p>
      <ul className="md:text-[21px] mx-8 list-disc">
        {sessionList.map((tech, index) => (
          <li key={index} className="pb-8">
            {tech}
          </li>
        ))}
      </ul>
      <h2 className="text-center mt-12 mb-8 font-bold text-2xl md:text-[32px]">
        Conditions Med Beds Can Support--Restoring Health at the Root Cause
      </h2>
      <p className="mx-8 md:text-[21px] mb-12">
        Med Beds have shown remarkable results with:
      </p>
      <ul className="md:text-[21px] mx-8 list-disc">
        {resultList.map((tech, index) => (
          <li key={index} className="pb-8">
            {tech}
          </li>
        ))}
      </ul>
      <h2 className="text-center mt-12 mb-8 font-bold text-2xl md:text-[32px]">
        What to Expect in A Session--Non-invasive, Safe, Transformational.
      </h2>
      <ul className="md:text-[21px] mx-8 list-disc">
        {expectList.map((tech, index) => (
          <li key={index} className="pb-8">
            {tech}
          </li>
        ))}
      </ul>
      <h2 className="text-center mt-12 mb-8 font-bold text-2xl md:text-[32px]">
        Why it Works--Healing Through Frequency, Not Force
      </h2>
      <p className="mx-8 md:text-[21px] mb-12">
        When the body is returned to it's <span className="font-bold"> ideal energetic frequency</span>, cells regenerete, systems rebalance, and clarity returns. No surgery, no pills--just <span className="font-bold"> vibration, light, and plasma energy</span> restoring what nature intended.
      </p>
      <Footer />
    </div>
  );
}
