<?php
/*
 Plugin Name: Social Icons by TRUEKLG
 Description: Добавляет иконки соц. сетей
 Version: Версия 1.1
 Author: trueklg@yandex.ru
 */
class socialusers
{
    var $options = array(
        "vk" => "https://vk.com/",
        "instagramm" => "https://www.instagram.com",
        "youtube" => "https://www.youtube.com/",
        "facebook" => "https://ru-ru.facebook.com",
        "dnoklassniki" => "https://ok.ru",
    );
    function socilusers (){
        if (!function_exists('add_shortcode')) return;
        add_shortcode('userid', array(&$this, 'icon_func'));
        add_filter('mce_buttons_3', array(&$this, 'mce_buttons'));
        add_filter('mce_external_plugins', array(&$this, 'mce_external_plugins'));
    }
    function icon_func($atts, $content=""){
        if (!$content)
            return"";
        extract (shortcode_atts( array('id' => null, 'type' => null, 'url' => null), $atts));
        if(!$type || !array_key_exists($type, $this->options))
            return $content;
        if (!$id)
            $id = $content;
        $userinfo_url = esc_url(($url) ? $url : sprintf($this->options[$type], trim($id)));
        $userpic_url = esc_url(plugins_url("js/img/$type.gif", __FILE__));
        return "<span style = 'white-space: nowrap; display: inline !important;'><a href='$userinfo_url' ref='nofollow'><img src='$userpic_url' alt='[info]' width='17' height='17' style='vertical-align: bottom; border: 0; padding-right: 1px; vertical-align:middle; margin-left:0; margin-top: 0; margin-top: 0; margin-right: 0; margin-bottom: 0;'/></a><a href='$userinfo_url' ref='nofollow'><b>$content</b></a></span>";
    }
    function mce_external_plugins($plugin_array) {
            $plugin_array['rikkisocialicons'] = plugins_url ('js/rikkis-wp-social-icons-editor-plugin.js', __FILE__);
            return $plugin_array;
}
    function mce_buttons($buttons){
    return array_merge($buttons, array_keys($this->options));
    }
}
$socialusers = new socialusers ();
?>