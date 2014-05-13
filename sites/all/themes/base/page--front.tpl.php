<?php
// $Id: page.tpl.php,v 1.48 2010/11/20 04:03:51 webchick Exp $
?>
  <div id=wrapper>
      <div class="header_wrap">
      <header>
	<?php print render($page['header']); ?>
        <div id=logo-floater>
        <?php if ($logo || $site_title): ?>
          <?php if ($title): ?>
            <div id=branding><strong><a href="<?php print $front_page ?>">
            <?php if ($logo): ?>
              <img src="<?php print $logo ?>" alt="<?php print $site_name_and_slogan ?>" title="Главная" id=logo />
            <?php endif; ?>
            <?php print $site_html ?>
            </a></strong></div>
          <?php else: /* Use h1 when the content title is empty */ ?>
            <div id=branding><a href="<?php print $front_page ?>">
            <?php if ($logo): ?>
              <img src="<?php print $logo ?>" alt="<?php print $site_name_and_slogan ?>" title="<?php print $site_name_and_slogan ?>" id=logo />
            <?php endif; ?>
            <?php print $site_html ?>
            </a></div>
        <?php endif; ?>
        <?php endif; ?>
        </div>

        <?php if ($primary_nav): print $primary_nav; endif; ?>
        <?php if ($secondary_nav): print $secondary_nav; endif; ?>
      </header> <!-- /#header -->
          </div>
     <div class="slider"><?php print render($page['slider']); ?></div>

      <div class="info_blocks"><?php print render($page['info_blocks']); ?>
      </div>
      <div class="application_form"><?php print render($page['application_form']); ?></div>
	<footer><?php print render($page['footer']); ?></footer>
  </div> <!-- /#wrapper -->