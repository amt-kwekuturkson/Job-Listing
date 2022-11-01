
const selectedRole = document.querySelectorAll('#role');
const selectedLanguage = document.querySelectorAll('#languages');
const selectedTool = document.querySelectorAll('#tools');
const selectedLevel = document.querySelectorAll('#level');

const selectedClear = document.querySelector('.clear');
const closeButtonRole = document.getElementsByClassName('close')[0];
const closeButtonLevel = document.getElementsByClassName('close')[1];
const closeButtonLanguage = document.getElementsByClassName('close')[2];
const closeButtonTool = document.getElementsByClassName('close')[3];

const cardView = document.querySelectorAll('.card');

let searchBox = document.getElementById('search-box');

let searchArray = [];


function hideSearchBox() {
   searchBox.style.display = 'none';

   let role = document.getElementById('result-value role-result');
   let language = document.getElementById('result-value language-result');
   let tool = document.getElementById('result-value tool-result');
   let level = document.getElementById('result-value level-result');

   level.parentNode.parentNode.style.display = 'none';
   role.parentNode.parentNode.style.display = 'none';
   tool.parentNode.parentNode.style.display = 'none';
   language.parentNode.parentNode.style.display = 'none';

   if (window.innerWidth <= 420) {
      searchBox.style.position = 'static';
   }

   let greenSide = document.createElement('div');
   let parent = document.querySelectorAll('.card')[1];

   greenSide.id = 'green-side';
   parent.appendChild(greenSide);

}

window.addEventListener('DOMContentLoaded', hideSearchBox);


function displayView() {
   let searchRole = document.getElementById('result-value role-result').innerHTML;
   let searchlanguage = document.getElementById('result-value language-result').innerHTML;
   let searchLevel = document.getElementById('result-value level-result').innerHTML;
   let searchTool = document.getElementById('result-value tool-result').innerHTML;

   cardView.forEach(item => {
      let role = item.querySelector('#role');
      let roleView = role.innerHTML;
      let level = item.querySelector('#level');
      let levelView = level.innerHTML;

      let language = item.querySelectorAll('#languages');
      let languageView = [];

      language.forEach(item => {
         languageView.push(item.innerHTML);
      })

      let languageSelected = '';
      languageView.forEach(item => {
         if (item === searchlanguage) {
            languageSelected = item;
         }

      })

      let tool = item.querySelectorAll('#tools');
      let toolView = [];

      tool.forEach(item => {
         toolView.push(item.innerHTML);
      })
      let toolSelected = '';

      toolView.forEach(item => {
         if (item === searchTool) {
            toolSelected = item;
         }

      })


      switch (searchArray.length) {
         case 0:
            item.style.display = '';
            let greenSide = document.createElement('div');
            let parent = document.querySelectorAll('.card')[1];

            greenSide.id = 'green-side';
            parent.appendChild(greenSide);
            break;
         case 1:
            if (searchArray.includes(roleView) || searchArray.includes(levelView) || searchArray.includes(languageSelected) || searchArray.includes(toolSelected)) {
               item.style.display = '';
            } else {
               item.style.display = 'none';
            }
            break;
         case 2:
            if (searchArray.includes(roleView) && searchArray.includes(levelView) || searchArray.includes(roleView) && searchArray.includes(languageSelected) || searchArray.includes(roleView) && searchArray.includes(toolSelected) || searchArray.includes(levelView) && searchArray.includes(languageSelected) || searchArray.includes(levelView) && searchArray.includes(toolSelected) || searchArray.includes(languageSelected) && searchArray.includes(toolSelected)) {
               item.style.display = '';
            } else {
               item.style.display = 'none';
            }
            break;
         case 3:
            if (searchArray.includes(roleView) && searchArray.includes(levelView) && searchArray.includes(languageSelected) || searchArray.includes(roleView) && searchArray.includes(levelView) && searchArray.includes(toolSelected) || searchArray.includes(roleView) && searchArray.includes(languageSelected) && searchArray.includes(toolSelected) || searchArray.includes(levelView) && searchArray.includes(languageSelected) && searchArray.includes(toolSelected)) {
               item.style.display = '';
            } else {
               item.style.display = 'none';
            }
            break;
         case 4:
            if (searchArray.includes(roleView) && searchArray.includes(levelView) && searchArray.includes(languageSelected) && searchArray.includes(toolSelected)) {
               item.style.display = '';
            } else {
               item.style.display = 'none';
            }
            break;
         default:
            item.style.display = '';
      }

   })

}

