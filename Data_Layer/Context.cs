using Data_Layer.Migrations;
using Model_Layer;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Data_Layer
{
    public class Context:DbContext
    {
        public Context() : base("Context")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<Context, Configuration>("Context"));

        }
        public DbSet<Kategori> Kategoriler { get; set; }   
        public DbSet<Kitap> Kitaplar { get; set; }   
        public DbSet<OduncKitap> OduncKitaplar { get; set; }   
        public DbSet<Uye> Uyeler { get; set; }   
        public DbSet<Yazar> Yazarlar { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();//s takısı kaldırma
            base.OnModelCreating(modelBuilder);
        }
    }
}
