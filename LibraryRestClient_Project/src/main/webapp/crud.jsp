<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
	
</script>
<meta charset="ISO-8859-1">
<link rel="stylesheet" type="text/css" href="css/Library.css">
<script src="js/book.js"></script>
<title>Rest Test</title>
</head>
<body>
	<header>
		<p>RestClient for Library</p>
	</header>
	
		<section id="main">
			<section id="content">
				<article>
					<fieldset id="PersonalFS">
						<legend>Book</legend>
						<label>ID:</label><br> 
						<input type="text" name="id" id="id" value="">
						<br> <label>Title:</label><br> 
						<input type="text" name="title" id="title" value="">
						<br> <label>ISBN:</label><br> 
						<input type="text" name="isbn" id="isbn" value="">
						<br> <br> 
						 <!--<input type="button" name="submitBtn" value="Find" id="FindBtn">
						<input type="button" name="submitBtn" value="Add" id="AddBtn">
						<input type="button" name="submitBtn" value="Delete" id="DeleteBtn"> 
						<input type="button" name="submitBtn" value="Update" id="UpdateBtn"> -->
						<button name="submitBtn" value="Find" id="FindBtn">Find</button>
						<button name="submitBtn" value="Add" id="AddBtn">Add</button>
						<button name="submitBtn" value="Delete" id="DeleteBtn">Delete</button>
						<button name="submitBtn" value="Update" id="UpdateBtn">Update</button>
						<button name="submitBtn" value="Clear" id="ClearBtn">Clear</button>
					</fieldset>
				</article>
			</section>
		</section>
	
	<footer>
		<p>&copy; RG association</p>
	</footer>
</body>
</html>