using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model_Layer
{
    public class Kategori:BaseEntity
    {
        public virtual List<Kitap> Kitaplar { get; set; }
    }
}
