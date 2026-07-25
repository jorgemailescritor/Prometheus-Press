document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mainNav =
        document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            mainNav.classList.toggle("active");

        });

    }

    document.addEventListener("click", function (event) {

        const button = event.target.closest(".nav-link, .submenu-toggle");

        if (!button) {
            return;
        }

        event.stopPropagation();

        const navItem = button.closest(".nav-item");

        if (!navItem) {
            return;
        }

        document
            .querySelectorAll(".nav-item.active")
            .forEach(function (item) {

                if (item !== navItem) {

                    item.classList.remove("active");

                }

            });

        navItem.classList.toggle("active");

    });

    document.addEventListener("click", function (event) {

        if (event.target.closest(".nav-item")) {
            return;
        }

        document
            .querySelectorAll(".nav-item.active")
            .forEach(function (item) {

                item.classList.remove("active");

            });

    });

});
