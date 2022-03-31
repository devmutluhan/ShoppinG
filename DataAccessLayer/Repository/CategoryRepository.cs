using Dapper;
using DataAccessLayer.Abstract;
using Model.Model;
using System.Collections.Generic;
using System.Linq;


namespace DataAccessLayer.Repository
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(Settings settings) : base(settings.ConnectionString)
        {

        }

        public Category Get(int input)
        {
            using (var connection = GetConnection())
            {
                return connection.Query<Category>($"Select From Category Where CategoryId={input}").FirstOrDefault();
            }
        }

        public List<Category> GetAll()
        {
            using (var connection = GetConnection())
            {
                return connection.Query<Category>("Select*From Category").ToList();
            }
        }
    }
}
