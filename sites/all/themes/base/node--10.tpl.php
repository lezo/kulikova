<?php
// $Id: node.tpl.php,v 1.24 2010/12/01 00:18:15 webchick Exp $
?>
<article id=node-<?php print $node->nid; ?> class="<?php print $classes; ?>"<?php print $attributes; ?>>

    <?php print $user_picture; ?>

    <?php print render($title_prefix); ?>
    <?php if (!$page): ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
    <?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php if ($display_submitted): ?>
        <span class=submitted><?php print $submitted ?></span>
    <?php endif; ?>

    <div class="content clearfix"<?php print $content_attributes; ?>>
        <?php
            print render($content['field_brief_description']);
        ?>
    </div>

    <div class=clearfix>
        <?php if (!empty($content['links'])): ?>
            <div class=links><?php print render($content['links']); ?></div>
        <?php endif; ?>

        <?php print render($content['comments']); ?>
    </div>

</article>
