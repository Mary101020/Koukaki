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

function child_theme_scripts() {
    wp_enqueue_script( 'child-theme-script', get_stylesheet_directory_uri() . '/js/script.js', array( 'jquery' ), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'child_theme_scripts' );


// function my_custom_scripts() {
//     wp_register_script( 'swiper', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.js', array(), '5.4.5', true );
//     wp_enqueue_script( 'swiper' );
// }
// add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );


// function enqueue_swiper_styles() {
//     wp_enqueue_style( 'swiper', get_stylesheet_directory_uri() . '/node_modules/swiper/swiper-bundle.min.css' );
// }
// add_action( 'wp_enqueue_scripts', 'enqueue_swiper_styles' );

