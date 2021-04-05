var Accordion = function (options) {

    var element = options.element;
    var event = options.event == null ? "click" : options.event;
    var transition = options.transition == null ? "300": options.transition;
    var activeItem = options.activeItem;
    var items = document.querySelectorAll(element + " .accordion-item");

    items.forEach((item, key) => {
        var head, body, wrapper, active;
        head = item.querySelector(".head");
        body = item.querySelector(".body");
        wrapper = item.querySelector(".wrapper");
        activeItemFunc(item, key, activeItem, body, wrapper);
        head.addEventListener(event, function () {
            item.classList.forEach(show => {
                active = show == "show" ? show : "";
            });

            if (active) {
                body.style.height = "";
                setTimeout(() => {
                    item.classList.remove("show");
                    body.style = "";
                }, transition);
            }
            else {
                itemsFunc(items, transition);
                item.classList.add("show");
                body.style.transition = transition + "ms";
                body.style.height = wrapper.offsetHeight + "px";
            }
        });

    });

    function itemsFunc(items, transition) {
        items.forEach(item => {
            item.classList.forEach(show => {
                if (show == "show") {
                    item.querySelector(".body").style.height = "";
                    setTimeout(() => {
                        item.classList.remove("show");
                        item.querySelector(".body").style = "";
                    }, transition);
                }
            });
        });
    }

    function activeItemFunc(item, key, activeItem, body, wrapper) {
        if (activeItem == (key + 1)) {
            item.classList.add("show");
            body.style.transition = transition + "ms";
            body.style.height = wrapper.offsetHeight + "px";
        }
    }
}