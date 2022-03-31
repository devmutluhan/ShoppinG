using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers.View
{
    
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
