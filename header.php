<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body class="body">
    <?php
      require_once get_template_directory()
      . DIRECTORY_SEPARATOR . 'src'
      . DIRECTORY_SEPARATOR . 'templates'
      . DIRECTORY_SEPARATOR . 'header'
      . DIRECTORY_SEPARATOR . 'header.php';
    ?><main>