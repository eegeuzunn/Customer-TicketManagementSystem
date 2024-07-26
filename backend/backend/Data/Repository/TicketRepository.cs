using backend.Data.Entity;

namespace backend.Data.Repository
{
    public class TicketRepository : ITicketRepository
    {
        AppDbContext dbContext;

        public TicketRepository(AppDbContext dbContext) { 
            this.dbContext = dbContext;
        }

        public Ticket DeleteTicket(int id)
        {
            var ticket = dbContext.Tickets.SingleOrDefault(t => t.Id == id);

            dbContext.Tickets.Remove(ticket);
            dbContext.SaveChanges();
            return ticket;
        }

        public Ticket SaveTicket(Ticket ticket)
        {
            dbContext.Tickets.Add(ticket);
            dbContext.SaveChanges();
            return ticket;
        }

        public Ticket UpdateCardinality(int id, int cardinality)
        {
            var ticket = dbContext.Tickets.SingleOrDefault(t => t.Id == id);
            if (ticket == null)
                return null;

            ticket.CardinalityId = cardinality;
            return ticket;
        }
    }
}
