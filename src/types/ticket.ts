export interface Ticket {
  date: string;
  time: string;
  ticketId: string;
  issue: string;
  system: string;
  client: string;
  developer?: string;
  source?: string;
  priority: 'Critical' | 'Medium' | 'Low';
  status: string;
}
