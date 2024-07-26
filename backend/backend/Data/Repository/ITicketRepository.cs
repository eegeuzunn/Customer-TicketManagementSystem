using backend.Data.Entity;

namespace backend.Data.Repository
{
    public interface ITicketRepository
    {
        public Ticket SaveTicket(Ticket ticket);
        public Ticket DeleteTicket(int id);
        public Ticket UpdateCardinality(int id, int cardinality);

    }
}
