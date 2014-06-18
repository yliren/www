 <?php
// on se connecte � MySQL
$db = mysql_connect('localhost', 'root', '');

//$result = "{'success':true, 'records':[{'id':0, 'name':'CEA'},{'id':1, 'name':'SERES'}]}";
// on s�lectionne la base
mysql_select_db('prospection',$db);


$request_method = $_SERVER['REQUEST_METHOD'];

$resultstr = "";
if ($request_method == "GET"){
        // si on veut charger la totalit� des items

		// on cr�e la requ�te SQL
		$sql = 'SELECT * FROM pcall';
		// on envoie la requ�te
		$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error());

		$resultstr = $resultstr."{'success':true, 'records':[";
		// on fait une boucle qui va faire un tour pour chaque enregistrement
		while($data = mysql_fetch_assoc($req))
			{
			//returner la totalit� des donn�es
			$resultstr = $resultstr.'{\'id\':'.$data['ID'].',\'name\':\''.$data['pname'].'\', \'result\':'.$data['result'].',\'cTime\':\''.$data['ctime'].'\'}'.',';
			//echo '<b>'.$data['type'].' '.$data['ctime'].'</b> ('.$data['comment'].')';
			}

	
		$resultstr = substr($resultstr,0,strlen($resultstr)-1);
		$resultstr =$resultstr.']}';
} else if ($request_method == "POST"){
        $request_body = file_get_contents('php://input');
		$call = json_decode($request_body);
		echo '--------'.$call->name.'----------' ;
		$sql = "INSERT INTO pcall (`pname`, `type`, `ctime`, `result`, `comment`) VALUES ('".$call->name."', '".$call->cType."', CURRENT_TIMESTAMP, '".$call->result."', 'aaaa')";
		$req = mysql_query($sql) or die('Erreur SQL !<br>'.$sql.'<br>'.mysql_error());

		$resultstr ='ok';
};


// on ferme la connexion � mysql
mysql_close();
header('Cache-Control: no-cache, must-revalidate');
header("content-type:application/json");
echo($resultstr);
?>


