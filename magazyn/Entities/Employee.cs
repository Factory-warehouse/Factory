using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace magazyn.Models
{
    public class Employee
    {
        
        public  int Id { get; set; }
        public string FirstName { get; set; }

        [Index(IsUnique =true)]
        public string Email { get; set; }
        public string LastName { get; set; }
        public string AccessLevel{ get; set; }

        // relacja 1 do wielu, jeden producent może mieć wiele produktów

        public List<Product> Products { get; set; } = new List<Product>();
    }
}
