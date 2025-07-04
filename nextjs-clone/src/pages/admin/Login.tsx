"use client";
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('/api/auth/', { email, password });
      console.log('Login response:', response);
      if (response.status === 200) {
        // Assuming the response contains a success message or token
        router.push('/admin/dashboard'); // Redirect to admin dashboard
        toast({ title: 'Login successful!', description: 'Welcome to the admin dashboard.' });
        // navigate('/admin/dashboard'); // Redirect to admin dashboard
      }
    } catch (error : Object) {
      // console.error('Login error:', error);
      console.log('Login error:', error.response?.data || error.message);
      toast({ title: 'Login failed', description: 'Invalid email or password.', variant: 'destructive' });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 via-white to-deep-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center bg-gradient-to-r from-brand-teal/10 to-brand-blue/10 rounded-t-lg">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-brand-teal to-brand-blue p-3 rounded-xl">
              <img 
                src="/lovable-uploads/2fba1b84-500b-4f86-8218-2081e703994c.png" 
                alt="IdealTax Logo" 
                className="h-8 w-auto"
              />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Admin Login</CardTitle>
          <CardDescription className="text-gray-600">
            Sign in to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@idealtax.com"
                required
                className="mt-1 border-gray-300 focus:border-brand-teal focus:ring-brand-teal"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1 border-gray-300 focus:border-brand-teal focus:ring-brand-teal"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-blue hover:to-brand-teal text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-mint-50 rounded-lg border border-mint-200">
            <p className="text-sm text-gray-600 text-center">
              <strong>Demo Credentials:</strong><br />
              Email: admin@idealtax.com<br />
              Password: admin123
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
