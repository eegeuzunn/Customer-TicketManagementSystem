﻿using backend.Data.Entity;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        { }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Ticket> Tickets { get; set; }
        public virtual DbSet<User> Cardinality { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Cardinality>().HasData(
                new Cardinality { Id = 1, Value = "Important" },
                new Cardinality { Id = 2, Value = "Care" },
                new Cardinality { Id = 3, Value = "Redundant" });


            modelBuilder.Entity<Ticket>().HasOne(x => x.cardinality)
                .WithMany(y => y.Tickets )
                .HasForeignKey(z => z.CardinalityId);
        }
    }
}
