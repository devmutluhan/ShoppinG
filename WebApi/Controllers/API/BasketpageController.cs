using Microsoft.AspNetCore.Mvc;
using BusinessLayer.Manager;
using Model.Model;

namespace WebApi.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketpageController : Controller
    {
        private readonly BasketManager _basketManager;
        public BasketpageController(BasketManager basketManager)
        {
            this._basketManager = basketManager;
        }

        [HttpGet("{customer}/{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_basketManager.Get(id));
        }

        [HttpPost]
        public IActionResult Post(Basket basket)
        {
            _basketManager.Add(basket);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _basketManager.Delete(id);
            return Ok();
        }
    }
}