function cardFilter() {

   let searchRole = document.getElementById('result-value role-result').innerHTML;
   let searchlanguage = document.getElementById('result-value language-result').innerHTML;
   let searchLevel = document.getElementById('result-value level-result').innerHTML;
   let searchTool = document.getElementById('result-value tool-result').innerHTML;


   let wordArray = [];
   wordArray.push(searchRole);
   wordArray.push(searchLevel);
   wordArray.push(searchlanguage);
   wordArray.push(searchTool);

   wordArray = wordArray.filter(item => {
      if (item != '') {
         return item;
      }
   })

   wordArray.forEach(item => {
      let index = wordArray.indexOf(item);
      searchArray[index] = item;
   })

   console.log(`the search array in filter is ${searchArray}`);

   displayView();

}


function render(event) {

   searchBox.style.display = '';

   closeButtonRole.parentNode.style.display = '';

   let role = document.getElementById('result-value role-result');
   let language = document.getElementById('result-value language-result');
   let tool = document.getElementById('result-value tool-result');
   let level = document.getElementById('result-value level-result');


   if (event.target.innerHTML === 'Frontend' || event.target.innerHTML === 'Backend' || event.target.innerHTML === 'Fullstack') {
      role.innerHTML = event.target.innerHTML;

   } else if (event.target.innerHTML === 'Junior' || event.target.innerHTML === 'Midweight' || event.target.innerHTML === 'Senior') {
      level.innerHTML = event.target.innerHTML;
   } else if (event.target.innerHTML === 'React' || event.target.innerHTML === 'Sass' || event.target.innerHTML === 'Django' || event.target.innerHTML === 'Vue' || event.target.innerHTML === 'RoR' || event.target.innerHTML === 'Ruby') {
      tool.innerHTML = event.target.innerHTML;
   } else if (event.target.innerHTML === 'Javascript' || event.target.innerHTML === 'Python' || event.target.innerHTML === 'HTML' || event.target.innerHTML === 'Ruby' || event.target.innerHTML === 'CSS' || event.target.innerHTML === 'Ruby') {
      language.innerHTML = event.target.innerHTML;
   }

   let parentOfGreen = document.querySelectorAll('.card')[1];
   let greenSide = document.querySelectorAll('#green-side')[1];
   parentOfGreen.removeChild(greenSide);

}

function render1(event) {

   searchBox.style.display = '';
   closeButtonLanguage.parentNode.style.display = '';

   let role = document.getElementById('result-value role-result');
   let language = document.getElementById('result-value language-result');
   let tool = document.getElementById('result-value tool-result');
   let level = document.getElementById('result-value level-result');


   if (event.target.innerHTML === 'Frontend' || event.target.innerHTML === 'Backend' || event.target.innerHTML === 'Fullstack') {
      role.innerHTML = event.target.innerHTML;

   } else if (event.target.innerHTML === 'Junior' || event.target.innerHTML === 'Midweight' || event.target.innerHTML === 'Senior') {
      level.innerHTML = event.target.innerHTML;
   } else if (event.target.innerHTML === 'React' || event.target.innerHTML === 'Sass' || event.target.innerHTML === 'Django' || event.target.innerHTML === 'Vue' || event.target.innerHTML === 'RoR' || event.target.innerHTML === 'Ruby') {
      tool.innerHTML = event.target.innerHTML;
   } else if (event.target.innerHTML === 'Javascript' || event.target.innerHTML === 'Python' || event.target.innerHTML === 'HTML' || event.target.innerHTML === 'Ruby' || event.target.innerHTML === 'CSS' || event.target.innerHTML === 'Ruby') {
      language.innerHTML = event.target.innerHTML;
   }
   let parentOfGreen = document.querySelectorAll('.card')[1];
   let greenSide = document.querySelectorAll('#green-side')[1];
   parentOfGreen.removeChild(greenSide);
}




function render2(event) {

   searchBox.style.display = '';
   if (window.innerWidth <= 375) {
      searchBox.style.position = 'static';
   }
   closeButtonTool.parentNode.style.display = '';

   let role = document.getElementById('result-value role-result');
   let language = document.getElementById('result-value language-result');
   let tool = document.getElementById('result-value tool-result');
   let level = document.getElementById('result-value level-result');



   if (event.target.innerHTML === 'Frontend' || event.target.innerHTML === 'Backend' || event.target.innerHTML === 'Fullstack') {
      role.innerHTML = event.target.innerHTML;

   } else if (event.target.innerHTML === 'Junior' || event.target.innerHTML === 'Midweight' || event.target.innerHTML === 'Senior') {
      level.innerHTML = event.target.innerHTML;
   } else if (event.target.innerHTML === 'React' || event.target.innerHTML === 'Sass' || event.target.innerHTML === 'Django' || event.target.innerHTML === 'Vue' || event.target.innerHTML === 'RoR' || event.target.innerHTML === 'Ruby') {
      tool.innerHTML = event.target.innerHTML;
   } else if (event.target.innerHTML === 'Javascript' || event.target.innerHTML === 'Python' || event.target.innerHTML === 'HTML' || event.target.innerHTML === 'Ruby' || event.target.innerHTML === 'CSS' || event.target.innerHTML === 'Ruby') {
      language.innerHTML = event.target.innerHTML;
   }
   let parentOfGreen = document.querySelectorAll('.card')[1];
   let greenSide = document.querySelectorAll('#green-side')[1];
   parentOfGreen.removeChild(greenSide);
}

