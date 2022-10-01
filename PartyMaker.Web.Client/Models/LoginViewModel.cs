using System.ComponentModel.DataAnnotations;

namespace PartyMaker.Models
{
    public class LoginViewModel
    {
        [Required]
        [EmailAddress]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

     
        //[DataType(DataType.Text)]
        //public string UserName { get; set; }


        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

    }
}
