"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import './analytics_components.scss'

export interface AgentData {
  name: string;
  tickets: number;
  total: number;
}

export function AgentWorkload({ data = [] }: { data?: AgentData[] }) {
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
          {data.map((agent, index) => (
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

export interface ComparisonData {
  name: string;
  created: number;
  resolved: number;
}

export function TicketCreatedVsResolved({ data = [] }: { data?: ComparisonData[] }) {
  return (
    <Card className="fullWidth">
      <CardHeader>
        <CardTitle>Tickets Created vs. Resolved</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="chartContainer">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={0}>
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

export interface RiskTicketData {
  id: string;
  system: string;
  priority: string;
  timeLeft: string;
}

export function RiskTickets({ data = [] }: { data?: RiskTicketData[] }) {
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
            {data.map((ticket, index) => (
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

export interface PieData {
  name: string;
  value: number;
  color: string;
}

export function TicketsByPriority({ data = [] }: { data?: PieData[] }) {
  return (
    <Card className="blueBorder">
      <CardHeader>
        <CardTitle>Tickets by Priority</CardTitle>
      </CardHeader>
      <CardContent className="pt-1-5">
        <div className="chartContainer pieChartContainer">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={70}
                dataKey="value"
                label={({ cx, cy, midAngle = 0, outerRadius, value, name, fill }) => {
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
                {data.map((entry, index) => (
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

export interface SlaTrendData {
  name: string;
  breached: number;
  atRisk: number;
  resolved: number;
}

export function SlaWeeklyTrend({ data = [] }: { data?: SlaTrendData[] }) {
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
            <LineChart data={data}>
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
