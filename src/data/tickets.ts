import { Ticket } from '@/types/ticket';

export const mockTickets: Ticket[] = [
  {
    date: '01-01-2025',
    time: '9:00 AM',
    ticketId: 'ZYN-01230',
    issue: 'Payment process...',
    system: 'PaySystem',
    client: 'ABC Corp',
    priority: 'Critical' as const,
    status: 'Open'
  },
  {
    date: '01-01-2025',
    time: '9:00 AM',
    ticketId: 'ZYN-01260',
    issue: 'Slow Page',
    system: 'FreeZier',
    client: 'JKL Corp',
    priority: 'Medium' as const,
    status: 'Open'
  },
  {
    date: '01-01-2025',
    time: '9:00 AM',
    ticketId: 'ZYN-01270',
    issue: 'Login Error',
    system: 'ZynPlus',
    client: 'MNO Corp',
    priority: 'Low' as const,
    status: 'Open'
  },
  {
    date: '01-01-2025',
    time: '9:00 AM',
    ticketId: 'ZYN-01270',
    issue: 'Login Error',
    system: 'ZynPlus',
    client: 'MNO Corp',
    priority: 'Low' as const,
    status: 'In Progress'
  },
  {
    date: '01-01-2025',
    time: '9:00 AM',
    ticketId: 'ZYN-01270',
    issue: 'Login Error',
    system: 'ZynPlus',
    client: 'MNO Corp',
    priority: 'Low' as const,
    status: 'Resolved'
  }
];
