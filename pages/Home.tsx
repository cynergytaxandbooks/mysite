import React from 'react';
import Button from '../components/Button';
import { TrendingUp, ShieldCheck, FileText, CheckCircle2, Award, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#2E8B57" />
            </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Where Precision Bookkeeping Meets <span className="text-emerald">Strategic Tax Planning.</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300 mb-10">
              Stop treating your finances as separate silos. Cynergy Tax and Books integrates your daily data with year-end strategy to maximize refunds, ensure compliance, and fuel business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/about" variant="accent" className="w-full sm:w-auto">
                Schedule a Consultation
              </Button>
              <Button to="/tax-services" variant="secondary" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Trusted By & Certified With</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-8 w-8 text-navy mb-2" />
              <span className="text-xs font-bold text-navy">IRS e-file Provider</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-emerald mb-2" />
              <span className="text-xs font-bold text-emerald">Certified Public Accountant</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-navy mb-2" />
              <span className="text-xs font-bold text-navy">International Tax Specialists</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-xl font-bold text-navy mb-1">AICPA</span>
               <span className="text-xs font-bold text-gray-600">Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Cynergy Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Why "Cynergy"? <br />
                <span className="text-emerald">Because 1 + 1 Should Equal 3.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In traditional accounting, the bookkeeper records history, and the tax preparer files it months later. This disconnect leads to missed deductions. We unify your bookkeeping and tax preparation under one roof.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Real-Time Tax Strategy (Not just at year-end).",
                  "Audit-Proof Data (Backed by pristine books).",
                  "One Point of Contact (No playing telephone between vendors)."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald flex-shrink-0 mr-3" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button to="/about" variant="outline">Learn More About Us</Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">
              <div className="absolute inset-0 bg-emerald transform skew-y-3 rounded-3xl opacity-10"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="h-10 w-10 bg-navy rounded-full flex items-center justify-center text-white font-bold">BK</div>
                        <div>
                            <p className="text-sm text-gray-500">Bookkeeping</p>
                            <p className="font-bold text-navy">Monthly Data Entry</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-2xl text-gray-300">+</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="h-10 w-10 bg-emerald rounded-full flex items-center justify-center text-white font-bold">TX</div>
                        <div>
                            <p className="text-sm text-gray-500">Tax Prep</p>
                            <p className="font-bold text-navy">Strategic Filing</p>
                        </div>
                    </div>
                     <div className="flex justify-center">
                        <span className="text-2xl text-gray-300">=</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-navy rounded-lg text-white shadow-lg transform scale-105">
                        <div className="h-10 w-10 bg-burntOrange rounded-full flex items-center justify-center text-white font-bold">$$</div>
                        <div>
                            <p className="text-sm text-gray-300">Result</p>
                            <p className="font-bold">Maximized Growth</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillars Section */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">The Three Pillars of Service</h2>
            <div className="mt-2 w-24 h-1 bg-emerald mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-navy/10 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Pristine Books</h3>
              <p className="text-gray-600 mb-4">
                Accurate, monthly financial statements that give you a clear view of your business health.
              </p>
              <div className="text-emerald text-sm font-semibold uppercase tracking-wider">The Foundation</div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-emerald/10 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-emerald" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Strategic Compliance</h3>
              <p className="text-gray-600 mb-4">
                We go beyond data entry. Our CPAs analyze your unique situation to structure your entities and maximize deductions.
              </p>
              <div className="text-emerald text-sm font-semibold uppercase tracking-wider">The Compliance</div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-burntOrange/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-burntOrange" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Growth Advisory</h3>
              <p className="text-gray-600 mb-4">
                Numbers tell a story. We help you read it. From cash flow forecasting to entity selection, we provide insights to scale.
              </p>
              <div className="text-emerald text-sm font-semibold uppercase tracking-wider">The Future</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to stop worrying about your finances?</h2>
          <Button to="/about" variant="accent" className="text-lg px-8 py-4">
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;