
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaxesOnStocks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-mint-50 to-deep-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-brand-teal hover:text-brand-blue transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="mb-6">
              <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                Investment Tax
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Taxes on Stocks Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Investment Tax Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                October 18, 2023
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">
              Taxes on stocks must be paid when an individual earns dividends as a shareholder or sells stocks for a profit, creating taxable events that require proper reporting on your tax return.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Stock Taxes</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Capital Gains Tax</h3>
            <p className="mb-4">
              When you sell stocks for more than you paid, you realize a capital gain. The tax rate depends on how long you held the stock:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Short-term capital gains:</strong> Stocks held for one year or less, taxed as ordinary income</li>
              <li><strong>Long-term capital gains:</strong> Stocks held for more than one year, taxed at preferential rates (0%, 15%, or 20%)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Dividend Tax</h3>
            <p className="mb-6">
              Dividends received from stock ownership are generally taxable. Most dividends qualify for long-term capital gains tax rates, but some dividends are taxed at ordinary income rates.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tax-Loss Harvesting</h2>
            <p className="mb-6">
              You can offset capital gains with capital losses from other investments. If your losses exceed your gains, you can deduct up to $3,000 of net losses against other income annually, with remaining losses carried forward to future years.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Record Keeping Requirements</h2>
            <p className="mb-6">
              Maintain detailed records of all stock transactions, including:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Purchase dates and prices</li>
              <li>Sale dates and prices</li>
              <li>Brokerage fees and commissions</li>
              <li>Dividend payments received</li>
              <li>Stock splits and other corporate actions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tax-Advantaged Accounts</h2>
            <p className="mb-6">
              Consider holding stocks in tax-advantaged accounts like 401(k)s and IRAs to defer or eliminate taxes on gains and dividends, allowing your investments to grow more efficiently.
            </p>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help with Investment Taxes?</h3>
              <p className="text-gray-600 mb-4">
                Our tax professionals can help you navigate the complexities of stock taxation and optimize your investment tax strategy.
              </p>
              <Link
                to="/free-tax-consultation"
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
};

export default TaxesOnStocks;
