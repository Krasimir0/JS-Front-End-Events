document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const sections = document.getElementById("task-input")[0];
   const submitBtn = document.getElementById("task-input")[1];
   const divContent = document.getElementById("content");
   
   submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let arrOfSections = sections.value.split(', ');
      for (const section of arrOfSections) {
         let div = document.createElement('div');
         let p = document.createElement('p');
         p.textContent = section;
         p.style.visibility = "hidden";

         p.addEventListener('click', () => {
            p.style.visibility = "visible";
          }); 
         
         div.appendChild(p);
         divContent.appendChild(div);
      }
   });


}