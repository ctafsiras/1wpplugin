<?php
/**
 * WordPress Marketplace Theme functions and definitions
 */

// Theme setup
function wordpress_marketplace_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'wordpress-marketplace'),
        'footer' => __('Footer Menu', 'wordpress-marketplace'),
    ));
}
add_action('after_setup_theme', 'wordpress_marketplace_setup');

// Enqueue scripts and styles
function wordpress_marketplace_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('wordpress-marketplace-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue custom CSS
    wp_enqueue_style('wordpress-marketplace-custom', get_template_directory_uri() . '/assets/css/custom.css', array(), '1.0.0');
    
    // Enqueue main JavaScript
    wp_enqueue_script('wordpress-marketplace-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'wordpress_marketplace_scripts');

// Add custom rewrite rules to handle Next.js routes
function wordpress_marketplace_rewrite_rules() {
    add_rewrite_rule('^plugins/?$', 'index.php?pagename=plugins', 'top');
    add_rewrite_rule('^themes/?$', 'index.php?pagename=themes', 'top');
    add_rewrite_rule('^pricing/?$', 'index.php?pagename=pricing', 'top');
    add_rewrite_rule('^contact/?$', 'index.php?pagename=contact', 'top');
    add_rewrite_rule('^hosting/?$', 'index.php?pagename=hosting', 'top');
    add_rewrite_rule('^vpn/?$', 'index.php?pagename=vpn', 'top');
    add_rewrite_rule('^dmca/?$', 'index.php?pagename=dmca', 'top');
    add_rewrite_rule('^faq/?$', 'index.php?pagename=faq', 'top');
    add_rewrite_rule('^documentation/?$', 'index.php?pagename=documentation', 'top');
    add_rewrite_rule('^privacy/?$', 'index.php?pagename=privacy', 'top');
    add_rewrite_rule('^terms/?$', 'index.php?pagename=terms', 'top');
    add_rewrite_rule('^login/?$', 'index.php?pagename=login', 'top');
    add_rewrite_rule('^register/?$', 'index.php?pagename=register', 'top');
    add_rewrite_rule('^dashboard/?$', 'index.php?pagename=dashboard', 'top');
    add_rewrite_rule('^search/?$', 'index.php?pagename=search', 'top');
}
add_action('init', 'wordpress_marketplace_rewrite_rules');

// Flush rewrite rules on theme activation
function wordpress_marketplace_activate() {
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'wordpress_marketplace_activate');

// Create required pages on theme activation
function wordpress_marketplace_create_pages() {
    $pages = array(
        'plugins' => 'WordPress Plugins',
        'themes' => 'WordPress Themes',
        'pricing' => 'Pricing & Membership',
        'contact' => 'Contact Us',
        'hosting' => 'WordPress Hosting',
        'vpn' => 'VPN Service',
        'dmca' => 'DMCA Protection',
        'faq' => 'Frequently Asked Questions',
        'documentation' => 'Documentation',
        'privacy' => 'Privacy Policy',
        'terms' => 'Terms of Service',
        'login' => 'Login',
        'register' => 'Register',
        'dashboard' => 'Dashboard',
        'search' => 'Search'
    );
    
    foreach ($pages as $slug => $title) {
        // Check if the page exists
        $page_exists = get_page_by_path($slug);
        
        // If the page doesn't exist, create it
        if (!$page_exists) {
            wp_insert_post(array(
                'post_title' => $title,
                'post_name' => $slug,
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_content' => '<!-- This page is managed by the WordPress Marketplace theme -->'
            ));
        }
    }
}
add_action('after_switch_theme', 'wordpress_marketplace_create_pages');
