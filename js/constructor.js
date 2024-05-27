BX.ready(function() {

  
    window.popup_height = 1024;
    if (window.matchMedia('(max-width: 767px)').matches) {
        window.popup_height = 1704;
    }


    let popup = new BX.PopupWindow(
        "my_answer",
        null, {
            content: "<iframe src='/frame.html'></iframe>",
            lightShadow: true,
            closeIcon: {
                right: "20px",
                top: "10px"
            },
            titleBar: {
                content: BX.create("div", {
                    html: 'BLӦKI-КОНСТРУКТОР',
                    'props': {
                        'className': 'access-title-bar'
                    }
                })
            },

            overlay: {
                // объект со стилями фона
                backgroundColor: 'black',
                opacity: 1000
            },
            width: 1024,
            height: window.popup_height,
            zIndex: 0,
            offsetLeft: 0,
            offsetTop: 0,
            draggable: {
                restrict: false
            },
            buttons: [

                new BX.PopupWindowButton({
                    text: "Закрыть",
                    className: "webform-button-link-cancel",
                    events: {
                        click: function() {
                            this.popupWindow.close();
                        }
                    }
                })
            ]
        });

    $("#choose-complect-button").click(function() {
        popup.show();
    });


});