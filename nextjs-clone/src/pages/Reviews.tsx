import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Quote, CheckCircle } from "lucide-react";

const Reviews = () => {
  const trustpilotReviews = [
    {
      name: "Duprece Rachal",
      text: "Case manager, Marlene Davalos was attentive and customer service oriented. Very transparent on ensuring that the customer is informed of each steps of the process. What made my experience great was the customer service that Marlene Davalos gave? She was very transparent and attentive to my needs. She let me know the process and what to expect when the process was complete.She also notified me when changes were needed. Overall, Ideal Tax was great I'd recommend this company, hands-down. Thanks!",
      date: "Jun 9, 2023",
      rating: 5,
    },
    {
      name: "Romelle Wallace",
      text: "Thanks to these guys I am in a better situation. thank you, thank you! Ro.",
      date: "June 9, 2023",
      rating: 5,
    },
    {
      name: "Mark Kowertz",
      text: "Ideal tax and their staff have been extremely helpful and understanding with my tax situation. I have had major health issues that have delayed my filing. And I'm concerned about my liability of taxes owed. I feel more comfortable with the situation now. I've had several delays submitting my paperwork but they've been very understanding",
      date: "May 13, 2023",
      rating: 5,
    },
    {
      name: "Scott Kalm",
      text: "Ideal tax has been one of the most professional and well run company I have had the pleasure of taking care of my tax business. I want to call out Luis Ceja and his continued effort to assist his customers until the job is done! Thanks!",
      date: "February 28, 2023",
      rating: 5,
    },
    {
      name: "Antwan Logan",
      text: "My case manager Roxana Mendoza from day one has been very professional, kept me updated, informed, and explained my status in a very upfront, forward communitive way. She's been very transparent with me pertaining my case and quickly responsive. As a case manager she's exceeded far and beyond thank you very much, please continue great work.",
      date: "Apr 29, 2023",
      rating: 5,
    },
    {
      name: "Solomon Francis",
      text: "From the start everyone communicated well with me They told me what was going to happened and what I should expect at each faze of the process they made me feel comfortable and that was very important to me. I would recommend Ideal Tax Solutions to anyone 100%.",
      date: "May 1, 2023",
      rating: 5,
    },
    {
      name: "Erlinda",
      text: "Through the whole process with Ideal Tax services; Carlos, was able to communicate with me and my husband and was very knowledgeable regarding Taxes. When I had multiple questions, Carlos always gave us a clear answer in a timely manner. Which gave us a peace of mind and understanding, since this was are first time hiring Ideal Tax to help us with are Taxes.",
      date: "Apr 4, 2023",
      rating: 5,
    },
    {
      name: "Sally",
      text: "I originally signed up with another tax relief company and the way they negotiated was completely unreasonable for our budget. Ideal Tax has been amazing. Customer Service is great. They reprocessed some of our prior tax returns with great sucess.",
      date: "May 5, 2023",
      rating: 5,
    },
    {
      name: "Susan Ferrer",
      text: "Marlene was very diligent and patient with helping us with our loan. Considering I've had a stroke and stutter a lot, she was never aggravated or annoyed with my speech delay. We appreciate her patience and help very much.",
      date: "Mar 30, 2023",
      rating: 5,
    },
    {
      name: "Jeanette",
      text: "My case worker is always helpful by keeping me informed My case worker is always helpful by keeping me update even when there have been no changes. She has been available if I have questions or concerns about my case. I know I am being taken care of with great customer service.",
      date: "May 5, 2023",
      rating: 5,
    },
    {
      name: "Verenice",
      text: "Something that I exalt about Carlos, our tax advisor. 1 Diligent in documents 2 his clarity when explaining. 3 My husband's primary language is English and my first language is Spanish. 4 Carlos explained to us simultaneously the requirements of the company. and this increased my credibility and that of Brian.",
      date: "May 2, 2023",
      rating: 5,
    },
    {
      name: "Darin Ziesman",
      text: "Marlene is very nice to communicate with and is very helpful in keeping me informed about my taxes. Working with you at Ideal taxes has stopped me from worrying about the I R.S. from sending me letter's about the back taxes. Krissie was just as friendly as Marlene, easy to talk to and very professional in her job. Just like Marlene is, very professional at all times.",
      date: "Mar 30, 2023",
      rating: 5,
    },
  ];

  const googleReviews = [
    {
      name: "Casey Goodman",
      text: "Ideal Tax helped me out of IRS debt that I was unaware I even had.. they were very upfront, helpful, and prompt in assisting me with any questions I had throughout the process. Scott and Valeria were who I communicated with the most during the process, and I'm so grateful to have had their help in all of this!",
      date: "June 28, 2023",
      rating: 5,
    },
    {
      name: "Agnes Pagan",
      text: "I am so impressed with the service that I have received from Ideal Tax to handle my tax issue. The empathy, customer services skills, and knowledge that Emon A. demonstrated, is what a person in need should receive. Not only that he accommodated to my availability, is that he committed to help me resolved my issue. The services offered are exactly what I needed. Emon committed to present my case and expedited, and he did. I got peace of mind today, and that doesn't have a monetary value. What a professional team! I am planning to do my yearly taxes with them too. They got me.",
      date: "July 18, 2023",
      rating: 5,
    },
    {
      name: "Laura Bowers",
      text: "The service is out of this world! Erin N. And Maleni have been so awesome to work with. They are prompt, kind, and simply great people. idealTax goes above and beyond to get your situation solved.",
      date: "July 16, 2023",
      rating: 5,
    },
    {
      name: "Karen Holbrook",
      text: "So far, I am extremely satisfied with my consistent updates through my case manager, Carlos Cortes. He has shown concern making sure I understand everything so far through this process. When he does not have an answer for me, he reaches out to someone who does and immediately contacts with the answer. Always responds. Very kind to someone in this overwhelming position.",
      date: "June 20, 2023",
      rating: 5,
    },
    {
      name: "Champ Wynn",
      text: "Cameron with Ideal Tax is absolutely awesome! He walked my mom through the enrollment process and put our mind at ease. Thank you!",
      date: "July 20, 2023",
      rating: 5,
    },
    {
      name: "Sue Sysol",
      text: "Alejandro Celis; enrolled agent had done his job well and even went the extra mile. He was one of the few there that helped me out and he was very quick to respond back to me. If you are lucky enough to get him feel blessed!",
      date: "July 2, 2023",
      rating: 5,
    },
    {
      name: "Maximiliano Tyler",
      text: "My case manager at Ideal Tax was a lifesaver! His professional and clear communication helped me understand my options with the IRS. He also set up a conference call so that we could all get on same page for our tax situation, which he wasn't charged extra for by any means because of how important it is in solving these types if problems together as much possible before time runs out or money changes hands. The best part? You can go straight to him without worrying about being misinformed–he's knowledgeable but never pushy; just there when you need him most while still giving plenty away without ever inconveniencing anyone else besides yourself. Thank you!",
      date: "February 20, 2023",
      rating: 5,
    },
    {
      name: "Cynthia Ewing",
      text: "I have had the best experience working with Ideal Tax. They have been professional and up front on everything that we have worked on to get my taxes back on track. I would recommend this company to anyone that needs to get their taxes completed or to work on back taxes like myself. Thank you for all your help Ideal Tax.",
      date: "March 2, 2023",
      rating: 5,
    },
    {
      name: "Vernal Bramlett",
      text: "Ideal tax service has been very helpful in helping to resolve past and back tax issues. The staff is friendly and knowledgeable of ways to help relieve the concern and burdens of past back taxes whether they are from income tax or contractor related taxes.",
      date: "June 20, 2023",
      rating: 5,
    },
    {
      name: "Brian Jeff",
      text: "Ideal Tax is the best company I've ever worked with. The customer service and staff are top notch, they really helped me out when my business needed some help – at a very reasonable price too! Now that we're working together more often than not (every month) it has given us both peace of mind knowing what's going on without having to worry all over again…",
      date: "January 9, 2023",
      rating: 5,
    },
    {
      name: "Peter Breslin",
      text: "Ideal text was recommended to me by a friend who was extremely happy with their service he knew I had tax problems so he gave me their number they took care of my tax problems quickly without hardly any work from me I they got my taxes discharge completely from both the state of California and the IRS I recommend them 100% their associate Otto was informative and kept me updated if you have tax problems call them right away",
      date: "July 10, 2023",
      rating: 5,
    },
    {
      name: "Levi Asher",
      text: "I'm writing to let you know how grateful I am with the service from Ideal Tax. You have been so sweet and friendly, making me feel like family! The explanations were easy enough for a non-professional like myself; they made perfect sense once we got going on it together – which is really what these kinds of things should be about in my opinion (so that everyone feels comfortable). And finally getting through all these IRS worries has put some much needed rest into our lives as well because now there's nothing holding us back but ourselves…which seems pretty great after everything overcome during this process anyway!!! Thank again —you're awesome",
      date: "December 8, 2022",
      rating: 5,
    },
  ];

  const bbbReviews = [
    {
      name: "Michael G.",
      text: "Great work and will send them other clients. Thank you.",
      date: "07/19/2023",
      rating: 5,
    },
    {
      name: "Diann B.",
      text: "My consultant is AWESOME always call me and let me know the status of my account she keep me informed about what is going I wish all the people i deal with are as through as she is.",
      date: "07/19/2023",
      rating: 5,
    },
    {
      name: "Clark W.",
      text: "Ideal Tax has been absolutely incredible concerning my tax resolution issues.",
      date: "07/05/2023",
      rating: 5,
    },
    {
      name: "Carm E.",
      text: "This has been a seamless proces. My agent has always kept me informed regarding each step towards getting my past due taxes that meeded to be filed as well as any info that i have requested in a timely manner.",
      date: "06/12/2023",
      rating: 5,
    },
    {
      name: "Rogelio F.",
      text: "Ideal tax solution do a great job on keeping me in the loop on changes on my case.. always positive personality and kind people .. very knowledgeable.. thank you",
      date: "03/29/2023",
      rating: 5,
    },
    {
      name: "Valerie H.",
      text: "Helpful people. Made a nightmarish situation an easy n simpler task to deal with.",
      date: "02/27/2023",
      rating: 5,
    },
    {
      name: "Robert B.",
      text: "These people are good. Knowledgeable and pleasant. They make it their mission to get you squared up. I feel a lot better now that they are on it!",
      date: "02/23/2023",
      rating: 5,
    },
    {
      name: "Michele",
      text: "I have had an excellent experience with Ideal Tax. They have kept me updated and informed during this process. I am still in the process and have high expectations as to how this will be resolved. I would recommend Ideal Tax to my family and friends that need help.",
      date: "02/01/2023",
      rating: 5,
    },
    {
      name: "Renee C.",
      text: "Ideal Tax has been very helpful with resolving my matter. The staff is professional and willing to help to get the client satisfied. Thankful for all their expertise. I was assigned several case managers and my las agent stood out the most in being helpful. Thank you.",
      date: "01/31/2023",
      rating: 5,
    },
    {
      name: "Christine R.",
      text: "I am more than satisfied with everyone I have had the pleasure of working with. They're very professional and make sure that you more than understand the process. My experience with them is very much appreciated. Good people to have on our case.",
      date: "01/18/2023",
      rating: 5,
    },
    {
      name: "Albert N",
      text: "The Ideal Tax team was very professional and accessible. The case manager and preparer did an excellent job in answering questions and guiding me through the process. Their system is intuitive and allows you to fill out the forms easily and securely. A manageable resolution was provided which allowed me to move forward. Much appreciated!",
      date: "12/21/2022",
      rating: 5,
    },
    {
      name: "Donna",
      text: "Tax Debt Free! I have to admit that I needed help with resolving my tax debt. I researched the web and finally decided on Ideal Tax to resolve my negligence for years with the IRS. I had several great people within the company to call weekly to give me updates and walk me through things I needed to correct. I would highly recommend this company, they saved me headaches and confusion with trying to figure out on my own how to resolve my issue. My appreciation for Ideal Tax Solutions.",
      date: "12/02/2022",
      rating: 5,
    },
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "2,500+", label: "5-Star Reviews" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "10,000+", label: "Happy Clients" },
  ];

  const ReviewCard = ({
    review,
    platform,
  }: {
    review: any;
    platform: string;
  }) => {
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

    return (
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="ml-2 text-sm font-semibold text-gray-600">
              {review.rating}/5
            </span>
          </div>
          <img
            src={getPlatformLogo(platform)}
            alt={platform}
            className="h-6 object-contain"
          />
        </div>
        <Quote className="w-8 h-8 text-brand-teal mb-4" />
        <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">
          "{review.text}"
        </p>
        <div className="border-t pt-4">
          <p className="font-semibold text-gray-900">{review.name}</p>
          <p className="text-sm text-gray-600">{review.date}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Get Your Success Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-4 px-8 rounded-full transition-all duration-300"
              >
                Call (877) 518-2860
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Trustpilot Reviews */}
      <section className="py-20 bg-gradient-to-br from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/lovable-uploads/8fc7ce39-0634-4bb1-a33b-bedadbf45ba9.png"
                alt="Trustpilot"
                className="h-12 object-contain"
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

      {/* Google Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/lovable-uploads/94e75b00-ab1b-4ef1-a8e8-821863a6bc8d.png"
                alt="Google Reviews"
                className="h-12 object-contain"
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Google Reviews
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See what our clients are saying about us on Google.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {googleReviews.map((review, index) => (
              <ReviewCard key={index} review={review} platform="Google" />
            ))}
          </div>
        </div>
      </section>

      {/* BBB Reviews */}
      <section className="py-20 bg-gradient-to-br from-deep-blue-50 to-mint-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/lovable-uploads/3a1ad613-2130-4549-8bca-0d4dee22f1f4.png"
                alt="Better Business Bureau"
                className="h-12 object-contain"
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

      {/* CTA Section */}
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
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
