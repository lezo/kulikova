<?php
// $Id: page.tpl.php,v 1.48 2010/11/20 04:03:51 webchick Exp $
?>
<div id=wrapper class="landing-wrapper">
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
    <div class="breadcrumbs"><div class="region-breadcrumb"><?php print $breadcrumb; ?></div></div>
    <div id=container class=clearfix>
        <section id=center>
            <div id=squeeze>
                <?php if ($page['highlighted']): ?><div id=highlighted><?php print render($page['highlighted']); ?></div><?php endif; ?>
                <a id=main-content></a>
                <?php if ($tabs): ?><div id=tabs-wrapper class=clearfix><?php endif; ?>
                    <?php print render($title_prefix); ?>
                    <?php if ($title): ?>
                        <h1<?php print $tabs ? ' class=with-tabs' : '' ?>><?php print $title ?></h1>
                    <?php endif; ?>
                    <?php print render($title_suffix); ?>
                    <?php if ($tabs): ?><?php print render($tabs); ?></div><?php endif; ?>
                <?php print render($tabs2); ?>
                <?php print $messages; ?>
                <?php print render($page['help']); ?>
                <?php if ($action_links): ?><ul class=action-links><?php print render($action_links); ?></ul><?php endif; ?>
                <div class=clearfix>
                    <?php print render($page['content']); ?>
                </div>
                <?php print $feed_icons ?>
            </div>
        </section>
    </div> <!-- /#container -->
    <?php if($page['landing_1']) { ?>
        <div class="landing landing_1">
            <?php print render($page['landing_1']); ?>
        </div>
    <?php } ?>
    <?php if($page['landing_2']) { ?>
        <div class="landing landing_2">
            <?php print render($page['landing_2']); ?>
        </div>
    <?php } ?>
    <?php if($page['landing_3']) { ?>
        <div class="landing landing_3">
            <?php print render($page['landing_3']); ?>
        </div>
    <?php } ?>
    <?php if($page['landing_4']) { ?>
        <div class="landing landing_4">
            <?php print render($page['landing_4']); ?>
        </div>
    <?php } ?>
    <?php if($page['landing_5']) { ?>
        <div class="landing landing_5">
            <?php print render($page['landing_5']); ?>
        </div>
    <?php } ?>
    <?php if($page['landing_6']) { ?>
        <div class="landing landing_6">
            <?php print render($page['landing_6']); ?>
        </div>
    <?php } ?>
    <?php if($page['landing_7']) { ?>
        <div class="landing landing_7">
            <?php print render($page['landing_7']); ?>
        </div>
    <?php } ?>
    <?php if($page['landing_8']) { ?>
        <div class="landing landing_8">
            <?php print render($page['landing_8']); ?>
        </div>
    <?php } ?>
    <?php if($page['landing_9']) { ?>
        <div class="landing landing_9">
            <?php print render($page['landing_9']); ?>
        </div>
    <?php } ?>
    <footer><?php print render($page['footer']); ?></footer>
</div> <!-- /#wrapper -->