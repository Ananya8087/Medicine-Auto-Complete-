document.addEventListener('DOMContentLoaded', () => {
    // Fetch the medicines data
    fetch(chrome.runtime.getURL('medicines.json'))
      .then(response => response.json())
      .then(medicines => {
        const textarea = document.getElementById(':Rq1l76:');
        const dropdown = document.createElement('ul');
        dropdown.classList.add('autocomplete-dropdown');
        document.body.appendChild(dropdown);
  
        textarea.addEventListener('input', () => {
          const query = textarea.value.toLowerCase().trim();
          dropdown.innerHTML = '';
          if (query) {
            const filteredMedicines = medicines.filter(medicine =>
              medicine.toLowerCase().startsWith(query)
            );
  
            filteredMedicines.forEach(medicine => {
              const item = document.createElement('li');
              item.textContent = medicine;
              item.addEventListener('click', () => {
                textarea.value = medicine;
                dropdown.innerHTML = '';
              });
              dropdown.appendChild(item);
            });
  
            const rect = textarea.getBoundingClientRect();
            dropdown.style.left = `${rect.left}px`;
            dropdown.style.top = `${rect.bottom}px`;
            dropdown.style.width = `${rect.width}px`;
          }
        });
      });
  });
  