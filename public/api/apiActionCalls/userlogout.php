<?php

//localhost:8000/public/api/snackapi.php?action=userlogout

unset($_SESSION['userID']);
unset($_SESSION['username']);
session_destroy();
session_commit();

$output['success'] = true;
$output['msg'] = 'you are logged out!';
