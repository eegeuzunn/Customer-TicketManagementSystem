using System.ComponentModel.DataAnnotations;

namespace backend.Data.DTOs
{
    public class UserDto
    {
 
        public int Id { get; set; }

        [MaxLength(100)]
        public string Name { get; set; }

        [MaxLength(256)]
        public string Email { get; set; }

        [MinLength(6, ErrorMessage = "Şifre Uzunluğu 6 karakterden az olamaz"), MaxLength(25, ErrorMessage = "Şifre uzunluğu 25 karakterden fazla olamaz")]
        public string Password { get; set; }

        [MaxLength(100)]
        public string Surname { get; set; }

        [MaxLength(11)]
        public string PhoneNumber { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime LastUpdatedAt { get; set; }

    }
}
