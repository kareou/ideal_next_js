import React from "react";
import Link from "next/link";
import { ArrowLeft, User, Calendar } from "lucide-react";
import axios from "axios";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const response = await axios.get(`http://localhost:3000/api/blogs/${resolvedParams.id}`);
    const blogPost = response.data;


    return {
      title: blogPost.title,
      description: blogPost.excerpt || "Read our latest blog post on important tax topics.",
      openGraph: {
        title: blogPost.title,
        description: blogPost.excerpt || "",
        type: "article",
      },

    };
  } catch (error) {
    console.error("Metadata generation failed:", error);
    return {
      title: "Blog Post",
      description: "Read our latest article on tax insights and compliance.",
    };
  }
}

async function page({ params }: { params: Promise<{ id: string }> }): Promise<any> {
  let blogPost = null;
  try {
    const resolvedParams = await params;
    const response = await axios.get(
      `http://localhost:3000/api/blogs/${resolvedParams.id}`
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch blog post");
    }
    console.log("Blog post fetched successfully:", response.data);
    blogPost = response.data;
  } catch (error) {
    console.error("Error fetching blog post:", error instanceof Error ? error.message : String(error));
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-teal hover:text-brand-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="mb-6">
              <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                Tax Forms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {/* IRS 1099 Form Explained */}
              {blogPost ? blogPost.title : "Loading..."}
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                {/* Form Specialists */}
                {blogPost ? blogPost.author : "Loading..."}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {/* August 17, 2023 */}
                {blogPost
                  ? new Date(
                      new Date(blogPost.date).toISOString().split("T")[0]
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {blogPost && (
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            )}

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Need Help with {blogPost ? blogPost.title : "issues"} ?
              </h3>
              <p className="text-gray-600 mb-4">
                Whether you need to issue {blogPost ? blogPost.title : "issues"}{" "}
                or have questions about it, our tax professionals can help
                ensure compliance.
              </p>
              <Link
                href="/free-tax-consultation"
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg inline-block"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
