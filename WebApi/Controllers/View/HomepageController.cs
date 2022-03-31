using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.View
{
    public class HomepageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
