import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  BarChart3, 
  Database, 
  FileText, 
  TrendingUp, 
  Settings, 
  HelpCircle,
  Activity,
  Users,
  Search,
  Zap,
  Shield,
  Globe,
  Menu,
  X,
  BookOpen,
  Network,
  Target,
  PieChart,
  LineChart,
  Download,
  Upload,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react'
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, AreaChart, Area, ScatterChart, Scatter } from 'recharts'
import './App.css'

// Mock data for demonstrations
const marketTrendData = [
  { month: 'Jan', value: 4200, growth: 12 },
  { month: 'Feb', value: 4800, growth: 14 },
  { month: 'Mar', value: 5200, growth: 8 },
  { month: 'Apr', value: 5800, growth: 12 },
  { month: 'May', value: 6400, growth: 10 },
  { month: 'Jun', value: 7200, growth: 13 },
  { month: 'Jul', value: 7800, growth: 8 },
  { month: 'Aug', value: 8600, growth: 10 },
  { month: 'Sep', value: 9200, growth: 7 },
  { month: 'Oct', value: 10100, growth: 10 },
  { month: 'Nov', value: 11200, growth: 11 },
  { month: 'Dec', value: 12500, growth: 12 }
]

const competitorData = [
  { name: 'Company A', marketShare: 28, revenue: 450, growth: 15 },
  { name: 'Company B', marketShare: 22, revenue: 380, growth: 8 },
  { name: 'Company C', marketShare: 18, revenue: 290, growth: 12 },
  { name: 'Company D', marketShare: 15, revenue: 220, growth: 6 },
  { name: 'Others', marketShare: 17, revenue: 160, growth: 4 }
]

const researchMetrics = [
  { category: 'AI/ML', papers: 2847, citations: 45230, impact: 8.2 },
  { category: 'Healthcare', papers: 1923, citations: 32180, impact: 7.8 },
  { category: 'Finance', papers: 1456, citations: 28940, impact: 7.1 },
  { category: 'Technology', papers: 3201, citations: 52340, impact: 8.9 },
  { category: 'Environment', papers: 987, citations: 18760, impact: 6.4 }
]

const etlPipelineData = [
  { name: 'Market Data Pipeline', status: 'Running', processed: 2.4, errors: 0.02 },
  { name: 'Research Papers ETL', status: 'Running', processed: 1.8, errors: 0.01 },
  { name: 'Competitor Intelligence', status: 'Completed', processed: 3.2, errors: 0.00 },
  { name: 'Social Media Analytics', status: 'Running', processed: 5.7, errors: 0.03 },
  { name: 'Financial Reports ETL', status: 'Scheduled', processed: 0, errors: 0 }
]

