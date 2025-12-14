import React, { useState } from 'react';
import { Briefcase, User, Globe, Check, Sparkles, Lightbulb, Loader2 } from 'lucide-react';
import Button from '../components/Button';
import { GoogleGenAI } from "@google/genai";

const TaxServices: React.FC = () => {
  const [profession, setProfession] = useState('');
  const [deductions, setDeductions] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callGeminiWithRetry = async (prompt: string, retries = 3, delay = 1000): Promise<string> => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        const text = response.text;
        if (!text) throw new Error("Empty response");
        return text;
    } catch (error) {
        if (retries === 0) throw error;
        await new Promise(resolve => setTimeout(resolve, delay));
        return callGeminiWithRetry(prompt, retries - 1, delay * 2);
    }
  };

  const generateDeductions = async () => {
    if (!profession.trim()) return;
    
    setLoading(true);
    setError(null);
    setDeductions(null);

    try {
        const prompt = `You are a Senior US Tax Strategist. List 5 specific, high-value tax deductions available to a "${profession}" in the US. 
        Format the output as a clean HTML unordered list (<ul><li>...</li></ul>). 
        Do not use markdown formatting (like \`\`\`html). 
        Do not include a preamble or conclusion, just the list.
        Make each point concise but informative.`;

        const result = await callGeminiWithRetry(prompt);
        setDeductions(result);

    } catch (err) {
        console.error(err);
        setError("Failed to retrieve deductions. Please try again later.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Turn Tax Season into a <span className="text-emerald">Non-Event</span>.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No more shoeboxes of receipts. No more April panic. Just clean, IRS-ready returns filed with strategic precision.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* Service Block A */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="bg-emerald p-8 md:w-1/3 flex flex-col justify-center text-white">
              <Briefcase className="h-12 w-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Business Tax Preparation</h2>
              <p className="text-emerald-100 font-medium">Corporations, Partnerships, LLCs</p>
              <p className="text-sm opacity-80 mt-1">Advanced Software: Drake, ProConnect, UltraTax</p>
            </div>
            <div className="p-8 md:w-2/3">
              <p className="text-gray-600 text-lg mb-6">
                Your business is an engine for wealth creation. We actively manage your tax liability using advanced tax software to ensure accuracy and maximum savings, tailored to your growth stage.
              </p>
              
              <div className="space-y-6">
                {/* Startups */}
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-emerald">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-navy text-lg">Startups & Emerging Growth</h3>
                    <span className="text-xs bg-emerald text-white px-2 py-1 rounded-full font-semibold">High Growth</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    We help founders navigate the critical early years where cash is king. Our focus is on maximizing runway and setting up a structure that appeals to investors.
                  </p>
                  <ul className="text-sm text-gray-600 mb-3 space-y-1 list-disc list-inside">
                     <li>Entity Selection & Formation (C-Corp for VC vs LLC).</li>
                     <li>R&D Tax Credits (Form 6765) to offset payroll taxes.</li>
                     <li>QSBS (Qualified Small Business Stock) planning for exit tax savings.</li>
                  </ul>
                  <p className="text-xs font-semibold text-gray-500 border-t border-gray-200 pt-2">Key Forms: 1120, 1099-NEC.</p>
                </div>

                {/* Established Corps */}
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-navy">
                  <h3 className="font-bold text-navy text-lg mb-3">Established Corporations & Partnerships</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    For mature businesses, we shift focus to efficiency, multi-state compliance, and operational optimization. We handle the complexity so you can focus on scaling.
                  </p>
                   <ul className="text-sm text-gray-600 mb-3 space-y-1 list-disc list-inside">
                     <li>Multi-State Nexus Studies & Apportionment.</li>
                     <li>Consolidated Returns for Parent/Subsidiary groups.</li>
                     <li>Asset Depreciation Strategies (Bonus Depreciation/Section 179).</li>
                  </ul>
                  <p className="text-xs font-semibold text-gray-500 border-t border-gray-200 pt-2">Key Forms: 1120-S, 1065, K-1 Distribution.</p>
                </div>

                {/* Non-Profits */}
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-burntOrange">
                  <h3 className="font-bold text-navy text-lg mb-3">Non-Profits & Exempt Orgs</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Transparency is your currency. We ensure your public filings accurately reflect your mission and financial health to donors and the IRS.
                  </p>
                   <ul className="text-sm text-gray-600 mb-3 space-y-1 list-disc list-inside">
                     <li>Public Support Testing to maintain 501(c)(3) status.</li>
                     <li>Unrelated Business Income (UBIT) analysis.</li>
                     <li>Governance disclosures and Executive Compensation reporting.</li>
                  </ul>
                  <p className="text-xs font-semibold text-gray-500 border-t border-gray-200 pt-2">Key Forms: 990, 990-EZ, 990-PF.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Block B */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex flex-row-reverse">
            <div className="bg-navy p-8 md:w-1/3 flex flex-col justify-center text-white">
              <User className="h-12 w-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Individual & Trust Tax</h2>
              <p className="text-gray-300 font-medium">HNWI, Freelancers, Trusts</p>
            </div>
            <div className="p-8 md:w-2/3">
              <p className="text-gray-600 text-lg mb-6">
                 For business owners, executives, and families, tax planning is about preservation. We construct defensive strategies that protect your hard-earned wealth from erosion.
              </p>
              
              <div className="space-y-6">
                {/* High Net Worth */}
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-emerald">
                  <h3 className="font-bold text-navy text-lg mb-3">High Net Worth Individuals</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    We specialize in complex compensation packages and investment portfolios. Our goal is to minimize AMT exposure and optimize tax brackets.
                  </p>
                  <ul className="text-sm text-gray-600 mb-3 space-y-1 list-disc list-inside">
                     <li>Equity Compensation Planning (ISOs, NSOs, RSUs).</li>
                     <li>Tax-Loss Harvesting & Capital Gains Strategy.</li>
                     <li>Retirement Backdoor Roth Conversions.</li>
                  </ul>
                  <p className="text-xs font-semibold text-gray-500 border-t border-gray-200 pt-2">Key Forms: 1040, Sch D, 8949.</p>
                </div>

                {/* Trusts & Estates */}
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-navy">
                  <h3 className="font-bold text-navy text-lg mb-3">Trusts & Estates</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Preserving legacy requires delicate handling of fiduciary responsibilities. We ensure compliance for grantors and beneficiaries.
                  </p>
                   <ul className="text-sm text-gray-600 mb-3 space-y-1 list-disc list-inside">
                     <li>Fiduciary Income Tax Returns (Simple & Complex Trusts).</li>
                     <li>Distributable Net Income (DNI) Calculations.</li>
                     <li>Gift Tax Returns and Lifetime Exemption tracking.</li>
                  </ul>
                  <p className="text-xs font-semibold text-gray-500 border-t border-gray-200 pt-2">Key Forms: 1041, 709, K-1.</p>
                </div>

                {/* Real Estate */}
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-burntOrange">
                  <h3 className="font-bold text-navy text-lg mb-3">Real Estate Investors</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    From single rental units to commercial syndications, we maximize the tax benefits of property ownership.
                  </p>
                   <ul className="text-sm text-gray-600 mb-3 space-y-1 list-disc list-inside">
                     <li>Real Estate Professional Status (REPS) qualification.</li>
                     <li>1031 Exchange reporting for tax-deferred growth.</li>
                     <li>Passive Activity Loss (PAL) limitation planning.</li>
                  </ul>
                  <p className="text-xs font-semibold text-gray-500 border-t border-gray-200 pt-2">Key Forms: Sch E, 8825.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Block C */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="bg-burntOrange p-8 md:w-1/3 flex flex-col justify-center text-white">
              <Globe className="h-12 w-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Expat & International Tax</h2>
              <p className="text-orange-100 font-medium">Global Mobility Support</p>
            </div>
            <div className="p-8 md:w-2/3">
              <h3 className="text-xl font-bold text-navy mb-4">Global Mobility without the Tax Headaches.</h3>
              <p className="text-gray-600 text-lg mb-6">
                Living abroad offers freedom, but it doesn't free you from the IRS. We provide specialized support for expats.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border border-gray-200 p-3 rounded-lg hover:border-burntOrange transition-colors">
                  <h4 className="font-bold text-navy text-sm mb-1">Exclusion Strategies</h4>
                  <p className="text-xs text-gray-500">Foreign Earned Income Exclusion (Form 2555).</p>
                </div>
                <div className="border border-gray-200 p-3 rounded-lg hover:border-burntOrange transition-colors">
                  <h4 className="font-bold text-navy text-sm mb-1">Foreign Tax Credits</h4>
                  <p className="text-xs text-gray-500">Form 1116 preparation to avoid double taxation.</p>
                </div>
                 <div className="border border-gray-200 p-3 rounded-lg hover:border-burntOrange transition-colors">
                  <h4 className="font-bold text-navy text-sm mb-1">FBAR & FATCA</h4>
                  <p className="text-xs text-gray-500">Defense via FinCEN Form 114 and Form 8938.</p>
                </div>
                 <div className="border border-gray-200 p-3 rounded-lg hover:border-burntOrange transition-colors">
                  <h4 className="font-bold text-navy text-sm mb-1">Non-Residents</h4>
                  <p className="text-xs text-gray-500">Form 1040-NR filing for foreign nationals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Deduction Discovery - NEW SECTION */}
        <div className="bg-navy rounded-2xl shadow-xl mt-12 mb-12 py-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-emerald opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-burntOrange opacity-10 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
                        <Sparkles className="h-6 w-6 text-emerald" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Smart Deduction Discovery</h2>
                    <p className="text-gray-300">
                        Powered by Gemini AI. Enter your profession to uncover high-value tax write-offs tailored to your industry.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <input 
                            type="text" 
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            placeholder="e.g. Real Estate Agent, Software Engineer, Dentist..."
                            className="flex-grow p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald focus:border-emerald text-lg outline-none transition-all placeholder:text-gray-400"
                            onKeyDown={(e) => e.key === 'Enter' && generateDeductions()}
                        />
                        <Button 
                            onClick={generateDeductions} 
                            disabled={loading || !profession.trim()}
                            variant="accent"
                            className="md:w-auto w-full flex items-center justify-center gap-2 min-w-[200px]"
                        >
                            {loading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <Lightbulb className="h-5 w-5" />
                            )}
                            {loading ? 'Analyzing...' : 'Discover Deductions'}
                        </Button>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-100 flex items-center">
                            <span className="mr-2">⚠️</span> {error}
                        </div>
                    )}

                    {deductions && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h3 className="text-navy font-bold text-xl mb-4 flex items-center border-b border-gray-100 pb-2">
                                <Check className="h-5 w-5 text-emerald mr-2" />
                                Top Deductions for <span className="text-emerald ml-1">{profession}</span>:
                            </h3>
                            <div 
                                className="prose prose-emerald max-w-none text-gray-700
                                    [&>ul]:space-y-3 [&>ul]:pl-0
                                    [&>ul>li]:bg-slate-50 [&>ul>li]:p-4 [&>ul>li]:rounded-r-lg 
                                    [&>ul>li]:border-l-4 [&>ul>li]:border-burntOrange 
                                    [&>ul>li]:list-none [&>ul>li]:shadow-sm"
                                dangerouslySetInnerHTML={{ __html: deductions }}
                            />
                            <p className="text-xs text-gray-400 mt-6 italic text-center">
                                * AI-generated suggestions for informational purposes only. Consult with our CPAs for eligibility.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className="mt-12 text-center">
             <Button to="/checklist" variant="primary" className="shadow-xl transform hover:-translate-y-1">
                 Tax Readiness Checklist
             </Button>
        </div>
      </div>
    </div>
  );
};

export default TaxServices;