using Model.Model;
using System.Collections.Generic;

namespace DataAccessLayer.Abstract
{
    public interface IProductRepository
    {
        public List<Product> GetAll();
        public List<Product> GetByCategory(int id);
        public Product Get(int Input);
        public void Add(Product product);
        public void Update(Product product, int Input);
        public void Delete(int Input);
    }

}
