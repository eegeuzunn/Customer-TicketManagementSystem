using System.ComponentModel.DataAnnotations;

namespace backend.Data.Entity
{
    public class Cardinality
    {
        public int Id { get; set; }
        public string Value { get; set; }

        public ICollection<Ticket> Tickets { get; set; }
    }
}
