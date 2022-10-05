using Data_Layer;
using Model_Layer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UI_Layer.Controllers
{
    public class KitapController : Controller
    {
        // GET: Kitap
        UnitOfWork unitOfWork;

        public KitapController()
        {
            unitOfWork = new UnitOfWork();
        }
        public ActionResult Index()
        {
            var kitaplar = unitOfWork.GetRepo<Kitap>().GetAll();
            return View(kitaplar);
        }
        public ActionResult Ekle()
        {
            ViewBag.Kategoriler = unitOfWork.GetRepo<Kategori>().GetAll();
            ViewBag.Yazarlar = unitOfWork.GetRepo<Yazar>().GetAll();
            return View();
        }
        [HttpPost]
        public JsonResult EkleJson(string[] kategoriler,string yazar,string kitapAdet,string siraNo)
        {
            List<Kategori> k = new List<Kategori>();
            foreach(var kategoriId in kategoriler)
            {
                var kategoriID = Convert.ToInt32(kategoriId);
                var kategori=unitOfWork.GetRepo<Kategori>().GetById(kategoriID);
                k.Add(kategori);
            }

            Kitap kitap = new Kitap();
            kitap.Ad = kitapAdet;
            kitap.Adet = Convert.ToInt32(kitapAdet);
            kitap.YazarId = Convert.ToInt32(yazar);
            kitap.SiraNo = siraNo;
            kitap.Kategoriler = k;
            kitap.EklenmeTarihi = DateTime.Now;
            unitOfWork.GetRepo<Kitap>().Add(kitap);
            var durum=unitOfWork.SaveChanges();

            if (durum > 0)
                return Json("1");
            else return Json("0");
        }
    }
}