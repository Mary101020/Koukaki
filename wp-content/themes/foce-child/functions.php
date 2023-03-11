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
// ---------------------the script file--------------------

function child_theme_scripts() {
    wp_enqueue_script( 'child-theme-script', get_stylesheet_directory_uri() . '/js/script.js', array( 'jquery' ), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'child_theme_scripts' );




// -------------------------Swiper----------------------------
function enqueue_swiper() {
    wp_enqueue_style( 'swiper-style', get_stylesheet_directory_uri() . '/swiper/swiper-bundle.min.css' );
    wp_enqueue_script( 'swiper-script', get_stylesheet_directory_uri() . '/swiper/swiper-bundle.min.js', array('jquery'), '5.4.5', true );
  }
  



  add_action( 'wp_enqueue_scripts', 'enqueue_swiper' );
  
//la création d'une fonction load_coverflow_slide() à utiliser plus tard sur la page d'accueil
  function load_coverflow_slide() {
    get_template_part( 'coverflow-slide' );
  }
  add_action( 'wp_enqueue_scripts', 'load_coverflow_slide' );
  




add_action( 'wp_enqueue_scripts', 'child_theme_enqueue_styles' );
function child_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_uri(), array( 'parent-style' ) );
}




add_filter( 'template_include', 'child_theme_template_include', 99 );
function child_theme_template_include( $template ) {
    if ( 'header.php' == basename( $template ) ) {
        $new_template = locate_template( array( 'header.php' ) );
        if ( ! empty( $new_template ) ) {
            return $new_template;
        }
    }
    return $template;
}
