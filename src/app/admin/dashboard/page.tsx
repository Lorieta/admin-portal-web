import '@/components/styles/dashboard.scss'
import { OpenTickets, CriticalTickets, SLABreachRiskTicket, AverageResolvedTime, ResolvedToday } from '@/components/admin/dashboard/metric_cards/metric_cards';
import { TicketRow } from "@/components/tickets/TicketTable";
import { TableContainer } from "@/components/ui/Table";
import { mockTickets } from "@/data/tickets";

export default function Dashboard(){
    const gridColumns = "1fr 1fr 2fr 1fr 1fr 1fr 1fr";
    return(
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="metric-cards-container" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <OpenTickets />
                <CriticalTickets />
                <SLABreachRiskTicket />
                <AverageResolvedTime />
                <ResolvedToday />
            </div>

   <div className='ticket-preview'> 
    <h2>Ticket Queue Preview</h2>
                <button className='view-btn'>View all</button> </div>
               

            <div className='table'>
             
               
                <TableContainer 
                    headers={['Date', 'Ticket ID', 'Issue', 'System', 'Client', 'Priority', 'Status']}
                    columns={gridColumns}
                    sortableColumns={['System', 'Client', 'Priority', 'Status']}
                >
                    {mockTickets.map((ticket, index) => (
                        <TicketRow key={`${ticket.ticketId}-${index}`} ticket={ticket} style={{ gridTemplateColumns: gridColumns }} />
                    ))}
                </TableContainer>
            </div>
        </div>
    )
}
