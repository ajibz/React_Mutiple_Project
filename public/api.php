<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json;charset=UTF-8");
$con = mysqli_connect("localhost","ajibztech","ajibose419","acmdcoop");
	$statement = $con->prepare("SELECT * FROM `user_reg`");
	$statement->execute();
	$result = $statement->get_result();
	while ($row = $result->fetch_assoc()) {
	    echo json_encode($row,JSON_FORCE_OBJECT);
	}
	

 ?>