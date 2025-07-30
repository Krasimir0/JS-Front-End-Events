document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const form = document.getElementById('input')
  const furnitures = form.querySelector('textarea').value;
  const table = document.querySelector('table');
  const furnituresJson = JSON.parse(furnitures);
  const formShop = document.getElementById('shop');

  form.addEventListener('submit', e => {
      e.preventDefault();

      for (const furniture of furnituresJson) {
          const tbody = document.createElement("tbody");
          const tr = document.createElement('tr');
          const tdImage = document.createElement('td');
          const img = document.createElement('img');
          const tdFurnitureName = document.createElement('td');
          const paragraphName = document.createElement('p');
          const tdFurniturePrice = document.createElement('td');
          const paragraphPrice = document.createElement('p');
          const tdDecorationFactor = document.createElement('td');
          const paragraphDecorationFactor = document.createElement('p');
          const tdCheckBox = document.createElement('td');
          const inputCheckBox = document.createElement('input');
          
          table.appendChild(tbody);
          tbody.appendChild(tr);

          tr.appendChild(tdImage);
          img.src = furniture.img;
          tdImage.appendChild(img);

          tr.appendChild(tdFurnitureName);
          paragraphName.textContent = furniture.name;
          tdFurnitureName.appendChild(paragraphName);

          tr.appendChild(tdFurniturePrice);
          paragraphPrice.textContent = furniture.price;
          tdFurniturePrice.appendChild(paragraphPrice);

          tr.appendChild(tdDecorationFactor);
          paragraphDecorationFactor.textContent = furniture.decFactor;
          tdDecorationFactor.appendChild(paragraphDecorationFactor);

          tr.appendChild(tdCheckBox);
          inputCheckBox.type = "checkbox";
  
          tdCheckBox.appendChild(inputCheckBox);
      }
  })

  formShop.addEventListener('submit', e => {
    e.preventDefault();
    const checkboxes = document.querySelectorAll('table input[type="checkbox"]');
    const textarea = formShop.querySelector('textarea');

    for (const checkbox of checkboxes) {
     if (checkbox.checked) {
          const tr = checkbox.closest('tr');
          const tds = tr.querySelectorAll('td');
          
          const name = tds[1].textContent;
          const price = tds[2].textContent;
          const decFactor = tds[3].textContent;

          textarea.textContent = `{
            name: ${name},
            price: ${price},
            decFactor: ${decFactor}
          }`
     }
      
    }
    
          
  })
}