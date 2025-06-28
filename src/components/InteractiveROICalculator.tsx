import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Users, Clock, UserCheck, Megaphone, Zap, Brain, Target, Database, AlertCircle, BarChart3, Award, BookOpen, Cog, Star, Shield, Lightbulb, Banknote, GraduationCap } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

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
    mentoringHoursPerEmployee: 20, // hours per year
    mentoringCostPerHour: 80,
    distractorSimulationValue: 75000, // annual value of distractor simulation
    brandingMarketingBenefit: 100000, // annual benefit
    competitiveAdvantageValue: 200000, // annual competitive advantage value
    aiIntegrationValue: 150000, // annual AI integration value
    employeeAgilityValue: 120000, // annual employee agility value
    tribalKnowledgeValue: 180000, // annual tribal knowledge capture value
    assessmentCertificationValue: 90000, // annual assessment and certification value
    operatingProcedureImprovementValue: 110000, // annual operating procedure improvement value
    recruitmentBrandingValue: 130000, // annual recruitment branding value
    retentionEnhancementValue: 160000, // annual retention enhancement value
    customerRecognitionValue: 140000, // annual customer recognition value
    publicRelationsMediaValue: 95000, // annual PR and media value
    educationMonetizationValue: 250000, // annual education monetization opportunities
    simulationLicensingValue: 180000, // annual simulation licensing revenue
    trainingServicesRevenueValue: 300000, // annual training services revenue potential
    certificationProgramRevenueValue: 150000 // annual certification program revenue
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
    mentoringReduction: 0,
    distractorSimulationBenefits: 0,
    brandingBenefits: 0,
    competitiveAdvantage: 0,
    aiIntegrationBenefits: 0,
    employeeAgilityBenefits: 0,
    tribalKnowledgeBenefits: 0,
    assessmentCertificationBenefits: 0,
    operatingProcedureImprovementBenefits: 0,
    recruitmentBrandingBenefits: 0,
    retentionEnhancementBenefits: 0,
    customerRecognitionBenefits: 0,
    publicRelationsMediaBenefits: 0,
    educationMonetizationBenefits: 0,
    simulationLicensingBenefits: 0,
    trainingServicesRevenueBenefits: 0,
    certificationProgramRevenueBenefits: 0,
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
      mentoringHoursPerEmployee,
      mentoringCostPerHour,
      distractorSimulationValue,
      brandingMarketingBenefit,
      competitiveAdvantageValue,
      aiIntegrationValue,
      employeeAgilityValue,
      tribalKnowledgeValue,
      assessmentCertificationValue,
      operatingProcedureImprovementValue,
      recruitmentBrandingValue,
      retentionEnhancementValue,
      customerRecognitionValue,
      publicRelationsMediaValue,
      educationMonetizationValue,
      simulationLicensingValue,
      trainingServicesRevenueValue,
      certificationProgramRevenueValue
    } = inputs;

    // Current training costs
    const currentTrainingCost = employees * trainingHoursPerYear * currentTrainingCostPerHour;
    const productivityLossCost = employees * (productivityLossHours / 2080) * averageSalary; // 2080 = work hours per year
    const supervisorCost = employees * (trainingHoursPerYear / 8) * supervisorHoursPerTraining * supervisorCostPerHour;
    const materialWastageCost = employees * materialWastageCostPerEmployee;
    const mentoringCost = employees * mentoringHoursPerEmployee * mentoringCostPerHour;
    const currentAnnualCost = currentTrainingCost + productivityLossCost + errorCostPerYear + complianceRiskCost + supervisorCost + materialWastageCost + mentoringCost;

    // Zyglio costs (estimated at 30% of current training costs)
    const zyglioAnnualCost = currentTrainingCost * 0.3;

    // Savings calculations
    const trainingSavings = currentTrainingCost * 0.7; // 70% reduction
    const productivityGains = productivityLossCost * 0.75; // 4x faster = 75% time saved
    const riskReduction = (errorCostPerYear + complianceRiskCost) * 0.6; // 60% reduction
    const supervisorSavings = supervisorCost * 0.5; // 50% reduction in supervisor time needed
    const materialSavings = materialWastageCost * 0.6; // 60% reduction in material waste
    const mentoringReduction = mentoringCost * 0.4; // 40% reduction in mentoring burden
    const distractorSimulationBenefits = distractorSimulationValue * 0.8; // 80% of distractor simulation value realized
    
    // Enhanced recruitment and retention benefits
    const currentTurnoverCost = employees * (turnoverRate / 100) * recruitmentCostPerEmployee;
    const recruitmentSavings = currentTurnoverCost * 0.4; // 40% reduction in turnover
    const brandingBenefits = brandingMarketingBenefit * 0.8; // 80% of the branding benefit realized
    const competitiveAdvantage = competitiveAdvantageValue * 0.6; // 60% of competitive advantage realized
    
    // AI and agility benefits
    const aiIntegrationBenefits = aiIntegrationValue * 0.7; // 70% of AI integration value realized
    const employeeAgilityBenefits = employeeAgilityValue * 0.75; // 75% of employee agility value realized
    const tribalKnowledgeBenefits = tribalKnowledgeValue * 0.8; // 80% of tribal knowledge value realized
    
    // Assessment and procedure improvement benefits
    const assessmentCertificationBenefits = assessmentCertificationValue * 0.85; // 85% of assessment value realized
    const operatingProcedureImprovementBenefits = operatingProcedureImprovementValue * 0.75; // 75% of procedure improvement value realized

    // Strategic value factors
    const recruitmentBrandingBenefits = recruitmentBrandingValue * 0.75; // 75% of recruitment branding value realized
    const retentionEnhancementBenefits = retentionEnhancementValue * 0.8; // 80% of retention enhancement value realized
    const customerRecognitionBenefits = customerRecognitionValue * 0.7; // 70% of customer recognition value realized
    const publicRelationsMediaBenefits = publicRelationsMediaValue * 0.65; // 65% of PR and media value realized

    // Stretch value factors - Revenue generation opportunities
    const educationMonetizationBenefits = educationMonetizationValue * 0.6; // 60% of education monetization potential realized
    const simulationLicensingBenefits = simulationLicensingValue * 0.7; // 70% of simulation licensing revenue realized
    const trainingServicesRevenueBenefits = trainingServicesRevenueValue * 0.65; // 65% of training services revenue realized
    const certificationProgramRevenueBenefits = certificationProgramRevenueValue * 0.75; // 75% of certification program revenue realized

    const totalAnnualValue = trainingSavings + productivityGains + riskReduction + supervisorSavings + materialSavings + recruitmentSavings + mentoringReduction + distractorSimulationBenefits + brandingBenefits + competitiveAdvantage + aiIntegrationBenefits + employeeAgilityBenefits + tribalKnowledgeBenefits + assessmentCertificationBenefits + operatingProcedureImprovementBenefits + recruitmentBrandingBenefits + retentionEnhancementBenefits + customerRecognitionBenefits + publicRelationsMediaBenefits + educationMonetizationBenefits + simulationLicensingBenefits + trainingServicesRevenueBenefits + certificationProgramRevenueBenefits;
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
      mentoringReduction,
      distractorSimulationBenefits,
      brandingBenefits,
      competitiveAdvantage,
      aiIntegrationBenefits,
      employeeAgilityBenefits,
      tribalKnowledgeBenefits,
      assessmentCertificationBenefits,
      operatingProcedureImprovementBenefits,
      recruitmentBrandingBenefits,
      retentionEnhancementBenefits,
      customerRecognitionBenefits,
      publicRelationsMediaBenefits,
      educationMonetizationBenefits,
      simulationLicensingBenefits,
      trainingServicesRevenueBenefits,
      certificationProgramRevenueBenefits,
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

  const costComparisonData = [
    {
      name: 'Current System',
      cost: results.currentAnnualCost,
      color: '#ef4444'
    },
    {
      name: 'With Zyglio',
      cost: results.zyglioAnnualCost,
      color: '#3b82f6'
    }
  ];

  const valueBreakdownData = [
    { name: 'AI Integration', value: results.aiIntegrationBenefits, color: '#06b6d4' },
    { name: 'Employee Agility', value: results.employeeAgilityBenefits, color: '#10b981' },
    { name: 'Knowledge Capture', value: results.tribalKnowledgeBenefits, color: '#f59e0b' },
    { name: 'Assessment & Certification', value: results.assessmentCertificationBenefits, color: '#8b5cf6' },
    { name: 'Procedure Improvements', value: results.operatingProcedureImprovementBenefits, color: '#ef4444' },
    { name: 'Recruitment Branding', value: results.recruitmentBrandingBenefits, color: '#22c55e' },
    { name: 'Retention Enhancement', value: results.retentionEnhancementBenefits, color: '#eab308' },
    { name: 'Customer Recognition', value: results.customerRecognitionBenefits, color: '#f97316' },
    { name: 'PR & Media Value', value: results.publicRelationsMediaBenefits, color: '#a855f7' },
    { name: 'Education Monetization', value: results.educationMonetizationBenefits, color: '#16a34a' },
    { name: 'Simulation Licensing', value: results.simulationLicensingBenefits, color: '#0ea5e9' },
    { name: 'Training Services Revenue', value: results.trainingServicesRevenueBenefits, color: '#dc2626' },
    { name: 'Certification Revenue', value: results.certificationProgramRevenueBenefits, color: '#7c3aed' },
    { name: 'Competitive Advantage', value: results.competitiveAdvantage, color: '#ec4899' },
    { name: 'Productivity Gains', value: results.productivityGains, color: '#84cc16' },
    { name: 'Distractor Simulation', value: results.distractorSimulationBenefits, color: '#06b6d4' }
  ];

  const roiTimelineData = [
    { month: 'Month 1', cumulative: results.annualSavings * 0.08, investment: results.zyglioAnnualCost },
    { month: 'Month 3', cumulative: results.annualSavings * 0.25, investment: results.zyglioAnnualCost },
    { month: 'Month 6', cumulative: results.annualSavings * 0.5, investment: results.zyglioAnnualCost },
    { month: 'Month 9', cumulative: results.annualSavings * 0.75, investment: results.zyglioAnnualCost },
    { month: 'Month 12', cumulative: results.annualSavings, investment: results.zyglioAnnualCost }
  ];

  const chartConfig = {
    cost: { label: "Cost", color: "#3b82f6" },
    value: { label: "Value", color: "#10b981" },
    cumulative: { label: "Cumulative Benefits", color: "#06b6d4" },
    investment: { label: "Investment", color: "#f59e0b" }
  };

  return (
    <div className="space-y-16">
      {/* Main Calculator Card */}
      <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
        <CardContent className="p-0">
          <div className="grid xl:grid-cols-2 gap-0 min-h-[800px]">
            {/* Input Section */}
            <div className="p-12 bg-gradient-to-br from-slate-50 to-white border-r border-slate-100">
              <div className="space-y-10">
                {/* Organization Profile */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                    <Users className="h-6 w-6 mr-3 text-blue-600" />
                    Organization Profile
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="employees" className="text-slate-900 font-medium text-sm">Number of Employees</Label>
                      <Input
                        id="employees"
                        type="number"
                        value={inputs.employees}
                        onChange={(e) => handleInputChange('employees', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="100"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="averageSalary" className="text-slate-900 font-medium text-sm">Average Salary ($)</Label>
                      <Input
                        id="averageSalary"
                        type="number"
                        value={inputs.averageSalary}
                        onChange={(e) => handleInputChange('averageSalary', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="75,000"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="trainingHours" className="text-slate-900 font-medium text-sm">Training Hours/Year</Label>
                      <Input
                        id="trainingHours"
                        type="number"
                        value={inputs.trainingHoursPerYear}
                        onChange={(e) => handleInputChange('trainingHoursPerYear', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="40"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="trainingCost" className="text-slate-900 font-medium text-sm">Training Cost/Hour ($)</Label>
                      <Input
                        id="trainingCost"
                        type="number"
                        value={inputs.currentTrainingCostPerHour}
                        onChange={(e) => handleInputChange('currentTrainingCostPerHour', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="150"
                      />
                    </div>
                  </div>
                </div>

                {/* Operational Metrics */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                    <Clock className="h-6 w-6 mr-3 text-purple-600" />
                    Operational Metrics
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="productivityLoss" className="text-slate-900 font-medium text-sm">Hours to Competency</Label>
                      <Input
                        id="productivityLoss"
                        type="number"
                        value={inputs.productivityLossHours}
                        onChange={(e) => handleInputChange('productivityLossHours', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="160"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="errorCost" className="text-slate-900 font-medium text-sm">Annual Error Cost ($)</Label>
                      <Input
                        id="errorCost"
                        type="number"
                        value={inputs.errorCostPerYear}
                        onChange={(e) => handleInputChange('errorCostPerYear', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="50,000"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="turnoverRate" className="text-slate-900 font-medium text-sm">Turnover Rate (%)</Label>
                      <Input
                        id="turnoverRate"
                        type="number"
                        value={inputs.turnoverRate}
                        onChange={(e) => handleInputChange('turnoverRate', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="15"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="complianceRisk" className="text-slate-900 font-medium text-sm">Compliance Risk Cost ($)</Label>
                      <Input
                        id="complianceRisk"
                        type="number"
                        value={inputs.complianceRiskCost}
                        onChange={(e) => handleInputChange('complianceRiskCost', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="25,000"
                      />
                    </div>
                  </div>
                </div>

                {/* Monetization Opportunities */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                    <Banknote className="h-6 w-6 mr-3 text-green-600" />
                    Monetization Opportunities
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="educationMonetization" className="text-slate-900 font-medium text-sm flex items-center">
                        <GraduationCap className="h-4 w-4 mr-2 text-green-600" />
                        Education Monetization ($)
                      </Label>
                      <Input
                        id="educationMonetization"
                        type="number"
                        value={inputs.educationMonetizationValue}
                        onChange={(e) => handleInputChange('educationMonetizationValue', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="250,000"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="simulationLicensing" className="text-slate-900 font-medium text-sm flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-blue-600" />
                        Simulation Licensing Revenue ($)
                      </Label>
                      <Input
                        id="simulationLicensing"
                        type="number"
                        value={inputs.simulationLicensingValue}
                        onChange={(e) => handleInputChange('simulationLicensingValue', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="180,000"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="trainingServicesRevenue" className="text-slate-900 font-medium text-sm flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-red-600" />
                        Training Services Revenue ($)
                      </Label>
                      <Input
                        id="trainingServicesRevenue"
                        type="number"
                        value={inputs.trainingServicesRevenueValue}
                        onChange={(e) => handleInputChange('trainingServicesRevenueValue', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="300,000"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="certificationProgramRevenue" className="text-slate-900 font-medium text-sm flex items-center">
                        <Award className="h-4 w-4 mr-2 text-purple-600" />
                        Certification Program Revenue ($)
                      </Label>
                      <Input
                        id="certificationProgramRevenue"
                        type="number"
                        value={inputs.certificationProgramRevenueValue}
                        onChange={(e) => handleInputChange('certificationProgramRevenueValue', e.target.value)}
                        className="bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl"
                        placeholder="150,000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="p-12 bg-white">
              <div className="space-y-8">
                {/* ROI Summary */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8">Your ROI Results</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                      <div className="text-4xl font-bold text-green-700 mb-2">
                        {Math.round(results.roiPercentage)}%
                      </div>
                      <div className="text-sm text-green-700 font-medium">Return on Investment</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                      <div className="text-4xl font-bold text-blue-700 mb-2">
                        {Math.round(results.paybackMonths)}
                      </div>
                      <div className="text-sm text-blue-700 font-medium">Months to Payback</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100">
                    <div className="text-5xl font-bold text-slate-900 mb-3">
                      {formatCurrency(results.annualSavings)}
                    </div>
                    <div className="text-slate-600 text-lg">Net Annual Value Created</div>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">Cost Analysis</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-100">
                      <span className="text-red-800 font-medium">Current Training Burden</span>
                      <span className="text-red-700 font-bold">{formatCurrency(results.currentAnnualCost)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <span className="text-blue-800 font-medium">Zyglio Investment</span>
                      <span className="text-blue-700 font-bold">{formatCurrency(results.zyglioAnnualCost)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-100">
                      <span className="text-green-800 font-medium">Total Value Created</span>
                      <span className="text-green-700 font-bold">{formatCurrency(results.totalAnnualValue)}</span>
                    </div>
                  </div>
                </div>

                {/* Top Value Drivers */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-slate-900">Top Value Drivers</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-700">Education Monetization:</span>
                      <span className="font-medium">{formatCurrency(results.educationMonetizationBenefits)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">Training Services Revenue:</span>
                      <span className="font-medium">{formatCurrency(results.trainingServicesRevenueBenefits)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">Knowledge Capture:</span>
                      <span className="font-medium">{formatCurrency(results.tribalKnowledgeBenefits)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">Simulation Licensing:</span>
                      <span className="font-medium">{formatCurrency(results.simulationLicensingBenefits)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700">Retention Enhancement:</span>
                      <span className="font-medium">{formatCurrency(results.retentionEnhancementBenefits)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Methodology */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-white rounded-3xl">
        <CardContent className="p-12">
          <h4 className="font-bold text-slate-900 text-2xl mb-6 flex items-center">
            <Calculator className="h-6 w-6 mr-3 text-blue-600" />
            Methodology & Assumptions
          </h4>
          <p className="text-slate-700 mb-8 leading-relaxed text-lg">
            This comprehensive ROI calculator incorporates all measurable training value drivers including strategic value factors, operational improvements, AI integration benefits, employee agility improvements, tribal knowledge capture, and revenue generation opportunities. Results are based on industry benchmarks and Zyglio's proven client outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-600">
            <div className="space-y-3">
              <div>• Training cost reduction: 70% (industry average)</div>
              <div>• Productivity improvement: 4x faster competency</div>
              <div>• Risk reduction: 60% fewer errors</div>
              <div>• Material waste reduction: 60% less waste</div>
              <div>• Turnover reduction: 40% improvement</div>
              <div>• Mentoring burden reduction: 40% less time</div>
              <div>• AI integration benefits: 70% realization</div>
              <div>• Assessment automation: 85% realization</div>
            </div>
            <div className="space-y-3">
              <div>• Employee agility benefits: 75% realization</div>
              <div>• Knowledge capture: 80% realization</div>
              <div>• Procedure automation: 75% realization</div>
              <div>• Competitive advantage: 60% realization</div>
              <div>• Education monetization: 60% realization</div>
              <div>• Simulation licensing: 70% realization</div>
              <div>• Training services revenue: 65% realization</div>
              <div>• Zyglio cost: 30% of current training expenses</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveROICalculator;
