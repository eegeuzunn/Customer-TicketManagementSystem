using backend.Data.Entity;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Repository
{
    public class UserRepository : IUserRepository
    {

        private readonly AppDbContext DbContext;

        public UserRepository(AppDbContext DbContext)
        {
            this.DbContext = DbContext;
        }

        public User DeleteById(int id)
        {
            var deleteUser = DbContext.Users.SingleOrDefault(u => u.Id == id);

            if (deleteUser == null) {
                return null;
            }

            DbContext.Users.Remove(deleteUser);
            DbContext.SaveChanges();

            return deleteUser;
        }

        public  List<User> GetAll()
        {

            var userList = DbContext.Users.ToList();

            return userList;
        }

        public  User GetById(int id)
        {
            var user = DbContext.Users.SingleOrDefault(x => x.Id == id);
            return user;
        }

        public  List<User> InsertMultiple(List<User> users)
        {
            foreach( var user in users)
            {
                user.CreatedAt = DateTime.Now;
                user.LastUpdatedAt = DateTime.Now;

                DbContext.Users.Add(user);
            }

            DbContext.SaveChanges();
            return users;
        }

        public User InsertSingle(User user)
        {
            user.CreatedAt = DateTime.Now;
            user.LastUpdatedAt = DateTime.Now;

            DbContext.Users.Add(user);
            DbContext.SaveChanges();

            return user;
        }

        public User UpdateById(int id, User user)
        {
            var dbUser = DbContext.Users.SingleOrDefault(x => x.Id == id);

            if (dbUser == null)
                return null;

            dbUser.Name = user.Name;
            dbUser.Surname = user.Surname;
            dbUser.PhoneNumber = user.PhoneNumber;
            dbUser.Email = user.Email;
            dbUser.Password = user.Password;

            dbUser.LastUpdatedAt = DateTime.Now;

            return dbUser;
        }
    }
}
