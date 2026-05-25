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
      <div className="cell date-time">
        <div>{ticket.date}</div>
        <div className="time">{ticket.time}</div>
      </div>
      <div className="cell">{ticket.ticketId}</div>
      <div className="cell">{ticket.issue}</div>
      <div className="cell">{ticket.system}</div>
      <div className="cell">{ticket.client}</div>
      <div className="cell">
        <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
          {ticket.priority}
        </span>
      </div>
      <div className={`cell status ${statusClass}`}>● {ticket.status}</div>
    </div>
  );
};
