using Dapper;
using DataAccessLayer.Abstract;
using Model.Model;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessLayer.Repository
{
    public class ProductRepository : BaseRepository, IProductRepository
    {
        public ProductRepository(Settings settings) : base(settings.ConnectionString)
        {

        }

        public void Add(Product product)
        {
            using (var connection = GetConnection())
            {
                connection.Execute(@"Insert Into Product (ProductName,Price,Stock,Image,CategoryId)
                   Values (@ProductName,@Price,@Stock,@Image,@CategoryId)", product);
            }
        }

        public void Delete(int input)
        {
            using (var connection = GetConnection())
            {
                connection.Execute($"Delete From Product Where ProductId= {input}");
            }
        }

        public Product Get(int input)
        {
            using (var connection = GetConnection())
            {
                return connection.Query<Product>($"Select*From Product Where ProductId= {input}").FirstOrDefault();
            }
        }

        public List<Product> GetAll()
        {
            using (var connection = GetConnection())
            {
                return connection.Query<Product>($"Select*From Product").ToList();
            }
        }

        public List<Product> GetByCategory(int id)
        {
            using (var connection = GetConnection())
            {
                return connection.Query<Product>($"Select*From Product Where CategoryId = {id}").ToList();
            }
        }

        public void Update(Product product, int input)
        {
            using (var connection = GetConnection())
            {
                connection.Execute($@"Update Product Set 
                    ProductName=@ProductName, Price=@Price, Stock=@Stock,
                    Image=@Image, CategoryId=@CategoryId
                    Where ProductId= {input}", product);
            }
        }
    }
}
