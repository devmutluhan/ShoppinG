using Microsoft.AspNetCore.Mvc;
using BusinessLayer.Manager;
using Model.Model;

namespace WebApi.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : Controller
    {
        private readonly CategoryManager _categoryManager;
        public CategoryController(CategoryManager categoryManager)
        {
            this._categoryManager = categoryManager;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_categoryManager.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_categoryManager.Get(id));
        }

        [HttpPost]
        public IActionResult Post(Category category)
        {
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put(Category category, int id)
        {
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok();
        }
    }
}
