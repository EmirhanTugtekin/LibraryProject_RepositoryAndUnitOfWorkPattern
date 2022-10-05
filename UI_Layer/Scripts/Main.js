$(document).on("click", "#ktgEkle", async function () {
    const { value: formValues } = await Swal.fire({
        title: 'Kategori Ekle',
        html:
            '<input id="ktgAd" class="swal2-input">'
    });

    if (formValues) {
        var ktgAd = $("#ktgAd").val();
        $.ajax({
            type: 'Post',
            url: '/Kategori/EkleJson',
            data: { "ktgAd": ktgAd },
            dataType: 'Json',
            success: function (data) {
                var ktgId =  data.Result.Id ;
                var ktgAd = '<td>' + data.Result.Ad + '</td>';
                var guncelleButon = "<td><button class='guncelle btn btn-custom' value='" + ktgId + "'>Güncelle</button></td>";
                var silButton = "<td><button class='sil btn btn-danger' value='" + ktgId + "'>Sil</button></td>";
                var kitapAdet = "<td>0</td>";
                $("#example tbody").prepend('<tr>' + ktgAd + kitapAdet + guncelleButon + silButton + '</tr>');
                Swal.fire({
                    type: 'success',
                    title: 'Kategori Eklendi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            },
            error: function () {
                Swal.fire({
                    type: 'error',
                    title: 'Kategori Eklenmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
        });
    }
});

/////////////////////////////////

$(document).on("click", ".guncelle", async function () {
    var ktgId = $(this).val();
    var ktgAdTd = $(this).parent("td").parent("tr").find("td:first");
    var ktgAd = ktgAdTd.html();

    const { value: formValues } = await Swal.fire({
        title: 'Kategori Güncelle',
        html:
            '<input id="ktgAd" value="' + ktgAd + '"class=swal2-input">'
    })

    ktgAd = $("#ktgAd").val();

    $.ajax({
        type: 'Post',
        url: '/Kategori/GuncelleJson',
        data: { "ktgId": ktgId, "ktgAd": ktgAd },
        dataType: 'Json',
        success: function (data) {
            if (data == "1") {
                ktgAdTd.html(ktgAd);
                Swal.fire({
                    type: 'success',
                    title: 'Kategori Güncellendi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            }
            else {
                Swal.fire({
                    type: 'success',
                    title: 'Kategori Güncellenmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Kategori eklenmedi',
                text: 'Bir sorun ile karşılaşıldı!'
            });
        }
    });
});

///////////////////////

$(document).on("click", ".sil", async function () {
    var tr = $(this).parent("td").parent("tr");
    var ktgId = $(this).val();
    $.ajax({
        type: 'Post',
        url: '/Kategori/SilJson',
        data: { "ktgId": ktgId },
        dataType: 'Json',
        success: function (data) {
            if (data == "1") {
                tr.remove();
                Swal.fire({
                    type: 'success',
                    title: 'Kategori Silindi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            }
            else {
                Swal.fire({
                    type: 'success',
                    title: 'Kategori Silinmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
            
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Kategori Silinmedi',
                text: 'Bir sorun ile karşılaşıldı!'
            });
        }
    });
});
//-------------------------------------------------------------

$(document).on("click", "#yazarEkle", async function () {
    const { value: formValues } = await Swal.fire({
        title: 'Yazar Ekle',
        html:
            '<input id="yzrAd" class="swal2-input">'
    });

    if (formValues) {
        var yzrAd = $("#yzrAd").val();
        $.ajax({
            type: 'Post',
            url: '/Yazar/EkleJson',
            data: { "yzrAd": yzrAd },
            dataType: 'Json',
            success: function (data) {
                var yzrId = data.Result.Id;
                var yzrAd = '<td>' + data.Result.Ad + '</td>';
                var guncelleButon = "<td><button class='guncelle btn btn-custom' value='" + yzrId + "'>Güncelle</button></td>";
                var silButton = "<td><button class='sil btn btn-danger' value='" + yzrId + "'>Sil</button></td>";
                var kitapAdet = "<td>0</td>";
                $("#example tbody").prepend('<tr>' + yzrAd + kitapAdet + guncelleButon + silButton + '</tr>');
                Swal.fire({
                    type: 'success',
                    title: 'Yazar Eklendi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            },
            error: function () {
                Swal.fire({
                    type: 'error',
                    title: 'Yazar Eklenmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
        });
    }
});

/////////////////////////////////

$(document).on("click", ".yazarGuncelle", async function () {
    var yzrId = $(this).val();
    var yzrAdTd = $(this).parent("td").parent("tr").find("td:first");
    var yzrAd = yzrAdTd.html();

    const { value: formValues } = await Swal.fire({
        title: 'Yazar Güncelle',
        html:
            '<input id="yzrAd" value="' + yzrAd + '"class=swal2-input">'
    })

    yzrAd = $("#yzrAd").val();

    $.ajax({
        type: 'Post',
        url: '/Yazar/GuncelleJson',
        data: { "yzrId": yzrId, "yzrAd": yzrAd },
        dataType: 'Json',
        success: function (data) {
            if (data == "1") {
                yzrAdTd.html(yzrAd);
                Swal.fire({
                    type: 'success',
                    title: 'Yazar Güncellendi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            }
            else {
                Swal.fire({
                    type: 'success',
                    title: 'Yazar Güncellenmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Yazar eklenmedi',
                text: 'Bir sorun ile karşılaşıldı!'
            });
        }
    });
});

//////////////////////////

$(document).on("click", ".yazarSil", async function () {
    var tr = $(this).parent("td").parent("tr");
    var yzrId = $(this).val();
    $.ajax({
        type: 'Post',
        url: '/Yazar/SilJson',
        data: { "yzrId": yzrId },
        dataType: 'Json',
        success: function (data) {
            if (data == "1") {
                tr.remove();
                Swal.fire({
                    type: 'success',
                    title: 'Yazar Silindi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            }
            else {
                Swal.fire({
                    type: 'success',
                    title: 'Yazar Silinmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                });
            }
            
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Yazar Silinmedi',
                text: 'Bir sorun ile karşılaşıldı!'
            });
        }
    });
});

//--------------------------------------------------
$(document).on("click", "#kategoriEkle", function () {
    var secilenKategoriAd = $("#kategoriler").val();
    var secilenId = $("#kategoriler option:selected").attr("data-id");
    $("#eklenenKategoriler").append('<div id="' + secilenId + '"class="col-md-1 bg-primary kategoriSil" style="margin-right:2px; margin-bottom:2px;">' + secilenKategoriAd + '</div>');
    $("#kategoriler option:selected").remove();

});

$(document).on("click", ".kategoriSil", function () {
    var id = $(this).attr("id");
    var kategoriAd = $(this).html();
    $("#kategoriler").append('<option data-id="' + id + '">' + kategoriAd + '</option>');
    $(this).remove();
});

$(document).on("click", "#kitapKaydet", function () {
    var degerler = {
        kategoriler: [],
        yazar:$("#yazar option:selected").attr("data-id"),
        kitapAd:$("#kitapAd").val(),
        kitapAdet:$("#kitapAdet").val(),
        siraNo:$("#siraNo").val()
    };

    $("#eklenenKategoriler div").each(function () {
        var id = $(this).attr("id");
        degerler.kategoriler.push(id);
    });

    $.ajax({
        type: 'Post',
        url: '/Kitap/EkleJson',
        data: JSON.stringify(degerler),
        dataType: 'JSON',
        contentType: 'application/json;charset=utf-8',
        success: function (gelenDeg) {
            if (gelenDeg == "1") {
                Swal.fire({
                    type: 'success',
                    title: 'Kitap eklendi',
                    text: 'İşlem başarıyla gerçekleşti!'
                });
            }
            else if ("bosOlamaz") {
                Swal.fire({
                    type: 'error',
                    title: 'Kitap eklenmedi',
                    text: 'Bir sorun ile karşılaşıldı!'
                })
            }
            
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Kitap eklenmedi',
                text: 'Bir sorun ile karşılaşıldı!'
            });
        }
        
    });
});