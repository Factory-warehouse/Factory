
using magazyn.Models;
using Microsoft.EntityFrameworkCore;

namespace magazyn.Entities
{
    public class FactoryDbContext : DbContext
    {
        public FactoryDbContext(DbContextOptions<FactoryDbContext> options) : base(options) {
        
        }
        public DbSet<Employee> Employees{ get; set; }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>(eb =>
            {
                eb.Property(wi => wi.Email).IsRequired();
                eb.HasMany(wi => wi.Products)
                .WithOne(wi => wi.Employee)
                .HasForeignKey(wi => wi.EmployeeId);
                //Klucz obcy 
            });
            modelBuilder.Entity<Product>(eb =>
            {
                eb.Property(wi => wi.UnitPrice).HasColumnType("decimal(3,0)");
            });
        }

    }
}
