using backend.Data.DTOs;
using backend.Data.Entity;

namespace backend.Data.Repository
{
    public interface ITicketRepository
    {
        public Ticket SaveTicket(Ticket ticket);
        public Ticket DeleteTicket(int id);
        public Ticket UpdateTicket(int id, Ticket ticket);

        public List<Ticket> GetAllTicket();
    }
}
