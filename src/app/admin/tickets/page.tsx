import React from 'react';
import '@/components/styles/dashboard.scss';
import '@/components/styles/ticket.scss';
import { OpenMetric, InProgressMetric, ResolvedMetric } from '@/components/admin/dashboard/metric_cards/metric_cards';
import { AvailableAgents, AvailableAgentData } from '@/components/admin/tickets/AvailableAgents';
import { TicketManagement } from '@/components/admin/tickets/TicketManagement';
import { TicketManagementTable } from '@/components/admin/tickets/TicketManagementTable';
import dashboardData from '@/data/dashboard_payload.json';
import { Ticket } from '@/types/ticket';

export default function TicketsPage() {
  const { metrics, availableAgents, tickets } = dashboardData;
  return (
    <div className="dashboard">
      <div className="tickets-header-section">
        <h1 className="dashboard-title">Dashboard <span className="sub-title">Admin Portal</span></h1>
      </div>

      <div className="metrics-and-agents-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 222.737px) 1fr 320px', gap: '6rem', marginBottom: '1.25rem' }}>
        <OpenMetric value={metrics.openTickets} size="ticket" />
        <InProgressMetric value={metrics.avgResolvedTime} size="ticket" />
        <ResolvedMetric value={metrics.resolvedToday} size="ticket" />
        <div /> {/* Spacer to push agents to the end */}
        <div className="agents-sidebar" style={{ background: 'transparent' }}>
          <AvailableAgents agents={availableAgents as AvailableAgentData[]} />
        </div>
      </div>

      <div className="management-section">
        <TicketManagement />
        <TicketManagementTable tickets={tickets as Ticket[]} />
      </div>
    </div>
  );
}
