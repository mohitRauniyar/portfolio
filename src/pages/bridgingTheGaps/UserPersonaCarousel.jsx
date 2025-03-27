import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// User Persona Data
const personas = [
  {
    name: "Aarav Verma",
    age: 45,
    education: "High School Graduate",
    occupation: "Small Business Owner",
    location: "Mumbai, India",
    goals: [
      "Master key digital skills through guided learning",
      "Gain confidence in completing real-world digital tasks",
      "Track progress and identify gaps through assessments",
    ],
    frustrations: [
      "Struggles with complex digital interfaces",
      "Fear of making errors in online transactions",
      "Difficulty understanding technical terms",
    ],
    tags: ["Cautious", "Determined", "Adaptive"],
  },
  {
    name: "Priya Sharma",
    age: 34,
    education: "Graduate",
    occupation: "Homemaker",
    location: "Delhi, India",
    goals: [
      "Learn mobile banking to manage household expenses",
      "Understand online shopping and e-commerce",
      "Secure digital platforms for child safety",
    ],
    frustrations: [
      "Lack of familiarity with digital platforms",
      "Concern about fraudulent activities",
      "Difficulty managing multiple digital apps",
    ],
    tags: ["Curious", "Patient", "Motivated"],
  },
  {
    name: "Rahul Mehta",
    age: 50,
    education: "Diploma",
    occupation: "Retired Army Officer",
    location: "Lucknow, India",
    goals: [
      "Stay connected with family through social platforms",
      "Manage online insurance and pension transactions",
      "Explore e-health and telemedicine services",
    ],
    frustrations: [
      "Security concerns about sharing personal details",
      "Difficulty adapting to modern mobile interfaces",
      "Inconsistent guidance on digital security",
    ],
    tags: ["Responsible", "Disciplined", "Resilient"],
  },
];

// User Persona Card Component
const UserPersonaCard = ({ persona }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg text-center bg-white dark:bg-[#1E293B] border-gray-300 dark:border-gray-700">
      <div className="flex justify-center xl:justify-evenly xl:flex-row flex-col xl:mb-16 items-center mb-8">
        <div className="w-24 h-24 mb-4 bg-red-500 rounded-full" />
        <div className="">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            {persona.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Age: {persona.age}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Education: {persona.education}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Occupation: {persona.occupation}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Location: {persona.location}
          </p>

          {/* Tags */}
          <div className="flex justify-center gap-2 mt-2">
            {persona.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Persona Details */}

      {/* Frustrations and Goals */}
      <div className="my-8 flex flex-col gap-8 xl:flex-row justify-evenly text-left">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Frustrations
          </h3>
          <ul className="list-disc list-inside text-md text-gray-600 dark:text-gray-400">
            {persona.frustrations.map((frustration, index) => (
              <li key={index}>{frustration}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Goals
          </h3>
          <ul className="list-disc list-inside text-md text-gray-600 dark:text-gray-400">
            {persona.goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Custom Left Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-600 text-white p-3 rounded-full z-10 hover:bg-gray-700"
  >
    ❮
  </button>
);

// Custom Right Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-600 text-white p-3 rounded-full z-10 hover:bg-gray-700"
  >
    ❯
  </button>
);

const UserPersonaCarousel = () => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 relative">
      <div className="relative">
        <Slider {...settings}>
          {personas.map((persona, index) => (
            <div key={index} className="px-2">
              <UserPersonaCard persona={persona} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UserPersonaCarousel;