function render3(event) {

   searchBox.style.display = '';
   if (window.innerWidth <= 375) {
      searchBox.style.position = 'static';
   }
   closeButtonLevel.parentNode.style.display = '';

   let level = document.getElementById('result-value level-result');

   if (event.target.innerHTML === 'Junior' || event.target.innerHTML === 'Midweight' || event.target.innerHTML === 'Senior') {
      level.innerHTML = event.target.innerHTML;
   }
   let parentOfGreen = document.querySelectorAll('.card')[1];
   let greenSide = document.querySelectorAll('#green-side')[1];
   parentOfGreen.removeChild(greenSide);
}



function Close(event) {


   console.log(`the initial input array is ${searchArray}`);
   let imgTarget = document.querySelectorAll('img')[0];
   let imgTarget1 = document.querySelectorAll('img')[1];
   let imgTarget2 = document.querySelectorAll('img')[2];
   let imgTarget3 = document.querySelectorAll('img')[3];
   let resultContainer = '';

   if (event.target === imgTarget || event.target === imgTarget1 || event.target === imgTarget2 || event.target === imgTarget3) {
      event.target.parentNode.parentNode.style.display = 'none'
      resultContainer = event.target.parentNode.parentNode;
   } else {
      event.target.parentNode.style.display = 'none';
      resultContainer = event.target.parentNode;
   }


   let valueToDelete = resultContainer.querySelector('.result-value').innerHTML;
   let indexOfValue = searchArray.indexOf(valueToDelete);

   console.log(indexOfValue);
   if (searchArray[indexOfValue] === document.getElementById('result-value role-result').innerHTML) {

      document.getElementById('result-value role-result').innerHTML = '';
   } else if (searchArray[indexOfValue] === document.getElementById('result-value language-result').innerHTML) {
      document.getElementById('result-value language-result').innerHTML = '';
   } else if (searchArray[indexOfValue] === document.getElementById('result-value level-result').innerHTML) {
      document.getElementById('result-value level-result').innerHTML = '';
   } else if (searchArray[indexOfValue] === document.getElementById('result-value tool-result').innerHTML) {
      document.getElementById('result-value tool-result').innerHTML = '';
   }

   searchArray.splice(indexOfValue, 1);
   displayView();

}


function Clear() {
   let role = document.getElementById('result-value role-result');
   let language = document.getElementById('result-value language-result');
   let tool = document.getElementById('result-value tool-result');
   let level = document.getElementById('result-value level-result');
   level.parentNode.parentNode.style.display = 'none';
   role.parentNode.parentNode.style.display = 'none';
   tool.parentNode.parentNode.style.display = 'none';
   language.parentNode.parentNode.style.display = 'none';

   let greenSide = document.createElement('div');
   let parent = document.querySelectorAll('.card')[1];

   greenSide.id = 'green-side';
   parent.appendChild(greenSide);

   cardView.forEach(item => {
      item.style.display = '';
   })

   searchArray.splice(0, searchArray.length);
   document.getElementById('result-value role-result').innerHTML = '';
   document.getElementById('result-value language-result').innerHTML = '';
   document.getElementById('result-value tool-result').innerHTML = '';
   document.getElementById('result-value level-result').innerHTML = '';

}






selectedRole.forEach(item => {
   item.onclick = render;

})
selectedLanguage.forEach(item => {
   item.onclick = render1;
})
selectedTool.forEach(item => {
   item.onclick = render2;
})
selectedLevel.forEach(item => {
   item.onclick = render3;
})


selectedClear.onclick = Clear;
closeButtonRole.onclick = Close;
closeButtonLanguage.onclick = Close;
closeButtonTool.onclick = Close;
closeButtonLevel.onclick = Close;

cardView.forEach(item => {
   item.addEventListener('click', cardFilter);

})
