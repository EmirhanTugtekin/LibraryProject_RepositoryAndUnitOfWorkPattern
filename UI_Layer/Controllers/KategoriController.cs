using Data_Layer;
using Model_Layer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace UI_Layer.Controllers
{
    public class KategoriController : Controller
    {
        // GET: Kategori
        UnitOfWork unitOfWork;

        public KategoriController()
        {
            unitOfWork = new UnitOfWork();
        }

        public ActionResult Index()
        {
            var kategoriler = unitOfWork.GetRepo<Kategori>().GetAll();
            return View(kategoriler);
        }
    }
}