import React from 'react';
import Navigation from '../components/Navigation';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BlogPage2 = () => {
  const blogPosts = [
    {
      id: 13,
      title: "NFT Tax Guide",
      excerpt: "While NFTs and cryptocurrencies are hot topics in the news, understanding the tax implications of NFT transactions is far from clear. If",
      author: "IdealTax Team",
      date: "August 28, 2023",
      category: "Crypto Tax",
      slug: "/nft-tax-guide"
    },
    {
      id: 14,
      title: "Win/Loss Statement Taxes Explained",
      excerpt: "Taxpayers are required to report all gambling wins to the IRS as additional income, but the good news is that if",
      author: "Tax Experts",
      date: "August 28, 2023",
      category: "Tax Tips",
      slug: "/win-loss-statement-taxes"
    },
    {
      id: 15,
      title: "IRS Form 4361 Explained",
      excerpt: "IRS Form 4361, Application for Exemption From Self-Employment Tax for Use by Ministers, Members of Religious",
      author: "Form Specialists",
      date: "August 28, 2023",
      category: "Tax Forms",
      slug: "/irs-form-4361"
    },
    {
      id: 16,
      title: "W9 Form Explained",
      excerpt: "Independent contractors, freelancers, gig workers, and other self-employed individuals use the IRS W9 Form, known as a Request for Taxpayer Identification Number",
      author: "Form Specialists",
      date: "August 28, 2023",
      category: "Tax Forms",
      slug: "/w9-form"
    },
    {
      id: 17,
      title: "IRS W4 Form Explained",
      excerpt: "In the U.S., employees are required to pay taxes to the IRS on their earned income. However, rather than being required",
      author: "Payroll Specialists",
      date: "August 17, 2023",
      category: "Payroll Tax",
      slug: "/irs-w4-form-explained"
    },
    {
      id: 18,
      title: "W-2 Form Explained",
      excerpt: "Employers must fill out a copy of the IRS W-2 Form, Wage and Tax Statement, for every",
      author: "Payroll Specialists",
      date: "August 17, 2023",
      category: "Payroll Tax",
      slug: "/w-2-form"
    },
    {
      id: 19,
      title: "IRS 1099 Form Explained",
      excerpt: "A 1099 form, also referred to as an information return, is a tax form used to",
      author: "Form Specialists",
      date: "August 17, 2023",
      category: "Tax Forms",
      slug: "/irs-1099-form"
    },
    {
      id: 20,
      title: "IRS Form 9465 Explained",
      excerpt: "IRS Form 9465, Installment Agreement Request, is a tax form that individuals can file to request",
      author: "Filing Experts",
      date: "August 17, 2023",
      category: "Tax Filing",
      slug: "/irs-form-9465"
    },
    {
      id: 21,
      title: "IRS Form 1116 Explained",
      excerpt: "Americans who are working abroad can save money on taxes by claiming the foreign tax credit using IRS Form 1116, Foreign",
      author: "International Tax Team",
      date: "August 17, 2023",
      category: "Tax Forms",
      slug: "/irs-form-1116"
    },
    {
      id: 22,
      title: "IRS Form 2848 Explained",
      excerpt: "IRS Form 2848, Power of Attorney and Declaration of Representative, is a tax form used to",
      author: "Legal Team",
      date: "August 17, 2023",
      category: "Tax Forms",
      slug: "/irs-form-2848"
    },
    {
      id: 23,
      title: "Work Opportunity Credit Explained",
      excerpt: "The Work Opportunity Tax Credit (WOTC) is a federal tax credit offered by the IRS to",
      author: "Credit Specialists",
      date: "August 17, 2023",
      category: "Tax Credits",
      slug: "/work-opportunity-credit"
    },
    {
      id: 24,
      title: "Residential Energy Credit Explained",
      excerpt: "It is unsurprising to most people that non-renewable energy sources can only support our residential, commercial, and industrial power needs for",
      author: "Energy Tax Team",
      date: "August 11, 2023",
      category: "Tax Credits",
      slug: "/residential-energy-credit"
    }
  ];

  const categories = ["All", "Tax Forms", "Tax Tips", "Payroll Tax", "Tax Filing", "Tax Liens", "Investment Tax", "Crypto Tax", "Tax Credits"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Tax Insights & <span className="text-brand-teal">Expert Advice</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay informed with the latest tax news, tips, and strategies from our team of tax professionals.
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
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
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
                      to={post.slug}
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
                    className="text-brand-teal hover:text-brand-blue"
                  />
                </PaginationItem>
                
                <PaginationItem>
                  <PaginationLink href="/blog">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/blog/2" isActive>2</PaginationLink>
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
                    href="/blog/3"
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
              Subscribe to our newsletter and never miss important tax updates and expert insights.
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

export default BlogPage2;
