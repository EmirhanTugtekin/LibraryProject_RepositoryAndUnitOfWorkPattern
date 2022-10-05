using Data_Layer;
using Model_Layer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UI_Layer.Controllers
{
    public class YazarController : Controller
    {
        // GET: Yazar
        UnitOfWork unitOfWork;

        public YazarController()
        {
            unitOfWork = new UnitOfWork();
        }

        public ActionResult Index()
        {
            var yazarlar = unitOfWork.GetRepo<Yazar>().GetAll();
            return View(yazarlar);
        }

        [HttpPost]
        public JsonResult EkleJson(string yzrAd)
        {
            Yazar yzr = new Yazar();
            yzr.Ad = yzrAd;
            var eklenenYazar = unitOfWork.GetRepo<Yazar>().Add(yzr);
            unitOfWork.SaveChanges();
            return Json(
                new
                {
                    Result = new
                    {
                        Id = eklenenYazar.Id,
                        Ad = eklenenYazar.Ad
                    },
                    JsonRequestBehavior.AllowGet
                });
        }
        [HttpPost]
        public JsonResult GuncelleJson(int yzrId, string yzrAd)
        {
            var yazar = unitOfWork.GetRepo<Yazar>().GetById(yzrId);
            yazar.Ad = yzrAd;
            var durum = unitOfWork.SaveChanges();
            if (durum > 0) return Json("1");
            return Json("0");
        }
        [HttpPost]
        public JsonResult SilJson(int yzrId)
        {
            unitOfWork.GetRepo<Yazar>().Delete(yzrId);
            var durum = unitOfWork.SaveChanges();
            if (durum > 0) return Json("1");
            return Json("0");
        }
    }
}