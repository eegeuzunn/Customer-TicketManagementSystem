using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Data.Entity
{
    public class User
    {   
        
        [Key]
        public int Id { get; set; }

        [MaxLength(100)]
        [Required]
        public string Name { get; set; }

        [MaxLength(256)]
        [Required]
        public string Email { get; set; }

        [Required]
        [MinLength(6, ErrorMessage = "Şifre Uzunluğu 6 karakterden az olamaz"), MaxLength(25, ErrorMessage = "Şifre uzunluğu 25 karakterden fazla olamaz") ]
        public string Password { get; set; }

        [Required]
        [MaxLength(100)]
        public string Surname { get; set; }

        [Required]
        [MaxLength(11)]
        public string PhoneNumber { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime LastUpdatedAt { get; set; }

        [NotMapped]
        public ICollection<CustomerComment> CustomerComment { get; set; }

    }
}
