var scrollbar = {
    closeAllMenus: function() {
        var that = this;
        $(".menu-header").each(function() {
            that.closeMenu(this);
        })
    },
    closeMenu: function(menu_header) {
        $(menu_header).removeClass("active");
        $(menu_header).next(".menu-items").slideUp();
    },
    watchClickEvent: function() {
        var that = this;
        $(".menu-header").click(function() {
            var current = $(this);
            $(".menu-header").each(function() {
                if ($(this).sequenceEqual(current)) return;
                that.closeMenu(this);
            });
            if ($(this).hasClass("active")) {
                $(this).next(".menu-items").slideUp();
                $(this).removeClass("active");
            } else {
                $(this).next(".menu-items").slideDown();
                $(this).addClass("active");
            }
        })
    },
    watchSidebarBtnEvent: function(){
        $("#btn_hide_sidebar").click(function(){
            console.log("点击隐藏按钮");
        });
    }
}
