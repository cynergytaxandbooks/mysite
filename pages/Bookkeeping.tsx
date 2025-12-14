import React from 'react';
import { Check, BarChart2, AlertCircle } from 'lucide-react';
import Button from '../components/Button';

const Bookkeeping: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-navy mb-6">
            Your Virtual Finance Department.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Great businesses are built on clean data. We don't just record transactions; we interpret them.
          </p>
        </div>
      </div>

      {/* Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Tier 1 */}
          <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow relative">
            <h2 className="text-2xl font-bold text-navy mb-2">The Essential</h2>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-6">Ideal For: Solopreneurs & Consultants</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-emerald mr-3 mt-1" />
                <span className="text-gray-700">Bank Feeds (2 accounts)</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-emerald mr-3 mt-1" />
                <span className="text-gray-700">Monthly Reconciliation</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-emerald mr-3 mt-1" />
                <span className="text-gray-700">Quarterly P&L</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-navy font-medium italic">"Keep your pulse on cash flow without the overhead."</p>
            </div>

            <Button to="/about" variant="outline" className="w-full">
              Inquire Now
            </Button>
          </div>

          {/* Tier 2 */}
          <div className="border-2 border-emerald rounded-2xl p-8 shadow-lg relative bg-white">
            <div className="absolute top-0 right-0 bg-emerald text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <h2 className="text-2xl font-bold text-navy mb-2">The Growth</h2>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-6">Ideal For: Small Business & Retail</p>
            
             <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-emerald mr-3 mt-1" />
                <span className="text-gray-700">Weekly Reconciliation</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-emerald mr-3 mt-1" />
                <span className="text-gray-700">Monthly P&L + Balance Sheet</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-emerald mr-3 mt-1" />
                <span className="text-gray-700">Sales Tax Filing</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-emerald mr-3 mt-1" />
                <span className="text-gray-700">AP/AR Management</span>
              </div>
            </div>

             <div className="bg-emerald/10 p-4 rounded-lg mb-8">
              <p className="text-sm text-emerald-800 font-medium italic">"Comprehensive financial management that scales with your business."</p>
            </div>

            <Button to="/about" variant="primary" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Catch-up Service */}
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-white/10">
            <div className="mb-8 md:mb-0 md:mr-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-8 w-8 text-burntOrange mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Behind on Your Books? We Don't Judge. We Fix.</h2>
              </div>
              <p className="text-gray-300 text-lg">
                Cynergy’s Catch-Up Crew specializes in forensic reconstruction. We turn chaos into compliance so you can file back taxes and sleep easy.
              </p>
            </div>
            <div className="flex-shrink-0">
               <Button to="/about" variant="accent" className="whitespace-nowrap">
                 Get a Catch-Up Quote
               </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookkeeping;