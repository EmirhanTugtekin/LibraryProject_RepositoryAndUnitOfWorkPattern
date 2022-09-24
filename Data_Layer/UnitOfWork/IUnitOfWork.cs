using Data_Layer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Layer
{
    public interface IUnitOfWork:IDisposable
    {
        IRepo<T> GetRepo<T>() where T : class;
        int SaveChanges();
    }
}
