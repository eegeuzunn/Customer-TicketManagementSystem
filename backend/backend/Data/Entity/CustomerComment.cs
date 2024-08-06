using System.ComponentModel.DataAnnotations;

namespace backend.Data.Entity
{
    public class CustomerComment
    {
        [Key]
        public int CommentId { get; set; }
        public string CommentText { get; set; }


        public int UserId { get; set; }
        public virtual User User { get; set; }

        public int CustomerId { get; set; }
        public virtual Customer customer { get; set; }

    }
}
