<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary">
            <?php esc_html_e('Skip to content', 'foce'); ?>
        </a>

        <header id="masthead" class="site-header">
            <div>
                <a href="#">Fleurs d'oranger & chats errants
            </div>
            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="line "></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
            <nav id="site-navigation" class="main-navigation">
                <ul>
                    <li class="site-logo">
                        <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                            <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>"
                                alt="logo Fleurs d'oranger & chats errants">
                        </a>
                    </li>
                    <li><a href="#story" onclick="closeNav()">Histoire</a></li>
                    <li><a href="#characters" onclick="closeNav()">Personnages</a></li>
                    <li><a href="#place" onclick="closeNav()">Lieu</a></li>
                    <li><a href="#studio" onclick="closeNav()">Studio Koukaki</a></li>
                    <li class="studioK">STUDIO KOUKAKI</li>
                </ul>

            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->

        <div id="menu-overlay"></div>