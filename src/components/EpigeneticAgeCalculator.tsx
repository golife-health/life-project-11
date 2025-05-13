
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from '@/hooks/use-toast';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const EpigeneticAgeCalculator = () => {
  const [betaValues, setBetaValues] = useState('');
  const [epiAge, setEpiAge] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    setError(null);
    setEpiAge(null);

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
      // Call the edge function
      const { data, error } = await supabase.functions.invoke('epi-clock-service', {
        body: { betaValues: values }
      });

      if (error) throw new Error(error.message);

      // Set the result
      setEpiAge(data.epiAge);
      toast({
        title: "Calculation Complete",
        description: "Your epigenetic age has been calculated successfully.",
      });
    } catch (err) {
      console.error('Error calculating epigenetic age:', err);
      setError('Failed to calculate epigenetic age. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleData = () => {
    // Generate mock data - 353 random values between 0 and 1
    const mockData = Array(353)
      .fill(0)
      .map(() => Math.random().toFixed(6))
      .join(', ');
    
    setBetaValues(mockData);
  };

  return (
    <div className="space-y-6 p-6 bg-card border rounded-lg shadow-sm">
      <div className="space-y-2">
        <Label htmlFor="beta-values">Enter 353 CpG Beta Values (comma separated)</Label>
        <Textarea
          id="beta-values"
          value={betaValues}
          onChange={(e) => setBetaValues(e.target.value)}
          placeholder="0.78, 0.23, 0.56, ..."
          className="min-h-[150px] font-mono text-sm"
        />
        <p className="text-sm text-muted-foreground">
          Enter 353 comma-separated beta values from Illumina methylation array
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={handleCalculate} disabled={isLoading}>
          {isLoading ? 'Calculating...' : 'Calculate Epigenetic Age'}
        </Button>
        <Button variant="outline" onClick={handleExampleData} type="button">
          Load Example Data
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {epiAge !== null && (
        <div className="p-4 bg-muted rounded-md">
          <h3 className="text-xl font-medium mb-1">Results</h3>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Epigenetic Age (Horvath 2013):</span>
            <span className="text-2xl font-bold">{epiAge.toFixed(1)} years</span>
          </div>
        </div>
      )}

      <div className="text-sm text-muted-foreground mt-6">
        <p>The epigenetic clock is based on the Horvath 2013 algorithm.</p>
        <p>This calculation requires data from an Illumina methylation array (e.g., 450k or EPIC).</p>
      </div>
    </div>
  );
};

export default EpigeneticAgeCalculator;
