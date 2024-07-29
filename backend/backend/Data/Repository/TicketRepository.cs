using backend.Data.Entity;
using Microsoft.EntityFrameworkCore;

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

        public List<Ticket> GetAllTicket()
        {
            var ticketList = dbContext.Tickets.Include(t => t.cardinality).ToList();

            return ticketList;
        }

        public Ticket UpdateTicket(int id, Ticket ticket)
        {
            var dbTicket = dbContext.Tickets.SingleOrDefault(t => t.Id == id);
            if (dbTicket == null)
                return null;
            
            dbTicket.cardinality = ticket.cardinality;
            dbTicket.CardinalityId = ticket.CardinalityId;
            dbTicket.Title = ticket.Title;
            dbTicket.Description = ticket.Description;
            dbTicket.AuthorFullName = ticket.AuthorFullName;
            dbContext.SaveChanges();
            return dbTicket;
        }
    }
}
