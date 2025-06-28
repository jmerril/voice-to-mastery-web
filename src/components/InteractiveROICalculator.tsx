
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
      icon: <Users className="h-5 w-5" />,
      color: "from-blue-500 to-indigo-600",
      fields: [
        { key: 'employees', label: 'Employees', placeholder: '100' },
        { key: 'averageSalary', label: 'Avg Salary ($)', placeholder: '75,000' }
      ]
    },
    {
      title: "Training",
      icon: <Clock className="h-5 w-5" />,
      color: "from-emerald-500 to-teal-600",
      fields: [
        { key: 'trainingHoursPerYear', label: 'Hours/Year', placeholder: '40' },
        { key: 'currentTrainingCostPerHour', label: 'Cost/Hour ($)', placeholder: '150' }
      ]
    },
    {
      title: "Operations",
      icon: <BarChart3 className="h-5 w-5" />,
      color: "from-purple-500 to-violet-600",
      fields: [
        { key: 'productivityLossHours', label: 'Hours to Competency', placeholder: '160' },
        { key: 'errorCostPerYear', label: 'Annual Error Cost ($)', placeholder: '50,000' }
      ]
    },
    {
      title: "Revenue Opportunities",
      icon: <Banknote className="h-5 w-5" />,
      color: "from-orange-500 to-red-600",
      fields: [
        { key: 'educationMonetizationValue', label: 'Education Revenue ($)', placeholder: '250,000' },
        { key: 'trainingServicesRevenueValue', label: 'Training Services ($)', placeholder: '300,000' }
      ]
    }
  ];

  return (
    <div className="space-y-10">
      {/* Enhanced Input Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {inputSections.map((section, index) => (
          <Card key={index} className="border-3 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-slate-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                  <div className="text-white">{section.icon}</div>
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{section.title}</h3>
              </div>
              
              <div className="space-y-4">
                {section.fields.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <Label htmlFor={field.key} className="text-slate-700 font-semibold">
                      {field.label}
                    </Label>
                    <Input
                      id={field.key}
                      type="number"
                      value={inputs[field.key as keyof typeof inputs]}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className="bg-white border-2 border-slate-200 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl shadow-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Results */}
      <Card className="border-4 border-blue-300 shadow-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center">
              <Calculator className="h-6 w-6 mr-3 text-blue-600" />
              Your ROI Results
            </h3>
          </div>
          
          {/* Enhanced Key Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-center shadow-xl border-3 border-white transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black text-white mb-2 drop-shadow-lg">
                {Math.round(results.roiPercentage)}%
              </div>
              <div className="text-white/90 font-semibold">ROI</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-center shadow-xl border-3 border-white transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black text-white mb-2 drop-shadow-lg">
                {Math.round(results.paybackMonths)}
              </div>
              <div className="text-white/90 font-semibold">Months</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-6 text-center shadow-xl border-3 border-white lg:col-span-2 transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl font-black text-white mb-2 drop-shadow-lg">
                {formatCurrency(results.annualSavings)}
              </div>
              <div className="text-white/90 font-semibold">Net Annual Value</div>
            </div>
          </div>

          {/* Enhanced Cost Breakdown */}
          <div className="space-y-4">
            <div className="flex justify-between items-center p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl border-3 border-red-200 shadow-lg">
              <span className="text-red-800 font-bold text-lg">Current Burden</span>
              <span className="text-red-700 font-black text-xl">{formatCurrency(results.currentAnnualCost)}</span>
            </div>
            
            <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-3 border-blue-200 shadow-lg">
              <span className="text-blue-800 font-bold text-lg">Zyglio Investment</span>
              <span className="text-blue-700 font-black text-xl">{formatCurrency(results.zyglioAnnualCost)}</span>
            </div>
            
            <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border-3 border-green-200 shadow-lg">
              <span className="text-green-800 font-bold text-lg">Total Value Created</span>
              <span className="text-green-700 font-black text-xl">{formatCurrency(results.totalAnnualValue)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Methodology Note */}
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 border-3 border-slate-300 shadow-xl">
        <h4 className="font-bold text-slate-900 text-xl mb-4">Methodology</h4>
        <p className="text-slate-700 leading-relaxed mb-6 font-medium">
          Results based on industry benchmarks and Zyglio client outcomes. Key assumptions: 70% training cost reduction, 
          4x faster competency, 60% error reduction, revenue opportunities at 60-75% realization rates.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-xl p-4 shadow-md border-2 border-slate-200">
            <div className="font-black text-slate-900 text-2xl mb-1">70%</div>
            <div className="text-slate-600 font-semibold text-sm">Cost Reduction</div>
          </div>
          <div className="text-center bg-white rounded-xl p-4 shadow-md border-2 border-slate-200">
            <div className="font-black text-slate-900 text-2xl mb-1">4x</div>
            <div className="text-slate-600 font-semibold text-sm">Faster Training</div>
          </div>
          <div className="text-center bg-white rounded-xl p-4 shadow-md border-2 border-slate-200">
            <div className="font-black text-slate-900 text-2xl mb-1">60%</div>
            <div className="text-slate-600 font-semibold text-sm">Fewer Errors</div>
          </div>
          <div className="text-center bg-white rounded-xl p-4 shadow-md border-2 border-slate-200">
            <div className="font-black text-slate-900 text-2xl mb-1">65%</div>
            <div className="text-slate-600 font-semibold text-sm">Revenue Potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveROICalculator;
