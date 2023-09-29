<?php

get_header();
?>

    <main id="primary" class="site-main">
    <section class="banner">
            <!-- séparer logo du background pour animation -->
            <div class="banner__logo">
                <img class="banner__logo__img" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants"  data-0="transform:translateY(0px)" data-400="transform:translateY(190px)" >
            </div>
            <video class="banner__video" autoplay loop muted poster="<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?>"><source src="<?php echo get_theme_file_uri() .'./assets/video/koukaki_header_video.mp4';?>" type="video/mp4"  ></video>
           <img class="banner__background" src="<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?> " alt="background Fleurs d'oranger & chats errants">
        </section>
        <section id="story" class="story animateSection">
            <h2 class="story__titre"><span class="story-span">L'histoire<span></h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
           
            <?php get_template_part( 'template-parts/section-characters' ); ?>


            <article id="place" class="story__place">
                <img class="story__place__big-cloud" src="<?php echo get_theme_file_uri() . './assets/images/big_cloud.png'; ?> " alt="illustration d'un nuage" data-bottom-top="transform:translate3d(0px, 0, 0)" data-top="transform:translate3d(-300px, 0px, 0)">
                <img class="story__place__little-cloud" src="<?php echo get_theme_file_uri() . './assets/images/little_cloud.png'; ?> " alt="illustration d'un nuage" data-bottom-top="transform:translate3d(0px, 0, 0)" data-top="transform:translate3d(-300px, 0px, 0)">
                <div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>


        <section id="studio" class="studio animateSection">
            <h2 class="studio__titre"><span class="studio-span">Studio</span> <span class="studio-span">Koukaki</span></h2>
            <div class="studio__texte">
                <!-- Ajout classe p -->
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>

            <?php get_template_part( 'template-parts/section-oscars' ); ?>


    </main><!-- #main -->

<?php
get_footer();
