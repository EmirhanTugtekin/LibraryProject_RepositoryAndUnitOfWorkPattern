using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model_Layer
{
    public class OduncKitap:BaseEntity
    {
        public int KitapId { get; set; }
        public int UyeId { get; set; }
        public DateTime AlisTarihi { get; set; }
        public DateTime GetirecegiTarih { get; set; }
        public DateTime? GetirdigiTarih { get; set; }
    }
}
