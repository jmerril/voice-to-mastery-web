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

  // Chart data for visualizations
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
    <div className="space-y-12">
      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="text-center py-12 bg-slate-50">
          <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Calculator className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-slate-900 mb-3">
            AI-Powered ROI Calculator
          </CardTitle>
          <CardDescription className="text-lg text-slate-600 max-w-2xl mx-auto">
            Enter your organization's data to discover your personalized training transformation potential
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="grid xl:grid-cols-2 gap-16">
            {/* Input Section */}
            <div className="space-y-8">
              {/* Organization Profile */}
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Users className="h-5 w-5 mr-3 text-blue-600" />
                  Organization Profile
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="employees" className="text-slate-900 font-medium">Number of Employees</Label>
                    <Input
                      id="employees"
                      type="number"
                      value={inputs.employees}
                      onChange={(e) => handleInputChange('employees', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="100"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="averageSalary" className="text-slate-900 font-medium">Average Salary ($)</Label>
                    <Input
                      id="averageSalary"
                      type="number"
                      value={inputs.averageSalary}
                      onChange={(e) => handleInputChange('averageSalary', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="75,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="trainingHours" className="text-slate-900 font-medium">Training Hours/Year</Label>
                    <Input
                      id="trainingHours"
                      type="number"
                      value={inputs.trainingHoursPerYear}
                      onChange={(e) => handleInputChange('trainingHoursPerYear', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="40"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="trainingCost" className="text-slate-900 font-medium">Training Cost/Hour ($)</Label>
                    <Input
                      id="trainingCost"
                      type="number"
                      value={inputs.currentTrainingCostPerHour}
                      onChange={(e) => handleInputChange('currentTrainingCostPerHour', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="150"
                    />
                  </div>
                </div>
              </div>

              {/* Operational Metrics */}
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-purple-600" />
                  Operational Metrics
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="productivityLoss" className="text-slate-900 font-medium">Hours to Competency</Label>
                    <Input
                      id="productivityLoss"
                      type="number"
                      value={inputs.productivityLossHours}
                      onChange={(e) => handleInputChange('productivityLossHours', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="160"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="errorCost" className="text-slate-900 font-medium">Annual Error Cost ($)</Label>
                    <Input
                      id="errorCost"
                      type="number"
                      value={inputs.errorCostPerYear}
                      onChange={(e) => handleInputChange('errorCostPerYear', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="50,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="turnoverRate" className="text-slate-900 font-medium">Turnover Rate (%)</Label>
                    <Input
                      id="turnoverRate"
                      type="number"
                      value={inputs.turnoverRate}
                      onChange={(e) => handleInputChange('turnoverRate', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="15"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="complianceRisk" className="text-slate-900 font-medium">Compliance Risk Cost ($)</Label>
                    <Input
                      id="complianceRisk"
                      type="number"
                      value={inputs.complianceRiskCost}
                      onChange={(e) => handleInputChange('complianceRiskCost', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="25,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="mentoringHours" className="text-slate-900 font-medium">Mentoring Hours/Employee/Year</Label>
                    <Input
                      id="mentoringHours"
                      type="number"
                      value={inputs.mentoringHoursPerEmployee}
                      onChange={(e) => handleInputChange('mentoringHoursPerEmployee', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="20"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="distractorSimulation" className="text-slate-900 font-medium">Distractor Simulation Value ($)</Label>
                    <Input
                      id="distractorSimulation"
                      type="number"
                      value={inputs.distractorSimulationValue}
                      onChange={(e) => handleInputChange('distractorSimulationValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="75,000"
                    />
                  </div>
                </div>
              </div>

              {/* AI & Technology Value Drivers */}
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Zap className="h-5 w-5 mr-3 text-yellow-600" />
                  AI & Technology Value Drivers
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="aiIntegration" className="text-slate-900 font-medium flex items-center">
                      <Brain className="h-4 w-4 mr-2 text-cyan-600" />
                      AI Training Value ($)
                    </Label>
                    <Input
                      id="aiIntegration"
                      type="number"
                      value={inputs.aiIntegrationValue}
                      onChange={(e) => handleInputChange('aiIntegrationValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="150,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="employeeAgility" className="text-slate-900 font-medium flex items-center">
                      <Target className="h-4 w-4 mr-2 text-green-600" />
                      Employee Agility Value ($)
                    </Label>
                    <Input
                      id="employeeAgility"
                      type="number"
                      value={inputs.employeeAgilityValue}
                      onChange={(e) => handleInputChange('employeeAgilityValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="120,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="tribalKnowledge" className="text-slate-900 font-medium flex items-center">
                      <Database className="h-4 w-4 mr-2 text-orange-600" />
                      Knowledge Capture Value ($)
                    </Label>
                    <Input
                      id="tribalKnowledge"
                      type="number"
                      value={inputs.tribalKnowledgeValue}
                      onChange={(e) => handleInputChange('tribalKnowledgeValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="180,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="competitiveAdvantage" className="text-slate-900 font-medium flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-purple-600" />
                      Competitive Advantage ($)
                    </Label>
                    <Input
                      id="competitiveAdvantage"
                      type="number"
                      value={inputs.competitiveAdvantageValue}
                      onChange={(e) => handleInputChange('competitiveAdvantageValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="200,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="assessmentCertification" className="text-slate-900 font-medium flex items-center">
                      <Award className="h-4 w-4 mr-2 text-indigo-600" />
                      Assessment & Certification ($)
                    </Label>
                    <Input
                      id="assessmentCertification"
                      type="number"
                      value={inputs.assessmentCertificationValue}
                      onChange={(e) => handleInputChange('assessmentCertificationValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="90,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="operatingProcedureImprovement" className="text-slate-900 font-medium flex items-center">
                      <Cog className="h-4 w-4 mr-2 text-rose-600" />
                      Procedure Automation ($)
                    </Label>
                    <Input
                      id="operatingProcedureImprovement"
                      type="number"
                      value={inputs.operatingProcedureImprovementValue}
                      onChange={(e) => handleInputChange('operatingProcedureImprovementValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="110,000"
                    />
                  </div>
                </div>
              </div>

              {/* Strategic Value Factors */}
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Star className="h-5 w-5 mr-3 text-yellow-600" />
                  Strategic Value Factors
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="recruitmentBranding" className="text-slate-900 font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      Recruitment Branding ($)
                    </Label>
                    <Input
                      id="recruitmentBranding"
                      type="number"
                      value={inputs.recruitmentBrandingValue}
                      onChange={(e) => handleInputChange('recruitmentBrandingValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="130,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="retentionEnhancement" className="text-slate-900 font-medium flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-blue-600" />
                      Retention Enhancement ($)
                    </Label>
                    <Input
                      id="retentionEnhancement"
                      type="number"
                      value={inputs.retentionEnhancementValue}
                      onChange={(e) => handleInputChange('retentionEnhancementValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="160,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="customerRecognition" className="text-slate-900 font-medium flex items-center">
                      <Award className="h-4 w-4 mr-2 text-purple-600" />
                      Customer Recognition ($)
                    </Label>
                    <Input
                      id="customerRecognition"
                      type="number"
                      value={inputs.customerRecognitionValue}
                      onChange={(e) => handleInputChange('customerRecognitionValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="140,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="publicRelationsMedia" className="text-slate-900 font-medium flex items-center">
                      <Megaphone className="h-4 w-4 mr-2 text-orange-600" />
                      PR & Media Value ($)
                    </Label>
                    <Input
                      id="publicRelationsMedia"
                      type="number"
                      value={inputs.publicRelationsMediaValue}
                      onChange={(e) => handleInputChange('publicRelationsMediaValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="95,000"
                    />
                  </div>
                </div>
              </div>

              {/* Monetization Opportunities */}
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Banknote className="h-5 w-5 mr-3 text-green-600" />
                  Monetization Opportunities
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="educationMonetization" className="text-slate-900 font-medium flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2 text-green-600" />
                      Education Monetization ($)
                    </Label>
                    <Input
                      id="educationMonetization"
                      type="number"
                      value={inputs.educationMonetizationValue}
                      onChange={(e) => handleInputChange('educationMonetizationValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="250,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="simulationLicensing" className="text-slate-900 font-medium flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-blue-600" />
                      Simulation Licensing Revenue ($)
                    </Label>
                    <Input
                      id="simulationLicensing"
                      type="number"
                      value={inputs.simulationLicensingValue}
                      onChange={(e) => handleInputChange('simulationLicensingValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="180,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="trainingServicesRevenue" className="text-slate-900 font-medium flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-red-600" />
                      Training Services Revenue ($)
                    </Label>
                    <Input
                      id="trainingServicesRevenue"
                      type="number"
                      value={inputs.trainingServicesRevenueValue}
                      onChange={(e) => handleInputChange('trainingServicesRevenueValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="300,000"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="certificationProgramRevenue" className="text-slate-900 font-medium flex items-center">
                      <Award className="h-4 w-4 mr-2 text-purple-600" />
                      Certification Program Revenue ($)
                    </Label>
                    <Input
                      id="certificationProgramRevenue"
                      type="number"
                      value={inputs.certificationProgramRevenueValue}
                      onChange={(e) => handleInputChange('certificationProgramRevenueValue', e.target.value)}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="150,000"
                    />
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm leading-relaxed">
                    <strong>Monetization Opportunities:</strong> These represent potential revenue-generating opportunities that can transform training from a cost center into a profit center. Organizations can monetize their enhanced training capabilities through external education services, simulation licensing, certification programs, and knowledge commercialization.
                  </p>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-8">
              {/* Cost Analysis */}
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-3 text-amber-600" />
                  Cost Analysis Breakdown
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-red-800 font-medium">Your Current Training Burden</span>
                      <DollarSign className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="text-3xl font-bold text-red-700 mb-2">
                      {formatCurrency(results.currentAnnualCost)}
                    </div>
                    <p className="text-sm text-red-700">
                      Total cost of your existing training approach including direct costs, 
                      productivity losses, errors, mentoring burden, and inefficiencies
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-blue-800 font-medium">Zyglio Investment Required</span>
                      <Calculator className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-700 mb-2">
                      {formatCurrency(results.zyglioAnnualCost)}
                    </div>
                    <p className="text-sm text-blue-700">
                      Annual investment in Zyglio's AI-powered training platform 
                      (estimated at 30% of current training costs)
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-green-800 font-medium">Net Annual Value Created</span>
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="text-4xl font-bold text-green-700 mb-2">
                      {formatCurrency(results.annualSavings)}
                    </div>
                    <p className="text-sm text-green-700">
                      Total value generated after deducting Zyglio investment from 
                      all productivity gains, cost savings, strategic benefits, and revenue opportunities
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-slate-900">
                          {Math.round(results.roiPercentage)}%
                        </div>
                        <div className="text-xs text-slate-600">Return on Investment</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-slate-900">
                          {Math.round(results.paybackMonths)}
                        </div>
                        <div className="text-xs text-slate-600">Months to Payback</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <BarChart3 className="h-6 w-6 mr-3 text-blue-600" />
                  ROI Visualization
                </h3>

                {/* Cost Comparison Chart */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Annual Cost Comparison</h4>
                  <ChartContainer config={chartConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={costComparisonData}>
                        <XAxis dataKey="name" stroke="#64748b" />
                        <YAxis stroke="#64748b" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                          formatter={(value) => [formatCurrency(Number(value)), 'Annual Cost']}
                        />
                        <Bar dataKey="cost" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                {/* Value Breakdown Pie Chart */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Value Creation Breakdown</h4>
                  <ChartContainer config={chartConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={valueBreakdownData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                        >
                          {valueBreakdownData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                          formatter={(value) => [formatCurrency(Number(value)), 'Annual Value']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                {/* ROI Timeline */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">ROI Timeline - Path to Payback</h4>
                  <ChartContainer config={chartConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={roiTimelineData}>
                        <XAxis dataKey="month" stroke="#64748b" />
                        <YAxis stroke="#64748b" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                          formatter={(value, name) => [formatCurrency(Number(value)), name === 'cumulative' ? 'Cumulative Benefits' : 'Investment']}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="cumulative" 
                          stroke="#06b6d4" 
                          strokeWidth={3}
                          dot={{ fill: '#06b6d4', strokeWidth: 2, r: 6 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="investment" 
                          stroke="#f59e0b" 
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </div>

              {/* Value Breakdown Details */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-6">Detailed Value Breakdown</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      Recruitment Branding:
                    </span>
                    <span className="font-medium text-slate-900">{formatCurrency(results.recruitmentBrandingBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-blue-600" />
                      Retention Enhancement:
                    </span>
                    <span className="font-medium text-slate-900">{formatCurrency(results.retentionEnhancementBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-purple-600" />
                      Customer Recognition:
                    </span>
                    <span className="font-medium text-slate-900">{formatCurrency(results.customerRecognitionBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 flex items-center">
                      <Megaphone className="h-4 w-4 mr-2 text-orange-600" />
                      PR & Media Value:
                    </span>
                    <span className="font-medium text-slate-900">{formatCurrency(results.publicRelationsMediaBenefits)}</span>
                  </div>
                  
                  <div className="border-t border-slate-300 pt-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-800 flex items-center font-semibold">
                        <Banknote className="h-4 w-4 mr-2 text-green-600" />
                        Revenue Generation Opportunities:
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 flex items-center pl-4">
                      <GraduationCap className="h-4 w-4 mr-2 text-green-600" />
                      Education Monetization:
                    </span>
                    <span className="font-medium text-slate-900">{formatCurrency(results.educationMonetizationBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 flex items-center pl-4">
                      <Zap className="h-4 w-4 mr-2 text-blue-600" />
                      Simulation Licensing:
                    </span>
                    <span className="font-medium text-slate-900">{formatCurrency(results.simulationLicensingBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 flex items-center pl-4">
                      <BookOpen className="h-4 w-4 mr-2 text-red-600" />
                      Training Services Revenue:
                    </span>
                    <span className="font-medium text-slate-900">{formatCurrency(results.trainingServicesRevenueBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 flex items-center pl-4">
                      <Award className="h-4 w-4 mr-2 text-purple-600" />
                      Certification Program Revenue:
                    </span>
                    <span className="font-medium text-slate-900">{formatCurrency(results.certificationProgramRevenueBenefits)}</span>
                  </div>
                  
                  <div className="border-t border-slate-300 pt-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2 text-cyan-600" />
                        Distractor Simulation:
                      </span>
                      <span className="font-medium text-slate-900">{formatCurrency(results.distractorSimulationBenefits)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-yellow-600" />
                        Mentoring Reduction:
                      </span>
                      <span className="font-medium text-slate-900">{formatCurrency(results.mentoringReduction)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 flex items-center">
                        <Brain className="h-4 w-4 mr-2 text-cyan-600" />
                        AI Integration Benefits:
                      </span>
                      <span className="font-medium text-slate-900">{formatCurrency(results.aiIntegrationBenefits)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-green-600" />
                        Employee Agility Benefits:
                      </span>
                      <span className="font-medium text-slate-900">{formatCurrency(results.employeeAgilityBenefits)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 flex items-center">
                        <Database className="h-4 w-4 mr-2 text-orange-600" />
                        Knowledge Capture Benefits:
                      </span>
                      <span className="font-medium text-slate-900">{formatCurrency(results.tribalKnowledgeBenefits)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-indigo-600" />
                        Assessment & Certification:
                      </span>
                      <span className="font-medium text-slate-900">{formatCurrency(results.assessmentCertificationBenefits)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 flex items-center">
                        <Cog className="h-4 w-4 mr-2 text-rose-600" />
                        Procedure Automation:
                      </span>
                      <span className="font-medium text-slate-900">{formatCurrency(results.operatingProcedureImprovementBenefits)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-purple-600" />
                        Competitive Advantage:
                      </span>
                      <span className="font-medium text-slate-900">{formatCurrency(results.competitiveAdvantage)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Productivity Gains:</span>
                      <span className="font-medium text-slate-900">{formatCurrency(results.productivityGains)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Risk Reduction:</span>
                      <span className="font-medium text-slate-900">{formatCurrency(results.riskReduction)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="mt-16 p-8 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-lg mb-4 flex items-center">
              <Calculator className="h-5 w-5 mr-2 text-blue-600" />
              Methodology & Assumptions
            </h4>
            <p className="text-slate-700 mb-6 leading-relaxed">
              This comprehensive ROI calculator incorporates all measurable training value drivers including strategic value factors (recruitment branding, retention enhancement, customer recognition, PR/media value), operational improvements (mentoring burden reduction, distractor simulation benefits), AI integration benefits, employee agility improvements, tribal knowledge capture, assessment and certification automation, operating procedure improvements through automated feedback, competitive positioning, stretch value factors for revenue generation opportunities (education monetization, simulation licensing, training services revenue, certification program revenue), and traditional cost savings. Results are based on industry benchmarks and Zyglio's proven client outcomes.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-xs text-slate-600">
              <div className="space-y-2">
                <div>• Training cost reduction: 70% (industry average)</div>
                <div>• Productivity improvement: 4x faster competency</div>
                <div>• Risk reduction: 60% fewer errors</div>
                <div>• Material waste reduction: 60% less waste</div>
                <div>• Turnover reduction: 40% improvement</div>
                <div>• Mentoring burden reduction: 40% less time</div>
                <div>• Distractor simulation benefits: 80% realization</div>
                <div>• AI integration benefits: 70% realization</div>
                <div>• Assessment automation: 85% realization</div>
                <div>• Education monetization: 60% realization</div>
              </div>
              <div className="space-y-2">
                <div>• Employee agility benefits: 75% realization</div>
                <div>• Knowledge capture: 80% realization</div>
                <div>• Procedure automation: 75% realization</div>
                <div>• Competitive advantage: 60% realization</div>
                <div>• Recruitment branding: 75% realization</div>
                <div>• Retention enhancement: 80% realization</div>
                <div>• Customer recognition: 70% realization</div>
                <div>• PR & media value: 65% realization</div>
                <div>• Simulation licensing: 70% realization</div>
                <div>• Training services revenue: 65% realization</div>
                <div>• Certification program revenue: 75% realization</div>
                <div>• Supervisor time savings: 50% reduction</div>
                <div>• Zyglio cost: 30% of current training expenses</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveROICalculator;
