using Microsoft.AspNetCore.Mvc;
using BusinessLayer.Manager;
using Model.Model;

namespace WebApi.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly ProductManager _productManager;
        public ProductController(ProductManager productManager)
        {
            this._productManager = productManager;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_productManager.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_productManager.Get(id));
        }

        [HttpGet("{category}/{id}")]
        public IActionResult GetByCategory(int id)
        {
            return Ok(_productManager.GetByCategory(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            _productManager.Add(product);
            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult Put([FromBody] Product product, int id)
        {
            _productManager.Update(product,id);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _productManager.Delete(id);
            return Ok();
        }
    }
}
