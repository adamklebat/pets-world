/* 
Magical Pet Sanctuary Manager
You are the caretaker of a secret Magical Pet Sanctuary. Your task is to build a small web application to manage the magical pets using HTML, CSS, and JavaScript.

Features Required:
1. Display all pets
- When the page loads, fetch and display all magical pets from the mock API as cards in a grid.

2. Adopt a new pet (Create)
- Click on "Adopt New Pet" button to open a form.
- The form should have these fields:
  • Pet Name (text input)
  • Pet Type (dropdown with these options):
    - Dragon 🐉
    - Unicorn 🦄
    - Phoenix 🔥
    - Fairy 🧚
    - Griffin 🦅
  • Color (text input, e.g. "Pink", "Golden", "Rainbow")
  • Description (textarea, short sentence)
- On submit, send the data to the mock API using POST and immediately show the new pet card.

3. Release a pet (Delete)
- Each pet card must have a "Release" button.
- When clicked, ask for confirmation, then delete the pet using DELETE from the mock API and remove the card from the screen.

Technical Requirements:
- Use fetch API with async/await for all operations (GET, POST, DELETE).
- Use a mock API from https://mockapi.io
- Display pets in a responsive card grid (use CSS Grid or Flexbox).
- Make the design colorful and fun (pastel colors, emojis, nice hover effects).
- The page should look clean and magical.

Important Notes:
- You do NOT need to implement editing (no PUT).
- You can use a simple modal, or show the form directly on the page.
- Add basic error handling (console.log is enough).
- Make sure new pets appear immediately after adding.
- Cards should disappear immediately after releasing.

Submission Instructions:
- Build the project in your preferred environment.
- Submit your project link below (GitHub / CodePen / Netlify).
- Briefly explain how you handled GET, POST, and DELETE.

Good luck, young caretake 


 
<!DOCTYPE html>
<html lang="en">    
<head>

    <title>Magical Pet Sanctuary Manager</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <header>
        <h1>Welcome to the Magical Pet Sanctuary!</h1>
        <button id="pet-button">Adopt New Pet</button>
    </header>

    <main>
        <div id="pet-container" class="pet-grid"></div>

        
        <div >
            <form id="pet-form">
                <h2>Adopt a New Magical Pet</h2>

                <label for="pet-name">Pet Name:</label>
                <input type="text" id="pet-name" name="pet-name" required>

                <label for="pet-type">Pet Type:</label>
                <select id="pet-type" name="pet-type" required>
                    <option value="">Select Type</option>
                    <option value="Dragon 🐉">Dragon 🐉</option>
                    <option value="Unicorn 🦄">Unicorn 🦄</option>
                    <option value="Fairy 🧚">Fairy 🧚</option>
                </select>

                <label for="pet-color">Color:</label>
                <input type="text" id="pet-color" name="pet-color" required>

                <label for="pet-description">Description:</label>
                <textarea id="pet-description" name="pet-description" ></textarea>

                <button type="submit">Adopt Pet</button>
                <button type="button" id="cancel-btn">Cancel</button>
            </form>
        </div>

    </main>

    <script src="app.js"></script>  */


    const API_URL = ;

    const petContainer = document.getElementById('pet-container');
    const petForm = document.getElementById('pet-form');
    const petButton = document.getElementById('pet-button');
    const cancelBtn = document.getElementById('cancel-btn');

    // Fetch  pets
    async function fetchPets() {
        try { 
            const response = await fetch(API_URL);
            const pets = await response.json();
            petContainer.innerHTML = '';
            pets.forEach(pet => {
                const petCard = createPetCard(pet); // Create a card for each pet
                petContainer.appendChild(petCard);  // Add the card to the container
            });
        } catch (error) {
            console.error('Error fetching pets:', error);    // Basic error 
        }   
    }

    // Create a pet card element

    function createPetCard(pet) {
        const card = document.createElement('div');
        card.className = 'pet-card';
        card.innerHTML = `
            <h3>${pet.name} ${pet.type}</h3>
            <p>Color: ${pet.color}</p>
            <p>${pet.description}</p>
            <button class="release-btn" data-id="${pet.id}">Release</button>
        `;
        return card;
    }

    // adopt a pet

    petForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const newPet = {
            name: petForm['pet-name'].value,
            type: petForm['pet-type'].value,
            color: petForm['pet-color'].value,
            description: petForm['pet-description'].value
        };
        
        /*

        try {
            const response = await fetch(API_URL, {
                method: 'POST',   
                  body: JSON.stringify(newPet)
            });

            if (response.ok) {
                fetchPets(); 
                petForm.reset();
                petForm.parentElement.style.display = 'none';
            }
        } catch (error) {
            console.error('Error adding pet:', error);
        }
    });

    */