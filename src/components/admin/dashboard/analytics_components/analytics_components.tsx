"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import './analytics_components.scss'

const agents = [
  { name: "E. Olsen", tickets: 12, total: 15 },
  { name: "J. Doe", tickets: 8, total: 15 },
  { name: "S. Smith", tickets: 14, total: 15 },
  { name: "A. Lee", tickets: 6, total: 15 },
]

export function AgentWorkload() {
  return (
    <Card className="fullWidth">
      <CardHeader>
        <CardTitle>Agent Workload</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="workloadTable">
          <div className="workloadHeader">
            <span>Agent</span>
            <span>Ticket</span>
          </div>
          {agents.map((agent, index) => (
            <div key={index} className="agentRow">
              <div className="agentAvatar" />
              <div className="agentName">{agent.name}</div>
              <div className="progressWrapper">
                <div 
                  className="progressBar" 
                  style={{ width: `${(agent.tickets / agent.total) * 100}%` }} 
                />
              </div>
              <div className="ticketCount">{agent.tickets}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

const comparisonData = [
  { name: "Mon", created: 40, resolved: 24 },
  { name: "Tue", created: 55, resolved: 38 },
  { name: "Wed", created: 40, resolved: 52 },
  { name: "Thu", created: 75, resolved: 48 },
  { name: "Fri", created: 52, resolved: 62 },
  { name: "Sat", created: 20, resolved: 16 },
  { name: "Sun", created: 12, resolved: 8 },
]

export function TicketCreatedVsResolved() {
  return (
    <Card className="fullWidth">
      <CardHeader>
        <CardTitle>Tickets Created vs. Resolved</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="chartContainer">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData} barGap={0}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#888', fontSize: 12 }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#888', fontSize: 12 }} 
              />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Bar dataKey="created" fill="#4285F4" radius={[2, 2, 0, 0]} barSize={15} />
              <Bar dataKey="resolved" fill="#24B27E" radius={[2, 2, 0, 0]} barSize={15} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

const riskTickets = [
  { id: "ZYN-0123", system: "PaySystem", priority: "critical", timeLeft: "1.2h" },
  { id: "ZYN-0124", system: "PaySystem", priority: "critical", timeLeft: "1.2h" },
  { id: "ZYN-0125", system: "AuthService", priority: "high", timeLeft: "2.5h" },
]

export function RiskTickets() {
  return (
    <Card className="fullWidth">
      <CardHeader>
        <CardTitle className="cardTitleBold">At risk ticket list</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="riskTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>System</th>
              <th>Priority</th>
              <th>Time left</th>
            </tr>
          </thead>
          <tbody>
            {riskTickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.id}</td>
                <td>{ticket.system}</td>
                <td>
                  <span className={`priorityBadge ${ticket.priority}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="timeLeft">{ticket.timeLeft}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

const pieData = [
  { name: "Medium", value: 35, color: "#4285F4" },
  { name: "High", value: 15, color: "#EF6C00" },
  { name: "Critical", value: 8, color: "#F06292" },
  { name: "Low", value: 42, color: "#90A4AE" },
]

export function TicketsByPriority() {
  return (
    <Card variant="blueBorder">
      <CardHeader>
        <CardTitle>Tickets by Priority</CardTitle>
      </CardHeader>
      <CardContent className="pt-1-5">
        <div className="chartContainer pieChartContainer">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                dataKey="value"
                label={({ cx, cy, midAngle, outerRadius, value, name, fill }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = outerRadius + 20;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill={fill}
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                      style={{ fontSize: '12px', fontWeight: 600 }}
                    >
                      {`${name}: ${value}`}
                    </text>
                  );
                }}
                labelLine={false}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

const slaTrendData = [
  { name: "Mon", breached: 5, atRisk: 10, resolved: 25 },
  { name: "Tue", breached: 8, atRisk: 15, resolved: 22 },
  { name: "Wed", breached: 4, atRisk: 18, resolved: 30 },
  { name: "Thu", breached: 12, atRisk: 16, resolved: 28 },
  { name: "Fri", breached: 10, atRisk: 12, resolved: 35 },
]

export function SlaWeeklyTrend() {
  return (
    <Card className="fullWidth">
      <CardHeader>
        <div className="customHeader">
          <CardTitle className="cardTitleBold">
            SLA Breach Risk - Weekly Trend
          </CardTitle>
          <div className="legend">
            <div className="legendItem">
              <div className="legendIndicator breached" />
              <span className="legendLabel">Breached</span>
            </div>
            <div className="legendItem">
              <div className="legendIndicator atRisk" />
              <span className="legendLabel">At risk</span>
            </div>
            <div className="legendItem">
              <div className="legendIndicator resolved" />
              <span className="legendLabel">Resolved</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="trendContainer">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={slaTrendData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="resolved" 
                stroke="#1976D2" 
                strokeWidth={2} 
                strokeDasharray="3 3"
                dot={{ r: 4, fill: '#fff', stroke: '#1976D2', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="atRisk" 
                stroke="#B8860B" 
                strokeWidth={2} 
                strokeDasharray="5 5"
                dot={{ r: 4, fill: '#fff', stroke: '#B8860B', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="breached" 
                stroke="#D32F2F" 
                strokeWidth={2} 
                dot={{ r: 4, fill: '#fff', stroke: '#D32F2F', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
