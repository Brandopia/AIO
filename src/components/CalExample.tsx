import React from "react";
import { CalButton } from "@/components/ui/cal-button";
import { CAL_CONFIG } from "@/config/cal-config";

// Example component showing how to use CalButton
const CalExample = () => {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Cal.com Button Examples</h2>
      
      {/* Basic usage - uses default config */}
      <CalButton className="bg-green-600 hover:bg-green-700">
        Book Consultation
      </CalButton>
      
      {/* With custom styling */}
      <CalButton 
        size="lg" 
        className="bg-blue-600 hover:bg-blue-700"
      >
        Schedule Meeting
      </CalButton>
      
      {/* With custom config for this specific button */}
      <CalButton 
        customConfig={{
          eventType: "quick-chat",
          username: "different-username"
        }}
        className="bg-purple-600 hover:bg-purple-700"
      >
        Quick Chat
      </CalButton>
      
      {/* With onClick handler */}
      <CalButton 
        onClick={() => console.log("Button clicked!")}
        className="bg-orange-600 hover:bg-orange-700"
      >
        Book with Custom Action
      </CalButton>
      
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold">Current Configuration:</h3>
        <p>Username: {CAL_CONFIG.username}</p>
        <p>Event Type: {CAL_CONFIG.eventType}</p>
        <p>Full Link: {CAL_CONFIG.fullLink}</p>
      </div>
    </div>
  );
};

export default CalExample; 