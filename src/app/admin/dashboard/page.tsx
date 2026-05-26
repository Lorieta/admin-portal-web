import '@/components/styles/dashboard.scss'
import { OpenTickets, CriticalTickets, SLABreachRiskTicket, AverageResolvedTime, ResolvedToday } from '@/components/admin/dashboard/metric_cards/metric_cards';
import { TicketRow } from "@/components/tickets/TicketTable";
import { TableContainer } from "@/components/ui/Table";
import { mockTickets } from "@/data/tickets";
import { TicketsByPriority, TicketCreatedVsResolved, SlaWeeklyTrend, AgentWorkload, RiskTickets } from '@/components/admin/dashboard/analytics_components/analytics_components';

export default function Dashboard() {
    const gridColumns = "1fr 1fr 2fr 1fr 1fr 1fr 1fr";
    
    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Dashboard</h1>
            
            {/* Top Row: Metric Cards */}
            <div className="metrics-row">
                <OpenTickets />
                <CriticalTickets />
                <SLABreachRiskTicket />
                <AverageResolvedTime />
                <ResolvedToday />
            </div>

            {/* Middle Section: Queue Preview and Sidebar */}
            <div className="middle-section">
                <div className="left-column">
                    <div className='ticket-preview-header'> 
                        <h2>Ticket Queue Preview</h2>
                        <button className='view-btn'>View all</button> 
                    </div>
                    <div className="ticket-preview-container">
                        <div className='table-wrapper'>
                            <TableContainer 
                                headers={['Date', 'Ticket ID', 'Issue', 'System', 'Client', 'Priority', 'Status']}
                                columns={gridColumns}
                                sortableColumns={['System', 'Client', 'Priority', 'Status']}
                            >
                                {mockTickets.slice(0, 5).map((ticket, index) => (
                                    <TicketRow key={`${ticket.ticketId}-${index}`} ticket={ticket} style={{ gridTemplateColumns: gridColumns }} />
                                ))}
                            </TableContainer>
                        </div>
                    </div>

                    <div className="bottom-charts-row">
                        <TicketCreatedVsResolved />
                        <RiskTickets />
                    </div>
                </div>

                <div className="right-column">
                    <AgentWorkload />
                    <TicketsByPriority />
                </div>
            </div>

            {/* Bottom Section: Trend */}
            <div className="trend-section">
                <SlaWeeklyTrend />
            </div>
        </div>
    )
}
