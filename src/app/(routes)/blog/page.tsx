"use client";

import React from "react";
import { Metadata } from "next";

export const metadata = {
  title: "Blog | AI Advisory",
  description:
    "Explore the latest insights, trends and news about AI in business.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Leveraging AI for Better Business Decisions",
      excerpt:
        "How modern AI tools are revolutionizing the decision-making process in enterprises.",
      date: "September 15, 2025",
      author: "Dr. Sarah Chen",
      category: "Business Intelligence",
    },
    {
      id: 2,
      title: "The Future of Predictive Analytics",
      excerpt:
        "Exploring how predictive models are becoming more accurate and accessible to businesses of all sizes.",
      date: "September 10, 2025",
      author: "Michael Rodriguez",
      category: "Data Science",
    },
    {
      id: 3,
      title: "AI Ethics in Business Applications",
      excerpt:
        "Addressing the ethical considerations when implementing AI in your organization.",
      date: "September 5, 2025",
      author: "Dr. Emily Johnson",
      category: "AI Ethics",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">AI Advisory Blog</h1>
      <p className="text-lg mb-12">
        Stay updated with the latest trends, insights, and best practices in AI
        for business.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                {post.category} • {post.date}
              </p>
              <h2 className="text-xl font-bold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm mb-4">By {post.author}</p>
              <a
                href={`/blog/${post.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
