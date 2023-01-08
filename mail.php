<?php
    $data = $_POST;

    var_dump($data);

    $destinatario = "info@aquatica.events";
    //$destinatario = "desarrollo4@rodapro.es";
    $remitente = $data['email'];
    $asunto = $data['asunto'];

    $mensaje = "
        <html> 
            <head> 
               <meta charset='UTF-8' />
               <title>AQUATICA - $asunto</title> 
            </head> 
            <body> 
                <h1>MESSAGE WEB: <br>
                    $asunto
                </h1> 

                <h3>Name: $firstName $lastName</h3>
                <h4>Email: $remitente</h4>
    ";

    if($asunto === "MEDIA ACCREDITATIONS"){
        $mediaOutlet = $data['mediaOutlet'];
        $firstName = $data['firstName'];
        $lastName = $data['lastName'];
        $country = $data['country'];
        $title = $data['title'];
        $phone = $data['phone'];
        $email = $data['email'];
        $mediaWork = $data['mediaWork'];
        $profession = $data['profession'];

        $mensaje .= " 
            <h4>Phone: $phone</h4>

            <p>
                MENSAJE: <br>
                ----------------------------<br>
                Media Outlet: $mediaOutlet <br>
                First Name: $firstName <br>
                Last Name: $lastName <br>
                Country: $country <br>
                Title: $title <br>
                Phone: $phone <br>
                Email: $email <br>
                Media Work: $mediaWork <br>
                Profession: $profession <br>
                ----------------------------
            </p>

            </body> 
            </html> 
        ";
    }

    if($asunto === "CARRERS INSTRUCTORS" || $asunto === "CARRERS PROMOTERS" || $asunto === "CARRERS SPONSORSSHIP"){
        $firstName = $data['firstName'];
        $lastName = $data['lastName'];
        $country = $data['country'];
        $city = $data['city'];
        $mobile = $data['mobile'];
        $email = $data['email'];
        $description = $data['description'];

        $mensaje .= " 
            <h4>Phone: $mobile</h4>

            <p>
                MENSAJE: <br>
                ----------------------------<br>
                First Name: $firstName <br>
                Last Name: $lastName <br>
                Country: $country <br>
                City: $city <br>
                Mobile: $mobile <br>
                Email: $email <br>
                Descrition: $description <br>
                ----------------------------
            </p>

            </body> 
            </html> 
        ";
    }

    if($asunto === "PARTNERS DONATIONS"){
        $firstName = $data['firstName'];
        $lastName = $data['lastName'];
        $mobile = $data['mobile'];
        $email = $data['email'];
        $type = $data['type'];
        $amount = $data['amount'];
        $card = $data['card'];
        $date = $data['date'];
        $cvc = $data['cvc'];
        $country = $data['country'];
        $taxId = $data['taxId'];
        $private = $data['private'];

        $mensaje .= " 
            <h4>Phone: $mobile</h4>

            <p>
                MENSAJE: <br>
                ----------------------------<br>
                First Name: $firstName <br>
                Last Name: $lastName <br>
                Mobile: $mobile <br>
                Email: $email <br>
                Type: $type <br>
                Amount: $amount <br>
                Card Number: $card <br>
                Card Date: $date <br>
                Card CVC: $cvc <br>
                Country: $country <br>
                Tax Id: $taxId <br>
                Private: $private <br>
                ----------------------------
            </p>

            </body> 
            </html> 
        ";
    }

    if($asunto === "PARTNERS FRANCHISING" || $asunto === "PARTNERS SPONSORS"){
        $firstName = $data['firstName'];
        $lastName = $data['lastName'];
        $mobile = $data['mobile'];
        $email = $data['email'];
        $type = $data['type'];
        $company = $data['company'];
        $title = $data['title'];
        $heard = $data['heard'];

        $mensaje .= " 
            <h4>Phone: $mobile</h4>

            <p>
                MENSAJE: <br>
                ----------------------------<br>
                First Name: $firstName <br>
                Last Name: $lastName <br>
                Mobile: $mobile <br>
                Email: $email <br>
                Type: $type <br>
                Company: $company <br>
                Title: $title <br>
                Heard: $heard <br>
                ----------------------------
            </p>

            </body> 
            </html> 
        ";
    }

    if($asunto === "CONTACT"){
        $firstName = $data['firstName'];
        $lastname = $data['lastname'];
        $email = $data['email'];
        $subject = $data['subject'];
        $message = $data['message'];

        $mensaje = " 
            <html> 
            <head> 
               <meta charset='UTF-8' />
               <title>AQUATICA - $asunto</title> 
            </head> 
            <body> 
            <h1>MESSAGE WEB: <br>
                $subject
            </h1> 

            <h3>Name: $firstName $lastName</h3>
            <h4>Email: $email</h4>

            <p>
                MENSAJE: <br>
                ----------------------------<br>
                $message <br>
                ----------------------------
            </p>

            </body> 
            </html> 
        ";
        
    }

    if($asunto === "EXPERIENCE IN"){
        $try = $data['try'];
        $firstName = $data['firstName'];
        $lastName = $data['lastName'];
        $email = $data['email'];
        $message  = $data['message'];

        $mensaje .= " 

            <p>
                MENSAJE: <br>
                ----------------------------<br>
                Try: $try <br>
                First Name: $firstName <br>
                Last Name: $lastName <br>
                Email: $email <br>
                Message: $message <br>
                ----------------------------
            </p>

            </body> 
            </html> 
        ";
    }

    if($asunto === "RACE REGISTRATION" || $asunto === "TRAINING CENTERS"){
        $try = $data['try'];
        $firstName = $data['firstName'];
        $lastName = $data['lastName'];
        $email = $data['email'];
        $type = $data['type'];
        $message = $data['message'];

        $mensaje .= " 
            <p>
                MENSAJE: <br>
                ----------------------------<br>
                Try: $try <br>
                First Name: $firstName <br>
                Last Name: $lastName <br>
                Email: $email <br>
                Type: $type <br>
                Message: $message <br>
                ----------------------------
            </p>

            </body> 
            </html> 
        ";  
    }


    sendMail($destinatario, $remitente, $asunto, $mensaje);

    function sendMail($destinatario, $remitente, $asunto, $mensaje){
        //para el envío en formato HTML 
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8\r\n";

        //dirección del remitente 
        $headers .= "From: AQUATICA - $asunto <".$remitente.">\r\n";

        mail($destinatario, $asunto, $mensaje, $headers);

        //redireccionar a la página de contacto
        header("HTTP/1.1 302 Moved Temporaly");
        header("Location: /pages/contacts/pages/success/");
    }