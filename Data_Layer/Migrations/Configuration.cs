namespace Data_Layer.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Data_Layer.Context>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;//true olursa veritabanı otomatik güncellenir
            AutomaticMigrationDataLossAllowed = true;//tabloda veri olmasına rağmen değişikliğe izin verdim
            ContextKey = "Data_Layer.Context";
        }

        protected override void Seed(Data_Layer.Context context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.
        }
    }
}
