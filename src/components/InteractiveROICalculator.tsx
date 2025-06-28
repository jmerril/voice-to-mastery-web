
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, DollarSign, Users, Clock, Zap, Brain, Target, Award, BookOpen, Banknote, GraduationCap, BarChart3 } from "lucide-react";

const InteractiveROICalculator = () => {
  const [inputs, setInputs] = useState({
    employees: 100,
    averageSalary: 75000,
    trainingHoursPerYear: 40,
    currentTrainingCostPerHour: 150,
    productivityLossHours: 160,
    errorCostPerYear: 50000,
    turnoverRate: 15,
    educationMonetizationValue: 250000,
    simulationLicensingValue: 180000,
    trainingServicesRevenueValue: 300000,
    certificationProgramRevenueValue: 150000
  });

  const [results, setResults] = useState({
    currentAnnualCost: 0,
    zyglioAnnualCost: 0,
    annualSavings: 0,
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
      turnoverRate,
      educationMonetizationValue,
      simulationLicensingValue,
      trainingServicesRevenueValue,
      certificationProgramRevenueValue
    } = inputs;

    // Current costs
    const currentTrainingCost = employees * trainingHoursPerYear * currentTrainingCostPerHour;
    const productivityLossCost = employees * (productivityLossHours / 2080) * averageSalary;
    const currentAnnualCost = currentTrainingCost + productivityLossCost + errorCostPerYear;

    // Zyglio costs (30% of current training costs)
    const zyglioAnnualCost = currentTrainingCost * 0.3;

    // Savings calculations
    const trainingSavings = currentTrainingCost * 0.7; // 70% reduction
    const productivityGains = productivityLossCost * 0.75; // 75% improvement
    const riskReduction = errorCostPerYear * 0.6; // 60% reduction
    const educationMonetizationBenefits = educationMonetizationValue * 0.6;
    const simulationLicensingBenefits = simulationLicensingValue * 0.7;
    const trainingServicesRevenueBenefits = trainingServicesRevenueValue * 0.65;
    const certificationProgramRevenueBenefits = certificationProgramRevenueValue * 0.75;

    const totalAnnualValue = trainingSavings + productivityGains + riskReduction + 
      educationMonetizationBenefits + simulationLicensingBenefits + 
      trainingServicesRevenueBenefits + certificationProgramRevenueBenefits;
    
    const annualSavings = totalAnnualValue - zyglioAnnualCost;
    const roiPercentage = (annualSavings / zyglioAnnualCost) * 100;
    const paybackMonths = (zyglioAnnualCost / (annualSavings / 12));

    setResults({
      currentAnnualCost,
      zyglioAnnualCost,
      annualSavings,
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

  const inputSections = [
    {
      title: "Organization",
      icon: <Users className="h-4 w-4" />,
      fields: [
        { key: 'employees', label: 'Employees', placeholder: '100' },
        { key: 'averageSalary', label: 'Avg Salary ($)', placeholder: '75,000' }
      ]
    },
    {
      title: "Training",
      icon: <Clock className="h-4 w-4" />,
      fields: [
        { key: 'trainingHoursPerYear', label: 'Hours/Year', placeholder: '40' },
        { key: 'currentTrainingCostPerHour', label: 'Cost/Hour ($)', placeholder: '150' }
      ]
    },
    {
      title: "Operations",
      icon: <BarChart3 className="h-4 w-4" />,
      fields: [
        { key: 'productivityLossHours', label: 'Hours to Competency', placeholder: '160' },
        { key: 'errorCostPerYear', label: 'Annual Error Cost ($)', placeholder: '50,000' }
      ]
    },
    {
      title: "Revenue Opportunities",
      icon: <Banknote className="h-4 w-4" />,
      fields: [
        { key: 'educationMonetizationValue', label: 'Education Revenue ($)', placeholder: '250,000' },
        { key: 'trainingServicesRevenueValue', label: 'Training Services ($)', placeholder: '300,000' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Compact Input Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {inputSections.map((section, index) => (
          <Card key={index} className="border-slate-200 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center mr-3">
                  <div className="text-blue-600">{section.icon}</div>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{section.title}</h3>
              </div>
              
              <div className="space-y-3">
                {section.fields.map((field) => (
                  <div key={field.key} className="space-y-1">
                    <Label htmlFor={field.key} className="text-slate-700 text-xs font-medium">
                      {field.label}
                    </Label>
                    <Input
                      id={field.key}
                      type="number"
                      value={inputs[field.key as keyof typeof inputs]}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className="bg-white border-slate-200 text-slate-900 h-9 text-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Compact Results */}
      <Card className="border-2 border-blue-200 shadow-lg bg-gradient-to-br from-blue-50 to-white">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center justify-center">
              <Calculator className="h-5 w-5 mr-2 text-blue-600" />
              Your ROI Results
            </h3>
          </div>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-blue-100">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {Math.round(results.roiPercentage)}%
              </div>
              <div className="text-xs text-slate-600">ROI</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {Math.round(results.paybackMonths)}
              </div>
              <div className="text-xs text-slate-600">Months</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-blue-100 lg:col-span-2">
              <div className="text-xl font-bold text-slate-900 mb-1">
                {formatCurrency(results.annualSavings)}
              </div>
              <div className="text-xs text-slate-600">Net Annual Value</div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-100">
              <span className="text-red-800 font-medium">Current Burden</span>
              <span className="text-red-700 font-bold">{formatCurrency(results.currentAnnualCost)}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-100">
              <span className="text-blue-800 font-medium">Zyglio Investment</span>
              <span className="text-blue-700 font-bold">{formatCurrency(results.zyglioAnnualCost)}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-100">
              <span className="text-green-800 font-medium">Total Value Created</span>
              <span className="text-green-700 font-bold">{formatCurrency(results.totalAnnualValue)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Methodology Note */}
      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
        <h4 className="font-bold text-slate-900 text-sm mb-2">Methodology</h4>
        <p className="text-slate-600 text-xs leading-relaxed mb-3">
          Results based on industry benchmarks and Zyglio client outcomes. Key assumptions: 70% training cost reduction, 
          4x faster competency, 60% error reduction, revenue opportunities at 60-75% realization rates.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="text-center">
            <div className="font-semibold text-slate-900">70%</div>
            <div className="text-slate-500">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-slate-900">4x</div>
            <div className="text-slate-500">Faster Training</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-slate-900">60%</div>
            <div className="text-slate-500">Fewer Errors</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-slate-900">65%</div>
            <div className="text-slate-500">Revenue Potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveROICalculator;
