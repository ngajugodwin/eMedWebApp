using eMedApp.API.Model.User;
using Microsoft.EntityFrameworkCore;

namespace eMedApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            :base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
    }
}