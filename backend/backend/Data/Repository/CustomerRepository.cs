using backend.Data.Entity;
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

        public Customer GetCustomerWithComments(int id)
        {
            var customer = _dbcontext.Customers.Include( x => x.Comments).FirstOrDefault();

            return customer;
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
    }
}
