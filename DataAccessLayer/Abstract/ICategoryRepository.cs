using Model.Model;
using System.Collections.Generic;

namespace DataAccessLayer.Abstract
{
    public interface ICategoryRepository
    {
        public List<Category> GetAll();
        public Category Get(int Input);

    }
}
