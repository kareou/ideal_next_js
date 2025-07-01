import React from 'react';
import Navigation from '../components/Navigation';
import { Calendar, User, ArrowRight } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BlogPage3 = () => {
  const blogPosts = [
    {
      id: 25,
      title: "Retirement Saving Contribution Credit Explained",
      excerpt: "If you are planning your wealth management strategies for investing, you may have looked into the different areas where you",
      author: "IdealTax Team",
      date: "August 3, 2023",
      category: "Tax Credits"
    },
    {
      id: 26,
      title: "Adoption Credit Explained",
      excerpt: "Adopting new children into the family brings an indescribable level of joy, pride, and happiness. However, despite the love and satisfaction that",
      author: "Tax Experts",
      date: "July 28, 2023",
      category: "Tax Credits"
    },
    {
      id: 27,
      title: "State Unemployment Tax Act (SUTA) Explained",
      excerpt: "Employers have many factors to consider when it comes to taxes – not only do they have to maintain",
      author: "Payroll Specialists",
      date: "July 25, 2023",
      category: "Payroll Tax"
    },
    {
      id: 28,
      title: "Federal Unemployment Tax Act (FUTA) Explained",
      excerpt: "TABLE OF CONTENTS What Is FUTA?Who Has To Pay FUTA Taxes?Which Wages Are Not Subject To FUTA Tax?How To",
      author: "Payroll Specialists",
      date: "July 25, 2023",
      category: "Payroll Tax"
    },
    {
      id: 29,
      title: "Medicare Taxes Explained",
      excerpt: "One of the most exciting parts about turning 65 is the opportunity to receive Medicare healthcare insurance that covers visits to your",
      author: "Medicare Tax Team",
      date: "July 25, 2023",
      category: "Payroll Tax"
    },
    {
      id: 30,
      title: "FICA Taxes Explained",
      excerpt: "TABLE OF CONTENTS What Are FICA Taxes? What Is Medicare? What Is Social Security? How To Pay FICA Taxes FICA Tax Rates",
      author: "Payroll Specialists",
      date: "July 24, 2023",
      category: "Payroll Tax"
    },
    {
      id: 31,
      title: "IRS form 720 Explained",
      excerpt: "TABLE OF CONTENTS What Is IRS Form 720? What Are Excise Taxes? Who Is Required To File IRS Form 720? When",
      author: "Form Specialists",
      date: "July 24, 2023",
      category: "Tax Forms"
    },
    {
      id: 32,
      title: "Is Gross Pay Before Or After Taxes?",
      excerpt: "Gross pay is the hourly rate or salary that employees are paid before taxes and other withholdings are",
      author: "Payroll Specialists",
      date: "July 24, 2023",
      category: "Payroll Tax"
    },
    {
      id: 33,
      title: "CPA vs. Tax Attorney: What's the Difference?",
      excerpt: "If you're seeking help with your tax situation, you may have realized that there are many types of",
      author: "Legal Team",
      date: "July 21, 2023",
      category: "Tax Tips"
    },
    {
      id: 34,
      title: "Is Buying A Car A Tax Deduction?",
      excerpt: "Purchasing a vehicle is a large investment, so it is natural for taxpayers to be seeking any areas",
      author: "Deduction Experts",
      date: "July 14, 2023",
      category: "Tax Tips"
    },
    {
      id: 35,
      title: "Are Real Estate Taxes The Same As Property Taxes?",
      excerpt: "These similar phrases can be used interchangeably in most cases, but there are slight differences that",
      author: "Property Tax Team",
      date: "July 7, 2023",
      category: "Tax Tips"
    },
    {
      id: 36,
      title: "What Happens If You Don't Pay Property Taxes?",
      excerpt: "Taxpayers are at risk of losing their homes if they don't pay their property taxes, so before",
      author: "Property Tax Team",
      date: "July 7, 2023",
      category: "Tax Tips"
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
                    href="/blog/2"
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
                  <PaginationLink href="/blog/3" isActive>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/blog/4">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/blog/5">5</PaginationLink>
                </PaginationItem>
                
                <PaginationItem>
                  <PaginationNext 
                    href="/blog/4"
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

export default BlogPage3;
