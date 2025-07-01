import React from 'react';
import Navigation from '../components/Navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CapitalGainsTax = () => {
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
              Capital Gains Tax Explained
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <div className="flex items-center mr-6">
                <User className="w-4 h-4 mr-2" />
                Investment Tax Team
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                September 15, 2023
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
              Selling your capital assets may be an excellent strategy to make some extra money, but be careful that you are aware of the capital gains tax implications before making any major financial decisions.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What Is Capital Gains Tax?</h2>
            <p className="mb-6">
              Capital gains tax is the tax imposed on the profit made from selling capital assets such as stocks, bonds, real estate, or other investments. The tax is only applied to the gain (profit) from the sale, not the entire sale price.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Types of Capital Gains</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Short-Term Capital Gains</h3>
            <p className="mb-4">
              Assets held for one year or less before selling are subject to short-term capital gains tax, which is taxed at your ordinary income tax rates (10% to 37% for 2023).
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Long-Term Capital Gains</h3>
            <p className="mb-6">
              Assets held for more than one year benefit from preferential long-term capital gains tax rates:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>0% rate:</strong> For taxpayers in the 10% and 12% ordinary income tax brackets</li>
              <li><strong>15% rate:</strong> For taxpayers in the 22%, 24%, 32%, and 35% brackets</li>
              <li><strong>20% rate:</strong> For taxpayers in the highest 37% bracket</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculating Capital Gains</h2>
            <p className="mb-6">
              Capital gain or loss is calculated as:
            </p>
            <p className="mb-6 font-mono bg-gray-100 p-4 rounded">
              Sale Price - Cost Basis - Selling Expenses = Capital Gain/Loss
            </p>
            <p className="mb-6">
              The cost basis includes the original purchase price plus any improvements, commissions, or fees associated with the purchase.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tax Planning Strategies</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Tax-Loss Harvesting</h3>
            <p className="mb-4">
              Offset capital gains by selling losing investments to realize capital losses. You can deduct up to $3,000 of net capital losses against ordinary income annually.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Hold Assets Long-Term</h3>
            <p className="mb-4">
              Consider holding investments for more than one year to qualify for preferential long-term capital gains rates.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Use Tax-Advantaged Accounts</h3>
            <p className="mb-6">
              Hold investments in 401(k)s, IRAs, or other tax-advantaged accounts to defer or eliminate capital gains taxes.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Special Situations</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Primary residence:</strong> Up to $250,000 ($500,000 for married couples) exclusion available</li>
              <li><strong>Collectibles:</strong> Maximum 28% tax rate applies</li>
              <li><strong>Section 1202 stock:</strong> Potential exclusion for qualified small business stock</li>
              <li><strong>Installment sales:</strong> May spread gain recognition over multiple years</li>
            </ul>

            <div className="bg-brand-teal/10 p-6 rounded-lg mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Optimize Your Capital Gains Strategy</h3>
              <p className="text-gray-600 mb-4">
                Effective capital gains tax planning can significantly impact your investment returns. Our tax professionals can help develop strategies to minimize your tax liability.
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

export default CapitalGainsTax;
