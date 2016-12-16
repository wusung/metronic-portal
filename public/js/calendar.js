var AppCalendar = function() {
    return {
        init: function() {
            this.initCalendar()
        },
        initCalendar: function() {
            if (jQuery().fullCalendar) {
                var e = new Date
                  , t = e.getDate()
                  , a = e.getMonth()
                  , n = e.getFullYear()
                  , r = {};
                App.isRTL() ? $("#calendar").parents(".portlet").width() <= 720 ? ($("#calendar").addClass("mobile"),
                r = {
                    right: "title, prev, next",
                    center: "",
                    left: "month"
                }) : ($("#calendar").removeClass("mobile"),
                r = {
                    right: "title",
                    center: "",
                    left: ""
                }) : $("#calendar").parents(".portlet").width() <= 720 ? ($("#calendar").addClass("mobile"),
                r = {
                    left: "title, prev, next",
                    center: "",
                    left: ""
                }) : ($("#calendar").removeClass("mobile"),
                r = {
                    left: "title",
                    center: "",
                    left: ""
                });
                var l = function(e) {
                    var t = {
                        title: $.trim(e.text())
                    };
                    e.data("eventObject", t),
                    e.draggable({
                        zIndex: 999,
                        revert: !0,
                        revertDuration: 0
                    })
                }
                  , o = function(e) {
                    e = 0 === e.length ? "Untitled Event" : e;
                    var t = $('<div class="external-event label label-default">' + e + "</div>");
                    jQuery("#event_box").append(t),
                    l(t)
                };
                $("#external-events div.external-event").each(function() {
                    l($(this))
                }),
                $("#event_add").unbind("click").click(function() {
                    var e = $("#event_title").val();
                    o(e)
                }),
                $("#event_box").html(""),
                o("My Event 1"),
                o("My Event 2"),
                o("My Event 3"),
                o("My Event 4"),
                o("My Event 5"),
                o("My Event 6"),
                $("#calendar").fullCalendar("destroy"),
                $("#calendar").fullCalendar({
                    header: r,
                    defaultView: "month",
                    slotMinutes: 15,
                    editable: !0,
                    droppable: !0,
                    drop: function(e, t) {
                        var a = $(this).data("eventObject")
                          , n = $.extend({}, a);
                        n.start = e,
                        n.allDay = t,
                        n.className = $(this).attr("data-class"),
                        $("#calendar").fullCalendar("renderEvent", n, !0),
                        $("#drop-remove").is(":checked") && $(this).remove()
                    },
                    events: [{
                        title: "All Day Event",
                        start: new Date(n,a,1),
                        backgroundColor: App.getBrandColor("yellow")
                    }, {
                        title: "Long Event",
                        start: new Date(n,a,t - 5),
                        end: new Date(n,a,t - 2),
                        backgroundColor: App.getBrandColor("green")
                    }, {
                        title: "Repeating Event",
                        start: new Date(n,a,t - 3,16,0),
                        allDay: !1,
                        backgroundColor: App.getBrandColor("red")
                    }, {
                        title: "Repeating Event",
                        start: new Date(n,a,t + 4,16,0),
                        allDay: !1,
                        backgroundColor: App.getBrandColor("green")
                    }, {
                        title: "Meeting",
                        start: new Date(n,a,t,10,30),
                        allDay: !1
                    }, {
                        title: "Lunch",
                        start: new Date(n,a,t,12,0),
                        end: new Date(n,a,t,14,0),
                        backgroundColor: App.getBrandColor("grey"),
                        allDay: !1
                    }, {
                        title: "Birthday Party",
                        start: new Date(n,a,t + 1,19,0),
                        end: new Date(n,a,t + 1,22,30),
                        backgroundColor: App.getBrandColor("purple"),
                        allDay: !1
                    }, {
                        title: "Click for Google",
                        start: new Date(n,a,28),
                        end: new Date(n,a,29),
                        backgroundColor: App.getBrandColor("yellow"),
                        url: "http://google.com/"
                    }]
                })
            }
        }
    }
}();
jQuery(document).ready(function() {
    AppCalendar.init()
});
