var currentTab = null;

document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.sendMessage(chrome.runtime.id, "test", {}, function(resp) {
        let item, elem;

        if (typeof resp === "undefined") {
            console.error(chrome.runtime.lastError);
        }

        for (item of ["id15", "id18", "cleanURL"]) {
            if (resp[item]) {
                elem = document.getElementById(item);
                elem.className = "";
                elem.addEventListener("click", function() {
                    chrome.runtime.sendMessage(chrome.runtime.id, this.id);
                    window.close();
                });
            }
        }
    });
});
