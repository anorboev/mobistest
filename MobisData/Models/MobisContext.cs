using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace MobisData.Models
{
    public class MobisContext : DbContext
    {
        public MobisContext(DbContextOptions<MobisContext> options)
            : base(options)
        { }

        public DbSet<Company> Companies { get; set; }
        public DbSet<Worker> Workers { get; set; }
        public DbSet<Task> Tasks { get; set; }
    }
}
