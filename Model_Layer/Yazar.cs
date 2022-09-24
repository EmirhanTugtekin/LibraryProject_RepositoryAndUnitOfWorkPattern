using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model_Layer
{
    public class Yazar:BaseEntity
    {
        public virtual List<Kitap> Kitaplar { get; set; } //virtual sayesinde bir controllerda yazarı çağırırken Include(Kitaplar) demeye gerek kalmıyor
    }
}
