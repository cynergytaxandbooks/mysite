import React, { useState, useRef } from 'react';
import { Upload, Wand2, Download, Image as ImageIcon, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import { GoogleGenAI } from "@google/genai";

const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setGeneratedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setIsLoading(true);
    setError(null);

    try {
      // Initialize Gemini
      // Note: In a production app, these calls should be proxied through a backend to keep the key secure.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Extract base64 data (remove "data:image/jpeg;base64," prefix)
      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.substring(selectedImage.indexOf(':') + 1, selectedImage.indexOf(';'));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Data,
              },
            },
            {
              text: prompt,
            },
          ],
        },
      });

      let foundImage = false;
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const resultBase64 = part.inlineData.data;
            const resultMimeType = part.inlineData.mimeType || 'image/png'; // Default to png if not specified
            setGeneratedImage(`data:${resultMimeType};base64,${resultBase64}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        setError("The model processed the request but did not return an image. Please try a different prompt.");
      }

    } catch (err: any) {
      console.error("Gemini API Error:", err);
      setError("Failed to generate image. " + (err.message || "Please check your API key and try again."));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            AI Design Studio
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Enhance your documents, receipts, or marketing materials instantly using our advanced AI tools.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col md:flex-row">
          
          {/* Controls Section */}
          <div className="w-full md:w-1/3 p-8 border-r border-gray-100 bg-white">
            <div className="mb-8">
              <label className="block text-sm font-bold text-navy mb-2">1. Upload Image</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-emerald hover:bg-emerald/5 transition-all"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">Click to upload</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-navy mb-2">2. Edit Instruction</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., 'Make the background white', 'Add a retro filter', 'Enhance the text clarity'..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald resize-none text-sm"
              />
            </div>

            <Button 
              onClick={handleGenerate} 
              disabled={!selectedImage || !prompt || isLoading}
              className={`w-full ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4 mr-2" />
                  Generate Edit
                </>
              )}
            </Button>
            
            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                {error}
              </div>
            )}
          </div>

          {/* Preview Section */}
          <div className="w-full md:w-2/3 bg-gray-50 p-8 flex flex-col items-center justify-center relative">
            {!selectedImage ? (
              <div className="text-center text-gray-400">
                <ImageIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Upload an image to get started</p>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col gap-6">
                
                {/* Original */}
                {!generatedImage && (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative max-w-full max-h-[500px] shadow-lg rounded-lg overflow-hidden">
                      <img src={selectedImage} alt="Original" className="max-w-full max-h-full object-contain" />
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Original</div>
                    </div>
                  </div>
                )}

                {/* Result */}
                {generatedImage && (
                  <div className="flex-1 flex flex-col items-center justify-center animate-in fade-in duration-500">
                    <div className="relative max-w-full max-h-[600px] shadow-2xl rounded-lg overflow-hidden border-4 border-emerald">
                      <img src={generatedImage} alt="Generated" className="max-w-full max-h-full object-contain" />
                      <div className="absolute top-2 left-2 bg-emerald text-white text-xs px-2 py-1 rounded font-bold">AI Edited</div>
                      <a 
                        href={generatedImage} 
                        download="cynergy-edited.png"
                        className="absolute bottom-4 right-4 bg-white text-navy px-4 py-2 rounded-full shadow-lg font-bold text-sm flex items-center hover:bg-gray-100 transition-colors"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;