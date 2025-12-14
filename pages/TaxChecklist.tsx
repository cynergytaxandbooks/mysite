import React, { useState } from 'react';
import { Printer, CheckSquare, ArrowLeft, Mail, Check } from 'lucide-react';
import Button from '../components/Button';
import Logo from '../components/Logo';

const TaxChecklist: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20 print:bg-white print:pb-0">
      {/* Action Bar - Hidden on Print */}
      <div className="bg-white border-b border-gray-200 py-4 print:hidden sticky top-20 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Button to="/" variant="secondary" className="px-3 py-2 text-sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
            </Button>
            <button 
                onClick={handlePrint}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-navy hover:bg-navy/90 transition-colors shadow-sm"
            >
                <Printer className="h-4 w-4 mr-2" />
                Print this Checklist
            </button>
        </div>
      </div>

      {/* Document Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:p-0 print:max-w-none">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden print:shadow-none print:rounded-none">
            
            {/* Document Header */}
            <div className="bg-navy text-white p-8 md:p-12 print:bg-white print:text-navy print:border-b-2 print:border-navy print:p-0 print:mb-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">The Ultimate Tax Season Readiness Checklist</h1>
                        <p className="text-emerald text-lg font-medium">Stop Scrambling. Start Saving.</p>
                        <p className="text-gray-300 mt-2 text-sm print:text-gray-600">A guide to gathering your documents for Cynergy Tax and Books.</p>
                    </div>
                    <div className="hidden print:block">
                        <Logo className="h-16 w-16" />
                    </div>
                </div>
            </div>

            <div className="p-8 md:p-12 space-y-12 print:p-0 print:space-y-8">
                
                {/* Section 1: Basics */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="bg-emerald text-white font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 print:border print:border-emerald print:text-emerald print:bg-white">1</div>
                        <h2 className="text-2xl font-bold text-navy">Personal & Business Identity</h2>
                    </div>
                    <p className="text-gray-600 mb-4 ml-11 text-sm italic">Before we dive into the numbers, we need to establish the foundation.</p>
                    
                    <div className="ml-11 grid gap-3">
                        <CheckItem text="Previous Year’s Tax Return (If you are a new client to Cynergy)." />
                        <CheckItem text="Personal Identification: Driver’s License numbers and expiration dates for you and your spouse." />
                        <CheckItem text="Social Security Numbers: For you, your spouse, and all dependents." />
                        <CheckItem text="Bank Account Details: Routing and Account numbers for direct deposit of refunds." />
                        <CheckItem text="Identity Protection PIN: If the IRS has issued you a 6-digit IP PIN." />
                    </div>
                </section>

                <hr className="border-gray-100 print:border-gray-300" />

                {/* Section 2: Income */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="bg-emerald text-white font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 print:border print:border-emerald print:text-emerald print:bg-white">2</div>
                        <h2 className="text-2xl font-bold text-navy">Income Records (Revenue)</h2>
                    </div>
                    <p className="text-gray-600 mb-4 ml-11 text-sm italic">If you use Cynergy’s bookkeeping services, we likely have this. If not, please provide:</p>
                    
                    <div className="ml-11 grid gap-3">
                        <CheckItem text="Forms 1099-NEC / 1099-MISC: Any forms received from clients or vendors." />
                        <CheckItem text="Form 1099-K: From payment processors like Stripe, PayPal, or Square." />
                        <CheckItem text="Gross Receipts: Total sales/revenue for the year (if not fully captured in 1099s)." />
                        <CheckItem text="W-2 Forms: If you or your spouse received salary income from employment." />
                        <CheckItem text="Interest & Dividend Income: Forms 1099-INT and 1099-DIV from banks and brokerages." />
                        <CheckItem text="Crypto/Stock Sales: Form 1099-B showing proceeds and cost basis." />
                    </div>
                </section>

                 <hr className="border-gray-100 print:border-gray-300" />

                {/* Section 3: COGS */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="bg-emerald text-white font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 print:border print:border-emerald print:text-emerald print:bg-white">3</div>
                        <h2 className="text-2xl font-bold text-navy">Cost of Goods Sold (COGS)</h2>
                    </div>
                    <p className="text-gray-600 mb-4 ml-11 text-sm italic">Do you sell physical products? We need to calculate your gross profit.</p>
                    
                    <div className="ml-11 grid gap-3">
                        <CheckItem text="Inventory Count: The dollar value of inventory on hand as of Dec 31st." />
                        <CheckItem text="Purchases: Total amount spent on raw materials or merchandise for resale." />
                        <CheckItem text="Materials & Supplies: Costs for items used to create your product." />
                    </div>
                </section>

                 <hr className="border-gray-100 print:border-gray-300" />

                 {/* Section 4: Operating Expenses */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="bg-emerald text-white font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 print:border print:border-emerald print:text-emerald print:bg-white">4</div>
                        <h2 className="text-2xl font-bold text-navy">Operating Expenses</h2>
                    </div>
                    <p className="text-gray-600 mb-4 ml-11 text-sm italic">Don’t miss a write-off. Gather receipts or totals for:</p>
                    
                    <div className="ml-11 grid gap-3">
                        <CheckItem text="Advertising: Ads (FB/Google), business cards, website hosting." />
                        <CheckItem text="Insurance: Business liability, worker’s comp, and professional liability." />
                        <CheckItem text="Professional Fees: Legal, accounting, and consulting fees." />
                        <CheckItem text="Office Supplies: Computers, printers, paper, software subscriptions." />
                        <CheckItem text="Rent/Lease: Expenses for business property (non-home office)." />
                        <CheckItem text="Taxes & Licenses: State business registration fees, local permits." />
                        <CheckItem text="Travel: Airfare, hotels, and transit for business trips (no commuting)." />
                         <CheckItem text="Meals: Business meals (Keep logs of who you met with and the business purpose)." />
                    </div>
                </section>

                <div className="print:break-before-page"></div>

                {/* Section 5: Payroll */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="bg-emerald text-white font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 print:border print:border-emerald print:text-emerald print:bg-white">5</div>
                        <h2 className="text-2xl font-bold text-navy">Payroll & Contractors</h2>
                    </div>
                    
                    <div className="ml-11 grid gap-3">
                        <CheckItem text="W-3 and W-2 Summaries: For all employees paid during the year." />
                        <CheckItem text="Form 940/941: Quarterly payroll tax filings." />
                        <CheckItem text="Contractor Payments: Total paid to freelancers (and copies of 1099s you filed)." />
                    </div>
                </section>

                <hr className="border-gray-100 print:border-gray-300" />

                {/* Section 6: Home Office */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="bg-emerald text-white font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 print:border print:border-emerald print:text-emerald print:bg-white">6</div>
                        <h2 className="text-2xl font-bold text-navy">Home Office Deduction</h2>
                    </div>
                    <p className="text-gray-600 mb-4 ml-11 text-sm italic">Only applicable if you have a dedicated space used exclusively for business.</p>
                    
                    <div className="ml-11 grid gap-4">
                        <div className="flex items-center gap-3">
                             <CheckSquare className="h-5 w-5 text-gray-300 flex-shrink-0" />
                             <span className="text-navy font-medium">Total Home Sq. Footage:</span>
                             <div className="border-b border-gray-400 w-32 h-6"></div>
                        </div>
                         <div className="flex items-center gap-3">
                             <CheckSquare className="h-5 w-5 text-gray-300 flex-shrink-0" />
                             <span className="text-navy font-medium">Office Area Sq. Footage:</span>
                             <div className="border-b border-gray-400 w-32 h-6"></div>
                        </div>
                        <CheckItem text="Mortgage Interest (Form 1098) or Rent Paid: Total for the year." />
                        <CheckItem text="Utilities: Total for electricity, gas, water, and trash." />
                        <CheckItem text="Homeowners Insurance: Total premium paid." />
                        <CheckItem text="Repairs/Maintenance: Expenses for the whole house vs. the office specifically." />
                    </div>
                </section>

                <hr className="border-gray-100 print:border-gray-300" />

                 {/* Section 7: Vehicle */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="bg-emerald text-white font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 print:border print:border-emerald print:text-emerald print:bg-white">7</div>
                        <h2 className="text-2xl font-bold text-navy">Vehicle Expenses</h2>
                    </div>
                    
                    <div className="ml-11 grid gap-4">
                         <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label className="text-sm font-semibold text-navy block mb-1">Make/Model/Year</label>
                                <div className="border-b border-gray-400 w-full h-8 bg-slate-50 print:bg-transparent"></div>
                            </div>
                            <div className="flex-1">
                                <label className="text-sm font-semibold text-navy block mb-1">Date Placed in Service</label>
                                <div className="border-b border-gray-400 w-full h-8 bg-slate-50 print:bg-transparent"></div>
                            </div>
                        </div>
                         <div className="flex flex-col sm:flex-row gap-4 mt-2">
                             <div className="flex items-center gap-3">
                                 <span className="text-navy font-medium">Total Miles Driven:</span>
                                 <div className="border-b border-gray-400 w-32 h-6"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                 <span className="text-navy font-medium">Business Miles:</span>
                                 <div className="border-b border-gray-400 w-32 h-6"></div>
                            </div>
                        </div>
                        <p className="text-xs text-red-500 italic mt-0">*Business miles must be supported by a log!</p>
                        <CheckItem text="Parking & Tolls: Business-related only." />
                    </div>
                </section>

                <hr className="border-gray-100 print:border-gray-300" />

                 {/* Section 8: Health */}
                 <section>
                    <div className="flex items-center mb-6">
                        <div className="bg-emerald text-white font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 print:border print:border-emerald print:text-emerald print:bg-white">8</div>
                        <h2 className="text-2xl font-bold text-navy">Health & Retirement</h2>
                    </div>
                    
                    <div className="ml-11 grid gap-3">
                        <CheckItem text="Health Insurance Premiums: Amount paid for you and your family (if self-employed)." />
                        <CheckItem text="Retirement Contributions: Records of contributions to SEP-IRA, Solo 401k, or Traditional IRA." />
                        <CheckItem text="HSA Contributions: Form 5498-SA showing contributions to Health Savings Accounts." />
                    </div>
                </section>

            </div>

             {/* Footer Promise */}
            <div className="bg-slate-50 p-8 md:p-12 border-t border-gray-200 print:bg-gray-50 print:mt-8">
                <div className="flex items-start gap-4">
                    <div className="hidden md:block print:hidden">
                         <Logo className="h-12 w-12" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-2">The Cynergy Promise</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Feeling overwhelmed by this list? That is exactly why we are here. If your books are messy or you are missing documents, don't panic. Schedule a "Catch-Up" Consultation with us, and we will help you reconstruct your financial year.
                        </p>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 pt-6 border-t border-gray-200">
                             <div>
                                <p className="font-bold text-navy">Cynergy Tax and Books</p>
                                <p className="text-emerald text-sm">Where Precision Bookkeeping Meets Strategic Tax Planning.</p>
                             </div>
                             <div className="mt-4 md:mt-0 flex items-center text-sm text-gray-500">
                                <Mail className="h-4 w-4 mr-2" />
                                taxquerycynergy@gmail.com
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const CheckItem: React.FC<{ text: string }> = ({ text }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div 
            onClick={() => setIsChecked(!isChecked)}
            className="flex items-start gap-3 group cursor-pointer print:cursor-default"
        >
            {/* Screen Checkbox */}
            <div className={`mt-1 h-5 w-5 rounded border flex items-center justify-center transition-all duration-200 flex-shrink-0 print:hidden
                ${isChecked 
                    ? 'bg-emerald border-emerald' 
                    : 'border-gray-300 bg-white group-hover:border-emerald'
                }`}
            >
                {isChecked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
            </div>

            {/* Print Checkbox */}
            {/* Unchecked: Empty Square. Checked: Filled Square (approximated with inner box). */}
            <div className={`hidden print:flex h-5 w-5 border border-gray-800 rounded mt-1 flex-shrink-0 items-center justify-center bg-white`}>
                {isChecked && <div className="h-3 w-3 bg-black" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }} />}
            </div>
            
            <span className={`text-gray-700 group-hover:text-navy transition-colors ${isChecked ? 'text-navy font-semibold' : ''}`}>
                {text}
            </span>
        </div>
    );
};

export default TaxChecklist;