(function ()) {
    const newButtons = ["user", "google_plus", "wordpress", "habr", "git"];
    tinymce.create('tinymce.plugins.SocialIconsPlugin'), {
        init: function (ed, url) {
            for( let i in newButtons ) {
                let itemTittle = newButtons[i];
                (function(itemTitle) {
                    let itemCommand = 'mce' + itemTitle;
                    ed.addCommand(itemCommand, function() {
                        let newcontent = '[userid type="' + itemTitle+'"]' + 
                                          tinyMCE.activeEditor.selection.getContent({format : 'raw'}) + 
                                         '[/userid]';
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
            return {
                longname : 'Trueklg/Social Icons',
                author : 'trueklg',
                authorurl : 'trueklg@yandex.ru'
                version : "1.0"
            };
        }
    };
    tinymce.PluginManager.add('socialicons', tinymce.plugins.SocialIconsPlugin);
}();
