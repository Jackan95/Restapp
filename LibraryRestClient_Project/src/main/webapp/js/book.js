$(document).ready(function(){
alert("Hello from jQuery!");
	$("#FindBtn").click(function() {
		if(validateFind() == true){
		var strValue = $("#id").val();
		if (strValue != "") {
			$.ajax({
				method: "GET",
				url: "http://localhost:8080/RestServerLibraryProject/Books/" + strValue,
				error: ajaxFindReturnError,
				success: ajaxFindReturnSuccess
			})
			function ajaxFindReturnSuccess(result, status, xhr) {
				ParseJsonFileBook(result);
			}
			function ajaxFindReturnError(result, status, xhr) {
				alert("Error");
				console.log("Ajax-find book: " + status);
				}
			}
		}
	})//btnclick

	$("#DeleteBtn").click(function() {
		if(validateDelete() == true){
		var strValue = $("#id").val();
		if (strValue != "") {
			$.ajax({
				method: "DELETE",
				url: "http://localhost:8080/RestServerLibraryProject/Books/" + strValue,
				error: ajaxDelReturnError,
				success: ajaxDelReturnSuccess
			})
			function ajaxDelReturnSuccess(result, status, xhr) {
				clearFields();
				$("#title").attr("placeholder", "Book deleted");
			}
			function ajaxDelReturnError(result, status, xhr) {
				alert("Error");
				console.log("Ajax-find book: " + status);
				}
			}
		}
	})//btnclick
	
	$("#AddBtn").click(function() {
		if(validateAdd() == true){
		var strId = "0";
		var strTitle = $("#title").val();
		var strIsbn = $("#isbn").val();
		var obj = { id: strId, title: strTitle, isbn: strIsbn };
		var jsonString = JSON.stringify(obj);
		if (strId != "") {
			$.ajax({
				type: 'POST',
				url: "http://localhost:8080/RestServerLibraryProject/Books/",
				data: jsonString,
				dataType: 'json',
				error: ajaxAddReturnError,
				success: ajaxAddReturnSuccess
			})
			function ajaxAddReturnSuccess(result, status, xhr) {
				clearFields();
				$("#title").attr("placeholder", "book added");
			}
			function ajaxAddReturnError(result, status, xhr) {
				alert("Error Add");
				console.log("Ajax-find book: " + status);
				}
			}
		}
	})//btnclick
	
	$("#UpdateBtn").click(function() {
		if(validateUpdate() == true){
		var strId = $("#id").val();
		var strTitle = $("#title").val();
		var strIsbn = $("#isbn").val();
		var obj = { id: strId, title: strTitle, isbn: strIsbn };
		var jsonString = JSON.stringify(obj);
		if (strId != "") {
			$.ajax({
				type: 'PUT',
				url: "http://localhost:8080/RestServerLibraryProject/Books/" + strId,
				data: jsonString,
				dataType: 'json',
				error: ajaxUpdateReturnError,
				success: ajaxUpdateReturnSuccess
			})
			function ajaxUpdateReturnSuccess(result, status, xhr) {
				clearFields();
				$("#title").attr("placeholder", "Book updated");
			}
			function ajaxUpdateReturnError(result, status, xhr) {
				alert("Error Update");
				console.log("Ajax-find book: " + status);
				}
			}
		}
	})//btnclick
	
	$("#ClearBtn").click(function() {
		clearFields();
	
	})//btnclick

});//End ready function

function ParseJsonFileBook(result) {
	$("#id").val(result.id);
	$("#title").val(result.title);
	$("#isbn").val(result.isbn);
}

function clearFields() {
	$("#id").val("");
	$("#title").val("");
	$("#isbn").val("");
}


function validateDelete() {
    var id = document.getElementById("id").value;
    if (id === "") {
        alert("Please enter an ID.");
        return false;
    }
    return true;
}

function validateAdd() {
    var title = document.getElementById("title").value;
    var isbn = document.getElementById("isbn").value;
    if (title === "" || isbn === "") {
        alert("Please fill in both title and ISBN.");
        return false;
    }
    return true;
}

function validateFind() {
        var id = document.getElementById("id").value;
        if (id === "") {
            alert("Please enter an ID.");
            return false;
        }
        return true;
    }

function validateUpdate() {
        var id = document.getElementById("id").value;
        if (id === "") {
            alert("Please enter a valid ID, (Only title and isbn can be updated!))");
            return false;
        }
        // You can add additional validation logic here if needed
        return true;
    }
