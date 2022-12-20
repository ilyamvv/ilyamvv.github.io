<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$admin_email  = 'ilyamsv.fl@gmail.com';
	$form_subject = trim($_POST["form_subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '':'' ) . "
				$key
				$value
			";
		}
	}
} else if ( $method === 'GET' ) {

	$admin_email  = 'ilyamsv.fl@gmail.com';
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '':'' ) . "
				$key
				$value
			
			";
		}
	}
}

$message = "$message";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );