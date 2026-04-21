<?php
require 'db.php';
$sql = "SELECT station_logo_id FROM gas_station WHERE station_id = 1";
$stmt = $pdo->query($sql);
$station = $stmt->fetch();
header('Content-Type: application/json');
echo json_encode($station);
?>