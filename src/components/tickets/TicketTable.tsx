import { Ticket } from '@/types/ticket';
import { CSSProperties, FC } from 'react';
import './ticket_table.scss';

interface TableRowProps {
  ticket: Ticket;
  style?: CSSProperties;
}

export const TicketRow: FC<TableRowProps> = ({ ticket, style }) => {
  const statusClass = ticket.status.toLowerCase().replace(' ', '-');
  return (
    <div className="ticket-row" style={style}>
      <div className="cell date-cell">
        <div className="date">{ticket.date}</div>
        <div className="time">{ticket.time}</div>
      </div>
      <div className="cell ticket-id-cell">{ticket.ticketId}</div>
      <div className="cell issue-cell">{ticket.issue}</div>
      <div className="cell system-cell">{ticket.system}</div>
      <div className="cell client-cell">{ticket.client}</div>
      <div className="cell priority-cell">
        <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
          {ticket.priority}
        </span>
      </div>
      <div className={`cell status ${statusClass}`}>● {ticket.status}</div>
    </div>
  );
};
