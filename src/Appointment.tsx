import { useNavigate } from "react-router";

const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log("Form Data Submitted:", data);
};

export default function Appointment() {
  const navigate = useNavigate();
  return (
    <div className="wrapper bg-[#E0F7FA] py-10 font-inter">
      <div className="bg-white flex flex-col items-center mx-[62px] rounded-[15px] p-10">
        <h1 className="text-center text-[40px] font-inter mb-[30px] text-[#076] font-medium">
          Med Bed Appointment Registration Form
        </h1>
        <div className="flex items-start justify-start w-full">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center font-inter py-[6px] px-3 bg-[#5C636A] rounded-md border border-[#6c757d] text-white mb-[30px] cursor-pointer"
          >
            {" "}
            &larr; Back
          </button>
        </div>
        <p className="p-5 mb-[30px] bg-[#B2EBF2] text-[#004d40] rounded-[10px] border border-[#4dd0e1]">
          Welcome to the Med Bed appointment registration form! Please complete
          the sections below to begin your healing journey. Once registered, our
          team will contact you to finalize your appointment.
        </p>
        <div className="p-5 mb-[30px] bg-[#f5f5f5] border rounded-[10px] hover:bg-[#E0F2F7] transition-all border-[#e0f7fa]">
          <h2 className="text-[32px] pb-[5px] font-medium text-[#076] pt-[30px]">
            About Our Med Bed Centers
          </h2>
          <hr className="text-[#B2EBF2] mb-[15px] border-t-2" />
          <p className="text-[#004d40]">
            About Our Med Bed Centers We would like to inform you that Med Bed
            centers are available different parts of the world. These centers
            are strategically located on military bases and private healing
            centers across the country and are managed and overseen by both
            military personnel and our team of professional Med Bed experts.
          </p>
        </div>
        <div className="p-5 mb-[30px] bg-[#f5f5f5] border rounded-[10px] hover:bg-[#E0F2F7] transition-all border-[#e0f7fa]">
          <h2 className="text-[32px] pb-[5px] font-medium text-[#076] pt-[30px]">
            Registration Process
          </h2>
          <hr className="text-[#B2EBF2] mb-[15px] border-t-2" />
          <p className="text-[#004d40]">
            We are currently accepting registrations for individuals wishing to
            access Med Bed sessions. To secure your place, please complete the
            registration process by providing the required patient information.
            The registration process includes a registration fee.(Insurance or
            Medicare does not cover this fee)
          </p>
        </div>
        <div className="p-5 mb-[30px] w-full bg-[#f5f5f5] border rounded-[10px] hover:bg-[#E0F2F7] transition-all border-[#e0f7fa]">
          <h2 className="text-[32px] pb-[5px] font-medium text-[#076] pt-[30px]">
            Patient Information
          </h2>
          <hr className="text-[#B2EBF2] mb-[15px] border-t-2" />
          <p className="text-[#004d40] mb-4">
            To begin, kindly provide the following details:
          </p>

          <form onSubmit={(e) => handleForm(e)} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="name" className="font-bold text-[#004d40]">
                Full Name <span className="text-[#FF0000]">*</span>
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                placeholder="Your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="phone" className="font-bold text-[#004d40]">
                Phone Number <span className="italic">(with country code)</span>{" "}
                <span className="text-[#FF0000]">*</span>
              </label>
              <input
                required
                type="text"
                name="number"
                id="number"
                className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                placeholder="Your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="email" className="font-bold text-[#004d40]">
                Email address (Valid email for correspondence)
                <span className="text-[#FF0000]">*</span>
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                placeholder="Your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="demail" className="font-bold text-[#004d40]">
                Additional email address (optional)
              </label>
              <input
                type="email"
                name="demail"
                id="demail"
                className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                placeholder="Your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="address" className="font-bold text-[#004d40]">
                Home address <span className="text-[#FF0000]">*</span>
              </label>
              <input
                required
                type="text"
                name="address"
                id="address"
                className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                placeholder="Your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="state" className="font-bold text-[#004d40]">
                State/Region/Province <span className="text-[#FF0000]">*</span>
              </label>
              <input
                required
                type="text"
                name="state"
                id="state"
                className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                placeholder="Your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="occupation" className="font-bold text-[#004d40]">
                Occupation{" "}
              </label>
              <input
                type="text"
                name="occupation"
                id="occupation"
                className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                placeholder="Your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label className="font-bold text-[#004d40]">Gender</label>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="Male"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="male"
                    className="cursor-pointer text-[#004d40]"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="Female"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="female"
                    className="cursor-pointer text-[#004d40]"
                  >
                    Female
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    id="other"
                    value="Other"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="other"
                    className="cursor-pointer text-[#004d40]"
                  >
                    Other:
                  </label>
                  <input
                    type="text"
                    name="other"
                    id="other"
                    className="px-2 py-1 border-[#4dd0e1] outline-none rounded-md bg-white border"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="age" className="font-bold text-[#004d40]">
                  Age
                </label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                  placeholder="Your answer"
                />
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="date" className="font-bold text-[#004d40]">
                  Date:
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                  placeholder="Your answer"
                />
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="purpose" className="font-bold text-[#004d40]">
                  Purpose of Appointment
                </label>
                <textarea
                  name="purpose"
                  id="purpose"
                  className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                  placeholder="Your answer"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="p-5 mb-[30px] bg-[#f5f5f5] border rounded-[10px] hover:bg-[#E0F2F7] transition-all border-[#e0f7fa]">
          <h2 className="text-[32px] pb-[5px] font-medium text-[#076] pt-[30px]">
            What to Expect After Registration
          </h2>
          <hr className="text-[#B2EBF2] mb-[15px] border-t-2" />
          <p className="text-[#004d40] mb-4">
            <span className="font-bold">Healing Sessions:</span> Once
            registered, you will be eligible for a personalized healing
            experience using the Med Bed technology. The number of sessions
            required will be tailored to ensure your complete healing.
          </p>
          <p className="text-[#004d40]">
            <span className="font-bold">Appointment Confirmation:</span> After
            completing your registration, you will receive an official
            invitation letter via postal mail. This letter will detail your
            scheduled appointment at the nearest Med Bed center in your city.
            Appointments are typically scheduled within 3 to 5 business days
          </p>
        </div>
        <div className="p-5 mb-[30px] bg-[#f5f5f5] border rounded-[10px] hover:bg-[#E0F2F7] transition-all border-[#e0f7fa]">
          <h2 className="text-[32px] pb-[5px] font-medium text-[#076] pt-[30px]">
            Med Bed Ability
          </h2>
          <hr className="text-[#B2EBF2] mb-[15px] border-t-2" />
          <p className="text-[#004d40]">
            Med Bed healing machine is designed to correct and address all
            issues within the human system, including minor and undetectable
            ones and these med beds can conduct intricate brain tumor surgeries
            rapidly, without pain or anesthesia, allowing patients to leave
            immediately after being cured.
          </p>
        </div>
        <div className="p-5 mb-[30px] bg-[#f5f5f5] border rounded-[10px] hover:bg-[#E0F2F7] transition-all border-[#e0f7fa]">
          <h2 className="text-[32px] pb-[5px] font-medium text-[#076] pt-[30px]">
            Overview of Your Med Bed Appointment
          </h2>
          <hr className="text-[#B2EBF2] mb-[15px] border-t-2" />
          <p className="text-[#004d40] mb-4">
            During your appointment, you will receive a comprehensive and
            personalized healing experience:
          </p>
          <ul>
            <li className="text-[#004d40]">
              <span className="font-bold">Medical History Review: </span>A
              qualified Med Bed expert will review your medical history to
              better understand your health background.
            </li>
            <li className="text-[#004d40]">
              <span className="font-bold">Full-Body Scan: </span>Utilizing
              advanced Med Bed technology, a full-body scan will identify areas
              requiring attention.
            </li>
            <li className="text-[#004d40]">
              <span className="font-bold">Treatment Plan Discussion: </span>The
              results will be reviewed with you, and the expert will recommend
              the appropriate type of Med Bed technology and the number of
              sessions needed to achieve optimal healing.
            </li>
          </ul>
          <p className="text-[#004d40] font-bold my-4">
            To complete your payment for the registration contact the MedBed
            Coordination Team via email @:{" "}
            <a
              href="info@medbedhealingcenter.com"
              className="underline font-normal text-[#0d6ef]"
            >
              {" "}
              Med Bed Healing Center
            </a>
          </p>
          <p className="text-[#004d40] font-bold my-4">
            or via Telegram @:
            <a
              href="info@medbedhealingcenter.com"
              className="underline font-normal text-[#0d6ef]"
            >
              {" "}
              Med Bed Healing Center
            </a>
          </p>
        </div>
        <button
          type="submit"
          className="text-lg text-white px-[30px] py-[10px] cursor-pointer rounded-lg bg-[#00bcd4] hover:bg-[#00838f]"
        >
          Register
        </button>
      </div>
    </div>
  );
}
