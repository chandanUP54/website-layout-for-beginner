let tabsContainerUnitStatus = document.querySelector("#products-tabs");
let tabTogglersUnitStatus = tabsContainerUnitStatus.querySelectorAll("a");
tabTogglersUnitStatus.forEach(function (toggler) {

    toggler.addEventListener("click", function (e) {
        e.preventDefault();
        let tabNameUnitStatus = this.getAttribute("href");
        let tabContentsUnitStatus = document.querySelector("#tab-contents-unit-status");

        for (let i = 0; i < tabContentsUnitStatus.children.length; i++) {
            tabTogglersUnitStatus[i].parentElement.classList.remove("border-l", "border-t", "border-r", "rounded-t", "border-b");
            tabTogglersUnitStatus[i].parentElement.classList.add("border-b");

            tabContentsUnitStatus.children[i].classList.remove("hidden");

            if ("#" + tabContentsUnitStatus.children[i].id === tabNameUnitStatus) {
                continue;
            }

            tabContentsUnitStatus.children[i].classList.add("hidden");
        }
        e.target.parentElement.classList.add("border-l", "border-t", "border-r", "rounded-t");
        e.target.parentElement.classList.remove("border-b");
    });
    
});
document.getElementById("unit-status-default-tab").click();