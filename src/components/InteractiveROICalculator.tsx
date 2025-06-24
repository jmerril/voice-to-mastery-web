
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Users, Clock, UserCheck, Megaphone, Zap, Brain, Target, Database, AlertCircle, BarChart3 } from "lucide-react";
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
    { name: 'Competitive Advantage', value: results.competitiveAdvantage, color: '#8b5cf6' },
    { name: 'Productivity Gains', value: results.productivityGains, color: '#ec4899' },
    { name: 'Risk Reduction', value: results.riskReduction, color: '#84cc16' }
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
    <div className="space-y-8">
      <Card className="relative overflow-hidden border-0 shadow-2xl">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
        
        <CardHeader className="text-center relative z-10 py-12">
          <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-md rounded-full w-fit border border-cyan-400/30">
            <Calculator className="h-12 w-12 text-cyan-400" />
          </div>
          <CardTitle className="text-4xl font-bold text-white mb-4">
            AI-Powered ROI Calculator
          </CardTitle>
          <CardDescription className="text-xl text-blue-200 max-w-2xl mx-auto">
            Enter your organization's data to discover your personalized training transformation potential
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10 pb-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Users className="h-6 w-6 mr-3 text-cyan-400" />
                  Organization Profile
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employees" className="text-white font-medium">Number of Employees</Label>
                    <Input
                      id="employees"
                      type="number"
                      value={inputs.employees}
                      onChange={(e) => handleInputChange('employees', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="100"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="averageSalary" className="text-white font-medium">Average Salary ($)</Label>
                    <Input
                      id="averageSalary"
                      type="number"
                      value={inputs.averageSalary}
                      onChange={(e) => handleInputChange('averageSalary', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="75,000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trainingHours" className="text-white font-medium">Training Hours/Year</Label>
                    <Input
                      id="trainingHours"
                      type="number"
                      value={inputs.trainingHoursPerYear}
                      onChange={(e) => handleInputChange('trainingHoursPerYear', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trainingCost" className="text-white font-medium">Training Cost/Hour ($)</Label>
                    <Input
                      id="trainingCost"
                      type="number"
                      value={inputs.currentTrainingCostPerHour}
                      onChange={(e) => handleInputChange('currentTrainingCostPerHour', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="150"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Clock className="h-6 w-6 mr-3 text-purple-400" />
                  Operational Metrics
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="productivityLoss" className="text-white font-medium">Hours to Competency</Label>
                    <Input
                      id="productivityLoss"
                      type="number"
                      value={inputs.productivityLossHours}
                      onChange={(e) => handleInputChange('productivityLossHours', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="160"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="errorCost" className="text-white font-medium">Annual Error Cost ($)</Label>
                    <Input
                      id="errorCost"
                      type="number"
                      value={inputs.errorCostPerYear}
                      onChange={(e) => handleInputChange('errorCostPerYear', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="50,000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="turnoverRate" className="text-white font-medium">Turnover Rate (%)</Label>
                    <Input
                      id="turnoverRate"
                      type="number"
                      value={inputs.turnoverRate}
                      onChange={(e) => handleInputChange('turnoverRate', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="15"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="complianceRisk" className="text-white font-medium">Compliance Risk Cost ($)</Label>
                    <Input
                      id="complianceRisk"
                      type="number"
                      value={inputs.complianceRiskCost}
                      onChange={(e) => handleInputChange('complianceRiskCost', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="25,000"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="h-6 w-6 mr-3 text-yellow-400" />
                  Strategic Value Drivers
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="aiIntegration" className="text-white font-medium flex items-center">
                      <Brain className="h-4 w-4 mr-2 text-cyan-400" />
                      AI Training Value ($)
                    </Label>
                    <Input
                      id="aiIntegration"
                      type="number"
                      value={inputs.aiIntegrationValue}
                      onChange={(e) => handleInputChange('aiIntegrationValue', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="150,000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employeeAgility" className="text-white font-medium flex items-center">
                      <Target className="h-4 w-4 mr-2 text-green-400" />
                      Employee Agility Value ($)
                    </Label>
                    <Input
                      id="employeeAgility"
                      type="number"
                      value={inputs.employeeAgilityValue}
                      onChange={(e) => handleInputChange('employeeAgilityValue', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="120,000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tribalKnowledge" className="text-white font-medium flex items-center">
                      <Database className="h-4 w-4 mr-2 text-orange-400" />
                      Knowledge Capture Value ($)
                    </Label>
                    <Input
                      id="tribalKnowledge"
                      type="number"
                      value={inputs.tribalKnowledgeValue}
                      onChange={(e) => handleInputChange('tribalKnowledgeValue', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="180,000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="competitiveAdvantage" className="text-white font-medium flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-purple-400" />
                      Competitive Advantage ($)
                    </Label>
                    <Input
                      id="competitiveAdvantage"
                      type="number"
                      value={inputs.competitiveAdvantageValue}
                      onChange={(e) => handleInputChange('competitiveAdvantageValue', e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 backdrop-blur-md"
                      placeholder="200,000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-8">
              {/* Cost Comparison with Clear Explanations */}
              <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertCircle className="h-6 w-6 mr-3 text-yellow-400" />
                  Cost Analysis Breakdown
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-red-200 font-medium">Your Current Training Burden</span>
                      <DollarSign className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="text-3xl font-bold text-red-300 mb-2">
                      {formatCurrency(results.currentAnnualCost)}
                    </div>
                    <p className="text-sm text-red-200/80">
                      Total cost of your existing training approach including direct costs, 
                      productivity losses, errors, and inefficiencies
                    </p>
                  </div>

                  <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-blue-200 font-medium">Zyglio Investment Required</span>
                      <Calculator className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-blue-300 mb-2">
                      {formatCurrency(results.zyglioAnnualCost)}
                    </div>
                    <p className="text-sm text-blue-200/80">
                      Annual investment in Zyglio's AI-powered training platform 
                      (estimated at 30% of current training costs)
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/40 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-green-200 font-medium">Net Annual Value Created</span>
                      <TrendingUp className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="text-4xl font-bold text-green-300 mb-2">
                      {formatCurrency(results.annualSavings)}
                    </div>
                    <p className="text-sm text-green-200/80">
                      Total value generated after deducting Zyglio investment from 
                      all productivity gains, cost savings, and strategic benefits
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-300">
                          {Math.round(results.roiPercentage)}%
                        </div>
                        <div className="text-xs text-purple-200">Return on Investment</div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-300">
                          {Math.round(results.paybackMonths)}
                        </div>
                        <div className="text-xs text-orange-200">Months to Payback</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Visualization Charts */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <BarChart3 className="h-6 w-6 mr-3 text-cyan-400" />
                  ROI Visualization
                </h3>

                {/* Cost Comparison Chart */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Annual Cost Comparison</h4>
                  <ChartContainer config={chartConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={costComparisonData}>
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
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
                  <h4 className="text-lg font-semibold text-white mb-4">Value Creation Breakdown</h4>
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
                  <h4 className="text-lg font-semibold text-white mb-4">ROI Timeline - Path to Payback</h4>
                  <ChartContainer config={chartConfig} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={roiTimelineData}>
                        <XAxis dataKey="month" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
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
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-white mb-4">Detailed Value Breakdown</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200 flex items-center">
                      <Brain className="h-4 w-4 mr-2 text-cyan-400" />
                      AI Integration Benefits:
                    </span>
                    <span className="font-medium text-cyan-300">{formatCurrency(results.aiIntegrationBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200 flex items-center">
                      <Target className="h-4 w-4 mr-2 text-green-400" />
                      Employee Agility Benefits:
                    </span>
                    <span className="font-medium text-green-300">{formatCurrency(results.employeeAgilityBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200 flex items-center">
                      <Database className="h-4 w-4 mr-2 text-orange-400" />
                      Knowledge Capture Benefits:
                    </span>
                    <span className="font-medium text-orange-300">{formatCurrency(results.tribalKnowledgeBenefits)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-purple-400" />
                      Competitive Advantage:
                    </span>
                    <span className="font-medium text-purple-300">{formatCurrency(results.competitiveAdvantage)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Productivity Gains:</span>
                    <span className="font-medium text-white">{formatCurrency(results.productivityGains)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Risk Reduction:</span>
                    <span className="font-medium text-white">{formatCurrency(results.riskReduction)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <h4 className="font-semibold text-white text-lg mb-4 flex items-center">
              <Calculator className="h-5 w-5 mr-2 text-cyan-400" />
              Methodology & Assumptions
            </h4>
            <p className="text-blue-200 mb-6 leading-relaxed">
              This comprehensive ROI calculator incorporates all measurable training value drivers including AI integration benefits, 
              employee agility improvements, tribal knowledge capture, competitive positioning, and traditional cost savings. 
              Results are based on industry benchmarks and Zyglio's proven client outcomes.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-xs text-blue-300">
              <div className="space-y-2">
                <div>• Training cost reduction: 70% (industry average)</div>
                <div>• Productivity improvement: 4x faster competency</div>
                <div>• Risk reduction: 60% fewer errors</div>
                <div>• Material waste reduction: 60% less waste</div>
                <div>• Turnover reduction: 40% improvement</div>
                <div>• AI integration benefits: 70% realization</div>
              </div>
              <div className="space-y-2">
                <div>• Employee agility benefits: 75% realization</div>
                <div>• Knowledge capture: 80% realization</div>
                <div>• Competitive advantage: 60% realization</div>
                <div>• Supervisor time savings: 50% reduction</div>
                <div>• Branding benefit: 80% realization</div>
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
