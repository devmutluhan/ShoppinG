using Model.Model;
using System.Collections.Generic;

namespace DataAccessLayer.Abstract
{
    public interface ICustomerRepository
    {
        public void Add(Customer customer);
        public void Update(Customer customer,int Input);
        public void Delete(int Input);
        public Customer Get(int Input);
        public List<Customer> GetAll();
    }
}
