using DataAccessLayer.Abstract;
using Model.Model;
using Model.Entities;
using System.Collections.Generic;

namespace BusinessLayer.Manager
{
    public class BasketManager
    {
        private readonly IBasketRepository basketRepository;
        public BasketManager(IBasketRepository basketRepos)
        {
            this.basketRepository = basketRepos;
        }
        public List<BasketProduct> Get(int input)
        {
            return basketRepository.Get(input);
        }
        public void Add(Basket basket)
        {
            basketRepository.AddProduct(basket);
        }
        public void Delete(int input)
        {
            basketRepository.Delete(input);
        }
    }
}
