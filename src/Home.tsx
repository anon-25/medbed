import Carousel from "./components/Carousel";
import Testimonials from "./components/Testimonials";
import { Title } from "./components/Title";
import backgroundImage from "/assets/facility.jpg";
const items = [
  {
    title: "Welcome to MedBed Healing Center",
    description:
      "Welcome to a Place of Strength, Healing, and Renewed Hope. If you're here, you're likely seeking solutions that believes deeply in the body's remarkable capacity to heal and overcome. We are dedicated to empowering you with the knowledge and resources to address your challenges and embrace a future filled with vitality.",
  },
  {
    title: "A NEW ERA OF WELL-BEING",
    description:
      "Take a deep breath. You are not alone in your journey, Explore our services with hope and the reassurance that healing is possible. We are here to guide you support you, and celebrate every step you take towards renewed well-being, Your strength is within you, and together, we will unlock the path to a healthier, more vibrant you",
  },
  {
    title: "Your Journey To Vibrant Health",
    description:
      "Embark on a personalized path towards optimal well-being. Our dedicated team is here to guide and support you every step of the way. Discover tailored strategies and holistic approaches designed to enhance your vitality and empower you to live your healthiest life",
  },
];

const teams = [
  {
    name: "Dr. Lisa Matsumoto",
    specialty: "Med Bed Operator & Patient Interview Coordinator.",
    brief: "Dr. Lisa is a highly trained and compassionate Med Bed Operator with a focus on patient readiness, ethical healing protocols, and energetic alignment. As the lead Interview Coordinator at the Med Bed Healing Center, Dr. Lisa conducts personal consultations with all prospective clients to ensure they're physically, emotionally, and mentally prepared for their Med Bed experience.",
    shortForm: "Dr. Lisa",
    message: "I believe in healing the whole being--mind, body, and soul. Each conversation is sacred, and i'm honored to walk with clients on their path to transformation.",
    image: "/assets/lisa.jpg"
  },
  {
    name: "Brittany Nicole",
    specialty: "Client Care Coordinator | Med Bed Healing Center",
    brief: "Brittany Nicole is the friendly and knowledgeable voice behind our Client Support Team. As the primary point of contact for new and returning patients, Brittany ensures every inquiry is met with compassion, clarity, and care.",
    shortForm: "Brittany",
    message: "Our goal is to create a supportive space where clients feel safe, heard, and excited about their healing journey.",
    image: "/assets/nic1.jpg"
  },
  {
    name: "Alma Cadaing",
    specialty: "Med Bed Operator & Appointment Coordinator",
    brief: "Alma Cadaing is a dedicated and detail-oriented Med Bed Operator, specializing in patient appointment arrangements and session scheduling. Alma plays a key role in ensuring a smooth and organized experience for every client--from initial approval to finalizing treatment dates.",
    shortForm: "Alma",
    message: "Our role is to make sure your experience is clear, organized, and aligned--so all you need to do is focus on healing",
    image: "/assets/laura.jpg"
  },
  {
    name: "Dr. Lucas Roberto",
    specialty: "Med Bed Operator & Training Appointment Coordinator",
    brief: "Dr. Lucas Roberto is a skilled Med Bed Operator with a specialized role in coordinating training session schedules for newly registered Med Bed trainees. As part of the Med Bed each trainee is seamlessly guided from registration to hands-on learning with professionalism, clarity, and care.\nWith a background in energetic healing and quantum education systems, Dr. Roberto provides both logistical coordination and compassionate support.",
    shortForm: "Lucas",
    message: "Training the next generation of Med Bed practitioners is an honor. Our goal is to help each trainee begin their journey with clarity, alignment, and confidence",
    image: "/assets/yano.jpg"
  },
]

