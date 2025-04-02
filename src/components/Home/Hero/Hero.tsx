"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const Hero = () => {
  const [promt, setPromt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!promt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setLoading(true);
    const options = {
        method: 'POST',
        url: 'https://ai-text-to-image-generator-api-ai-image-generator.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php',
        headers: {
          'x-rapidapi-key': '2c3fda0ff6msh6926e8844972ba4p133430jsn84ae5e16bfba',
          'x-rapidapi-host': 'ai-text-to-image-generator-api-ai-image-generator.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          prompt: promt,
          style_id: 2,
          size: '1-1'
        }
      };
      

    try {
        const response = await axios.request(options);
        console.log(response)
      setImage(response.data.final_result[0].thumb
      );
      toast.success("Image Generated Successfully");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 
          error.response?.data?.error?.message || 
          "Failed to generate image";
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!image) return;
    const link = document.createElement("a");
    link.target="_blank";
    link.href = image;
    link.download = `generated-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-[95%] min-h-screen relative mx-auto mt-[20vh]">
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1 data-aos="fade-up" className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-cyan-500 bg-clip-text text-transparent">
          Create Beautiful Images with <br />
          Artificial Intelligence
        </h1>

        <div className="flex items-center justify-center mt-10">
          <p 
          data-aos="fade-up"
          data-aos-dely="100"
          
          className="px-4 py-2 text-white">
            Get Started with our AI-powered image generator Tools
          </p>
        </div>

        {/* Prompt Input */}
        <div className="h-11 md:h-16 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between">
          <input
            className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            type="text"
            placeholder="Describe your image..."
            value={promt}
            onChange={(e) => setPromt(e.target.value)}
            
          />
          <Button onClick={generateImage} disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </Button>
        </div>

        {/* Popular Tags */}
        <div className="flex items-center mt-6 space-x-4 flex-wrap space-y-3">
          <p>Popular Tags:</p>
          {["Creative", "Hyperreality", "Steampunk", "Animation", "Business"].map((tag) => (
            <Button 
              key={tag}
              variant="secondary" 
              className="m-1"
              onClick={() => setPromt(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-8 flex flex-col items-center">
            <Loader className="animate-spin h-8 w-8 text-white" />
            <p className="mt-2 text-gray-300">Generating your image...</p>
          </div>
        )}

        {/* Generated Image */}
        {image && (
          <div className="my-8 flex flex-col items-center">
            <div className="relative group">
              <img
                src={image}
                alt="Generated content"
                className="max-w-full h-[500px] rounded-lg "
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <Button 
                  onClick={handleDownload}
                  variant="secondary"
                  className="opacity-100"
                >
                  Download Image
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;