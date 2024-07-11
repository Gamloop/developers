document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll("nav ul li a");
    const tabContents = document.querySelectorAll(".tab-content");
    const gamesTab = document.getElementById("games");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();
            const targetTab = this.getAttribute("data-tab");

            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(tc => tc.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(targetTab).classList.add("active");

            if (targetTab === "games") {
                loadGames(); // Cargar los juegos solo si se selecciona la pestaña de juegos
            }
        });
    });

    const claimForm = document.getElementById("claimForm");
    claimForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const claimMessage = document.getElementById("claimMessage").value;
        if (claimMessage.trim() !== "") {
            alert("Reclamo enviado: " + claimMessage);
            claimForm.reset();
        } else {
            alert("Por favor, describe tu reclamo.");
        }
    });

    function loadGames() {
        // Simulación de carga de juegos
        gamesTab.innerHTML = `
            <div class="game" data-title="Juego emocionante">
                <img src="images/imga.png" alt="undead assault" class="rounded-image">
                <div class="description">
                    <p>undead assault Juego de disparo acaba con zombis en un mundo en bucle.</p>
                    <a href="https://no disponible" class="btn-download">Proximamente...</a>
                </div>
            </div>
            </div>
            <!-- Agrega más juegos según sea necesario -->
        `;
    }

    // Funcionalidad de búsqueda en tiempo real
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Activar automáticamente la pestaña de juegos al buscar
        activateGamesTab();

        // Filtrar juegos según el término de búsqueda
        filterGames(searchTerm);
    });

    function activateGamesTab() {
        tabs.forEach(tab => {
            if (tab.getAttribute("data-tab") === "games") {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

        tabContents.forEach(tc => {
            if (tc.id === "games") {
                tc.classList.add("active");
                loadGames();
            } else {
                tc.classList.remove("active");
            }
        });
    }

    function filterGames(searchTerm) {
        const games = gamesTab.querySelectorAll(".game");

        games.forEach(game => {
            const title = game.getAttribute("data-title").toLowerCase();
            const description = game.querySelector(".description p").textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                game.style.display = "block";
            } else {
                game.style.display = "none";
            }
        });
    }
});
