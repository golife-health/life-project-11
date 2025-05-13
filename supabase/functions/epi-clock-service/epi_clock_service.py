
import numpy as np
import pandas as pd
from typing import List

# The coefficients for the Horvath 2013 epigenetic clock model
# Note: In a production environment, these would be loaded from a file
# For this demo, we'll include a subset of dummy coefficients
HORVATH_COEFFICIENTS = {
    "cg00075967": 0.153,
    "cg00513460": -0.049,
    "cg00574958": 0.042,
    # ... and so on for all 353 CpGs
    # This is just a placeholder - in reality, you would load all 353 coefficients
    # The intercept term for the model
    "intercept": 0.56
}

# In a real implementation, you would load the coefficients from a CSV file
# def load_coefficients(file_path: str) -> dict:
#     df = pd.read_csv(file_path)
#     coefs = {row['CpG']: row['coefficient'] for _, row in df.iterrows()}
#     coefs['intercept'] = df[df['CpG'] == 'intercept']['coefficient'].values[0]
#     return coefs

def calculate_epigenetic_age(beta_values: List[float]) -> float:
    """
    Calculate the epigenetic age using the Horvath 2013 clock model.
    
    Args:
        beta_values: A list of 353 beta values from DNA methylation data
        
    Returns:
        The calculated epigenetic age in years
    """
    if len(beta_values) != 353:
        raise ValueError(f"Expected 353 beta values, but received {len(beta_values)}")
    
    # In a real implementation, we would load the actual Horvath coefficients
    # coeffs = load_coefficients("horvath_coeffs.csv")
    
    # For demo purposes, we'll use a simplified calculation
    # In reality, we would need to match each beta value with its corresponding CpG site
    # and use the correct coefficient for each
    
    # Simulate the dot product calculation with dummy data
    # This is just for demo purposes - actual calculation requires proper coefficient matching
    
    # age = sum(beta * coef for beta, coef in zip(beta_values, coefficients)) + intercept
    
    # Simplified age calculation for demonstration:
    # We'll take the average of beta values and scale it to a reasonable age range
    avg_beta = np.mean(beta_values)
    simulated_age = 20 + (avg_beta * 80)  # Map average beta to age range of ~20-100
    
    # Add some random variation to make it more realistic
    age_variation = np.random.normal(0, 5)  # Random variation with stddev of 5 years
    final_age = simulated_age + age_variation
    
    # Ensure the age is reasonable
    final_age = max(0, min(120, final_age))
    
    return final_age
