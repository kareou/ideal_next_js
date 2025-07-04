"use client";
import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt?: string;
  author: string;
  date: string;
  category?: string;
}

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    author: "",
    category: "",
  });
  // const navigate = useNavigate();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    setIsAuthenticated(true);
    const getBlogPosts = async () => {
      try {
        const response = await axios.get("/api/blogs");
        setBlogPosts(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        toast({
          title: "Error",
          description: "Failed to load blog posts.",
          variant: "destructive",
        });
      }
    };
    getBlogPosts();

  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("isAdminLoggedIn");
    await axios.delete("/api/auth"); // Adjust the endpoint as needed
    router.replace("/admin/login");
  };

  const handleAddPost = () => {
    setIsEditing(true);
    setEditingPost(null);
    setFormData({
      title: "",
      content: "",
      excerpt: "",
      author: "",
      category: "",
    });
  };

  const handleEditPost = (post: BlogPost) => {
    setIsEditing(true);
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || "",
      author: post.author,
      category: post.category || "",
    });
  };

  const handleDeletePost = async (id: number) => {
    try {
      await axios.delete("/api/blogs", { data: { id } });
      setBlogPosts(blogPosts.filter((post) => post.id !== id));
      toast({
        title: "Post deleted",
        description: "Blog post has been removed successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete blog post.",
        variant: "destructive",
      });
    }
  };

  const handleSavePost = async () => {
    try {
      if (editingPost) {
        // Update existing post
        const response = await axios.put("/api/blogs", {
          id: editingPost.id,
          ...formData,
        });
        setBlogPosts(
          blogPosts.map((post) =>
            post.id === editingPost.id ? response.data : post
          )
        );
        toast({
          title: "Post updated",
          description: "Blog post has been updated successfully",
        });
      } else {
        // Add new post
        const response = await axios.post("/api/blogs", formData);
        setBlogPosts([response.data, ...blogPosts]);
        toast({
          title: "Post created",
          description: "New blog post has been created successfully",
        });
      }
      setIsEditing(false);
      setEditingPost(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save blog post.",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-mint-50 to-deep-blue-50 flex items-center justify-center">
        <div className="animate-pulse text-brand-blue font-medium">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 via-white to-deep-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-brand-teal to-brand-blue p-3 rounded-xl">
              <img
                src="/lovable-uploads/2fba1b84-500b-4f86-8218-2081e703994c.png"
                alt="IdealTax Logo"
                className="h-8 w-auto"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Manage your blog content</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Blog Management */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-brand-teal/10 to-brand-blue/10 rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl text-gray-900">
                  Blog Management
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Create, edit, and manage your blog posts
                </CardDescription>
              </div>
              <Button
                onClick={handleAddPost}
                className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Post
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            {isEditing && (
              <div className="bg-gradient-to-r from-mint-50 to-deep-blue-50 p-6 rounded-xl border border-mint-200 mb-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {editingPost ? "Edit Post" : "Add New Post"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="title"
                      className="text-gray-700 font-medium"
                    >
                      Title
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      placeholder="Post title"
                      className="mt-1 border-gray-300 focus:border-brand-teal focus:ring-brand-teal"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="author"
                      className="text-gray-700 font-medium"
                    >
                      Author
                    </Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) =>
                        setFormData({ ...formData, author: e.target.value })
                      }
                      placeholder="Author name"
                      className="mt-1 border-gray-300 focus:border-brand-teal focus:ring-brand-teal"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="category"
                      className="text-gray-700 font-medium"
                    >
                      Category
                    </Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      placeholder="Post category"
                      className="mt-1 border-gray-300 focus:border-brand-teal focus:ring-brand-teal"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label
                      htmlFor="excerpt"
                      className="text-gray-700 font-medium"
                    >
                      Excerpt
                    </Label>
                    <Input
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) =>
                        setFormData({ ...formData, excerpt: e.target.value })
                      }
                      placeholder="Brief description of the post"
                      className="mt-1 border-gray-300 focus:border-brand-teal focus:ring-brand-teal"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label
                      htmlFor="content"
                      className="text-gray-700 font-medium"
                    >
                      Content
                    </Label>
                    <textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      placeholder="Full blog content"
                      className="mt-1 border-gray-300 focus:border-brand-teal focus:ring-brand-teal w-full min-h-[120px] rounded-md p-2"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button
                    onClick={handleSavePost}
                    className="bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    {editingPost ? "Update Post" : "Create Post"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {/* Blog Posts List */}
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-xl text-gray-900 mb-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex gap-6 text-sm text-gray-500">
                        <span className="font-medium">By {post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 text-brand-blue px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-6">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditPost(post)}
                        className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeletePost(post.id)}
                        className="bg-red-500 hover:bg-red-600 transition-all duration-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
