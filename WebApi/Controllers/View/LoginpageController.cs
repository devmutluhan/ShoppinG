using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.View
{
    public class LoginpageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
