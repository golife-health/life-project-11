
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// This simulates the Horvath 2013 clock model calculation
function calculateHorvathAge(betaValues: number[]): number {
  if (betaValues.length !== 353) {
    throw new Error("Expected 353 beta values");
  }
  
  // Simplified implementation of Horvath's clock
  // This mimics key characteristics of the model
  
  // Some key CpG sites that are most predictive in Horvath's model
  const keySites = [
    { index: 10, weight: 0.42 },
    { index: 28, weight: -0.38 },
    { index: 47, weight: 0.21 },
    { index: 85, weight: 0.31 },
    { index: 111, weight: -0.29 },
    { index: 162, weight: 0.26 },
    { index: 219, weight: 0.30 },
    { index: 257, weight: -0.35 },
    { index: 293, weight: 0.44 },
    { index: 331, weight: -0.23 },
  ];
  
  // Apply weights to key sites
  let weightedSum = 0;
  keySites.forEach(site => {
    weightedSum += betaValues[site.index] * site.weight;
  });
  
  // Calculate the mean methylation level (some sites are more important)
  const meanBeta = betaValues.reduce((sum, beta) => sum + beta, 0) / betaValues.length;
  
  // Apply the Horvath formula approximation
  const baseAge = 20;
  const meanFactor = 60; // How much the mean affects the age
  const weightFactor = 25; // How much the weighted sites affect the age
  
  let age = baseAge + (meanBeta * meanFactor) + (weightedSum * weightFactor);
  
  // Ensure age is in reasonable bounds
  age = Math.max(0, Math.min(100, age));
  
  // Add a small random factor to simulate biological variation
  const seed = betaValues.reduce((sum, beta) => sum + beta, 0);
  const variation = pseudoRandom(seed) * 3; // Up to 3 years variation
  
  return parseFloat((age + variation).toFixed(1));
}

// Simple deterministic random number generator
function pseudoRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  try {
    // Create supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
    );

    console.log("Processing epigenetic age calculation request");
    
    // Parse the request body
    const requestData = await req.json();
    const betaValues = requestData.betaValues;
    console.log(`Received ${betaValues?.length} beta values`);

    // Validate input
    if (!betaValues || !Array.isArray(betaValues)) {
      console.error("Invalid input: Expected beta values array");
      return new Response(
        JSON.stringify({ error: "Invalid input: Expected beta values array" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    if (betaValues.length !== 353) {
      console.error(`Invalid input: Expected 353 beta values, got ${betaValues.length}`);
      return new Response(
        JSON.stringify({ error: `Invalid input: Expected 353 beta values, got ${betaValues.length}` }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    // Validate all values are in range [0,1]
    if (betaValues.some(v => typeof v !== 'number' || v < 0 || v > 1 || isNaN(v))) {
      console.error("Invalid input: Beta values must be numbers between 0 and 1");
      return new Response(
        JSON.stringify({ error: "Invalid input: Beta values must be numbers between 0 and 1" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    // Calculate epigenetic age using our Horvath model approximation
    console.log("Calculating epigenetic age...");
    const epiAge = calculateHorvathAge(betaValues);
    console.log(`Calculated epigenetic age: ${epiAge}`);

    // Return the result
    return new Response(
      JSON.stringify({ epiAge }),
      { 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json" 
        }, 
        status: 200 
      }
    );
  } catch (error) {
    console.error("Error processing request:", error.message || error);
    return new Response(
      JSON.stringify({ 
        error: "Internal server error", 
        details: error.message || "Unknown error" 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json" 
        }, 
        status: 500 
      }
    );
  }
});
