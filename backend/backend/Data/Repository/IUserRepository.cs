using backend.Data.Entity;

namespace backend.Data.Repository
{
    public interface IUserRepository
    {

        public List<User> GetAll();
        public User GetById(int id);
        public User DeleteById(int id);
        public User UpdateById(int id, User user);
        public User InsertSingle(User user);
        public List<User> InsertMultiple(List<User> user);


    }
}
