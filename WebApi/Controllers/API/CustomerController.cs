using Microsoft.AspNetCore.Mvc;
using BusinessLayer.Manager;
using Model.Model;

namespace WebApi.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : Controller
    {

        private readonly CustomerManager _customerManager;
        public CustomerController(CustomerManager customerManager)
        {
            this._customerManager = customerManager;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_customerManager.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_customerManager.Get(id));
        }

        [HttpPost]
        public JsonResult Post(Customer customer)
        {
            _customerManager.Add(customer);
            return Json("Kayıt İşlemi Başarılı.");
        }

        [HttpPut("{id}")]
        public JsonResult Put(Customer customer, int id)
        {
            
            return Json("Güncelleme İşlemi Başarılı.");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            _customerManager.Delete(id);
            return Json("Kaldırma İşlemi Başarılı.");
        }
    }
}
