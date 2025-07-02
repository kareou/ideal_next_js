import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BlogPage5 = () => {
  const blogPosts = [
    {
      id: 49,
      title: "IRS 10 Year Rule: What Taxpayers Need To Know",
      excerpt:
        "TABLE OF CONTENTS What Is The IRS 10 Year Rule?When Does The Statute Of Limitations 10-Year",
      author: "IRS Specialists",
      date: "May 15, 2023",
      category: "Tax Tips",
    },
    {
      id: 50,
      title: "IRS Financial Hardship",
      excerpt:
        "Explained Facing a situation in which paying your tax debt would cause you unreasonable financial hardship where you cannot afford your basic",
      author: "Hardship Experts",
      date: "May 5, 2023",
      category: "Tax Tips",
    },
    {
      id: 51,
      title: "10 IRS Tax Tips Worth Noting",
      excerpt:
        "There are many tips taxpayers can utilize to optimize their outcome when it comes to taxes, but here are",
      author: "Tax Tips Team",
      date: "May 5, 2023",
      category: "Tax Tips",
    },
    {
      id: 52,
      title: "Do Seniors Have To File Taxes?",
      excerpt:
        "One of the many benefits of reaching the age of 65 in the United States is that you begin",
      author: "Senior Tax Team",
      date: "April 25, 2023",
      category: "Tax Tips",
    },
    {
      id: 53,
      title: "How Many Dependents Should I Claim On W4",
      excerpt:
        "Taxpayers who are financially responsible for other people can receive tax breaks by claiming them as",
      author: "Dependent Experts",
      date: "April 25, 2023",
      category: "Tax Tips",
    },
    {
      id: 54,
      title: "Earned Income Tax Credit Explained",
      excerpt:
        "TABLE OF CONTENTS What Is The Earned Income Tax Credit?Earned Income Tax Credit Eligibility RequirementsHow Much Is The 2023 Earned",
      author: "Tax Credits Team",
      date: "April 17, 2023",
      category: "Tax Credits",
    },
    {
      id: 55,
      title: "What Happens If You Are Audited And Found Guilty?",
      excerpt:
        "Receiving a notification that your tax account will be audited by the IRS is already stressful",
      author: "Audit Experts",
      date: "April 17, 2023",
      category: "Tax Tips",
    },
    {
      id: 56,
      title: "CP 575 Form Explained",
      excerpt:
        "If you have applied for an EIN for your new business, be on the lookout for a CP 575 letter in",
      author: "Form Specialists",
      date: "April 10, 2023",
      category: "Tax Forms",
    },
    {
      id: 57,
      title: "IRS Form 2553 Explained",
      excerpt:
        "Small businesses operating in the United States have the benefit of modifying their business structure to optimize their tax savings, such",
      author: "Business Tax Team",
      date: "April 10, 2023",
      category: "Tax Forms",
    },
    {
      id: 58,
      title: "IRS Form 8822-B Explained",
      excerpt:
        "It's okay if your business information has changed since you initially applied for an Employer Identification Number (EIN) for your company",
      author: "Business Forms Team",
      date: "March 16, 2023",
      category: "Tax Forms",
    },
    {
      id: 59,
      title: "147C Letter Explained",
      excerpt:
        "TABLE OF CONTENTS What Is A 147c Letter? CP 575 or 147c? How To Request EIN Verification Letter 147c Can My EIN",
      author: "EIN Specialists",
      date: "March 16, 2023",
      category: "Tax Forms",
    },
    {
      id: 60,
      title: "IRS Tax Topic 203 Explained",
      excerpt:
        "Taxpayers may determine their eligibility for a tax refund when filing their tax return by listing their income, calculating their",
      author: "Refund Experts",
      date: "March 15, 2023",
      category: "Tax Tips",
    },
  ];

  const categories = [
    "All",
    "Tax Forms",
    "Tax Tips",
    "Payroll Tax",
    "Tax Filing",
    "Tax Liens",
    "Investment Tax",
    "Crypto Tax",
    "Tax Credits",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Tax Insights &{" "}
              <span className="text-brand-teal">Expert Advice</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay informed with the latest tax news, tips, and strategies from
              our team of tax professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 hover:border-brand-teal hover:text-brand-teal transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>

                  <button className="flex items-center text-brand-teal hover:text-brand-blue transition-colors font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="/blog/4"
                    className="text-brand-teal hover:text-brand-blue"
                  />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="/blog">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/blog/2">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/blog/3">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/blog/4">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/blog/5" isActive>
                    5
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    href="/blog/5"
                    className="pointer-events-none opacity-50"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-mint-50 to-deep-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Stay Updated with Tax News
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter and never miss important tax updates
              and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
              <button className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage5;
