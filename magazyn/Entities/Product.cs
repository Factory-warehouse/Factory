namespace magazyn.Models
{
    public class Product
    {
        public int Id { get; set; }
        public decimal UnitPrice { get; set; }
        public bool? Status { get; set; }

        public Employee Employee { get; set; }
        // klucz obcy po stronie produktu pracownik ma wiele produktów 
        public int EmployeeId { get; set; }
    }
}
