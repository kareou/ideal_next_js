"use client";

import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Quote, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const Reviews = () => {
  const trustpilotReviews = [
  {
    author_name: "Duprece Rachal",
    text: "Case manager, Marlene Davalos was attentive and customer service oriented. Very transparent on ensuring that the customer is informed of each steps of the process. What made my experience great was the customer service that Marlene Davalos gave? She was very transparent and attentive to my needs. She let me know the process and what to expect when the process was complete.She also notified me when changes were needed. Overall, Ideal Tax was great I'd recommend this company, hands-down. Thanks!",
    time: 1686288000,
    rating: 5,
  },
  {
    author_name: "Romelle Wallace",
    text: "Thanks to these guys I am in a better situation. thank you, thank you! Ro.",
    time: 1686288000,
    rating: 5,
  },
  {
    author_name: "Mark Kowertz",
    text: "Ideal tax and their staff have been extremely helpful and understanding with my tax situation. I have had major health issues that have delayed my filing. And I'm concerned about my liability of taxes owed. I feel more comfortable with the situation now. I've had several delays submitting my paperwork but they've been very understanding",
    time: 1683945600,
    rating: 5,
  },
  {
    author_name: "Scott Kalm",
    text: "Ideal tax has been one of the most professional and well run company I have had the pleasure of taking care of my tax business. I want to call out Luis Ceja and his continued effort to assist his customers until the job is done! Thanks!",
    time: 1677542400,
    rating: 5,
  },
  {
    author_name: "Antwan Logan",
    text: "My case manager Roxana Mendoza from day one has been very professional, kept me updated, informed, and explained my status in a very upfront, forward communitive way. She's been very transparent with me pertaining my case and quickly responsive. As a case manager she's exceeded far and beyond thank you very much, please continue great work.",
    time: 1682726400,
    rating: 5,
  },
  {
    author_name: "Solomon Francis",
    text: "From the start everyone communicated well with me They told me what was going to happened and what I should expect at each faze of the process they made me feel comfortable and that was very important to me. I would recommend Ideal Tax to anyone 100%.",
    time: 1682899200,
    rating: 5,
  },
  {
    author_name: "Erlinda",
    text: "Through the whole process with Ideal Tax services; Carlos, was able to communicate with me and my husband and was very knowledgeable regarding Taxes. When I had multiple questions, Carlos always gave us a clear answer in a timely manner. Which gave us a peace of mind and understanding, since this was are first time hiring Ideal Tax to help us with are Taxes.",
    time: 1680566400,
    rating: 5,
  },
  {
    author_name: "Sally",
    text: "I originally signed up with another tax relief company and the way they negotiated was completely unreasonable for our budget. Ideal Tax has been amazing. Customer Service is great. They reprocessed some of our prior tax returns with great sucess.",
    time: 1683264000,
    rating: 5,
  },
  {
    author_name: "Susan Ferrer",
    text: "Marlene was very diligent and patient with helping us with our loan. Considering I've had a stroke and stutter a lot, she was never aggravated or annoyed with my speech delay. We appreciate her patience and help very much.",
    time: 1679616000,
    rating: 5,
  },
  {
    author_name: "Jeanette",
    text: "My case worker is always helpful by keeping me informed My case worker is always helpful by keeping me update even when there have been no changes. She has been available if I have questions or concerns about my case. I know I am being taken care of with great customer service.",
    time: 1683264000,
    rating: 5,
  },
  {
    author_name: "Verenice",
    text: "Something that I exalt about Carlos, our tax advisor. 1 Diligent in documents 2 his clarity when explaining. 3 My husband's primary language is English and my first language is Spanish. 4 Carlos explained to us simultaneously the requirements of the company. and this increased my credibility and that of Brian.",
    time: 1683004800,
    rating: 5,
  },
  {
    author_name: "Darin Ziesman",
    text: "Marlene is very nice to communicate with and is very helpful in keeping me informed about my taxes. Working with you at Ideal taxes has stopped me from worrying about the I R.S. from sending me letter's about the back taxes. Krissie was just as friendly as Marlene, easy to talk to and very professional in her job. Just like Marlene is, very professional at all times.",
    time: 1679616000,
    rating: 5,
  },
];

const bbbReviews = [
  {
    author_name: "Michael G.",
    text: "Great work and will send them other clients. Thank you.",
    time: 1689734400,
    rating: 5,
  },
  {
    author_name: "Diann B.",
    text: "My consultant is AWESOME always call me and let me know the status of my account she keep me informed about what is going I wish all the people i deal with are as through as she is.",
    time: 1689734400,
    rating: 5,
  },
  {
    author_name: "Clark W.",
    text: "Ideal Tax has been absolutely incredible concerning my tax resolution issues.",
    time: 1688476800,
    rating: 5,
  },
  {
    author_name: "Carm E.",
    text: "This has been a seamless proces. My agent has always kept me informed regarding each step towards getting my past due taxes that meeded to be filed as well as any info that i have requested in a timely manner.",
    time: 1686566400,
    rating: 5,
  },
  {
    author_name: "Rogelio F.",
    text: "Ideal tax do a great job on keeping me in the loop on changes on my case.. always positive personality and kind people .. very knowledgeable.. thank you",
    time: 1679980800,
    rating: 5,
  },
  {
    author_name: "Valerie H.",
    text: "Helpful people. Made a nightmarish situation an easy n simpler task to deal with.",
    time: 1677465600,
    rating: 5,
  },
  {
    author_name: "Robert B.",
    text: "These people are good. Knowledgeable and pleasant. They make it their mission to get you squared up. I feel a lot better now that they are on it!",
    time: 1677110400,
    rating: 5,
  },
  {
    author_name: "Michele",
    text: "I have had an excellent experience with Ideal Tax. They have kept me updated and informed during this process. I am still in the process and have high expectations as to how this will be resolved. I would recommend Ideal Tax to my family and friends that need help.",
    time: 1675209600,
    rating: 5,
  },
  {
    author_name: "Renee C.",
    text: "Ideal Tax has been very helpful with resolving my matter. The staff is professional and willing to help to get the client satisfied. Thankful for all their expertise. I was assigned several case managers and my las agent stood out the most in being helpful. Thank you.",
    time: 1675123200,
    rating: 5,
  },
  {
    author_name: "Christine R.",
    text: "I am more than satisfied with everyone I have had the pleasure of working with. They're very professional and make sure that you more than understand the process. My experience with them is very much appreciated. Good people to have on our case.",
    time: 1674009600,
    rating: 5,
  },
  {
    author_name: "Albert N",
    text: "The Ideal Tax team was very professional and accessible. The case manager and preparer did an excellent job in answering questions and guiding me through the process. Their system is intuitive and allows you to fill out the forms easily and securely. A manageable resolution was provided which allowed me to move forward. Much appreciated!",
    time: 1671590400,
    rating: 5,
  },
  {
    author_name: "Donna",
    text: "Tax Debt Free! I have to admit that I needed help with resolving my tax debt. I researched the web and finally decided on Ideal Tax to resolve my negligence for years with the IRS. I had several great people within the company to call weekly to give me updates and walk me through things I needed to correct. I would highly recommend this company, they saved me headaches and confusion with trying to figure out on my own how to resolve my issue. I appreciate Ideal Tax.",
    time: 1669920000,
    rating: 5,
  },
];


  const stats = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "2,500+", label: "5-Star Reviews" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "10,000+", label: "Happy Clients" },
  ];
  
  const [googleReviews, setGoogleReviews] = useState<any[]>([]);
  const [loadingGoogle, setLoadingGoogle] = useState(true);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const res = await fetch("/api/reviews"); 
        const data = await res.json();
        setGoogleReviews(data.reviews || []);
      } catch (err) {
        console.error("Failed to fetch Google reviews:", err);
      } finally {
        setLoadingGoogle(false);
      }
    };
    fetchGoogleReviews();
  }, []);
 

