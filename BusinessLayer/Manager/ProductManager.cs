using DataAccessLayer.Abstract;
using Model.Model;
using System.Collections.Generic;

namespace BusinessLayer.Manager
{
    public class ProductManager
    {  
        private readonly IProductRepository productRepository;

        public ProductManager(IProductRepository productRepos)
        {
            this.productRepository = productRepos;
        }
        public List<Product> GetAll()
        {
            return productRepository.GetAll();
        }
        public List<Product> GetByCategory(int id)
        {
            return productRepository.GetByCategory(id);
        }
        public Product Get(int input)
        {
            return productRepository.Get(input);
        }
        public void Add(Product product)
        {
            productRepository.Add(product);
        }
        public void Delete(int input)
        {
            productRepository.Delete(input);
        }
        public void Update(Product product, int input)
        {
            productRepository.Update(product, input);
        }
    }
}
