using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.View
{
    public class SignuppageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
