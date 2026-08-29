<?php
// Disable error display for production
error_reporting(0);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: trial-form.html');
    exit;
}

$to = "contact@surelm.com";
$subject = "New SureLM Trial Request from " . htmlspecialchars($_POST['name'] ?? 'Anonymous');

$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$city = $_POST['city'] ?? '';
$company = $_POST['company'] ?? '';
$experience = $_POST['experience'] ?? '';
$work_type = $_POST['work_type'] ?? '';
$painpoint = $_POST['painpoint'] ?? '';
$interest = $_POST['interest'] ?? '';

$experience_labels = array(
    'just_started' => 'Abhi shuru kiya hai (just started)',
    'less_than_1' => 'Less than 1 year',
    '1_3' => '1-3 years',
    '3_5' => '3-5 years',
    '5_plus' => 'More than 5 years',
);
$work_type_labels = array(
    'full_time' => 'Full-time',
    'part_time' => 'Part-time',
    'with_other' => 'Alongside other work',
);
$painpoint_labels = array(
    'finding_customers' => 'Finding customers',
    'choosing_policy' => 'Choosing the right policy',
    'explaining' => 'Explaining to customers',
    'follow_up' => 'Doing follow-up',
    'retaining' => 'Retaining customers',
    'other' => 'Other problem',
);
$interest_labels = array(
    'yes' => 'Yes, definitely',
    'learn_more' => 'Wants to know more first',
);

function label($value, $map) {
    return isset($map[$value]) ? $map[$value] : $value;
}

$email_body = "New SureLM Trial / Beta Interest Submission\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Phone / WhatsApp: $phone\n";
$email_body .= "City: " . ($city !== '' ? $city : 'N/A') . "\n";
$email_body .= "Insurance Company: " . ($company !== '' ? $company : 'N/A') . "\n\n";
$email_body .= "Experience in insurance: " . label($experience, $experience_labels) . "\n";
$email_body .= "Work type: " . label($work_type, $work_type_labels) . "\n";
$email_body .= "Biggest pain point: " . label($painpoint, $painpoint_labels) . "\n";
$email_body .= "Interested in trying SureLM: " . label($interest, $interest_labels) . "\n";

if ($_SERVER['HTTP_USER_AGENT']) {
    $email_body .= "\n\n---\nSubmitted from: " . $_SERVER['HTTP_REFERER'] . "\n";
}

$headers = "From: no-reply@surelm.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $email_body, $headers)) {
    header('Location: trial-thank-you.html');
    exit;
} else {
    header('Location: trial-form.html?error=email_failed');
    exit;
}
