using System.ComponentModel.DataAnnotations;

namespace backend.Data.DTOs
{
    public class UserInsertionDto
    {

        [MaxLength(100)]
        [Required]
        public string Name { get; set; }

        [MaxLength(256)]
        [Required]
        public string Email { get; set; }

        [Required]
        [MinLength(6, ErrorMessage = "Şifre Uzunluğu 6 karakterden az olamaz"), MaxLength(25, ErrorMessage = "Şifre uzunluğu 25 karakterden fazla olamaz")]
        public string Password { get; set; }

        [Required]
        [MaxLength(100)]
        public string Surname { get; set; }

        [Required]
        [MaxLength(11)]
        public string PhoneNumber { get; set; }
    }
}
