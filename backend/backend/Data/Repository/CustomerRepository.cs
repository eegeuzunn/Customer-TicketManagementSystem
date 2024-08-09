using backend.Data.Entity;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly AppDbContext _dbcontext;

        public CustomerRepository(AppDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public Customer FindCustomerById(int id)
        {
            var customer = _dbcontext.Customers.SingleOrDefault(target => target.CustomerId == id);

            return customer;
        }

        public ICollection<Customer> GetAllCustomer()
        {
            var customers = _dbcontext.Customers.ToList();

            return customers;
        }

        public ICollection<CustomerComment> GetCustomerComments(int id)
        {
            var customerComments = _dbcontext.Comments.Where(data => data.CustomerId == id).ToList();

            return customerComments;
        }

        public CustomerComment PostAComment(CustomerComment comment)
        {
            _dbcontext.Comments.Add(comment);
            _dbcontext.SaveChanges();

            return comment;
        }

        public Customer SaveACustomer(Customer customer)
        {
            
            _dbcontext.Customers.Add(customer);
            _dbcontext.SaveChanges();

            return customer;
        }

        public CustomerComment DeleteAComment(int id)
        {

            var comment = _dbcontext.Comments.SingleOrDefault(x => x.CommentId == id);

            if (comment == null)
                return null;

            _dbcontext.Comments.Remove(comment);
            _dbcontext.SaveChanges();


            return comment;
        }

        public Customer DeleteACustomer(int id)
        {
            var customer = _dbcontext.Customers.FirstOrDefault(x => x.CustomerId == id);

            if (customer == null)
                return null;

            _dbcontext.Customers.Remove(customer);
            _dbcontext.SaveChanges();

            return customer;
        }

        public Customer EditACustomer(Customer customer, int id)
        {
            var customerThatId = _dbcontext.Customers.FirstOrDefault( x => x.CustomerId == id);

            if(customerThatId == null)
            {
                return null;
            }

            customerThatId.PhoneNumber = customer.PhoneNumber;
            customerThatId.CustomerFullName = customer.CustomerFullName;
            customerThatId.Address = customer.Address;

            _dbcontext.SaveChanges();

            return customerThatId;
        }
    }
}
