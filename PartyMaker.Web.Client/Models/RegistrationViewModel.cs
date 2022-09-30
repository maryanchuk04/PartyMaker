using Microsoft.AspNetCore.Identity;
using PartyMaker.Domain.Enumerations;
using System.ComponentModel.DataAnnotations;

namespace PartyMaker.Models
{
    public class RegistrationViewModel
    {
        
        [DataType(DataType.Text)]
        public string? FirstName { get; set; }

        
        [DataType(DataType.Text)]
        public string? LastName { get; set; }

        [Required]
        [EmailAddress]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }


        [Required]
        [Compare("Password")]
        [DataType(DataType.Password)]
        public string PasswordConfirm { get; set; }

        public string Role { get; set; }
       
    }
}