const ReviewCard = ({ review, platform }: { review: any; platform: string }) => {
  // console.log(review);
  const getPlatformLogo = (platform: string) => {
    switch (platform) {
      case "Trustpilot":
        return "/lovable-uploads/8fc7ce39-0634-4bb1-a33b-bedadbf45ba9.png";
      case "Google":
        return "/lovable-uploads/94e75b00-ab1b-4ef1-a8e8-821863a6bc8d.png";
      case "BBB":
        return "/lovable-uploads/3a1ad613-2130-4549-8bca-0d4dee22f1f4.png";
      default:
        return "";
    }
  };

  const formatGoogleReviewTime = () => 
  new Date(review.time * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


const formattedDate = formatGoogleReviewTime();

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="flex">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="ml-2 text-sm font-semibold text-gray-600">
            {review.rating}/5
          </span>
        </div>
        <Image
          src={getPlatformLogo(platform)}
          alt={platform + " logo"}
          width={40}
          height={40}
          className="h-6 object-contain"
          unoptimized
        />
      </div>

      <Quote className="w-8 h-8 text-brand-teal mb-4" />

      <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">
        "{review.text}"
      </p>

      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{review.author_name}</p>
        <p className="text-sm text-gray-600">{formattedDate}</p>
      </div>
    </div>
  );
};

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Client <span className="text-brand-teal">Reviews</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Don't just take our word for it. Read what our satisfied clients
              have to say about their experience with IdealTax's professional
              tax resolution services.
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-2">
                4.9/5
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/survey"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Get Your Success Story
              </Link>
              <Link
                variant="outline"
                href="tel:+18775182860"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-4 px-8 rounded-full transition-all duration-300"
              >
                Call (877) 518-2860
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold text-brand-teal mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/lovable-uploads/8fc7ce39-0634-4bb1-a33b-bedadbf45ba9.png"
                alt="Trustpilot"
                width={250}
                height={250}
                className="h-12 object-contain"
                unoptimized
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trustpilot Reviews
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real stories from real people who have achieved tax relief with
              IdealTax.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustpilotReviews.map((review, index) => (
              <ReviewCard key={index} review={review} platform="Trustpilot" />
            ))}
          </div>
        </div>
      </section>

