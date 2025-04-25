<!DOCTYPE html>
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
    <header id="masthead" class="site-header">
        <div class="top-bar">
            <div class="container">
                <div class="security-notice">
                    <span>ALL PRODUCTS ARE SCANNED BY NORTON & VERIFIED BY MCAFEE TO ENSURE 100% SECURITY.</span>
                </div>
                <div class="top-links">
                    <?php if (is_user_logged_in()): ?>
                        <a href="<?php echo esc_url(wp_logout_url(home_url())); ?>">Log out</a>
                    <?php else: ?>
                        <a href="<?php echo esc_url(home_url('/login')); ?>">Log in</a>
                    <?php endif; ?>
                    <a href="<?php echo esc_url(home_url('/dmca')); ?>">GPL, COPYRIGHTS & DMCA</a>
                </div>
            </div>
        </div>
        
        <div class="main-header">
            <div class="container">
                <div class="site-branding">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
                        <?php if (has_custom_logo()): ?>
                            <?php the_custom_logo(); ?>
                        <?php else: ?>
                            <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/1wpplugin-logo.png" alt="1WPPlugin.com" class="custom-logo">
                            <span class="site-title">1WP<span class="highlight">plugin.com</span></span>
                        <?php endif; ?>
                    </a>
                </div>
                
                <div class="search-form">
                    <form role="search" method="get" action="<?php echo esc_url(home_url('/search')); ?>">
                        <input type="text" name="q" placeholder="Search for any Theme or Plugin...">
                        <button type="submit">Search</button>
                    </form>
                </div>
                
                <div class="header-buttons">
                    <?php if (is_user_logged_in()): ?>
                        <a href="<?php echo esc_url(home_url('/dashboard')); ?>" class="button">MY ACCOUNT</a>
                        <a href="<?php echo esc_url(wp_logout_url(home_url())); ?>" class="button">LOG OUT</a>
                    <?php else: ?>
                        <a href="<?php echo esc_url(home_url('/login')); ?>" class="button primary">SIGN IN</a>
                        <a href="<?php echo esc_url(home_url('/register')); ?>" class="button secondary">SIGN UP</a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        
        <nav class="main-navigation">
            <div class="container">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id' => 'primary-menu',
                    'container' => false,
                    'fallback_cb' => function() {
                        // Default menu if none is set
                        ?>
                        <ul id="primary-menu" class="menu">
                            <li class="current-menu-item"><a href="<?php echo esc_url(home_url('/')); ?>">HOME</a></li>
                            <li><a href="<?php echo esc_url(home_url('/plugins')); ?>">PLUGINS</a></li>
                            <li><a href="<?php echo esc_url(home_url('/themes')); ?>">THEMES</a></li>
                            <li><a href="<?php echo esc_url(home_url('/pricing')); ?>">PRICING & MEMBERSHIP</a></li>
                            <li><a href="<?php echo esc_url(home_url('/contact')); ?>">CONTACT</a></li>
                            <li><a href="<?php echo esc_url(home_url('/hosting')); ?>">HOSTING <span class="new-badge">NEW</span></a></li>
                            <li><a href="<?php echo esc_url(home_url('/vpn')); ?>">VPN <span class="new-badge">NEW</span></a></li>
                        </ul>
                        <?php
                    }
                ));
                ?>
            </div>
        </nav>
    </header>
