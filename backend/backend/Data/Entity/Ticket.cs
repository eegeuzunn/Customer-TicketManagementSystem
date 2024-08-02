using System.ComponentModel.DataAnnotations;

namespace backend.Data.Entity
{
    public class Ticket
    {
        [Key]   
        public int Id { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 1, ErrorMessage = "Başlık 1-50 karakter arasında değil")]
        public string Title { get; set; }

        [Required]
        [MinLength(10, ErrorMessage = "Tanım 10 karakterden az olamaz")]
        [MaxLength(1000, ErrorMessage = "Tanım 1000 karakterden uzun olamaz")]
        public string Description { get; set; }

        [Required]
        public string AuthorFullName { get; set; }

        public DateTime CreatedAt { get; set; }

        public string PhoneNumber { get; set; }



        public int CardinalityId { get; set; } = 5;
        public Cardinality cardinality {  get; set; }

        
    }
}
