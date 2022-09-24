using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model_Layer
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }
        public string Ad { get; set; }
    }
}
