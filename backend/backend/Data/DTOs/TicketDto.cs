﻿using backend.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace backend.Data.DTOs
{
    public class TicketDto
    {
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

        public int CardinalityId { get; set; }
        public string CardinalityName { get; set; }
    }
}
