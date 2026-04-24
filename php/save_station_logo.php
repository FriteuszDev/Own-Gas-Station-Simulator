<?php
require 'db.php';

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if ($data) {
    $sql = "UPDATE gas_station SET station_name = ?, station_logo_id = ? WHERE station_id = 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        $data['nazwa'], 
        $data['logo_id']
    ]);
    
    echo "Zmiany zostały zapisane!";
}
?>