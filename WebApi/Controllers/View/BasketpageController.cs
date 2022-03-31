using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.View
{
    public class BasketpageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
