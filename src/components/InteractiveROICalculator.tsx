import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Users, Clock, UserCheck, Megaphone } from "lucide-react";

const InteractiveROICalculator = () => {
  const [inputs, setInputs] = useState({
    employees: 100,
    averageSalary: 75000,
    trainingHoursPerYear: 40,
    currentTrainingCostPerHour: 150,
    productivityLossHours: 160, // Time to competency
    errorCostPerYear: 50000,
    complianceRiskCost: 25000,
    supervisorCostPerHour: 100,
    supervisorHoursPerTraining: 8,
    materialWastageCostPerEmployee: 500,
    recruitmentCostPerEmployee: 15000,
    turnoverRate: 15, // percentage
    brandingMarketingBenefit: 100000, // annual benefit
    competitiveAdvantageValue: 200000, // annual competitive advantage value
    aiIntegrationValue: 150000, // annual AI integration value
    employeeAgilityValue: 120000, // annual employee agility value
    tribalKnowledgeValue: 180000 // annual tribal knowledge capture value
  });

  const [results, setResults] = useState({
    currentAnnualCost: 0,
    zyglioAnnualCost: 0,
    annualSavings: 0,
    productivityGains: 0,
    riskReduction: 0,
    supervisorSavings: 0,
    materialSavings: 0,
    recruitmentSavings: 0,
    brandingBenefits: 0,
    competitiveAdvantage: 0,
    aiIntegrationBenefits: 0,
    employeeAgilityBenefits: 0,
    tribalKnowledgeBenefits: 0,
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
      complianceRiskCost,
      supervisorCostPerHour,
      supervisorHoursPerTraining,
      materialWastageCostPerEmployee,
      recruitmentCostPerEmployee,
      turnoverRate,
      brandingMarketingBenefit,
      competitiveAdvantageValue,
      aiIntegrationValue,
      employeeAgilityValue,
      tribalKnowledgeValue
    } = inputs;

    // Current training costs
    const currentTrainingCost = employees * trainingHoursPerYear * currentTrainingCostPerHour;
    const productivityLossCost = employees * (productivityLossHours / 2080) * averageSalary; // 2080 = work hours per year
    const supervisorCost = employees * (trainingHoursPerYear / 8) * supervisorHoursPerTraining * supervisorCostPerHour;
    const materialWastageCost = employees * materialWastageCostPerEmployee;
    const currentAnnualCost = currentTrainingCost + productivityLossCost + errorCostPerYear + complianceRiskCost + supervisorCost + materialWastageCost;

    // Zyglio costs (estimated at 30% of current training costs)
    const zyglioAnnualCost = currentTrainingCost * 0.3;

    // Savings calculations
    const trainingSavings = currentTrainingCost * 0.7; // 70% reduction
    const productivityGains = productivityLossCost * 0.75; // 4x faster = 75% time saved
    const riskReduction = (errorCostPerYear + complianceRiskCost) * 0.6; // 60% reduction
    const supervisorSavings = supervisorCost * 0.5; // 50% reduction in supervisor time needed
    const materialSavings = materialWastageCost * 0.6; // 60% reduction in material waste
    
    // Enhanced recruitment and retention benefits
    const currentTurnoverCost = employees * (turnoverRate / 100) * recruitmentCostPerEmployee;
    const recruitmentSavings = currentTurnoverCost * 0.4; // 40% reduction in turnover
    const brandingBenefits = brandingMarketingBenefit * 0.8; // 80% of the branding benefit realized
    const competitiveAdvantage = competitiveAdvantageValue * 0.6; // 60% of competitive advantage realized
    
    // New AI and agility benefits
    const aiIntegrationBenefits = aiIntegrationValue * 0.7; // 70% of AI integration value realized
    const employeeAgilityBenefits = employeeAgilityValue * 0.75; // 75% of employee agility value realized
    const tribalKnowledgeBenefits = tribalKnowledgeValue * 0.8; // 80% of tribal knowledge value realized

    const totalAnnualValue = trainingSavings + productivityGains + riskReduction + supervisorSavings + materialSavings + recruitmentSavings + brandingBenefits + competitiveAdvantage + aiIntegrationBenefits + employeeAgilityBenefits + tribalKnowledgeBenefits;
    const annualSavings = totalAnnualValue - zyglioAnnualCost;
    const roiPercentage = (annualSavings / zyglioAnnualCost) * 100;
    const paybackMonths = (zyglioAnnualCost / (annualSavings / 12));

    setResults({
      currentAnnualCost,
      zyglioAnnualCost,
      annualSavings,
      productivityGains,
      riskReduction,
      supervisorSavings,
      materialSavings,
      recruitmentSavings,
      brandingBenefits,
      competitiveAdvantage,
      aiIntegrationBenefits,
      employeeAgilityBenefits,
      tribalKnowledgeBenefits,
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
                  <Label htmlFor="supervisorCost">Supervisor Cost Per Hour ($)</Label>
                  <Input
                    id="supervisorCost"
                    type="number"
                    value={inputs.supervisorCostPerHour}
                    onChange={(e) => handleInputChange('supervisorCostPerHour', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="supervisorHours">Supervisor Hours Per Training Session</Label>
                  <Input
                    id="supervisorHours"
                    type="number"
                    value={inputs.supervisorHoursPerTraining}
                    onChange={(e) => handleInputChange('supervisorHoursPerTraining', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="materialWastage">Material Wastage Cost Per Employee ($)</Label>
                  <Input
                    id="materialWastage"
                    type="number"
                    value={inputs.materialWastageCostPerEmployee}
                    onChange={(e) => handleInputChange('materialWastageCostPerEmployee', e.target.value)}
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

                <div>
                  <Label htmlFor="recruitmentCost">Recruitment Cost Per Employee ($)</Label>
                  <Input
                    id="recruitmentCost"
                    type="number"
                    value={inputs.recruitmentCostPerEmployee}
                    onChange={(e) => handleInputChange('recruitmentCostPerEmployee', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="turnoverRate">Annual Turnover Rate (%)</Label>
                  <Input
                    id="turnoverRate"
                    type="number"
                    value={inputs.turnoverRate}
                    onChange={(e) => handleInputChange('turnoverRate', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="brandingBenefit">Annual Branding/Marketing Benefit ($)</Label>
                  <Input
                    id="brandingBenefit"
                    type="number"
                    value={inputs.brandingMarketingBenefit}
                    onChange={(e) => handleInputChange('brandingMarketingBenefit', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="competitiveAdvantage">Annual Competitive Advantage Value ($)</Label>
                  <Input
                    id="competitiveAdvantage"
                    type="number"
                    value={inputs.competitiveAdvantageValue}
                    onChange={(e) => handleInputChange('competitiveAdvantageValue', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="aiIntegration">Annual AI Integration Value ($)</Label>
                  <Input
                    id="aiIntegration"
                    type="number"
                    value={inputs.aiIntegrationValue}
                    onChange={(e) => handleInputChange('aiIntegrationValue', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="employeeAgility">Annual Employee Agility Value ($)</Label>
                  <Input
                    id="employeeAgility"
                    type="number"
                    value={inputs.employeeAgilityValue}
                    onChange={(e) => handleInputChange('employeeAgilityValue', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="tribalKnowledge">Annual Tribal Knowledge Capture Value ($)</Label>
                  <Input
                    id="tribalKnowledge"
                    type="number"
                    value={inputs.tribalKnowledgeValue}
                    onChange={(e) => handleInputChange('tribalKnowledgeValue', e.target.value)}
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
                    <span className="font-medium">{formatCurrency(results.totalAnnualValue - results.productivityGains - results.riskReduction - results.supervisorSavings - results.materialSavings - results.recruitmentSavings - results.brandingBenefits - results.competitiveAdvantage - results.aiIntegrationBenefits - results.employeeAgilityBenefits - results.tribalKnowledgeBenefits)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Productivity Gains:</span>
                    <span className="font-medium">{formatCurrency(results.productivityGains)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risk Reduction:</span>
                    <span className="font-medium">{formatCurrency(results.riskReduction)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Supervisor Savings:</span>
                    <span className="font-medium">{formatCurrency(results.supervisorSavings)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Material Savings:</span>
                    <span className="font-medium">{formatCurrency(results.materialSavings)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recruitment Savings:</span>
                    <span className="font-medium">{formatCurrency(results.recruitmentSavings)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Branding Benefits:</span>
                    <span className="font-medium">{formatCurrency(results.brandingBenefits)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Competitive Advantage:</span>
                    <span className="font-medium">{formatCurrency(results.competitiveAdvantage)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Integration Benefits:</span>
                    <span className="font-medium">{formatCurrency(results.aiIntegrationBenefits)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Employee Agility Benefits:</span>
                    <span className="font-medium">{formatCurrency(results.employeeAgilityBenefits)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tribal Knowledge Benefits:</span>
                    <span className="font-medium">{formatCurrency(results.tribalKnowledgeBenefits)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-50 rounded-lg">
            <h4 className="font-semibold mb-2">About This Calculation</h4>
            <p className="text-sm text-slate-600 mb-4">
              This comprehensive calculator includes all aspects of training ROI: supervisor costs, material wastage, recruitment/retention benefits, branding value, competitive advantage improvements, AI integration value, employee agility benefits, and tribal knowledge capture. 
              Results are based on industry benchmarks and Zyglio's proven outcomes.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <div>• Training cost reduction: 70% (industry average with Zyglio)</div>
              <div>• Productivity improvement: 4x faster competency development</div>
              <div>• Risk reduction: 60% fewer errors and compliance issues</div>
              <div>• Supervisor time savings: 50% reduction in oversight needed</div>
              <div>• Material waste reduction: 60% less training material waste</div>
              <div>• Turnover reduction: 40% improvement in retention</div>
              <div>• Branding benefit: 80% realization of enhanced employer brand value</div>
              <div>• Competitive advantage: 60% realization of improved competitive position</div>
              <div>• AI integration benefits: 70% realization of AI-powered training value</div>
              <div>• Employee agility benefits: 75% realization of best practices adoption</div>
              <div>• Tribal knowledge benefits: 80% realization of knowledge capture value</div>
              <div>• Zyglio cost estimated at 30% of current training expenses</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveROICalculator;
