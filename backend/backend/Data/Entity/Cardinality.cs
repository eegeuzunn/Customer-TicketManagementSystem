using System.ComponentModel.DataAnnotations;

namespace backend.Data.Entity
{
    public class Cardinality
    {
        [Key]
        public int Id { get; set; }
        public string Value { get; set; }

    }
}
