![imagen_presentacion](./Readme_images/imagen_presentacion.png)

# 🎮 Arcadia: The Best Video Game Site - BACKEND 🕹️

Arcadia is your ultimate destination in the gaming galaxy. More than a simple platform, we are a vibrant community and a resource hub designed by and for passionate gamers like you. Forget searching in a thousand places: here you have immediate access to the most relevant of the gaming universe.

*This repository contains the backend for Arcadia.*

## ✨ Key Management Features

We have centralized the tools needed to manage the game catalog and the sales process efficiently and securely.

### 🎮 Full Video Game Catalog Management
The platform gives you full control over your digital inventory, allowing you to keep the game database always up to date and accurate:

- 📝 **Create Games:** Quickly add new titles to the catalog including full details (description, genre, platforms, etc.).
- ✏️ **Edit:** Update information for any existing game (price changes, description corrections, adding patches, etc.).
- 🗑️ **Delete:** Permanently remove obsolete or unavailable games from the database.
- 🔍 **List (CRUD):** View the complete game catalog for quick audits and locating titles.

### 🛒 Efficient Sales Management
We simplify the workflow to record and manage customer transactions:

- 💰 **Create Sales:** Generate detailed sales records for customers who purchase games, ensuring accurate tracking of each transaction.
- 💻 **View Sales:** History of completed sales as receipts, with items, total, and the purchasing customer.
- 🗑️ **Delete Sales:** Remove recorded sales.

## 🛠️ Technologies Used

<p align="center">
  <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  </a>
  <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  </a>
  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  </a>
</p>

<br>

## 🔌 Installation

To install the backend developed and used by ARCADIA, follow these steps:

1. Go to the repository where the backend is hosted: https://github.com/Andre07g/Arcadia-backend
2. On the repository page, click the `Code` button.
3. Click *Download ZIP*.

<p align="center">
  <img src="./Readme_images/instruction_1.png" alt="instruction_image" />
</p>

4. Once the ZIP file has been downloaded, unzip it.

5. After extracting, open a CMD terminal and navigate to the folder where the extracted directory is located:

<p align="center">
  <img src="./Readme_images/instruction_2.png" alt="instruction_2" />
</p>

6. Install the required dependencies with `npm install`

<p align="center">
  <img src="./Readme_images/instruction_3.png" alt="instruction_3" />
</p>

7. Start the backend with `npm run dev`

<p align="center">
  <img src="./Readme_images/instruction_4.png" alt="instruction_4" />
</p>

The backend should now be running correctly

## Endpoints utilizados 

A continuacion se muestran los endpoints utilizados en el backend y como funcionan.

### Crear videojuego

**Método:** `POST`

**Endpoint:** 

```bash
localhost:4000/videogames
```

**Result:**

```json
{
    "message": "Game created successfully"
}
```

<br>

### Obtener videojuegos

**Método:** `GET`

**Endpoint:** 

```json
localhost:4000/videogames
```

**Result:**

```json
[
    {
        "_id": "68f1c93354364f337476e8b6",
        "title": "Cosmic Odyssey: Starfall",
        "genre": "RPG de Ciencia Ficción",
        "platform": "PC",
        "description": "Una épica aventura espacial donde exploras galaxias inexploradas, tomas decisiones morales cruciales y lideras un equipo contra una antigua amenaza cósmica.",
        "price": 5999,
        "image": "https://arcadia-games.com/images/cosmic-odyssey-starfall.jpg",
        "stock": 150
    }
]
```

<br>

### Editar videojuego

**Método:** `PATCH`

**Endpoint:** 

```json
localhost:4000/videogames/68f1ca2c54364f337476e8b7
```

**Result:**

```json
{
    "message": "Game modified"
}
```

### Borrar videojuego

**Método:** `DELETE`

**Endpoint:** 

```json
localhost:4000/videogames/68f1ca2c54364f337476e8b7
```

**Result:**

```json
{
    "message": "Game was deleted"
}
```

---

### Crear venta

**Método:** `POST`

**Endpoint:** 

```bash
localhost:4000/sales
```

**Result:**

```json
{
    "message": "Game created successfully"
}
```

<br>

### Ver ventas

**Método:** `GET`

```bash
localhost:4000/sales
```

**Result:**

```json
{
    "message": "Sale created successfully",
    "sale": {
        "date": "2025-10-17T12:00:00.000Z",
        "client": "Aurelio González",
        "products": [
            {
                "gameId": "653b6f1e5e9f8a2f4c3a2b1d",
                "nombre": "Cosmic Odyssey: Starfall",
                "precio": 5999,
                "cantidad": 1
            },
            {
                "gameId": "653b6f1e5e9f8a2f4c3a2b1e",
                "nombre": "Speed Racer X",
                "precio": 3499,
                "cantidad": 2
            }
        ],
        "total": 12997,
        "_id": "68f1ce6c54364f337476e8b8"
    }
}
```



