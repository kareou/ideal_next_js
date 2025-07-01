
import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";


const TestimonialsSection = () => {


  const testimonials = [
    {
      author_name: "Erica Brewer",
      text: "My main contact Demetrius has been great he’s very helpful. Has a very pleasant attitude and accommodating. I want to thank him for putting me at ease when it comes to taxes. It causes me anxiety and he has ease my burden today so I just want to thank him. He has been an excellent excellent contact",
      avatar: "👩",
      time: "2 weeks ago",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjXTy2YE70vde3kRQvnjqeo01qskNMlydPnfUGc5qzcvTU8J_us6rA=w72-h72-p-rp-mo-br100",
      rating: 5,
      author_url:
        "https://www.google.com/maps/contrib/101701456738629287700/reviews/",
    },
    {
      author_name: "larfadoodle",
      text: "Decided to give them a try. The woman that helped me named Jacky did a great job walking me through it all. The irs was going to garnish my pay. But she and the company were able to stop that. Made things a lot less stressful for me. Ended up with their payment plan option to move forward without breaking my bank. Glad I gave em a shot.",
      avatar: "👨",
      time: "2 months ago",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjU1rI3WpOutnElHXtXEYyRuAWVh_qzPJNuCmjp8vh8mFxeRGrXy=w72-h72-p-rp-mo-ba2-br100",
      rating: 5,
      author_url: "https://www.google.com/maps/contrib/116515127551782630239/reviews/",
    },
    {
      author_name: "Fan Dub",
      text: "When I first called Ideal Tax, I got the help I needed. There services is excellent and them helping me out with my taxes issues. I was able to start over again and focus with my daily life. I want thank you for your help. It forever changed my life!",
      avatar: "👩‍🦱",
      time: "month ago",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjXC_EAw559unk3slxmRqXNAhXyObX1AQP8lAlLZ4bn_DBenqfzT=w72-h72-p-rp-mo-ba2-br100",

      rating: 5,
      author_url:
        "https://www.google.com/maps/contrib/111169279324599915326/reviews/",
    },
    {
      author_name: "sharon wrinkle",
      text: "I want to write a review of my outstanding service and stellar care that I have received from Ideal Tax Service.  I was initially very distraught over my overwhelming situation, and this professional group has offered me assistance in every way,, especially peace of mind!!  I highly recommend their services to take care of any of your tax needs!!  I appreciate being introduced to them and following through with their meticulous care. Sharon June Wrinkle",
      avatar: "👨‍🦲",
      time: "2 months ago",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjUqfFDhm8vHMKFsNwgi-iECesWq4uSPUYd7FqW5pYBKLOELVwg=w72-h72-p-rp-mo-br100",

      rating: 5,
      author_url:
        "https://www.google.com/maps/contrib/114743203427713674719/reviews/",
    },
    {
      author_name: "Ashley Rodriguez",
      text: "I had a pretty complex tax situation after switching jobs moving across states and doing some freelance work. I figured I'd owe a lot but Ideal Tax caught details I never would have noticed and helped me get organized without the stress. What really impressed me was how human the whole process felt I wasn’t just a number to them!",
      avatar: "👩‍🦰",
      time: "month ago",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjUn9wOkZcd5bS-uzLpNULOIJbsOFIp7RNr7mWWVWDuqXbR_INk=w72-h72-p-rp-mo-br100",

      rating: 5,
      author_url:
        "https://www.google.com/maps/contrib/111009964815402259518/reviews/",
    },
    {
      author_name: "Steffy Shelton",
      text: "I’d like to share my positive experience working with you on my taxes . Your: expertise and knowledge were impressive . Communication Style was clear and concise . Attention to detail ensured accuracy , friendly demeanor made me feel at ease . Thank you for yoir outstanding service , I’m grateful for your help! And your professionalism and kindness!! Thank you so much Mr. Dmetrius 😇",
      avatar: "👨‍💼",
      time: "week ago",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjUfkIyYLsSRZbfyjExWg0x-ofDXhuKXzs2bPhA7o2D8-8kVo-vvjQ=w72-h72-p-rp-mo-ba2-br100",

      rating: 5,
      author_url:
        "https://www.google.com/maps/contrib/110618747256453508029/reviews/",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-mint-200 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience with Ideal Tax.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {testimonials.map((testimonial, index) => (
            <Link
              key={index}
              href={testimonial.author_url}
              target="_blank"
              // onClick={() => window.open(testimonial.author_url, "_blank")}
              className="bg-white rounded-lg p-6 shadow-sm flex flex-col justify-center items-center hover:shadow-md transition-all duration-200 border border-gray-200 cursor-pointer"
            >
              {/* Client Info */}
              <div className="flex flex-col  items-center mb-2">
                {/* Avatar */}
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-semibold mr-3">
                  <Image
                    src={testimonial.profile_photo_url}
                    alt={testimonial.author_name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>

                {/* Name and time */}
                <div className="flex flex-col justify-center items-center">
                  <div className="text-sm font-medium text-gray-900 flex items-center">
                    {testimonial.author_name}
                    {/* Optional: Local Guide or Verified tag */}
                    {testimonial.isLocalGuide && (
                      <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                        Local Guide
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.time}
                  </div>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex  mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    } fill-current`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm line-clamp-5  text-center text-gray-800 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="mt-4 flex items-center">
                <FcGoogle className="w-6 h-6 mr-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
