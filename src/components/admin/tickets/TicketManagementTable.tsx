import React, { FC } from 'react';
import { Ticket } from '@/types/ticket';
import { TableContainer } from '@/components/ui/Table';
import './ticket_management_table.scss';

interface ManagementTicketRowProps {
  ticket: Ticket;
  columns: string;
}

export const ManagementTicketRow: FC<ManagementTicketRowProps> = ({ ticket, columns }) => {
  const statusClass = ticket.status.toLowerCase().replace(' ', '-');
  return (
    <div className="ticket-row management-row" style={{ gridTemplateColumns: columns }}>
      <div className="cell checkbox-cell">
        <input type="checkbox" />
      </div>
      <div className="cell date-cell">
        <div className="date">{ticket.date}</div>
        <div className="time">{ticket.time}</div>
      </div>
      <div className="cell ticket-id-cell">{ticket.ticketId}</div>
      <div className="cell issue-cell">{ticket.issue}</div>
      <div className="cell system-cell">{ticket.system}</div>
      <div className="cell client-cell">{ticket.client}</div>
      <div className="cell developer-cell">{ticket.developer || ''}</div>
      <div className="cell source-cell">{ticket.source || ''}</div>
      <div className="cell priority-cell">
        <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
          {ticket.priority}
        </span>
      </div>
      <div className={`cell status ${statusClass}`}>● {ticket.status}</div>
    </div>
  );
};

export const TicketManagementTable: FC<{ tickets: Ticket[] }> = ({ tickets }) => {
  const gridColumns = "40px 1.2fr 1.2fr 2fr 1.2fr 1.2fr 1.2fr 1fr 1fr 1.2fr";
  const headers = [
    <input key="select-all" type="checkbox" className="header-checkbox" />,
    'Date', 'Ticket ID', 'Issue', 'System', 'Client', 'Developer', 'Source', 'Priority', 'Status'
  ];
  const sortableColumns = ['System', 'Client', 'Developer', 'Source', 'Priority', 'Status'];

  return (
    <div className="ticket-management-table-container">
      <TableContainer 
        headers={headers} 
        columns={gridColumns} 
        sortableColumns={sortableColumns}
      >
        {tickets.map((ticket, index) => (
          <ManagementTicketRow 
            key={`${ticket.ticketId}-${index}`} 
            ticket={ticket} 
            columns={gridColumns} 
          />
        ))}
      </TableContainer>
      
      <div className="pagination">
        <div className="pagination-controls">
          <button className="page-btn">&lt;</button>
          <button className="page-btn">&gt;</button>
        </div>
        <span className="page-info">Page 1 of 2</span>
      </div>
    </div>
  );
};
