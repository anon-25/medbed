export default function Purchase() {
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

        <form className="p-6 md:text-[16px] text-sm flex flex-col gap-3">
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="name" className="font-medium ">
              Full Name:
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="email" className="font-medium ">
              Email Address:
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="phone" className="font-medium ">
              Phone Number (including country code):
            </label>
            <input
              type="text"
              placeholder="Enter your phone number with country code"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="whatsapp" className="font-medium ">
              WhatsApp Number (including country code):
            </label>
            <input
              type="text"
              placeholder="Enter your Whatsapp number with country code"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="telegram" className="font-medium ">
              Telegram Username:
            </label>
            <input
              type="text"
              placeholder="Enter your Telegram Username"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="country" className="font-medium ">
              Country of Residence:
            </label>
            <input
              type="text"
              placeholder="Enter your country of residence"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <p className="font-medium text-lg md:text-2xl text-left text-[#ffa500] mb-2">
            Pricing & Fees: We offer flexible pricing plans to accommodate
            different needs:
          </p>
          <div className="flex mb-6 items-start flex-col gap-2">
            <p className="font-medium">Med-Bed Model Selection:</p>
            <div className="flex items-start justify-center gap-2">
              <input
                type="radio"
                name="medBedModel"
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
                id="rejuvenation"
                className="mt-1"
              />
              <label htmlFor="rejuvenation" className="font-medium">
                Rejuvenation & Regression Med Bed
              </label>
            </div>
          </div>
          <div className="flex items-start flex-col gap-2">
            <p className="font-medium">Intended Use:</p>
            <div className="flex items-start justify-center gap-2">
              <input
                type="radio"
                name="medBedUse"
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
                id="other"
                className="mt-1"
              />
              <label htmlFor="other" className="font-medium">
                Other (Please specify):
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter Details"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="info" className="font-medium ">
              Additional Information: Do you have any specific questions or
              requests?
            </label>
            <textarea
              placeholder="Enter your questions or requests"
              rows={3}
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="about" className="font-medium ">
              How did you hear about Med Bed Healing Center?
            </label>
            <input
              type="text"
              placeholder="Enter how you heard about us"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <label htmlFor="info" className="font-medium ">
              Date:
            </label>
            <input
              type="date"
              placeholder="Enter how you heard about us"
              className="p-3 rounded-md w-full bg-[#e0f7fa] border border-[#80ced1]"
            />
          </div>
          <div className="flex items-start flex-col gap-2">
            <p className="font-medium">Training and Certification:</p>
            <div className="flex items-start justify-center gap-2">
              <input
                type="radio"
                name="medBedTraining"
                id="yes"
                className="mt-1"
              />
              <label htmlFor="yes" className="font-medium">
                Yes
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedTraining"
                id="no"
                className="mt-1"
              />
              <label htmlFor="no" className="font-medium">
                No
              </label>
            </div>
          </div>
          <div className="flex mb-4 items-start flex-col gap-2">
            <p className="font-medium">Contact Preference:</p>
            <div className="flex items-start justify-center gap-2">
              <input
                type="radio"
                name="medBedContact"
                id="telegram"
                className="mt-1"
              />
              <label htmlFor="telegram" className="font-medium">
                Telegram
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedContact"
                id="email"
                className="mt-1"
              />
              <label htmlFor="email" className="font-medium">
                Email
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="medBedContact"
                id="whatsapp"
                className="mt-1"
              />
              <label htmlFor="whatsapp" className="font-medium">
                Whatsapp
              </label>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="terms" className="mt-1" required />
            <label htmlFor="terms" className="font-medium md:text-[16px] text-xs md:text-center text-left">
              By submitting this form, you acknowledge that you have read and
              agree to the terms and conditions outlined by Med Bed Healing
              Center.
            </label>
          </div>
          <div className="">
            <button
              type="submit"
              className="text-white px-6 rounded-md hover:bg-[#00869e] cursor-pointer transition-all duration-300 py-3 bg-[#00BCD4] text-center"
            >
              Submit Form
            </button>
          </div>
          <p className="md:text-xl text-sm text-[#212529bf] md:p-4">Please note: Prices include a standard warranty, installation guidance, and technical support. Financing options are available upon request.</p>
        </form>
      </div>
      <p className="text-left w-[85%] pb-5">&copy; {new Date().getFullYear()} Med Bed Healing Center. All rights reserved.</p>
    </div>
  );
}
