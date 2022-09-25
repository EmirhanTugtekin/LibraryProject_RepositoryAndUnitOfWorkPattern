//$(document).on("click", "#ktgEkle", async function () {
//    $(document).on("click", "#kategoriEkle", function () {
//        var secilenKategoriAd = $("#kategoriler").val();
//        if (secilenKategoriAd != null && secilenKategoriAd != "") {
//            var secilenId = $("#kategoriler option:selected").attr("data-id");
//            $("#eklenenKategoriler").append('<div id="' + secilenId + '" class="col-md-1 bg-primary kategoriSil" style="margin-right:2px; margin-bottom:2px;">' + secilenKategoriAd + '</div>');
//            $("#kategoriler option:selected").remove();
//        }
//    });
//});

$(document).on("click", "#ktgEkle", async function () {
    const { value: formValues } = await Swal.fire({
        title: 'Kategori Ekle',
        html:
            '<input id="ktgAd class="swal2-input">'
    })

    if
})