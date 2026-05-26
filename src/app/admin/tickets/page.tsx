import React from 'react';
import '@/components/styles/dashboard.scss';
import '@/components/styles/ticket.scss';
import { OpenMetric, InProgressMetric, ResolvedMetric } from '@/components/admin/dashboard/metric_cards/metric_cards';
import { AvailableAgents } from '@/components/admin/tickets/AvailableAgents';
import { TicketManagement } from '@/components/admin/tickets/TicketManagement';
import { TicketManagementTable } from '@/components/admin/tickets/TicketManagementTable';
import { mockTickets } from '@/data/tickets';
import dashboardData from '@/data/dashboard_payload.json';

export default function TicketsPage() {
  const { metrics, availableAgents } = dashboardData;
  return (
    <div className="dashboard">
      <div className="tickets-header-section">
        <h1 className="dashboard-title">Dashboard <span className="sub-title">Admin Portal</span></h1>
      </div>

      <div className="metrics-row-container">
        <div className="metrics-row">
          <OpenMetric value={metrics.openTickets} />
          <InProgressMetric value={metrics.avgResolvedTime} />
          <ResolvedMetric value={metrics.resolvedToday} />
        </div>
        <div className="agents-sidebar">
          <AvailableAgents agents={availableAgents} />
        </div>
      </div>

      <div className="management-section">
        <TicketManagement />
        <TicketManagementTable tickets={mockTickets} />
      </div>
    </div>
  );
}
