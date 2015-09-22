var currentTab;
var composeCount = 0;

//initilize tabs
$(function () {

    //when ever any tab is clicked this method will be call
    $("#myTab").on("click", "a", function (e) {
        e.preventDefault();

        $(this).tab('show');
        $currentTab = $(this);
    });


    registerComposeButtonEvent();
    registerCloseEvent();
});

//this method will demonstrate how to add tab dynamically
function registerComposeButtonEvent() {
    $(".menu-items a").click(function(e){
        e.preventDefault();
        var menuInfo = {
            id: $(this).data("id"),
            title: $(this).data("title"),
            icon: $(this).data("icon"),
            href: $(this).attr("href")
        };
        if($('.tab-content #'+menuInfo.id).length == 0){
            composeCount = composeCount + 1;
            $('.nav-tabs').append('<li><a href="#'+menuInfo.id+'"><span class="icon '+menuInfo.icon+'"></span>&nbsp;'+menuInfo.title+'&nbsp;<span class="closeTab">×</span></a></li>');
            $('.tab-content').append('<div class="tab-pane" id="' + menuInfo.id + '"><iframe src="'+menuInfo.href+'"></iframe></div>');
            //createNewTabAndLoadUrl("", "./test.html", "#" + menu_id);
        }
        showTab(menuInfo.id);
        registerCloseEvent();
    });
}

//this method will register event on close icon on the tab..
function registerCloseEvent() {

    $(".closeTab").click(function () {

        //there are multiple elements which has .closeTab icon so close the tab whose close icon is clicked
        var tabContentId = $(this).parent().attr("href");
        $(this).parent().parent().remove(); //remove li of tab
        $('#myTab a:last').tab('show'); // Select first tab
        $(tabContentId).remove(); //remove respective tab content

    });
}

//shows the tab with passed content div id..paramter tabid indicates the div where the content resides
function showTab(tabId) {
    $('#myTab a[href="#' + tabId + '"]').tab('show');
}
//return current active tab
function getCurrentTab() {
    return currentTab;
}

//This function will create a new tab here and it will load the url content in tab content div.
function createNewTabAndLoadUrl(parms, url, loadDivSelector) {

    $("" + loadDivSelector).load(url, function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error getting details ! ";
            $("" + loadDivSelector).html(msg + xhr.status + " " + xhr.statusText);
            $("" + loadDivSelector).html("Load Ajax Content Here...");
        }
    });

}

//this will return element from current tab
//example : if there are two tabs having  textarea with same id or same class name then when $("#someId") whill return both the text area from both tabs
//to take care this situation we need get the element from current tab.
function getElement(selector) {
    var tabContentId = $currentTab.attr("href");
    return $("" + tabContentId).find("" + selector);

}


function removeCurrentTab() {
    var tabContentId = $currentTab.attr("href");
    $currentTab.parent().remove(); //remove li of tab
    $('#myTab a:last').tab('show'); // Select first tab
    $(tabContentId).remove(); //remove respective tab content
}