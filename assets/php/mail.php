<?php
header("Access-Control-Allow-Origin: *");
// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["con_name"]));
    $name = str_replace(array("\r", "\n"), array(" ", " "), $name);
    $email = filter_var(trim($_POST["con_email"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["con_subject"]);
    $message = trim($_POST["con_message"]);

    // Check that data was sent to the mailer.
    if (empty($name) or empty($subject) or empty($message) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Veuillez remplir tous les champs.";
        exit;
    }

    // Set the recipient email address.
    $recipient = "contact@gpss-securite.com";

    // Set the email subject.
    $subject_mail = "Demande de devis de $name sur Internet";

    // Build the email content.
    $email_content = "Bonjour,\n\nVous avez reçu une demande de devis sur le site GPSS Sécurité.\nVous trouverez ci-dessous la demande et les coordonnées du prospect:\n\n";
    $email_content .= "Nom: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Objet: $subject\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    if (mail($recipient, $subject_mail, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "<p> Merci! Votre message à été envoyé. Nous vous répondrons dans les plus brefs délais.</p> <a href=\"https://gpss-securite.com/\">Retour à l'accueil</a>";
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "<p> Oops! Une erreur s'est produite. Veuillez réessayer plus tard.</p>
        <a href=\"https://gpss-securite.com/\">Retour à l'accueil</a>";
    }
} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "Il semble que vous essayez d'accéder à cette page en utilisant une méthode non autorisée.";
}
