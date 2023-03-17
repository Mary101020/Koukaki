<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}
// ---------------------le swiper--------------------

function my_child_theme_scripts() {
   
    wp_deregister_script( 'swiper' );
    wp_enqueue_script( 'my-swiper', 'https://cdn.jsdelivr.net/npm/swiper@6.8.4/swiper-bundle.min.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'my_child_theme_scripts' );

// ---------------------le script personalise--------------------

function my_child_theme_script() {
    wp_enqueue_script( 'child-theme-script', get_stylesheet_directory_uri() . '/js/script.js', array( 'jquery' ), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'my_child_theme_script' );


// ---------------------le style.css personalise--------------------
function child_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_uri(), array( 'parent-style' ) );
}







