<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// get refferer server
if($_SERVER['HTTP_REFERER'] === "http://localhost:3000/"){
    // extract the data from $_POST
    $fname = isset($_GET['fname']) ? $_GET['fname'] : null;
    $lname = isset($_GET['lname']) ? $_GET['lname'] : null;
    $message = isset($_GET['message']) ? $_GET['message'] : null;
    $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;
    $number = isset($_GET['number']) ? $_GET['number'] : null;
    $companyName = isset($_GET['companyName']) ? $_GET['companyName'] : null;

    if($fname && $lname && $message && $email && $number && $companyName){
        //Load composer's autoloader
        require 'vendor/autoload.php';

        $mail = new PHPMailer(true);
        try{
            // SMTP server configuration
            $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = 'mail.baten.me';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = 'info@baten.me';           // SMTP username
            $mail->Password   = 'fi^]$FA?%9A}';                        // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom('mdresad704@gmail.com', 'React Contact form');
            $mail->addAddress($email);     // Add a recipient
            $mail->addReplyTo('mdresad704@gmail.com', 'Information');

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = 'React Contact form';
            $mail->Body    = 'Name: ' . $name . '<br />Email: ' . $email . '<br /><br /><b>Message:</b> '
            . $message;

            if($mail->send())
                echo "Message has been sent!";
        }catch (Exception $e){
            echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
        }
    }else{
        echo "All the fileds are required!";
    }
}else{
    echo "You can't use this server!";
}
?>