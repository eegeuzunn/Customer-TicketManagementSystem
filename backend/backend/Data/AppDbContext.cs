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
        public virtual DbSet<Cardinality> Cardinality { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerComment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Cardinality>().HasData(
                new Cardinality { Id = 1, Value = "Critical" },
                new Cardinality { Id = 2, Value = "Care" },
                new Cardinality { Id = 3, Value = "Non-essential" },
                new Cardinality { Id = 4, Value = "Resolved" },
                new Cardinality { Id = 5, Value = "Undecided"});


            modelBuilder.Entity<Ticket>()
                .HasOne(x => x.cardinality)
                .WithMany()
                .HasForeignKey(z => z.CardinalityId)
                .IsRequired();

            modelBuilder.Entity<Ticket>().
                Property(x => x.CardinalityId)
                .HasDefaultValue(5);

            modelBuilder.Entity<Customer>()
                .HasMany(x => x.Comments)
                .WithOne(y => y.customer)
                .HasForeignKey(z => z.CustomerId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CustomerComment>()
                .HasOne(x => x.User)
                .WithMany(y => y.CustomerComment)
                .HasForeignKey(z => z.UserId)
                .OnDelete(DeleteBehavior.Restrict);

        }
    }
}
