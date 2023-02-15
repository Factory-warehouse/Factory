
using magazyn.Models;
using Microsoft.EntityFrameworkCore;

namespace magazyn.Entities
{
    public class FactoryDatabase : DbContext
    {
        public FactoryDatabase(DbContextOptions<FactoryDatabase> options) : base(options) {
        
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
            });
            modelBuilder.Entity<Product>(eb =>
            {
                eb.Property(wi => wi.UnitPrice).HasColumnType("decimal(3,0)");
            });
        }

    }
}
