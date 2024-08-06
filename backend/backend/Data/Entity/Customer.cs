using System.ComponentModel.DataAnnotations;

namespace backend.Data.Entity
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }

        public string CustomerFullName {  get; set; }

        public string PhoneNumber { get; set; }

        public string Address { get; set; }


        public ICollection<CustomerComment>? Comments { get; set; }

    }
}
