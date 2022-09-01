<?php

get_header(); ?>

<section class="hero" id="hero"></section>

<section  class="contact" id="contact"></section>

<section  class="about" id="about"></section>

<section  class="blog" id="blog"></section>


<?php if (have_posts()) {
  while(have_posts()) {
    the_post(); ?>
    <section>
      <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
      <?php the_content(); ?>
    </section>
  <?php }
}

get_footer();