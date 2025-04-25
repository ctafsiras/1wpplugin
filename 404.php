<?php get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <div class="container">
            <div class="error-404 not-found">
                <header class="page-header">
                    <h1 class="page-title">404 - Page Not Found</h1>
                </header>

                <div class="page-content">
                    <p>The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.</p>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="button primary">Return to Homepage</a>
                </div>
            </div>
        </div>
    </main>
</div>

<?php get_footer(); ?>
