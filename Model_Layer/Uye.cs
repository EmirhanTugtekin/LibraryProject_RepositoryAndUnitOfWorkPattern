using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model_Layer
{
    public class Uye:BaseEntity
    {
        public string Soyad { get; set; }
        public string Tc { get; set; }
        public string Tel { get; set; }
        public DateTime KayitTarihi { get; set; }
        public string Mail { get; set; }
        public string Sifre { get; set; }
        public int Ceza { get; set; }
        public char Yetki { get; set; }
        public virtual OduncKitap OduncKitaplar { get; set; } //virtual sayesinde bir controllerda üyeyi çağırırken Include(OduncKitaplar) demeye gerek kalmıyor
    }
}
