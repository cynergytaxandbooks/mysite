import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Legal & Privacy</h1>
          <p className="text-gray-300">Transparency is the foundation of our client relationships.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          
          {/* Privacy Policy Section */}
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 bg-emerald/10 rounded-full flex items-center justify-center mr-4">
                <Shield className="h-5 w-5 text-emerald" />
              </div>
              <h2 className="text-2xl font-bold text-navy">Privacy Policy</h2>
            </div>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
                We collect information necessary to provide tax and bookkeeping services (Personal ID, Financial Data). Your data is used exclusively for filing returns and reporting. We utilize 256-bit SSL encryption and do not sell your data.
              </p>
              <p>
                We are committed to maintaining the confidentiality and security of your personal information. Access to your data is restricted to authorized personnel who need it to perform their job duties.
              </p>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Disclaimer Section */}
          <div className="p-8 md:p-12 bg-gray-50">
            <div className="flex items-center mb-6">
               <div className="h-10 w-10 bg-burntOrange/10 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="h-5 w-5 text-burntOrange" />
               </div>
               <h2 className="text-2xl font-bold text-navy">Disclaimer</h2>
            </div>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
                Content provided on this website is for informational purposes only and does not constitute professional advice. No Client Relationship is formed until an Engagement Letter is signed. 
              </p>
              <p>
                Cynergy Tax and Books is not responsible for errors or omissions. Laws and regulations change frequently, and their application can vary widely based on the specific facts and circumstances involved. You should consult with a professional advisor familiar with your particular factual situation for advice concerning specific tax or other matters.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Legal;