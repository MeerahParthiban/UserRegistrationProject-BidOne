using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using UserRegistrationAPI.Models;

namespace UserRegistrationAPI.Controllers
{
    
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {
        private readonly IWebHostEnvironment WebHostEnvironment;
        public RegistrationController(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }
        
        [HttpPost]
        [Route("submit")]
        //Post Method to get user details from Angular and creates Json file with the user data
        public async Task<IActionResult> Post( [FromBody] User user)

        {
            var userDetails = JsonConvert.SerializeObject(user, Formatting.Indented);
            var fileName = "UserRegistrationJsonFile.json";
            var filePath = Path.Combine(WebHostEnvironment.ContentRootPath, fileName);
            System.IO.File.AppendAllText(filePath, userDetails);
            return Ok("Success");
        }
    }
}
