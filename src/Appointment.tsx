import { useState } from "react";
import { useNavigate } from "react-router";

interface AppointmentFormData {
  name: string;
  number: string;
  email: string;
  demail: string;
  address: string;
  state: string;
  occupation: string;
  gender: string;
  other: string;
  age: string;
  date: string;
  purpose: string;
}

export default function Appointment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    number: "",
    email: "",
    demail: "",
    address: "",
    state: "",
    occupation: "",
    gender: "",
    other: "",
    age: "",
    date: "",
    purpose: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [lastSubmitData, setLastSubmitData] =
    useState<AppointmentFormData | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (data: AppointmentFormData): string | null => {
    if (!data.name.trim()) return "Full name is required";
    if (!data.number.trim()) return "Phone number is required";
    if (!data.email.trim()) return "Email address is required";
    if (!/^\S+@\S+\.\S+$/.test(data.email))
      return "Please enter a valid email address";
    if (!data.address.trim()) return "Home address is required";
    if (!data.state.trim()) return "State/Region/Province is required";
    return null;
  };

  const submitForm = async (data: AppointmentFormData) => {
    const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3001";

    const response = await fetch(`${API_BASE}/api/appointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || "Failed to submit appointment request"
      );
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm(formData);
    if (validationError) {
      setErrorMessage(validationError);
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      await submitForm(formData);
      setSubmitStatus("success");
      setSuccessMessage(
        "Your appointment request has been submitted successfully! We will contact you soon to confirm your appointment."
      );
      setLastSubmitData({ ...formData });

      // Reset form
      setFormData({
        name: "",
        number: "",
        email: "",
        demail: "",
        address: "",
        state: "",
        occupation: "",
        gender: "",
        other: "",
        age: "",
        date: "",
        purpose: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
      setLastSubmitData({ ...formData });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    if (!lastSubmitData || resendCooldown > 0) return;

    setIsResending(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await submitForm(lastSubmitData);
      setSubmitStatus("success");
      setSuccessMessage(
        "Your appointment request has been resent successfully!"
      );

      // Start cooldown timer
      setResendCooldown(30);
      const timer = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to resend appointment request"
      );
    } finally {
      setIsResending(false);
    }
  };
  return (
    <div className="wrapper bg-[#E0F7FA] py-10 font-inter">
      <div className="bg-white flex flex-col items-center md:mx-[62px] rounded-[15px] p-10">
        <h1 className="text-center text-3xl md:text-[40px] font-inter mb-[30px] text-[#076] font-medium">
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

        {/* Status Messages */}
        {submitStatus === "success" && successMessage && (
          <div className="mb-[30px] p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            <p className="font-medium">{successMessage}</p>
            {lastSubmitData && (
              <div className="mt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={handleResend}
                  disabled={isResending || resendCooldown > 0}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isResending || resendCooldown > 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {isResending
                    ? "Resending..."
                    : resendCooldown > 0
                    ? `Resend in ${resendCooldown}s`
                    : "Resend Request"}
                </button>
              </div>
            )}
          </div>
        )}

        {submitStatus === "error" && errorMessage && (
          <div className="mb-[30px] p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            <p className="font-medium">{errorMessage}</p>
            {lastSubmitData && (
              <div className="mt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={handleResend}
                  disabled={isResending || resendCooldown > 0}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isResending || resendCooldown > 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  {isResending
                    ? "Retrying..."
                    : resendCooldown > 0
                    ? `Retry in ${resendCooldown}s`
                    : "Retry Submission"}
                </button>
              </div>
            )}
          </div>
        )}
        <div className="p-5 mb-[30px] bg-[#f5f5f5] border rounded-[10px] hover:bg-[#E0F2F7] transition-all border-[#e0f7fa]">
          <h2 className="md:text-[32px] text-2xl pb-[5px] font-medium text-[#076] pt-[30px]">
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
          <h2 className="md:text-[32px] text-2xl pb-[5px] font-medium text-[#076] pt-[30px]">
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
          <h2 className="md:text-[32px] text-2xl pb-[5px] font-medium text-[#076] pt-[30px]">
            Patient Information
          </h2>
          <hr className="text-[#B2EBF2] mb-[15px] border-t-2" />
          <p className="text-[#004d40] mb-4">
            To begin, kindly provide the following details:
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="name" className="font-bold text-[#004d40]">
                Full Name <span className="text-[#FF0000]">*</span>
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                placeholder="Your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="number" className="font-bold text-[#004d40]">
                Phone Number <span className="italic">(with country code)</span>{" "}
                <span className="text-[#FF0000]">*</span>
              </label>
              <input
                required
                type="text"
                name="number"
                id="number"
                value={formData.number}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
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
                value={formData.demail}
                onChange={handleInputChange}
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
                value={formData.address}
                onChange={handleInputChange}
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
                value={formData.state}
                onChange={handleInputChange}
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
                value={formData.occupation}
                onChange={handleInputChange}
                className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                placeholder="Your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label className="font-bold text-[#004d40]">Gender</label>
              <div className="flex md:flex-row flex-col gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleInputChange}
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
                    checked={formData.gender === "Female"}
                    onChange={handleInputChange}
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
                    id="other-gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={handleInputChange}
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="other-gender"
                    className="cursor-pointer text-[#004d40]"
                  >
                    Other:
                  </label>
                  {formData.gender === "Other" && (
                    <input
                      type="text"
                      name="other"
                      id="other-input"
                      value={formData.other}
                      onChange={handleInputChange}
                      className="px-2 py-1 w-[50%] md:w-full border-[#4dd0e1] outline-none rounded-md bg-white border"
                      placeholder="Specify"
                    />
                  )}
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
                  value={formData.age}
                  onChange={handleInputChange}
                  className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                  placeholder="Your answer"
                />
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="date" className="font-bold text-[#004d40]">
                  Preferred Date:
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                />
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="purpose" className="font-bold text-[#004d40]">
                  Purpose of Appointment
                </label>
                <textarea
                  name="purpose"
                  id="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  rows={3}
                  className="px-3 py-[6px] border-[#4dd0e1] outline-none rounded-md bg-white border"
                  placeholder="Describe the purpose of your appointment"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`md:text-lg text-sm text-white px-[30px] py-[10px] rounded-lg transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00bcd4] hover:bg-[#00838f] cursor-pointer"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </form>
        </div>
        <div className="p-5 mb-[30px] bg-[#f5f5f5] border rounded-[10px] hover:bg-[#E0F2F7] transition-all border-[#e0f7fa]">
          <h2 className="md:text-[32px] text-2xl pb-[5px] font-medium text-[#076] pt-[30px]">
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
          <h2 className="md:text-[32px] text-2xl pb-[5px] font-medium text-[#076] pt-[30px]">
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
          <h2 className="md:text-[32px] text-2xl pb-[5px] font-medium text-[#076] pt-[30px]">
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
              href="Info.medbedcenter@gmail.com"
              className="underline font-normal text-[#0d6ef]"
            >
              {" "}
              Med Bed Healing Center
            </a>
          </p>
          <p className="text-[#004d40] font-bold my-4">
            or via Telegram @:
            <a
              href="https://t.me/medbedregistration"
              className="underline font-normal text-[#0d6ef]"
            >
              {" "}
              Med Bed Healing Center
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
