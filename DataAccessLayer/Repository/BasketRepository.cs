using Dapper;
using DataAccessLayer.Abstract;
using Model.Model;
using Model.Entities;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessLayer.Repository
{
    public class BasketRepository: BaseRepository,IBasketRepository
    {
        public BasketRepository(Settings settings) : base(settings.ConnectionString)
        {

        }

        public List<BasketProduct> Get(int input)
        {
            using (var connection = GetConnection())
            {
                return connection.Query<BasketProduct>(@$"Select b.BasketId, p.ProductName, p.Image, p.Price
                        From Basket b
                        Inner Join Product p
                        On b.ProductId = p.ProductId
                        Where b.CustomerId = {input} ").ToList();
            }
        }

        public void AddProduct(Basket basket)
        {
            using(var connection = GetConnection())
            {
                connection.Execute(@"Insert Into Basket (CustomerId, ProductId) 
                        Values (@CustomerId, @ProductId)", basket);
            }
        }

        public void Delete(int input)
        {
            using (var connection = GetConnection())
            {
                connection.Execute($"Delete From Basket Where BasketId={input}");
            }
        }
    }
}
