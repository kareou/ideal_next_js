import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-blue-50 to-mint-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Terms of <span className="text-brand-teal">Use</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Please read these terms carefully before using our services. By
              using Ideal Tax services, you agree to these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Ideal Tax, LLC application and the associated
                  Ideal Tax, LLC website available at
                  www.idealtax.com ("Ideal Tax, LLC") are owned
                  and operated by Ideal Tax, LLC ("us" "we" or "our").
                  This Ideal Tax, LLC Terms Of Use (the "Terms Of Use")
                  is intended to inform you of our policies and practices
                  regarding the collection, use and disclosure of any
                  information you submit to us through Ideal Tax, LLC.
                  This includes "Personal Information," which is information
                  about you that is personally identifiable such as your name,
                  e-mail address, user ID number, and other non-public
                  information that is associated with the foregoing, as well as
                  "Anonymous Information," which is information that is not
                  associated with or linked to your Personal Information and
                  does not permit the identification of individual persons.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  User Consent
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or otherwise using Ideal Tax, LLC, you
                  agree to the terms and conditions of this Privacy Policy and
                  the associated Terms of Service you expressly consent to the
                  processing of your Personal Information and Anonymous
                  Information according to this Privacy Policy. Your Personal
                  Information may be processed by us in the country where it was
                  collected as well as other countries (including the United
                  States) where laws regarding processing of Personal
                  Information may be less stringent than the laws in your
                  country.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Regarding Children
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Children under the age of 13 are not permitted to use Ideal
                  Tax, LLC and we do not intentionally collect or
                  maintain Personal Information from those who are under 13
                  years old. Protecting the privacy of children is very
                  important to us. Thus, if we obtain actual knowledge that a
                  user is under 13, we will take steps to remove that user's
                  Personal Information from our databases. We recommend that
                  children between the ages of 13 and 18 obtain their parent's
                  permission before submitting information over the internet. By
                  using Ideal Tax, LLC, you are representing that you
                  are at least 18 years old, or that you are at least 13 years
                  old and have your parents' permission to use Ideal Tax
                  , LLC.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Collection and Use of Information
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Personal Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In general, we collect Personal Information that you submit to
                  us voluntarily through Ideal Tax, LLC. We also
                  collect information that you submit in the process of creating
                  or editing your account and user profile on Ideal Tax
                  , LLC. For example, our registration and login process
                  requires you to provide us with your name, valid email address
                  and password of your choice. When you personalize your profile
                  and use the features of Ideal Tax, LLC, we will
                  collect any information you voluntarily provide, and we may
                  also request optional information to support your use of Ideal
                  Tax, LLC, such as your year of birth, gender and
                  other demographic information.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information in the form of the content that you
                  submit during your use of Ideal Tax, LLC, such as
                  photos, comments, ratings and other information you choose to
                  submit. We may also collect information about you and your
                  friends, from any social network you may have connected from,
                  in order to provide you with a more personalized experience.
                  For instance, we may collect your user ID or profile
                  information that you have permitted to be displayed through
                  Ideal Tax, LLC in order to display you as a friend or
                  in association with your profile and collections.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you order our products or services, you will need to
                  submit your credit card or other payment information so that
                  our service providers can process your payment for those
                  products and services. If you choose to sign up to receive
                  information about products or services that may be of interest
                  to you, we will collect your email address and all related
                  information. Additionally, we collect any information that you
                  voluntarily enter, including Personal Information, into any
                  postings, comments, or forums within the Ideal Tax,
                  LLC community.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Personal Information from Other Sources
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may receive Personal Information about you from other
                  sources with which you have registered, companies who we have
                  partnered with (collectively, "Partners") or other third
                  parties. We may associate this information with the other
                  Personal Information we have collected about you.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  E-mail and E-mail Addresses
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you send an e-mail to us, or fill out our "Feedback" form
                  through Ideal Tax, LLC, we will collect your e-mail
                  address and the full content of your e-mail, including
                  attached files, and other information you provide. We may use
                  and display your full name and email address when you send an
                  email notification to a friend through Ideal Tax, LLC
                  or the social network from which you have connected to Ideal
                  Tax, LLC (such as in an invitation, or when sharing
                  your content). Additionally, we use your email address to
                  contact you on behalf of your friends (such as when someone
                  sends you a personal message) or notifications from a social
                  network or other website with whom you have registered to
                  receive such notifications. We may use this e-mail address to
                  contact you, for things such as notifications of limited
                  edition shop sales and other related information. You may
                  indicate your preference to stop receiving further promotional
                  communications as further detailed below.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Information Collected Via Technology
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As you use Ideal Tax, LLC, certain information may
                  also be passively collected and stored on our or our service
                  providers' server logs, including your Internet protocol
                  address, browser type, and operating system. We also use
                  Cookies and navigational data like Uniform Resource Locators
                  (URL) to gather information regarding the date and time of
                  your visit and the solutions and information for which you
                  searched and viewed, or on which of the advertisements
                  displayed on Ideal Tax, LLC you clicked. This type of
                  information is collected to make Ideal Tax, LLC and
                  solutions more useful to you and to tailor the experience with
                  Ideal Tax, LLC to meet your special interests and
                  needs.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Cookies" are small pieces of information that a website sends
                  to your computer's hard drive while you are viewing a website.
                  We may use both session Cookies (which expire once you close
                  your web browser) and persistent Cookies (which stay on your
                  computer until you delete them) to provide you with a more
                  personal and interactive experience with Ideal Tax,
                  LLC. Persistent Cookies can be removed by following your
                  Internet browser help file directions. In order to use our
                  services offered through Ideal Tax, LLC, your web
                  browser must accept Cookies. If you choose to disable Cookies,
                  some aspects of Ideal Tax, LLC may not work properly,
                  and you will not be able to receive our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Use and Disclosure of Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Except as otherwise stated in this Privacy Policy, we do not
                  generally sell, trade, rent, or share the Personal Information
                  that we collect with third parties, unless you ask or
                  authorize us to do so. In general, Personal Information you
                  submit to us is used by us to provide you access to Ideal Tax, LLC, to improve Ideal Tax, LLC, to better
                  tailor the features, performance, and support of Ideal Tax, LLC and to offer you additional information,
                  opportunities, promotions and functionality from us, our
                  partners or our advertisers at your request.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may provide your Personal Information to third-party
                  service providers who work on behalf of or with us to provide
                  some of the services and features of Ideal Tax, LLC
                  and to help us communicate with you. Examples of such services
                  include sending email, analyzing data, providing marketing
                  assistance, processing payments (including credit card
                  payments), and providing customer service. We require our
                  third-party service providers to promise not to use such
                  information except as necessary to provide the relevant
                  services to us.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Ability of Others to View Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Helping you to protect your information is a vital part of our
                  mission. It is up to you to make sure you are comfortable with
                  the information you choose to provide us and the information
                  you choose to publish. You understand that when you use Ideal
                  Tax, LLC, certain information you post or provide
                  through Ideal Tax, LLC, such as your name, profile,
                  comments, posts and ratings, may be shared with other users
                  and posted on publicly available portions of Ideal Tax, LLC, including without limitation, chatrooms,
                  bulletin and message boards, along with other public forums.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Third Party Sites and Advertising
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ideal Tax, LLC may contain links to other websites.
                  Please be aware that we are not responsible for the privacy
                  practices or the content of such other websites. We encourage
                  our users to read the privacy statements of each and every
                  website they visit. This Ideal Tax, LLC applies
                  solely to information collected by us through Ideal Tax, LLC and does not apply to these third-party
                  websites.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Choices Regarding Your Personal Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We offer you choices regarding the collection, use, and
                  sharing of your Personal Information. When you receive
                  promotional communications from us, you may indicate a
                  preference to stop receiving further promotional
                  communications from us and you will have the opportunity to
                  "opt-out" by following the unsubscribe instructions provided
                  in the promotional e-mail you receive or by contacting us
                  directly.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are committed to protecting the security of your Personal
                  Information. We use a variety of industry-standard security
                  technologies and procedures to help protect your Personal
                  Information from unauthorized access, use, or disclosure. Even
                  though we have taken significant steps to protect your
                  Personal Information, no company, including us, can fully
                  eliminate security risks associated with Personal Information.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact and Revisions
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    If you have questions or concerns about our Privacy Policy,
                    please contact us at:{" "}
                    <a
                      href="mailto:customercare@idealtax.com"
                      className="text-brand-teal hover:text-brand-blue"
                    >
                      customercare@idealtax.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    This Privacy Policy is subject to occasional revision at our
                    discretion, and if we make any substantial changes in the
                    way we use your Personal Information, we will post an alert
                    on this page. If you object to any such changes, you must
                    cease using Ideal Tax, LLC. Continued use of Ideal
                    Tax, LLC following notice of any such changes shall
                    indicate your acknowledgement of such changes and agreement
                    to be bound by the terms and conditions of such changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
