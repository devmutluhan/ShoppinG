using Dapper;
using DataAccessLayer.Abstract;
using Model.Model;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessLayer.Repository
{
    public class CustomerRepository : BaseRepository, ICustomerRepository
    {
        public CustomerRepository(Settings settings) : base(settings.ConnectionString)
        {

        }

        public void Add(Customer customer)
        {
            using (var connection = GetConnection())
            {
                connection.Execute(@"Insert Into Customer 
                    (Name,Surname,Phone,Address,Email,Password,Type) 
                    Values (@Name,@Surname,@Phone,@Address,@Email,@Password,@Type)", customer);
            }
        }

        public void Delete(int input)
        {
            using (var connection = GetConnection())
            {
                connection.Execute($"Delete From Customer Where CustomerId={input}");
            }
        }

        public Customer Get(int input)
        {
            using (var connection = GetConnection())
            {
                return connection.Query<Customer>($"Select* From Customer Where CustomerId={input}").FirstOrDefault();
            }
        }

        public List<Customer> GetAll()
        {
            using (var connection = GetConnection())
            {
                return connection.Query<Customer>("Select*From Customer").ToList();
            }
        }

        public void Update(Customer customer, int input)
        {
            using (var connection = GetConnection())
            {
                connection.Execute(@$"Update Customer Set 
                    Name=@Name, Surname=@Surname, Phone=@Phone,
                    Address=@Address, Email=@Email, Password=@Password 
                    Where CustomerId={input}",customer);
            }
        }
    }
}
