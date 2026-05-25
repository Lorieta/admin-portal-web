export interface Ticket {
  date: string;
  time: string;
  ticketId: string;
  issue: string;
  system: string;
  client: string;
  priority: 'Critical' | 'Medium' | 'Low';
  status: string;
}
