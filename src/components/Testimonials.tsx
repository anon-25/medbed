import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../App.css";

const testimonials = [
  {
    image: "/assets/jennifer.jpg",
    // hindi:
    //   '"मेरे लिए यह सिर्फ एक इलाज नहीं था, बल्कि आत्मा की चिकित्सा थी। Med Bed ने मेरे शरीर के साथ-साथ मेरे दिल को भी ठीक किया। अब मैं बिना दर्द के खा सकती हूँ और भावनात्मक रूप से भी स्थिर महसूस करती हूँ।"',
    english:
      "For over a decade, I lived with constant nerve pain and muscle weakness. After just one session in the Med Bed, I could feel warmth returning to my legs. The tremors stopped. It felt like my nervous system was 'remembering' how to work again. After a few follow-up sessions, I was walking with ease and reduced my medication by half. I call it my miracle in light.",
    condition: "Multiple Sclerosis & Neuropathy",
    name: "Jennifer R.",
    location: "California, USA.",
  },
  {
    image: "/assets/marc.jpg",
    hindi:
      "Depuis des années, j'étais prisonnier de la fatigue chronique. Rien ne marchait. Le traitement avec le lit médical quantique m'a redonné de l'énergie, mais surtout de l'espoir. C'était comme si mon corps se rechargeait de l'intérieur. Merci pour votre accompagnement si humain.",
    english:
      "(Translation: For years, I was trapped in chronic fatigue. Nothing worked. The Med Bed recharged my energy, but more importantly, gave me hope again. It felt like my body was being recharged from the inside. Thank you for your deeply human support.)",
    condition: " Chronic Fatigue & Depression",
    name: "Marc B.",
    location: "Quebec, Canada.",
  },
  {
    image: "/assets/ana.jpg",
    hindi:
      "Depois da minha cirurgia de câncer, eu estava cheia de dores e sem energia. A experiência com a Med Bed foi além da medicina tradicional. Eu senti meu corpo se regenerando. Minhas cicatrizes desapareceram mais rápido e minha mente estava mais clara. Sinto que renasci",
    english:
      "(Translation: After my cancer surgery, I was in pain and exhausted. The Med Bed experience went beyond traditional medicine. I felt my body regenerating. My scars healed faster, and my mind was clearer. I feel reborn.)",
    condition: " Breast Cancer (Post-Surgery Healing)",
    name: "Ana Lucia M.",
    location: "Sao Paulo, Brazil.",
  },
  {
    image: "/assets/lars.jpg",
    hindi:
      "Nach meiner dritten Impfung bekam ich starke Gelenkschmerzen und Hautreaktionen. Ich verlor das Vertrauen in die Schulmedizin. Die Med Bed-Behandlung war sanft, aber kraftvoll. Meine Entzündung ging zurück und ich schlafe endlich durch. Diese Technologie ist revolutionär",
    english:
      "(Translation: After my third injection, I experienced joint pain and skin reactions. I lost trust in conventional medicine. The Med Bed treatment was gentle but powerful. My inflammation went down, and I finally sleep through the night. This technology is revolutionary.)",
    condition: " Vaccine Injury & Autoimmune inflammation",
    name: "Lars H.",
    location: "Berlin, Germany.",
  },
  {
    image: "/assets/priya.jpg",
    hindi:
      '"मेरे लिए यह सिर्फ एक इलाज नहीं था, बल्कि आत्मा की चिकित्सा थी। Med Bed ने मेरे शरीर के साथ-साथ मेरे दिल को भी ठीक किया। अब मैं बिना दर्द के खा सकती हूँ और भावनात्मक रूप से भी स्थिर महसूस करती हूँ।"',
    english:
      "(Translation: This wasn't just a treatment—it was soul healing. The Med Bed healed not only my body but also my heart. I can now eat without pain and feel emotionally balanced.)",
    condition: " Emotional Trauma & Digestive Disorders",
    name: "Priya R.",
    location: "Delhi, India.",
  },
  {
    image: "/assets/carlos.jpg",
    hindi:
      '"Después de años controlando mi diabetes con medicamentos, vine con la esperanza de una mejoría. No solo mejoró mi visión, sino que mis niveles de azúcar se estabilizaron de manera natural. Estoy reduciendo mi insulina por primera vez en una década."',
    english:
      "(Translation: After years of managing my diabetes with medication, I came hoping for improvement. Not only did my vision improve, but my blood sugar levels naturally stabilized. I'm reducing my insulin for the first time in a decade.).",
    condition: " Type 2 Diabetes & Vision Loss",
    name: "Carlos M.",
    location: "Madrid, Spain.",
  },
  {
    image: "/assets/thando.jpg",
    // hindi:
    //   '"मेरे लिए यह सिर्फ एक इलाज नहीं था, बल्कि आत्मा की चिकित्सा थी। Med Bed ने मेरे शरीर के साथ-साथ मेरे दिल को भी ठीक किया। अब मैं बिना दर्द के खा सकती हूँ और भावनात्मक रूप से भी स्थिर महसूस करती हूँ।"',
    english:
      "I had a stroke in 2022 and couldn't move the left side of my body. The Med Bed wasn't just healing—it was awakening. I could feel my limbs tingling again after the first session. Today, I can walk with a cane and use my left hand. This changed my life.",
    condition: " Stroke Recovery (Left Side Paralysis)",
    name: "Thando N.",
    location: "Cape Town, South Africa.",
  },
  {
    image: "/assets/aiko.jpg",
    hindi:
      '"長年の頭痛に苦しんできましたが、Med Bedのセッションは私の神経系をリセットしてくれたように感じました。静けさとバランスを取り戻せました"',
    english:
      "(Translation: I've suffered from chronic headaches for years, but the Med Bed sessions felt like a reset for my nervous system. I regained a sense of calm and balance.)",
    condition: " Chronic Migraines & Stress",
    name: "Aiko Y.",
    location: "Kyoto, Japan.",
  },
  {
    image: "/assets/nic1.jpg",
    // hindi:
    //   '"長年の頭痛に苦しんできましたが、Med Bedのセッションは私の神経系をリセットしてくれたように感じました。静けさとバランスを取り戻せました"',
    english:
      "I came in haunted by memories I couldn't shake. I hadn't had restful sleep in years. The Med Bed experience helped calm my nervous system and clear the emotional residue I'd carried for decades. Now I sleep soundly and feel grounded again",
    condition: " PTSD & Insomnia",
    name: "Mark S.",
    location: "Melbourne, Australia.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextTestimonial = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div style={{ background: "#eaf3f7", minHeight: "100vh", padding: "0" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 20px 0 20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: 10,
            fontFamily: "Georgia, serif",
          }}
        >
          Testimonials
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#333",
            marginBottom: 0,
          }}
        >
          At Med Bed Healing Center, patients from all over the world come to
          rediscover health, hope, and harmony. Each story reflects the power of
          our quantum healing technology and the resilience of the human spirit.
        </p>
        <hr
          style={{
            margin: "30px auto 40px auto",
            border: "none",
            borderTop: "2px solid #b2d8e6",
            width: "80%",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={testimonials[current].image}
            alt="testimonial"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: 20,
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          />
          <blockquote
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.1rem",
              color: "#444",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            {testimonials[current].hindi}
          </blockquote>
          <p
            style={{
              fontStyle: "italic",
              color: "#666",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            {testimonials[current].english}
          </p>
          <div style={{ textAlign: "center", marginBottom: 10 }}>
            <span style={{ fontWeight: "bold" }}>Condition:</span>{" "}
            {testimonials[current].condition}
          </div>
          <div
            style={{ textAlign: "center", fontWeight: 500, marginBottom: 4 }}
          >
            {testimonials[current].name}
          </div>
          <div
            style={{
              textAlign: "center",
              fontStyle: "italic",
              color: "#555",
              marginBottom: 20,
            }}
          >
            -{testimonials[current].location}
          </div>

          {/* Carousel Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              marginTop: 30,
            }}
          >
            <button
              onClick={prevTestimonial}
              className="shadow-md"
              style={{
                background: "#E0F2FE",
                // border: "1px solid #b2d8e6",
                borderRadius: 6,
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: 18,
                color: "#06b6d4",
              }}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="my-2 mx-2" />
            </button>
            <button
              onClick={nextTestimonial}
              className="shadow-md"
              style={{
                background: "#E0F2FE",
                // border: "1px solid #b2d8e6",
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: 18,
                color: "#06b6d4",
              }}
              aria-label="Next testimonial"
            >
              <FaChevronRight className="my-2 mx-2" />
            </button>
          </div>
          {/* Dots */}
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 18 }}
          >
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                style={{
                  height: 10,
                  width: 10,
                  margin: "0 4px",
                  backgroundColor: current === idx ? "#b2d8e6" : "#d3eaf2",
                  borderRadius: "50%",
                  display: "inline-block",
                  transition: "background 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
