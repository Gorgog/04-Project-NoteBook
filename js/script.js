// Создание элементов
window.addEventListener('load', function () {
   const form = document.querySelector('.form');
   const inputName = document.querySelector('.input-name');
   const note = document.querySelector('.content__note-create');

   form.addEventListener('submit', function (e) {
      e.preventDefault();

      const InputTitle = inputName.value;

      if (!InputTitle) {
         alert("Please name the note");
         return;
      }

      const newNote = document.createElement("div");
      newNote.classList.add('content__note');

      const noteTitle = document.createElement("div");
      noteTitle.classList.add('content__note-title');

      const noteName = document.createElement("p");
      noteName.classList.add('content__name');
      noteName.innerHTML = InputTitle;

      const noteData = document.createElement("p");
      noteData.classList.add('content__data');
      noteData.innerHTML = dataNew;

      const buttonEditing = document.createElement("img");
      buttonEditing.src = "img/icon/pencil.png";
      buttonEditing.classList.add('content__editing');
      buttonEditing.setAttribute("alt", "");

      const buttonDelet = document.createElement("img");
      buttonDelet.src = "../img/icon/cross-click.png";
      buttonDelet.classList.add('content__delet');
      buttonDelet.setAttribute("alt", "");

      const noteText = document.createElement("div");
      noteText.classList.add('content__note-text', 'hidden');

      const noteTextArea = document.createElement("textarea");
      noteTextArea.classList.add('content__textarea', 'active');
      noteTextArea.setAttribute("readonly", "readonly");
      noteTextArea.innerHTML = "Example:&#10;&#10;SHOPPING LIST &#10;1. Tomatoes&#10;2. Sour cream&#10;&#10;Also do not forget about:&#10;Clean up before the arrival of the mother for the weekend, cook stew of vegetables and buy a gift.";


      note.prepend(newNote);
      newNote.append(noteTitle);
      noteTitle.append(noteName);
      noteTitle.append(noteData);
      noteTitle.append(buttonEditing);
      noteTitle.append(buttonDelet);
      newNote.append(noteText);
      noteText.append(noteTextArea);

      //Удаление note элемента
      buttonDelet.addEventListener('click', function () {
         newNote.remove();
      });

      //Изменение note элемента
      buttonEditing.addEventListener('click', function () {

         if (noteText.classList.contains('hidden')) {
            noteText.classList.remove('hidden');
            noteTextArea.focus();
            noteTextArea.removeAttribute("readonly");
            noteTextArea.style.textShadow = "0px 1px 1px #00000088";
            buttonEditing.src = "../img/icon/pencil-click.png";
         } else if (noteTextArea.hasAttribute('readonly')) {
            noteTextArea.focus();
            noteTextArea.removeAttribute("readonly");
            noteTextArea.style.textShadow = "0px 1px 1px #00000088";
            buttonEditing.src = "../img/icon/pencil-click.png";
         } else {
            noteTextArea.setAttribute("readonly", "readonly");
            noteTextArea.style.textShadow = "0px 0px 0px #00000088";
            buttonEditing.src = "img/icon/pencil.png";
         }

      });

      const divHidden = document.querySelector('body');

      divHidden.addEventListener('click', function () {
         noteTextArea.setAttribute("readonly", "readonly");
         noteTextArea.style.textShadow = "0px 0px 0px #00000088";
         buttonEditing.src = "img/icon/pencil.png";
      });

      noteText.addEventListener('click', function (event) {
         event.stopPropagation();
      });

      buttonEditing.addEventListener('click', function (event) {
         event.stopPropagation();
      });

      //Изменение иконок при наведении
      //Иконка Редактирование текста
      buttonEditing.onmouseover = buttonEditing.onmouseout = buttonEditingHandler;
      function buttonEditingHandler(event) {
         if (noteTextArea.hasAttribute('readonly')) {
            if (event.type == 'mouseover') {
               buttonEditing.src = "../img/icon/pencil-hover.png";
            }
            if (event.type == 'mouseout') {
               buttonEditing.src = "../img/icon/pencil.png";
            }
         }
      }
      //Иконка удаление записки
      buttonDelet.onmouseover = buttonDelet.onmouseout = buttonDeletHandler;
      function buttonDeletHandler(event) {
         if (event.type == 'mouseover') {
            buttonDelet.src = "../img/icon/cross.png";
         }
         if (event.type == 'mouseout') {
            buttonDelet.src = "../img/icon/cross-click.png";
         }
      }

      //Проявление поля noteText
      noteData.addEventListener('click', function () {
         noteText.classList.toggle('hidden');
      });

      noteName.addEventListener('click', function () {
         noteText.classList.toggle('hidden');
      });
   });
});


let dataNew;
function countDown() {
   let data = new Date();
   dataNew = data.toLocaleString("ru-RU")
   setTimeout(countDown, 500);
}
setTimeout(countDown, 500);