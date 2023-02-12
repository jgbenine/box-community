
function searchManipulation() {
        const btnSearch = document.querySelector(".header__search span");
        const inputSearch = document.querySelector(".header__search input");
        btnSearch.addEventListener("click", showInput);

        function showInput() {
            console.log(inputSearch);

            inputSearch.style.display = "block";
            inputSearch.style.animation = "moveCrescent 0.7s ease";
        }
    }

    searchManipulation();