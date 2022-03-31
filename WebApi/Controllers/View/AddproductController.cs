using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.View
{
    public class AddproductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
