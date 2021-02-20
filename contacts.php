<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'Contact Form';
$to = 'sales@idigitalstudio.ca';
$subject = 'Message From a Site Visitor (Contact Page)';
		
$body ="From: $name\n E-Mail: $email\n Message:\n $message";

// Check if name has been entered
	if (!$_POST['name']) {
		$errName = 'Please enter your name';
	}
		
	// Check if email has been entered and is valid
	if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$errEmail = 'Please enter a valid email address';
	}
		
	//Check if message has been entered
	if (!$_POST['message']) {
		$errMessage = 'Please enter your message';
	}

$mail_status = mail($to, $subject, $body, $from);

// If there are no errors, send the email and alert window
    if ($mail_status) { ?>
    	<script language="javascript" type="text/javascript">
    		alert('Thank you for the message. We will contact you shortly.');
    		window.location = 'contacts.html';
    	</script>
    <?php
    }
    
    else { ?>
    	<script language="javascript" type="text/javascript">
    		alert('Message failed. Please, send an email: sales@idigitalstudio.ca or Call: +1-647-676-3661');
    		window.location = 'contacts.html';
    	</script>
    <?php
	}
?>