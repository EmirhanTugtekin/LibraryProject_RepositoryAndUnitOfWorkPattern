using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model_Layer
{
    public class Kitap:BaseEntity
    {
        public string SiraNo { get; set; }
        public int Adet { get; set; }       
        public DateTime EklenmeTarihi { get; set; }

        //--------Relations---------
        public int YazarId { get; set; }
        public virtual Yazar KitapYazar { get; set; }

        public virtual List<Kategori> Kategoriler { get; set; }
    }
}
