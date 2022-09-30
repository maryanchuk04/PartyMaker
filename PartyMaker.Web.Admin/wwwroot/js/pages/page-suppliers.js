$(function () {
    $(".btn-view-supplier").click(function () {
        $.ajax({
            url: '/Suppliers?handler=SupplierServices',
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("RequestVerificationToken",
                    $('input:hidden[name="__RequestVerificationToken"]').val());
            },
            data: {
                supplierId: $(this).data("supplierid")
            },
            success: function (data) {
 
                var rowsStr = "";
                for (var i = 0; i < data.length; i++)
                {
                    rowsStr += "<tr><td><img src='" + data[i].imageUrl + "' height='170'/></td><td>" + data[i].name + "</td><td>" + data[i].description + "</td></tr>";
                }
                $("#supplier-services tbody").html(rowsStr);
                $("#modal-view-supplier").modal('show');
            }
        });
    });
});