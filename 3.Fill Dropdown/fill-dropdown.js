document.addEventListener('DOMContentLoaded', solve);

function solve() {
     const form = document.querySelector("form");
     const menu = document.getElementById("menu");
      
      form.addEventListener("submit", (e) => {
         e.preventDefault();
         const newItemText = document.getElementById("newItemText").value;
         const newItemValue = document.getElementById("newItemValue").value;
    
         const option = document.createElement("option");
         option.textContent = newItemText;
         option.value = newItemValue;
         
         menu.appendChild(option);
        
         newItemText = '';
         newItemValue = '';
      });
}