using Model.Entities;
using Model.Model;
using System.Collections.Generic;

namespace DataAccessLayer.Abstract
{
    public interface IBasketRepository
    {
        public List<BasketProduct> Get(int input);
        public void AddProduct(Basket basket);

        public void Delete(int input);
    }
}
