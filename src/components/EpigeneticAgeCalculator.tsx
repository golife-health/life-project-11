
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, CheckCircle, Info } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EpigeneticAgeCalculator = () => {
  const [betaValues, setBetaValues] = useState('');
  const [epiAge, setEpiAge] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  const handleCalculate = async () => {
    setError(null);
    setEpiAge(null);
    setDebugInfo(null);

    // Basic validation - check if input is provided
    if (!betaValues.trim()) {
      setError('Please provide CpG beta values');
      return;
    }

    // Parse the beta values
    const values = betaValues
      .split(',')
      .map(val => val.trim())
      .filter(val => val !== '')
      .map(val => parseFloat(val));

    // Validate the number of beta values
    if (values.length !== 353) {
      setError(`Expected 353 beta values, but received ${values.length}`);
      return;
    }

    // Check if all values are valid numbers
    if (values.some(isNaN)) {
      setError('All values must be valid numbers');
      return;
    }

    // Check if values are in the valid range [0, 1]
    if (values.some(v => v < 0 || v > 1)) {
      setError('Beta values should be between 0 and 1');
      return;
    }

    setIsLoading(true);

    try {
      console.log("Calling Supabase edge function...");
      
      // Call the edge function
      const { data, error: fnError } = await supabase.functions.invoke('epi-clock-service', {
        body: { betaValues: values }
      });

      console.log("Edge function response:", data, fnError);

      if (fnError) {
        throw new Error(fnError.message || "Error calling edge function");
      }

      if (!data || data.error) {
        throw new Error(data?.error || "No data returned from function");
      }

      // Set the result
      setEpiAge(data.epiAge);
      
      toast({
        title: "Calculation Complete",
        description: "Your epigenetic age has been calculated successfully.",
      });
    } catch (err: any) {
      console.error('Error calculating epigenetic age:', err);
      setError('Failed to calculate epigenetic age. Please try again.');
      setDebugInfo(err.message || "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleData = () => {
    // Generate more realistic mock data - 353 random values between 0 and 1
    // with a slight skew to produce more realistic ages
    const mockData = Array(353)
      .fill(0)
      .map((_, i) => {
        // Create some correlation between indices to simulate real methylation patterns
        const baseValue = 0.3 + (Math.random() * 0.4); // Values mainly between 0.3 and 0.7
        return baseValue.toFixed(6);
      })
      .join(', ');
    
    setBetaValues(mockData);
    toast({
      title: "Example Data Loaded",
      description: "353 simulated CpG beta values have been loaded.",
    });
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">DNA Methylation Analysis</CardTitle>
        <CardDescription>
          Submit 353 CpG beta values to calculate your epigenetic age using the Horvath 2013 clock model
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="beta-values" className="text-md font-medium">
            Enter 353 CpG Beta Values (comma separated)
          </Label>
          <Textarea
            id="beta-values"
            value={betaValues}
            onChange={(e) => setBetaValues(e.target.value)}
            placeholder="0.78, 0.23, 0.56, ..."
            className="min-h-[180px] font-mono text-sm"
          />
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Info className="h-4 w-4" />
            Methylation values from an Illumina array (range 0-1)
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={handleCalculate} 
            disabled={isLoading}
            className="flex gap-2 items-center"
          >
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            {isLoading ? 'Calculating...' : 'Calculate Epigenetic Age'}
          </Button>
          <Button variant="outline" onClick={handleExampleData} type="button">
            Load Example Data
          </Button>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
            {debugInfo && (
              <div className="mt-2 p-2 bg-muted rounded text-xs font-mono overflow-auto">
                Error details: {debugInfo}
              </div>
            )}
          </Alert>
        )}

        {epiAge !== null && (
          <Alert variant="default" className="border-green-200 bg-green-50 dark:bg-green-900/20">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-800 dark:text-green-300">Results</AlertTitle>
            <AlertDescription className="flex flex-col gap-2">
              <div className="flex justify-between items-center mt-2">
                <span className="text-muted-foreground">Epigenetic Age (Horvath 2013):</span>
                <span className="text-3xl font-bold">{epiAge} years</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                This is an estimate based on the methylation patterns in your DNA. 
                The biological interpretation should be performed by healthcare professionals.
              </p>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>

      <CardFooter className="flex flex-col text-sm text-muted-foreground border-t pt-4">
        <p>The epigenetic clock is based on the Horvath 2013 algorithm that analyzes DNA methylation patterns.</p>
        <p>For clinical interpretation, please consult with a healthcare professional.</p>
      </CardFooter>
    </Card>
  );
};

export default EpigeneticAgeCalculator;
