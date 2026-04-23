


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