const Home = () => {
  return (
    <div className="bg-white">
      <Carousel
        backgroundImage={backgroundImage}
        items={items}
        autoPlayInterval={5000}
      />
      <div className="bg-[#C8D1D9] px-6 md:px-[77px] mt-2 flex flex-col items-center gap-6 py-28 pb-14">
        <Title text="WHAT IS A MED BED?" className="text-center" />
        <p className="text-center font-noto text-lg text-[#212529]">
          Quantom Healing Med-Beds are revolutionary devices designed to
          facilitate advanced medical treatments through cutting-edge
          technologies. They operate on vibrational frequencies, leveraging
          refracting lenses, 3D scanners, and surgically precise lasers to
          perform diagnostics and repairs with minimal invasiveness. These
          devices utilize tachyonic particles and plasma energy to achieve
          comprehensive healing and rejuvenation.
        </p>
        <a
          className="px-3 py-[6px] bg-[#007BFF] text-white rounded-sm"
          href="/team"
        >
          Learn More
        </a>
      </div>
      <section
        className="bg-fixed bg-cover flex items-center justify-center bg-center h-[400px] bg-[url('/assets/mbdoctors.jpg')]"
      >
        <div className="bg-black font-open opacity-50 max-w-[80%] text-white rounded-[10px] flex flex-col items-center justify-center text-center p-[30px]">
          <h2 className="font-bold mb-[10px] text-2xl">
            The Future of Med Bed Healing
          </h2>
          <p className="text-lg mb-4">
            As Med Bed technology advances, it's impact on healthcare will be
            transformational--eliminating the need for invasive surgeries,
            expensive pharmaceuticals, and prolonged hospital stays. The goal is
            to make healing accessible to all and ensure optimal health
            restoration for every individual.
          </p>
        </div>
      </section>
      <div id="about" className="mt-2 bg-[#C8D1D9] px-6 md:px-[60px] flex flex-col items-center justify-center text-center pt-28 pb-14">
        <Title text="About Us" />
        <p className="font-noto text-[19px] pb-[30px] text-[#212529]">
          Restoring True Healing Through Med Bed Technology
        </p>
        <p className="text-[#212529] mb-[30px] text-lg">
          For too long, the world has been taught to believe that healing must
          come in the form of pills, surgeries, and long-term pharmaceutical
          dependence. We are here to change that narrative. At the core of our
          mission is a belief that the human body is designed to heal — and that
          it can do so when supported with the right frequencies, energy, and
          environment. The Quantum Med Bed is not a promise of magic — it is the
          result of years of advancement in frequency-based healing, plasma
          energy, cellular regeneration, and quantum field science. These
          technologies offer the body what it truly needs: a non-invasive,
          natural, deeply intelligent system that supports full restoration from
          the inside out.
        </p>
        <a
          className="py-[6px] px-3 bg-[#5A6268] rounded-sm text-white"
          href="#team"
        >
          Meet Our Team
        </a>
      </div>
      <div className="bg-[#7F7F7F] py-20 px-6 md:px-[60px] flex flex-col items-center justify-center text-center">
        <Title text="A Deeper Dive Into Our Services" className="mb-2" />
        <p className="text-lg mb-[30px] text-[#212529]">Think of MedBed as the central hub, leveraging cutting-edge technology to enhance diagnostics, treatment, and overall well-being across our service offerings. It's the innovative application of these medical resources that binds our various specialized services together, guaranteeing a technologically advanced and user-centric approach to health. Now, let's explore the different types of MedBed services and the sophisticated tools they employ.</p>
        <a
          className="py-[6px] px-3 bg-[#5A6268] rounded-sm text-white"
          href="#team"
        >
          Explore
        </a>
      </div>
      <div className="p-10" id="team">
        <h3 className="font-open font-bold text-[32px] pb-4 text-[#212529]">Meet Our Team:</h3>
        <div className="div flex flex-wrap gap-[30px]">
          {teams.map((team, index) => (
            <div key={index} className="object-cover md:max-w-[30%]">
              <div className="card mr-[10px] rounded-[10px] border border-[#00000020] rounded-b-[20px] mb-[10px]">
                <img src={team.image} alt="Portrait" height={400} className="rounded-[10px] h-[400px] min-w-full object-cover" />
                <div className="text p-5 flex flex-col gap-5 ">
                  <h4 className="font-bold font-open text-[20px] text-[#212529]">{team.name}</h4>
                  <p className="font-noto text-[#212529]">{team.specialty}</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="font-cabin font-medium text-2xl text-[#212529]">{team.name}</h3>
                <p className="font-noto text-[#212529]"> {team.brief} </p>
              </div>
              <div className="flex flex-col gap-3 text-[#212529] mt-5">
                <h3 className="font-noto font-bold"> {team.shortForm + ':'} </h3>
                <p className="font-noto italic"> {`"${team.message}"`} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
      <p className="md:mx-[60px] px-[15px] mt-5 font-noto italic font-medium text-[#212529]">These are just a few of the many powerful testimonials we receive from around the world. Healing knows no borders--and neither does hope. We welcome you to write your own story of transformation. The Med Bed Healing Center is here for you.</p>
    </div>
  );
};

export default Home;
