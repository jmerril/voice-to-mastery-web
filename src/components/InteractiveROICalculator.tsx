
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Users, Clock } from "lucide-react";

const InteractiveROICalculator = () => {
  const [inputs, setInputs] = useState({
    employees: 100,
    averageSalary: 75000,
    trainingHoursPerYear: 40,
    currentTrainingCostPerHour: 150,
    productivityLossHours: 160, // Time to competency
    errorCostPerYear: 50000,
    complianceRiskCost: 25000
  });

  const [results, setResults] = useState({
    currentAnnualCost: 0,
    zyglioAnnualCost: 0,
    annualSavings: 0,
    productivityGains: 0,
    riskReduction: 0,
    totalAnnualValue: 0,
    roiPercentage: 0,
    paybackMonths: 0
  });

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const {
      employees,
      averageSalary,
      trainingHoursPerYear,
      currentTrainingCostPerHour,
      productivityLossHours,
      errorCostPerYear,
      complianceRiskCost
    } = inputs;

    // Current training costs
    const currentTrainingCost = employees * trainingHoursPerYear * currentTrainingCostPerHour;
    const productivityLossCost = employees * (productivityLossHours / 2080) * averageSalary; // 2080 = work hours per year
    const currentAnnualCost = currentTrainingCost + productivityLossCost + errorCostPerYear + complianceRiskCost;

    // Zyglio costs (estimated at 30% of current training costs)
    const zyglioAnnualCost = currentTrainingCost * 0.3;

    // Savings calculations
    const trainingSavings = currentTrainingCost * 0.7; // 70% reduction
    const productivityGains = productivityLossCost * 0.75; // 4x faster = 75% time saved
    const riskReduction = (errorCostPerYear + complianceRiskCost) * 0.6; // 60% reduction

    const totalAnnualValue = trainingSavings + productivityGains + riskReduction;
    const annualSavings = totalAnnualValue - zyglioAnnualCost;
    const roiPercentage = (annualSavings / zyglioAnnualCost) * 100;
    const paybackMonths = (zyglioAnnualCost / (annualSavings / 12));

    setResults({
      currentAnnualCost,
      zyglioAnnualCost,
      annualSavings,
      productivityGains,
      riskReduction,
      totalAnnualValue,
      roiPercentage,
      paybackMonths
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
            <Calculator className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-3xl">Interactive ROI Calculator</CardTitle>
          <CardDescription className="text-lg">
            Enter your company's data to see your personalized ROI projection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Your Company Data</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="employees">Number of Employees</Label>
                  <Input
                    id="employees"
                    type="number"
                    value={inputs.employees}
                    onChange={(e) => handleInputChange('employees', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="averageSalary">Average Employee Salary ($)</Label>
                  <Input
                    id="averageSalary"
                    type="number"
                    value={inputs.averageSalary}
                    onChange={(e) => handleInputChange('averageSalary', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="trainingHours">Training Hours Per Employee/Year</Label>
                  <Input
                    id="trainingHours"
                    type="number"
                    value={inputs.trainingHoursPerYear}
                    onChange={(e) => handleInputChange('trainingHoursPerYear', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="trainingCost">Current Training Cost Per Hour ($)</Label>
                  <Input
                    id="trainingCost"
                    type="number"
                    value={inputs.currentTrainingCostPerHour}
                    onChange={(e) => handleInputChange('currentTrainingCostPerHour', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="productivityLoss">Hours to Employee Competency</Label>
                  <Input
                    id="productivityLoss"
                    type="number"
                    value={inputs.productivityLossHours}
                    onChange={(e) => handleInputChange('productivityLossHours', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="errorCost">Annual Cost of Errors/Mistakes ($)</Label>
                  <Input
                    id="errorCost"
                    type="number"
                    value={inputs.errorCostPerYear}
                    onChange={(e) => handleInputChange('errorCostPerYear', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="complianceRisk">Annual Compliance Risk Cost ($)</Label>
                  <Input
                    id="complianceRisk"
                    type="number"
                    value={inputs.complianceRiskCost}
                    onChange={(e) => handleInputChange('complianceRiskCost', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Your ROI Projection</h3>
              
              <div className="space-y-4">
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-5 w-5 text-red-600 mr-2" />
                      <span className="font-medium text-red-800">Current Annual Cost</span>
                    </div>
                    <div className="text-2xl font-bold text-red-600">
                      {formatCurrency(results.currentAnnualCost)}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-medium text-blue-800">Zyglio Annual Cost</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {formatCurrency(results.zyglioAnnualCost)}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-medium text-green-800">Annual Savings</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(results.annualSavings)}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-purple-600">
                        {Math.round(results.roiPercentage)}%
                      </div>
                      <div className="text-sm text-purple-800">ROI</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-orange-50 border-orange-200">
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl font-bold text-orange-600">
                        {Math.round(results.paybackMonths)}
                      </div>
                      <div className="text-sm text-orange-800">Months Payback</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Training Cost Savings:</span>
                    <span className="font-medium">{formatCurrency(results.totalAnnualValue - results.productivityGains - results.riskReduction)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Productivity Gains:</span>
                    <span className="font-medium">{formatCurrency(results.productivityGains)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk Reduction:</span>
                    <span className="font-medium">{formatCurrency(results.riskReduction)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-50 rounded-lg">
            <h4 className="font-semibold mb-2">About This Calculation</h4>
            <p className="text-sm text-slate-600 mb-4">
              This calculator uses industry benchmarks and Zyglio's proven results to project your ROI. 
              Actual results may vary based on your specific implementation and use case.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <div>• Training cost reduction: 70% (industry average with Zyglio)</div>
              <div>• Productivity improvement: 4x faster competency development</div>
              <div>• Risk reduction: 60% fewer errors and compliance issues</div>
              <div>• Zyglio cost estimated at 30% of current training expenses</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveROICalculator;
