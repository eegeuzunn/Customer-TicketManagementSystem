using backend.Data.DTOs;
using backend.Data.Entity;
using backend.Data.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api")]
    [ApiController]
    public class CustomerController : Controller
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        [HttpGet("customers")]
        public IActionResult GetAll()
        {
            var customers = _customerRepository.GetAllCustomer();

            if (customers == null)
            {
                return NotFound();
            }

            return Ok(customers);
        }

        [HttpGet("customer/{id}")]
        public IActionResult GetById(int id)
        {


            var customer = _customerRepository.FindCustomerById(id);

            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }
        [HttpGet("customerComment/{id}")]

        public IActionResult GetByIdWithComments(int id)
        {

            var customer = _customerRepository.GetCustomerComments(id);

            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }

        [HttpPost("customer")]
        public IActionResult PostACustomer([FromBody] CustomerInsertionDto customerInsertionDto)
        {

            Customer customer = new Customer();

            customer.PhoneNumber = customerInsertionDto.PhoneNumber;
            customer.Address = customerInsertionDto.Address;
            customer.CustomerFullName = customerInsertionDto.CustomerFullName;

            _customerRepository.SaveACustomer(customer);

            if (customer == null)
            {

                return StatusCode(500, "Some error has occured");
            }

            return Ok(customer);
        }

        [HttpPost("customer/comment")]
        public IActionResult PostAComment([FromBody] CustomerCommentInsertionDto customerCommentInsertionDto)
        {
            CustomerComment customercm = new CustomerComment();

            customercm.CommentText = customerCommentInsertionDto.CommentText;
            customercm.CustomerId = customerCommentInsertionDto.CustomerId;
            customercm.UserId = customerCommentInsertionDto.UserId;

            var comment = _customerRepository.PostAComment(customercm);

            if (comment == null)
            {
                return StatusCode(500, "Some error has occured");
            }

            return Ok(comment);
        }

        [HttpDelete("comment/{commentId}")]
        public IActionResult DeleteComment(int commentId)
        {
            var deleted = _customerRepository.DeleteAComment(commentId);

            if (deleted == null)
            {
                return NotFound("There is no comment with id: " + commentId);
            }

            return Ok(new { Message = "Ticket deleted succesfully.", Data = deleted });


        }

        [HttpDelete("customer/{id}")]
        public IActionResult DeleteACustomerWithId(int id) { 
            
            var deletedCustomer = _customerRepository.DeleteACustomer(id);
            
            if(deletedCustomer == null)
            {
                return NotFound("Customer does not exist");
            }

            return StatusCode(200, new { Message = "Customer deleted succesfully", Data = deletedCustomer });
        }

        [HttpPut("customer/{id}")]
        public IActionResult EditACustomer([FromBody] Customer customer, [FromRoute] int id)
        {
            var returnCustomer = _customerRepository.EditACustomer(customer, id);

            if (returnCustomer == null)
                return NotFound("Customer does not found with that id");

            return Ok(returnCustomer);

        }
    }
}