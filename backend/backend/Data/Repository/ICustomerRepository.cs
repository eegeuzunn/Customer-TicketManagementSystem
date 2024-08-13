using backend.Data.Entity;

namespace backend.Data.Repository
{
    public interface ICustomerRepository
    {
        public ICollection<Customer> GetAllCustomer();
        
        public Customer FindCustomerById(int id);

        public ICollection<CustomerComment> GetCustomerComments(int id);

        public Customer SaveACustomer(Customer customer);

        public CustomerComment PostAComment(CustomerComment comment);

        public CustomerComment DeleteAComment(int id);

        public Customer DeleteACustomer(int id);

        public Customer EditACustomer(Customer customer, int id);

    }
}
