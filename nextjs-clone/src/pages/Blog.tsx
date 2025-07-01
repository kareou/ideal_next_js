import React from "react";
import Navigation from "../components/Navigation";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "IRS Form 3949-A Explained",
      excerpt:
        "IRS Form 3949-A, Information Referral, is a tax form used to inform the IRS about alleged tax fraud or",
      author: "IdealTax Team",
      date: "October 30, 2023",
      category: "Tax Forms",
      slug: "/irs-form-3949-a",
    },
    {
      id: 2,
      title: "What Is A Qualifying Dependent?",
      excerpt:
        "A qualifying dependent is defined by the Internal Revenue Service as a child under the age of 19, a full-time",
      author: "Tax Experts",
      date: "October 30, 2023",
      category: "Tax Tips",
      slug: "/qualifying-dependent",
    },
    {
      id: 3,
      title: "Why Was No Federal Taxes Withheld From Paycheck?",
      excerpt:
        "Taxpayers may notice they have not been subject to federal income tax withholding if they",
      author: "Payroll Specialists",
      date: "October 27, 2023",
      category: "Payroll Tax",
      slug: "/no-federal-taxes-withheld",
    },
    {
      id: 4,
      title: "IRS Forms 1099 VS W9: What's The Difference?",
      excerpt:
        "Independent contractors and businesses that hire freelancers must understand the difference between 1099 forms and W9 forms",
      author: "Form Specialists",
      date: "October 27, 2023",
      category: "Tax Forms",
      slug: "/irs-forms-1099-vs-w9",
    },
    {
      id: 5,
      title: "IRS Accepted Return But Not Approved Explained",
      excerpt:
        'The tax return filing status, "IRS Accepted Return But Not Approved," means that the IRS received',
      author: "Filing Experts",
      date: "October 19, 2023",
      category: "Tax Filing",
      slug: "/irs-accepted-return-not-approved",
    },
    {
      id: 6,
      title: "Tax Lien Foreclosure Explained",
      excerpt:
        "Tax foreclosures describe when an individual who purchased a tax lien certificate initiates a judicial foreclosure proceeding against the",
      author: "Legal Team",
      date: "October 19, 2023",
      category: "Tax Liens",
      slug: "/tax-lien-foreclosure",
    },
    {
      id: 7,
      title: "Taxes on Stocks Explained",
      excerpt:
        "Taxes on stocks must be paid when an individual earns dividends as a shareholder or sells stocks for a",
      author: "Investment Tax Team",
      date: "October 18, 2023",
      category: "Investment Tax",
      slug: "/taxes-on-stocks",
    },
    {
      id: 8,
      title: "Form 1040 Explained",
      excerpt:
        "IRS Form 1040, U.S. Individual Income Tax Return, is the tax document individuals use to report their annual income and",
      author: "Filing Experts",
      date: "October 18, 2023",
      category: "Tax Forms",
      slug: "/form-1040",
    },
    {
      id: 9,
      title: "IRS Form 4852 Explained",
      excerpt:
        "IRS Form 4852 is a tax form that can be filed by employees when they do not receive or",
      author: "Form Specialists",
      date: "October 18, 2023",
      category: "Tax Forms",
      slug: "/irs-form-4852",
    },
    {
      id: 10,
      title: "Crypto Taxes Explained",
      excerpt:
        "Crypto taxes are an IRS tax that must be paid when an individual earns a profit through",
      author: "Crypto Tax Team",
      date: "September 15, 2023",
      category: "Crypto Tax",
      slug: "/crypto-taxes",
    },
    {
      id: 11,
      title: "IRS Form 8949 Explained",
      excerpt:
        "IRS Form 8949, Sales and Other Dispositions of Capital Assets, is a tax form used to",
      author: "Capital Gains Team",
      date: "September 15, 2023",
      category: "Tax Forms",
      slug: "/irs-form-8949",
    },
    {
      id: 12,
      title: "Capital Gains Tax Explained",
      excerpt:
        "Selling your capital assets may be an excellent strategy to make some extra money, but be careful that you are aware",
      author: "Investment Tax Team",
      date: "September 15, 2023",
      category: "Investment Tax",
      slug: "/capital-gains-tax",
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
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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

                  {post.slug ? (
                    <Link
                      href={post.slug}
                      className="flex items-center text-brand-teal hover:text-brand-blue transition-colors font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  ) : (
                    <button className="flex items-center text-brand-teal hover:text-brand-blue transition-colors font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  )}
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
                    href="/blog"
                    className="pointer-events-none opacity-50"
                  />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="/blog" isActive>
                    1
                  </PaginationLink>
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
                  <PaginationLink href="/blog/5">5</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    href="/blog/2"
                    className="text-brand-teal hover:text-brand-blue"
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

export default Blog;