const insightDistribution = [
  { name: 'Market Trends', value: 35, color: '#8884d8' },
  { name: 'Competitor Analysis', value: 28, color: '#82ca9d' },
  { name: 'Research Insights', value: 22, color: '#ffc658' },
  { name: 'Risk Assessment', value: 15, color: '#ff7c7c' }
]

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Research & Analytics Platform</h1>
        <p className="text-muted-foreground">
          AI-powered intelligence hub for market analysis, research insights, and data-driven decision making
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Papers Analyzed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,847</div>
            <p className="text-xs text-muted-foreground">
              +18% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Insights Generated</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,429</div>
            <p className="text-xs text-muted-foreground">
              +24% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Points</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M</div>
            <p className="text-xs text-muted-foreground">
              +31% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Coverage</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground">
              +5.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Market Trend Analysis</CardTitle>
            <CardDescription>
              Real-time market value and growth trends across sectors
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={marketTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                <Area type="monotone" dataKey="growth" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Insight Distribution</CardTitle>
            <CardDescription>
              Breakdown of generated insights by category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <RechartsPieChart>
                <Pie
                  data={insightDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {insightDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Competitor Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Competitive Landscape</CardTitle>
          <CardDescription>
            Market share and revenue analysis of key competitors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={competitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="marketShare" fill="#8884d8" name="Market Share %" />
              <Bar dataKey="revenue" fill="#82ca9d" name="Revenue (M$)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Analysis Activity</CardTitle>
          <CardDescription>
            Latest updates from your research and analytics projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Market analysis completed for Q4 2024</p>
                <p className="text-xs text-muted-foreground">Identified 15 new growth opportunities in emerging markets</p>
              </div>
              <Badge variant="secondary">5 min ago</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Research paper analysis: AI in Healthcare</p>
                <p className="text-xs text-muted-foreground">Processed 247 papers, extracted 89 key insights</p>
              </div>
              <Badge variant="secondary">12 min ago</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">ETL pipeline completed: Financial data</p>
                <p className="text-xs text-muted-foreground">Processed 2.4M data points with 99.8% accuracy</p>
              </div>
              <Badge variant="secondary">25 min ago</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">SWOT analysis generated for competitor</p>
                <p className="text-xs text-muted-foreground">Comprehensive analysis of TechCorp's market position</p>
              </div>
              <Badge variant="secondary">1 hour ago</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function MarketAnalysis() {
  const [selectedCompetitor, setSelectedCompetitor] = useState(null)
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Market & Competitor Analysis</h1>
        <p className="text-muted-foreground">
          Comprehensive market intelligence and competitive landscape analysis
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Market Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
            <CardDescription>Current market trends and growth patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsLineChart data={marketTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} name="Market Value (M$)" />
                <Line type="monotone" dataKey="growth" stroke="#82ca9d" strokeWidth={2} name="Growth Rate %" />
              </RechartsLineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Analysis Tools</CardTitle>
            <CardDescription>Quick access to analysis features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" variant="outline">
              <Target className="mr-2 h-4 w-4" />
              Generate SWOT Analysis
            </Button>
            <Button className="w-full" variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              Market Trend Forecast
            </Button>
            <Button className="w-full" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Competitor Benchmarking
            </Button>
            <Button className="w-full" variant="outline">
              <PieChart className="mr-2 h-4 w-4" />
              Market Segmentation
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Competitor Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Competitive Intelligence</CardTitle>
          <CardDescription>Detailed analysis of key market players</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {competitorData.map((competitor, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                onClick={() => setSelectedCompetitor(competitor)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {competitor.name.charAt(competitor.name.length - 1)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{competitor.name}</h3>
                      <p className="text-sm text-muted-foreground">Market Share: {competitor.marketShare}%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${competitor.revenue}M Revenue</p>
                    <p className="text-sm text-green-600">+{competitor.growth}% Growth</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SWOT Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>SWOT Analysis Generator</CardTitle>
          <CardDescription>Automated SWOT analysis for selected competitors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Strengths</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Strong market position</li>
                  <li>• Innovative product portfolio</li>
                  <li>• Established customer base</li>
                  <li>• Financial stability</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Opportunities</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Emerging market expansion</li>
                  <li>• Digital transformation</li>
                  <li>• Strategic partnerships</li>
                  <li>• New technology adoption</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Weaknesses</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Limited geographic presence</li>
                  <li>• High operational costs</li>
                  <li>• Dependency on key clients</li>
                  <li>• Slow innovation cycle</li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Threats</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Intense competition</li>
                  <li>• Regulatory changes</li>
                  <li>• Economic uncertainty</li>
                  <li>• Technological disruption</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ResearchPapers() {
  const [selectedCategory, setSelectedCategory] = useState('AI/ML')
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Research Paper Analysis</h1>
        <p className="text-muted-foreground">
          AI-powered analysis of academic papers and knowledge graph generation
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Papers
          </Button>
          <Button variant="outline">
            <Database className="mr-2 h-4 w-4" />
            Connect Database
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button variant="outline" size="sm">Filter</Button>
        </div>
      </div>

      {/* Research Metrics */}
      <div className="grid gap-4 md:grid-cols-5">
        {researchMetrics.map((metric, index) => (
          <Card 
            key={index}
            className={`cursor-pointer transition-colors ${
              selectedCategory === metric.category ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => setSelectedCategory(metric.category)}
          >
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="font-semibold text-sm">{metric.category}</h3>
                <p className="text-2xl font-bold mt-2">{metric.papers.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Papers</p>
                <div className="mt-2 space-y-1">
                  <p className="text-sm">{metric.citations.toLocaleString()} citations</p>
                  <p className="text-sm">Impact: {metric.impact}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Knowledge Graph Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Knowledge Graph: {selectedCategory}</CardTitle>
          <CardDescription>
            Interactive visualization of research concepts and relationships
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <Network className="h-16 w-16 mx-auto text-muted-foreground" />
              <div>
                <p className="font-medium">Knowledge Graph Visualization</p>
                <p className="text-sm text-muted-foreground">Interactive network of {selectedCategory} research concepts</p>
              </div>
              <Button>Explore Graph</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Citation Network */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Citation Network Analysis</CardTitle>
            <CardDescription>Most influential papers and citation patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold text-sm">Deep Learning for Computer Vision</h4>
                <p className="text-xs text-muted-foreground">Authors: LeCun, Y., Bengio, Y., Hinton, G.</p>
                <div className="flex justify-between mt-2">
                  <span className="text-sm">Citations: 15,847</span>
                  <Badge>High Impact</Badge>
                </div>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold text-sm">Attention Is All You Need</h4>
                <p className="text-xs text-muted-foreground">Authors: Vaswani, A., et al.</p>
                <div className="flex justify-between mt-2">
                  <span className="text-sm">Citations: 12,934</span>
                  <Badge>High Impact</Badge>
                </div>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold text-sm">BERT: Pre-training of Deep Bidirectional Transformers</h4>
                <p className="text-xs text-muted-foreground">Authors: Devlin, J., et al.</p>
                <div className="flex justify-between mt-2">
                  <span className="text-sm">Citations: 9,876</span>
                  <Badge variant="secondary">Medium Impact</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Methodology Comparison</CardTitle>
            <CardDescription>Analysis of research methodologies and approaches</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={[
                { method: 'Supervised Learning', count: 1247, effectiveness: 85 },
                { method: 'Unsupervised Learning', count: 892, effectiveness: 78 },
                { method: 'Reinforcement Learning', count: 634, effectiveness: 82 },
                { method: 'Transfer Learning', count: 567, effectiveness: 88 },
                { method: 'Meta Learning', count: 234, effectiveness: 79 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="method" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" name="Paper Count" />
                <Bar dataKey="effectiveness" fill="#82ca9d" name="Effectiveness %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ETLPipelines() {
  const [selectedPipeline, setSelectedPipeline] = useState(null)
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">ETL Pipelines & Data Integration</h1>
        <p className="text-muted-foreground">
          Automated data extraction, transformation, and loading workflows
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button>
            <Play className="mr-2 h-4 w-4" />
            Create Pipeline
          </Button>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import Config
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">Monitor All</Button>
        </div>
      </div>

      {/* Pipeline Status */}
      <div className="grid gap-4">
        {etlPipelineData.map((pipeline, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    pipeline.status === 'Running' ? 'bg-green-500' :
                    pipeline.status === 'Completed' ? 'bg-blue-500' :
                    pipeline.status === 'Scheduled' ? 'bg-yellow-500' : 'bg-gray-500'
                  }`}></div>
                  <div>
                    <h3 className="font-semibold">{pipeline.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Processed: {pipeline.processed}M records • Errors: {pipeline.errors}%
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={
                    pipeline.status === 'Running' ? 'default' :
                    pipeline.status === 'Completed' ? 'secondary' :
                    pipeline.status === 'Scheduled' ? 'outline' : 'destructive'
                  }>
                    {pipeline.status}
                  </Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                  <Button size="sm">Monitor</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pipeline Builder */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Pipeline Builder</CardTitle>
            <CardDescription>Visual workflow designer for ETL processes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <Database className="h-16 w-16 mx-auto text-muted-foreground" />
                <div>
                  <p className="font-medium">Drag & Drop Pipeline Builder</p>
                  <p className="text-sm text-muted-foreground">Create custom ETL workflows visually</p>
                </div>
                <Button>Start Building</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Sources</CardTitle>
            <CardDescription>Available connectors and integrations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border rounded-lg flex items-center space-x-3">
              <Database className="h-6 w-6 text-blue-500" />
              <div>
                <p className="font-medium text-sm">SQL Databases</p>
                <p className="text-xs text-muted-foreground">MySQL, PostgreSQL, SQL Server</p>
              </div>
            </div>
            <div className="p-3 border rounded-lg flex items-center space-x-3">
              <Globe className="h-6 w-6 text-green-500" />
              <div>
                <p className="font-medium text-sm">Web APIs</p>
                <p className="text-xs text-muted-foreground">REST, GraphQL, SOAP</p>
              </div>
            </div>
            <div className="p-3 border rounded-lg flex items-center space-x-3">
              <FileText className="h-6 w-6 text-orange-500" />
              <div>
                <p className="font-medium text-sm">File Systems</p>
                <p className="text-xs text-muted-foreground">CSV, JSON, XML, Parquet</p>
              </div>
            </div>
            <div className="p-3 border rounded-lg flex items-center space-x-3">
              <Activity className="h-6 w-6 text-purple-500" />
              <div>
                <p className="font-medium text-sm">Streaming</p>
                <p className="text-xs text-muted-foreground">Kafka, Kinesis, PubSub</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Quality Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle>Data Quality Dashboard</CardTitle>
          <CardDescription>Real-time monitoring of data quality metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">99.8%</p>
              <p className="text-sm text-muted-foreground">Data Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">98.5%</p>
              <p className="text-sm text-muted-foreground">Completeness</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">97.2%</p>
              <p className="text-sm text-muted-foreground">Consistency</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">99.1%</p>
              <p className="text-sm text-muted-foreground">Timeliness</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Reports & Visualization</h1>
        <p className="text-muted-foreground">
          Automated reporting and advanced data visualization tools
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Create Report
          </Button>
          <Button variant="outline">
            <LineChart className="mr-2 h-4 w-4" />
            New Dashboard
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm">Schedule</Button>
        </div>
      </div>

      {/* Report Templates */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <BarChart3 className="h-12 w-12 mx-auto text-blue-500" />
              <div>
                <h3 className="font-semibold">Market Analysis Report</h3>
                <p className="text-sm text-muted-foreground">Comprehensive market trends and competitor analysis</p>
              </div>
              <Button variant="outline" size="sm">Use Template</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <BookOpen className="h-12 w-12 mx-auto text-green-500" />
              <div>
                <h3 className="font-semibold">Research Summary</h3>
                <p className="text-sm text-muted-foreground">Academic paper insights and citation analysis</p>
              </div>
              <Button variant="outline" size="sm">Use Template</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <TrendingUp className="h-12 w-12 mx-auto text-purple-500" />
              <div>
                <h3 className="font-semibold">Trend Forecast</h3>
                <p className="text-sm text-muted-foreground">Predictive analytics and future projections</p>
              </div>
              <Button variant="outline" size="sm">Use Template</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>Your latest generated reports and dashboards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <FileText className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="font-semibold">Q4 2024 Market Analysis</h3>
                  <p className="text-sm text-muted-foreground">Generated 2 hours ago • 24 pages</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="sm">View</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <BarChart3 className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="font-semibold">AI Research Trends Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Updated 1 day ago • Interactive</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="sm">View</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <TrendingUp className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="font-semibold">Competitor Intelligence Brief</h3>
                  <p className="text-sm text-muted-foreground">Generated 3 days ago • 16 pages</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="sm">View</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Visualization Gallery */}
      <Card>
        <CardHeader>
          <CardTitle>Visualization Gallery</CardTitle>
          <CardDescription>Interactive charts and advanced visualizations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="trends" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
              <TabsTrigger value="distribution">Distribution</TabsTrigger>
              <TabsTrigger value="correlation">Correlation</TabsTrigger>
            </TabsList>
            <TabsContent value="trends" className="space-y-4">
              <ResponsiveContainer width="100%" height={300}>
                <RechartsLineChart data={marketTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                  <Line type="monotone" dataKey="growth" stroke="#82ca9d" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="comparison" className="space-y-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={competitorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="marketShare" fill="#8884d8" />
                  <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="distribution" className="space-y-4">
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={insightDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {insightDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="correlation" className="space-y-4">
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart data={competitorData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="marketShare" name="Market Share" />
                  <YAxis dataKey="revenue" name="Revenue" />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter dataKey="growth" fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'market', label: 'Market Analysis', icon: TrendingUp },
    { id: 'research', label: 'Research Papers', icon: BookOpen },
    { id: 'etl', label: 'ETL Pipelines', icon: Database },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help', icon: HelpCircle }
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border transform transition-transform duration-200 ease-in-out
        lg:relative lg:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <h2 className="text-lg font-semibold text-sidebar-foreground">Research Hub</h2>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsMobileOpen(false)
                }}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors
                  ${activeTab === item.id 
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <div className="flex items-center space-x-2 text-xs text-sidebar-foreground">
            <Globe className="h-3 w-3" />
            <span>Made with Manus</span>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'market':
        return <MarketAnalysis />
      case 'research':
        return <ResearchPapers />
      case 'etl':
        return <ETLPipelines />
      case 'reports':
        return <Reports />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isMobileOpen={isMobileOpen}
          setIsMobileOpen={setIsMobileOpen}
        />
        
        <div className="flex-1 lg:ml-0">
          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between p-4 border-b">
            <h1 className="text-lg font-semibold">Research Hub</h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Main content */}
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

