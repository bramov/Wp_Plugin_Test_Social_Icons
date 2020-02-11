(function ()) {
    var newButtons = ["user", "google_plus", "wordpress", "habr", "git"];
    tinymce.create('tinymce.plugins.SocialIconsPlugin'), {
        init: function (ed, url) {
            for( var i in newButtons) {
                var itemTittle = newButtons[i];
                (function(itemTitle) {
                    var itemCommand = 'mce'+itemTitle;
                    ed.addCommand(itemCommand, function() {
                        var newcontent = '[userid type="'+itemTitle+'"]' + tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + '[/userid]';
                        tinyMCE.activeEditor.selection.setContent(newcontent);
                        });
                        ed.addButton(itemTitle, {
                            title: itemTitle,
                            cmd : itemCommand,
                            image : url + '/img/'+itemTitle+'.gif'
                            });
                    })(itemTittle);
            }
        },
        getInfo:function(){
            return{
                longname : 'Trueklg/Social Icons',
                author : 'trueklg',
                authorurl : 'trueklg@yandex.ru'
                version : "1.0"
            };
        }
    };
    tinymce.PluginManager.add('socialicons', tinymce.plugins.SocialIconsPlugin);
}();