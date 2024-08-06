using backend.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace backend.Data.DTOs
{
    public class CustomerInsertionDto
    {
        
            
            public string CustomerFullName { get; set; }

            public string PhoneNumber { get; set; }

            public string Address { get; set; }


            public ICollection<CustomerComment>? Comments { get; set; }

        

    }
}
