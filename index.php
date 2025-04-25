<?php get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <?php
        // Check if we're on the homepage
        if (is_front_page()) {
            include(get_template_directory() . '/templates/home.php');
        } else {
            // Get the current page slug
            $slug = get_post_field('post_name', get_post());
            
            // Check if a template exists for this page
            if (file_exists(get_template_directory() . '/templates/' . $slug . '.php')) {
                include(get_template_directory() . '/templates/' . $slug . '.php');
            } else {
                // Default content if no template exists
                if (have_posts()) :
                    while (have_posts()) : the_post();
                        the_content();
                    endwhile;
                endif;
            }
        }
        ?>
    </main>
</div>

<?php get_footer(); ?>
