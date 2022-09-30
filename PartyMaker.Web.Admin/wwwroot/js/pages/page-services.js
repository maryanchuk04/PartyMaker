$(function () {
	$("#btn-create-service").click(function () {
		$("#create-service").removeClass("d-none");
		$("#update-service").addClass("d-none");
		$("#ServiceUpsertModel_Name").val("");
        $("#ServiceUpsertModel_Description").val("");
        $("#ServiceUpsertModel_Id").val("");
        $('#ServiceUpsertModel_Name').prop('readonly', false);
		$("#modal-upsert-service").modal('show');
	});
	$(".btn-edit-service").click(function () {
        $.ajax({
            url: '/Services?handler=ById',
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("RequestVerificationToken",
                    $('input:hidden[name="__RequestVerificationToken"]').val());
            },
            data: {
                id: $(this).data("serviceid")
            },
            success: function (data) {
                
                $("#create-service").addClass("d-none");
                $("#update-service").removeClass("d-none");
                $("#ServiceUpsertModel_Name").val(data.name);
                $("#ServiceUpsertModel_Description").val(data.description);
                $("#ServiceUpsertModel_Id").val(data.id);
                $('#ServiceUpsertModel_Name').prop('readonly', true);
                $("#modal-upsert-service").modal('show'); 
            }
        });
	});
});