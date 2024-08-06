namespace backend.Data.DTOs
{
    public class CustomerCommentInsertionDto
    {
        public string CommentText { get; set; }
        public int CustomerId { get; set; }
        public int UserId { get; set; }
    }
}
