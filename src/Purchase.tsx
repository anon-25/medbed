import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  telegram: string;
  country: string;
  medBedModel: string;
  medBedUse: string;
  otherUse: string;
  additionalInfo: string;
  aboutUs: string;
  date: string;
  medBedTraining: string;
  medBedContact: string;
  acceptTerms: boolean;
}

export default function Purchase() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    telegram: "",
    country: "",
    medBedModel: "",
    medBedUse: "",
    otherUse: "",
    additionalInfo: "",
    aboutUs: "",
    date: "",
    medBedTraining: "",
    medBedContact: "",
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [lastSubmitData, setLastSubmitData] = useState<FormData | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = (data: FormData): string | null => {
    if (!data.name.trim()) return "Full name is required";
    if (!data.email.trim()) return "Email address is required";
    if (!/^\S+@\S+\.\S+$/.test(data.email))
      return "Please enter a valid email address";
    if (!data.phone.trim()) return "Phone number is required";
    if (!data.country.trim()) return "Country of residence is required";
    if (!data.medBedModel) return "Please select a Med-Bed model";
    if (!data.medBedUse) return "Please specify intended use";
    if (data.medBedUse === "other" && !data.otherUse.trim())
      return "Please specify other use details";
    if (!data.medBedContact) return "Please select a contact preference";
    if (!data.acceptTerms) return "Please accept the terms and conditions";
    return null;
  };

  const submitForm = async (data: FormData) => {
    const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

    const response = await fetch(`${API_BASE}/api/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to submit form");
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
        "Your purchase request has been submitted successfully! We will contact you soon."
      );
      setLastSubmitData({ ...formData });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        telegram: "",
        country: "",
        medBedModel: "",
        medBedUse: "",
        otherUse: "",
        additionalInfo: "",
        aboutUs: "",
        date: "",
        medBedTraining: "",
        medBedContact: "",
        acceptTerms: false,
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
      setSuccessMessage("Your purchase request has been resent successfully!");

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
        error instanceof Error ? error.message : "Failed to resend request"
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="flex flex-col font-serif justify-center items-center">
      <div className="w-[85%] bg-[#F0F4F4] my-5 rounded-lg text-center">
        <h1 className="font-serif font-medium text-xl md:text-2xl text-[#00334d] text-center bg-[#E0F7FA] border-b border-b-[#0000002d] rounded-t-lg p-4">
          Quantum Healing Med-Bed Purchase Form
        </h1>
        <p className="font-serif md:text-xl text-[#212529bf] mt-6">
          Welcome to the Future of Healing and Wellness. Please complete this
          form to begin your journey towards owning a Quantum Healing Med-Bed.
        </p>
        <p className="font-serif md:text-xl text-[#212529] mt-6">
          Each med bed type addresses specific health and wellness needs,
          offering life-changing solutions to a variety of medical challenges.
        </p>
        <p className="font-serif md:text-xl text-[#212529bf] mt-2">
          Explore our advanced Med-Bed models and select the one that best suits
          your aspirations for well-being.
        </p>

        {/* Status Messages */}
        {submitStatus === "success" && successMessage && (
          <div className="mx-6 mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
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
          <div className="mx-6 mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
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

        <form
          onSubmit={handleSubmit}
          className="p-6 md:text-[16px] text-sm flex flex-col gap-3"
        >
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="name" className="font-medium">
              Full Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
              required
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="email" className="font-medium">
              Email Address: <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
              required
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="phone" className="font-medium">
              Phone Number (including country code):{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number with country code"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
              required
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="whatsapp" className="font-medium">
              WhatsApp Number (including country code):
            </label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="Enter your Whatsapp number with country code"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="telegram" className="font-medium">
              Telegram Username:
            </label>
            <input
              type="text"
              name="telegram"
              value={formData.telegram}
              onChange={handleInputChange}
              placeholder="Enter your Telegram Username"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="country" className="font-medium">
              Country of Residence: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Enter your country of residence"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
              required
            />
          </div>
          <p className="font-medium text-lg md:text-2xl text-left text-[#ffa500] mb-2">
            Pricing & Fees: We offer flexible pricing plans to accommodate
            different needs:
          </p>
          <div className="flex mb-6 items-start flex-col gap-2">
            <p className="font-medium">
              Med-Bed Model Selection: <span className="text-red-500">*</span>
            </p>
            <div className="flex items-start justify-center gap-2">
              <input
                type="radio"
                name="medBedModel"
                value="holographic"
                checked={formData.medBedModel === "holographic"}
                onChange={handleInputChange}
                id="holographic"
                className="mt-1"
              />
              <label htmlFor="holographic" className="font-medium">
                Holographic Med Bed
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedModel"
                value="regeneration"
                checked={formData.medBedModel === "regeneration"}
                onChange={handleInputChange}
                id="regeneration"
                className="mt-1"
              />
              <label htmlFor="regeneration" className="font-medium">
                Regeneration Med Bed
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedModel"
                value="rejuvenation"
                checked={formData.medBedModel === "rejuvenation"}
                onChange={handleInputChange}
                id="rejuvenation"
                className="mt-1"
              />
              <label htmlFor="rejuvenation" className="font-medium">
                Rejuvenation & Regression Med Bed
              </label>
            </div>
          </div>
          <div className="flex items-start flex-col gap-2">
            <p className="font-medium">
              Intended Use: <span className="text-red-500">*</span>
            </p>
            <div className="flex items-start justify-center gap-2">
              <input
                type="radio"
                name="medBedUse"
                value="healing"
                checked={formData.medBedUse === "healing"}
                onChange={handleInputChange}
                id="healing"
                className="mt-1"
              />
              <label htmlFor="healing" className="font-medium">
                Personal Healing
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedUse"
                value="practitioner"
                checked={formData.medBedUse === "practitioner"}
                onChange={handleInputChange}
                id="practitioner"
                className="mt-1"
              />
              <label htmlFor="practitioner" className="font-medium">
                Wellness Practitioner
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedUse"
                value="center"
                checked={formData.medBedUse === "center"}
                onChange={handleInputChange}
                id="center"
                className="mt-1"
              />
              <label htmlFor="center" className="font-medium">
                Healing Center
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedUse"
                value="other"
                checked={formData.medBedUse === "other"}
                onChange={handleInputChange}
                id="other"
                className="mt-1"
              />
              <label htmlFor="other" className="font-medium">
                Other (Please specify):
              </label>
            </div>
            {formData.medBedUse === "other" && (
              <input
                type="text"
                name="otherUse"
                value={formData.otherUse}
                onChange={handleInputChange}
                placeholder="Enter Details"
                className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
                required
              />
            )}
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="additionalInfo" className="font-medium">
              Additional Information: Do you have any specific questions or
              requests?
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Enter your questions or requests"
              rows={3}
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="aboutUs" className="font-medium">
              How did you hear about Med Bed Healing Center?
            </label>
            <input
              type="text"
              name="aboutUs"
              value={formData.aboutUs}
              onChange={handleInputChange}
              placeholder="Enter how you heard about us"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="date" className="font-medium">
              Date:
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <p className="font-medium">Training and Certification:</p>
            <div className="flex items-start justify-center gap-2">
              <input
                type="radio"
                name="medBedTraining"
                value="yes"
                checked={formData.medBedTraining === "yes"}
                onChange={handleInputChange}
                id="training-yes"
                className="mt-1"
              />
              <label htmlFor="training-yes" className="font-medium">
                Yes
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedTraining"
                value="no"
                checked={formData.medBedTraining === "no"}
                onChange={handleInputChange}
                id="training-no"
                className="mt-1"
              />
              <label htmlFor="training-no" className="font-medium">
                No
              </label>
            </div>
          </div>
          <div className="flex mb-4 items-start flex-col gap-2">
            <p className="font-medium">
              Contact Preference: <span className="text-red-500">*</span>
            </p>
            <div className="flex items-start justify-center gap-2">
              <input
                type="radio"
                name="medBedContact"
                value="telegram"
                checked={formData.medBedContact === "telegram"}
                onChange={handleInputChange}
                id="contact-telegram"
                className="mt-1"
              />
              <label htmlFor="contact-telegram" className="font-medium">
                Telegram
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedContact"
                value="email"
                checked={formData.medBedContact === "email"}
                onChange={handleInputChange}
                id="contact-email"
                className="mt-1"
              />
              <label htmlFor="contact-email" className="font-medium">
                Email
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedContact"
                value="whatsapp"
                checked={formData.medBedContact === "whatsapp"}
                onChange={handleInputChange}
                id="contact-whatsapp"
                className="mt-1"
              />
              <label htmlFor="contact-whatsapp" className="font-medium">
                Whatsapp
              </label>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleInputChange}
              id="terms"
              className="mt-1"
              required
            />
            <label
              htmlFor="terms"
              className="font-medium md:text-[16px] text-xs md:text-center text-left"
            >
              By submitting this form, you acknowledge that you have read and
              agree to the terms and conditions outlined by Med Bed Healing
              Center. <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`text-white px-6 rounded-md transition-all duration-300 py-3 text-center w-full ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00BCD4] hover:bg-[#00869e] cursor-pointer"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Form"}
            </button>
          </div>
          <p className="md:text-xl text-sm text-[#212529bf] md:p-4">
            Please note: Prices include a standard warranty, installation
            guidance, and technical support. Financing options are available
            upon request.
          </p>
        </form>
      </div>
      <p className="text-left w-[85%] pb-5">
        &copy; {new Date().getFullYear()} Med Bed Healing Center. All rights
        reserved.
      </p>
    </div>
  );
}
