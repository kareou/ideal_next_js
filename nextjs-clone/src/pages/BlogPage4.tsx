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

const BlogPage4 = () => {
  const blogPosts = [
    {
      id: 37,
      title: "Robinhood Taxes Explained",
      excerpt: "TABLE OF CONTENTS What Are Robinhood Taxes? What Robinhood Activity Is Taxable? Capital Gains and Losses How To File Robinhood Taxes Tax",
      author: "Investment Tax Team",
      date: "July 7, 2023",
      category: "Investment Tax"
    },
    {
      id: 38,
      title: "Coinbase Taxes Explained",
      excerpt: "Coinbase is an online platform where people can invest and trade hundreds of cryptocurrencies, but what they may not realize, is that,",
      author: "Crypto Tax Team",
      date: "June 30, 2023",
      category: "Crypto Tax"
    },
    {
      id: 39,
      title: "Employment Taxes For Pastors Explained",
      excerpt: "Updated August 2023 A career in ministry is a fulfilling job for giving back to the community, but you may",
      author: "Religious Tax Team",
      date: "June 27, 2023",
      category: "Payroll Tax"
    },
    {
      id: 40,
      title: "Paying Taxes On A Lawsuit Settlement",
      excerpt: "Explained Updated June 2023 If you have been awarded settlement money as a result of winning a lawsuit, think",
      author: "Legal Tax Team",
      date: "June 27, 2023",
      category: "Tax Tips"
    },
    {
      id: 41,
      title: "Failure To File Penalty Explained",
      excerpt: "All taxpayers are obligated to comply with tax laws at the local, state, and federal levels, otherwise, they may be",
      author: "Penalty Experts",
      date: "June 19, 2023",
      category: "Tax Tips"
    },
    {
      id: 42,
      title: "How To Avoid Tax Penalties With The IRS Fresh Start Program",
      excerpt: "TABLE OF CONTENTS How To Avoid Tax Penalties With The IRS Fresh Start Program",
      author: "Fresh Start Team",
      date: "June 15, 2023",
      category: "Tax Tips"
    },
    {
      id: 43,
      title: "Does Owing The IRS Affect Your Credit Score?",
      excerpt: "TABLE OF CONTENTS Does Owing The IRS Affect Your Credit Score?What Is A Credit Score?During What Situation",
      author: "Credit Experts",
      date: "June 14, 2023",
      category: "Tax Tips"
    },
    {
      id: 44,
      title: "Tax Evasion Penalties Explained",
      excerpt: "You've probably read these press release headlines before: \"Business Owner Pleads Guilty To Tax Evasion And Sentenced To Five Years In",
      author: "Legal Team",
      date: "June 13, 2023",
      category: "Tax Tips"
    },
    {
      id: 45,
      title: "What Happens When You Report Someone To The IRS?",
      excerpt: "There are cash advantages for people who become informants and report tax cheats to the IRS,",
      author: "IRS Specialists",
      date: "May 25, 2023",
      category: "Tax Tips"
    },
    {
      id: 46,
      title: "IRS Audit Process Timeline Explained",
      excerpt: "TABLE OF CONTENTS IRS Audit Process TimelineWhat Is An IRS Tax Audit?Timelines For Different IRS AuditsCommon Factors That Can Extend",
      author: "Audit Experts",
      date: "May 25, 2023",
      category: "Tax Tips"
    },
    {
      id: 47,
      title: "What Happens if You Get Audited & Don't Have Receipts?",
      excerpt: "Tax audits involve the IRS investigating your tax account to verify the accuracy of tax",
      author: "Audit Experts",
      date: "May 22, 2023",
      category: "Tax Tips"
    },
    {
      id: 48,
      title: "Tax Relief Attorney Explained",
      excerpt: "If you have concerns about your ability to pay your tax bill, the idea of spending money on hiring a tax",
      author: "Legal Team",
      date: "May 15, 2023",
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
                    href="/blog/3"
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
                  <PaginationLink href="/blog/4" isActive>4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="/blog/5">5</PaginationLink>
                </PaginationItem>
                
                <PaginationItem>
                  <PaginationNext 
                    href="/blog/5"
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

export default BlogPage4;
