using DataAccessLayer.Abstract;
using Model.Model;
using System.Collections.Generic;

namespace BusinessLayer.Manager
{
    public class CustomerManager
    {
        private readonly ICustomerRepository customerRepository;
        public CustomerManager(ICustomerRepository customerRepos)
        {
            this.customerRepository = customerRepos;
        }
        public void Add(Customer customer)
        {
            customerRepository.Add(customer);
        }
        public void Delete(int input)
        {
            customerRepository.Delete(input);
        }
        public List<Customer> GetAll()
        {
            return customerRepository.GetAll();
        }
        public Customer Get(int input)
        {
            return customerRepository.Get(input);
        }
    }
}
