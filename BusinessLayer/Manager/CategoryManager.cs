using DataAccessLayer.Abstract;
using Model.Model;
using System.Collections.Generic;

namespace BusinessLayer.Manager
{
    public class CategoryManager
    {
        private readonly ICategoryRepository categoryRepository;
        public CategoryManager(ICategoryRepository categoryRepos)
        {
            this.categoryRepository = categoryRepos;
        }
        public List<Category> GetAll()
        {
            return categoryRepository.GetAll();
        }
        public Category Get(int input)
        {
            return categoryRepository.Get(input);
        }
    }
}