<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-6">
        <Image
          src="/lovable-uploads/94e75b00-ab1b-4ef1-a8e8-821863a6bc8d.png"
          alt="Google Reviews"
          width={150}
          height={48}
          className="h-12 object-contain"
          unoptimized
        />
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Google Reviews
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        See what our clients are saying about us on Google.
      </p>
    </div>

    {loadingGoogle ? (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow animate-pulse bg-gray-100"
          >
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mt-4"></div>
          </div>
        ))}
      </div>
    ) : googleReviews.length === 0 ? (
      <p className="text-center text-gray-600">No reviews available at the moment.</p>
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {googleReviews.map((review, index) => (
          <ReviewCard key={index} review={review} platform="Google" />
        ))}
      </div>
    )}
  </div>
</section>


      <section className="py-20 bg-gradient-to-br from-deep-blue-50 to-mint-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/lovable-uploads/3a1ad613-2130-4549-8bca-0d4dee22f1f4.png"
                alt="Better Business Bureau"
                width={150}
                height={50}
                className="h-12 object-contain"
                unoptimized
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Better Business Bureau Reviews
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our commitment to excellence recognized by the Better Business
              Bureau.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bbbReviews.map((review, index) => (
              
              <ReviewCard key={index} review={review} platform="BBB" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied clients who have achieved tax relief
              with IdealTax. Your success story could be next.
            </p>
            <Link
              href="/survey"
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
