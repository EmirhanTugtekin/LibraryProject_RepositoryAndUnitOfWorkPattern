using Data_Layer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Layer 
{ 
    public class UnitOfWork : IUnitOfWork
    {
        private readonly Context _context;
        public UnitOfWork()
        {
            _context= new Context();
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private bool disposed = false;
        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                    _context.Dispose();
            }
            this.disposed=true;
        }

        public IRepo<T> GetRepo<T>() where T : class
        {
            return new Repo<T>(_context);
        }

        public int SaveChanges()
        {
            try
            {
                return _context.SaveChanges();
            }
            catch (Exception){throw;}
            
        }

    }
}
