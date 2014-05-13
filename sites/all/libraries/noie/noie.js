(function ($) {
	$(function(){
	var noie6 = {widget: "<div id=\"noie6-overlay\"></div><div id=\"noie6-wrap\"><a href=\"#\" id=\"noie6-close\" title=\"close\">Закрыть</a><div id=\"noie6-wrap-inner\"><div id=\"noie6-message\"><div id=\"noie6-message-inner\"><h2>Internet Explorer 6 очень старый браузер и не поддерживается этим сайтом.</h2><p>Ниже приводится список некоторых из причин, почему этот браузер не поддерживается:</p><ul><li>Он не поддерживает <a href=\"http://www.w3.org/standards/agents/browsers\">W3C стандарты</a>.</li> <li>Он не совместим с <a href=\"http://www.css3.info/selectors-test/\">CSS3</a>.</li> <li>Он имеет очень низкие показатели в <a href=\"http://acid3.acidtests.org/\">Acid 3 тестах</a>.</li> <li>Он небезопасный и медленный.</li> <li>Существует несколько движений против этого браузера: <a href=\"http://ie6.forteller.net/index.php?title=Main_Page\">Не хотим IE6!</a>, <a href=\"http://iedeathmarch.org/\">IE Похоронный марш</a>, <a href=\"http://dearie6.com/\">Милый IE6</a>. </li> <li>Google официально <a href=\"http://googleenterprise.blogspot.com/2010/01/modern-browsers-for-modern-applications.html\">прекратил</a> его поддержку.</li> <li>И даже <a href=\"http://ie6funeral.com/\">похороны</a> состоялись.</li><li>Если у вас IE 7, не удивляйтесь, его мы не поддерживаем по тем же причинам, что и <a href='http://googledocs.blogspot.com/2011/06/our-plans-to-support-modern-browsers.html'>Google</a></li></ul><h4>Мы настоятельно рекомендуем загрузить один из следующих браузеров:</h4> </div> </div> <div id=\"noie6-browsers\"> <ul> <li id=\"noie6-firefox\" class=\"last\"> <a href=\"http://www.mozilla.com/firefox/\" class=\"noie6-browser\" title=\"Firefox\">Firefox</a> </li> <li id=\"noie6-safari\" class=\"\"> <a href=\"http://www.apple.com/safari/download/\" class=\"noie6-browser\" title=\"Safari\">Safari</a> </li> <li id=\"noie6-chrome\" class=\"\"> <a href=\"http://www.google.com/chrome/\" class=\"noie6-browser\" title=\"Chrome\">Chrome</a> </li> <li id=\"noie6-opera\" class=\"\"> <a href=\"http://www.opera.com/download/\" class=\"noie6-browser\" title=\"Opera\">Opera</a> </li> <li id=\"noie6-update-ie\" class=\"last\"><a href=\"http://www.microsoft.com/windows/internet-explorer/default.aspx\" class=\"noie6-browser\" title=\"Update IE\">Update IE</a></li></ul></div></div>.</div>"};
  // Load settings under Drupal.settings
  Drupal.settings.noie6 = noie6;
  jQuery('body').prepend(Drupal.settings.noie6.widget);
  // Set height of overlay if exist
  jQuery('#noie6-overlay').height($(document).height());
  
  var noie6_center = jQuery('#noie6-wrap').width() / (-2); // make sure the windows is centered even is the width change in css.
  var noie6_wrap_bg = jQuery('#noie6-wrap').css('background-image');
  jQuery('#noie6-wrap').
    css('margin-left', noie6_center).
    css('background-image', 'none').
    slideDown(
      function() {
        // avoid flickering
        jQuery(this).css('background-image', noie6_wrap_bg);
      }
    );
    jQuery('#noie6-close').click(function(){
    jQuery('#noie6-wrap').fadeOut('normal');
    jQuery('#noie6-overlay').fadeOut('normal');
    return false;
  });
});
})(jQuery);