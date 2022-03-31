using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.View
{
    public class CustomerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
