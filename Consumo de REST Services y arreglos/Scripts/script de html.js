<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Usuarios de JSONPlaceholder</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0fc8bc;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #0fec04;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .user-list {
            margin-top: 20px;
            list-style-type: none;
            padding: 0;
        }

        .user-card {
            margin-bottom: 20px;
            padding: 20px;
            background-color: #f37575;
            border: 1px solid #fb7388;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Lista de Usuarios</h1>
        <ul class="user-list" id="user-list">
            <!-- La lista de usuarios se mostrará aquí -->
        </ul>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const userList = document.getElementById("user-list");

            // URL de la API de JSONPlaceholder para obtener la lista de usuarios
            const apiUrl = "https://jsonplaceholder.typicode.com/users";

            // Realizar una solicitud GET a la API
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    // Iterar a través de la lista de usuarios y mostrar cada uno
                    data.forEach((user) => {
                        // Crear un elemento li para cada usuario
                        const userLi = document.createElement("li");
                        userLi.classList.add("user-card");

                        // Rellenar el elemento li con la información del usuario
                        userLi.innerHTML = `
                            <h2>${user.name}</h2>
                            <p><strong>Nombre de usuario:</strong> ${user.username}</p>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <p><strong>Teléfono:</strong> ${user.phone}</p>
                            <p><strong>Compañía:</strong> ${user.company.name}</p>
                            <p><strong>Ciudad:</strong> ${user.address.city}</p>
                        `;

                        // Agregar el elemento li a la lista
                        userList.appendChild(userLi);
                    });
                })
                .catch((error) => {
                    console.error("Error al obtener la lista de usuarios:", error);
                });
        });
    </script>
</body>
</html>