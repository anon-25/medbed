import Footer from "./components/Footer";

export default function History() {
    return(
        <div className="flex flex-col items-center">
            <div className=" max-w-[1000px] flex text-left flex-col py-12 px-3 gap-8">
                <div className="one flex gap-8 flex-col items-center justify-center">
                    <h2 className="font-montserrat text-[40px] font-bold text-[#1a52e4]">Our History</h2>
                    <p className="bg-[#E9ECEF] p-8 rounded-[15px] font-inter text-lg text-[#343a40]">At Med Bed Healing Center, our foundation is deeply rooted in a vision of global wellness, self-healing, and the restoration of natural balance through advanced vibrational technology.</p>
                </div>
                <div className="one flex gap-8 flex-col items-center justify-center">
                    <h2 className="font-montserrat text-[40px] font-bold text-[#1a52e4]">The Dawn of Med Bed Technology</h2>
                    <p className="p-8 pt-0 rounded-[15px] font-inter text-lg text-[#343a40]">The Med Bed technology we use today is not new — in fact, it has existed for over 50 years. Originally developed and perfected within the Secret Space Program, this technology has been rigorously tested and proven safe, effective, and transformative. Until recently, it remained classified, available only to select government and military programs. Now, it is being made available to humanity on a wider scale.</p>
                </div>
                <div className="one flex gap-8 flex-col items-center justify-center">
                    <h2 className="font-montserrat text-[40px] font-bold text-[#1a52e4]">The Science of Healing</h2>
                    <p className="p-8 py-0 rounded-[15px] font-inter text-lg text-[#343a40]">What makes Med Beds truly revolutionary is their ability to restore the body to its optimum state of health using the original blueprint encoded within each person’s DNA. By working in harmony with the body’s natural energetic and vibrational field, the Med Beds activate deep healing, regenerate organs and tissues, and restore cellular integrity — all without invasive procedures or pharmaceuticals.</p>
                </div>
                <div className="one flex gap-8 flex-col items-center justify-center">
                    <h2 className="font-montserrat text-[40px] font-bold text-[#1a52e4]">A New Era of Healing</h2>
                    <p className="p-8 py-0 rounded-[15px] font-inter text-lg text-[#343a40]">With the emergence of this technology, our society is shifting from a paradigm of treating illness to one of cultivating wellness. Med Beds mark the beginning of a new era where healing is no longer a privilege for the few, but a right for all. As we transition away from systems that profit from sickness, we embrace a future where every human being can reclaim vibrant health, vitality, and longevity.</p>
                </div>
                <div className="one flex gap-8 flex-col items-center justify-center">
                    <h2 className="font-montserrat text-[40px] font-bold text-[#1a52e4]">Our Mission</h2>
                    <p className="p-8 py-0 rounded-[15px] font-inter text-lg text-[#343a40]">Since our founding, we have dedicated ourselves to making this quantum healing experience accessible, trustworthy, and grounded in love. Our mission is to guide others through their healing journeys — not just as practitioners, but as partners in transformation.</p>
                </div>
                <div className="one flex gap-8 flex-col items-center justify-center">
                    <h2 className="font-montserrat text-[40px] font-bold text-[#1a52e4]">Welcome to the Future</h2>
                    <p className="p-8 py-0 rounded-[15px] font-inter w-full text-lg text-[#343a40]">Welcome to the future of healing. Welcome to Med Bed Healing Center.</p>
                </div>
            </div>
            <Footer className="w-full" />
        </div>
    )
}