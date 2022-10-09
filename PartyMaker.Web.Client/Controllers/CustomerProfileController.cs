using Microsoft.AspNetCore.Mvc;
using PartyMaker.Application.Services;
using PartyMaker.Domain.Enumerations;
using PartyMaker.Domain.Interfaces.Services;
using PartyMaker.Domain.Models;
using PartyMaker.ViewModels.Customer;

namespace PartyMaker.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerProfileController : ControllerBase
    {
        private readonly ICustomerService _customerService;

        public CustomerProfileController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetCustomerById(Guid id)
        {
            return Ok(_customerService.GetById(id));
        }

        [HttpPost("[action]/{id}")]
        public IActionResult ChangeCustomerProfileInfo(Guid id, CustomerInfoViewModel customerInfoViewModel)
        {
            _customerService.ChangeCustomerInfo(id, customerInfoViewModel.Email, customerInfoViewModel.UserName, customerInfoViewModel.Age.Value, customerInfoViewModel.FirstName, customerInfoViewModel.LastName);
            return Ok();
        }

        [HttpGet("[action]/{id}/{state}")]
        public IActionResult GetFilteredOrders(Guid id, int state)
        {
            return Ok(_customerService.GetFilterOrders(id, state));
        }

    }
}