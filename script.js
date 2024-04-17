
    document.addEventListener('DOMContentLoaded', function() {
      const commentForm = document.getElementById('comment-form');
      const commentsList = document.getElementById('comments-list');
      const errorElement = document.getElementById('error-message');

      commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const comment = document.getElementById('comment').value.trim();

        // Vérifier si tous les champs sont remplis
        if (firstName === '' || lastName === '' || comment === '') {
          errorElement.style.display = 'block';
          return;
        }

        // Créer un nouvel élément de commentaire
        const newComment = document.createElement('div');
        newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');

        const commenter = document.createElement('div');
        commenter.classList.add('flex-1', 'py-10', 'border-t', 'border-gray-200');

        const commenterName = document.createElement('h3');
        commenterName.classList.add('font-medium', 'text-gray-900');
        commenterName.textContent = firstName + ' ' + lastName;

        const commentContent = document.createElement('div');
        commentContent.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');
        commentContent.textContent = comment;

        commenter.appendChild(commenterName);
        commenter.appendChild(commentContent);

        newComment.appendChild(commenter);

        commentsList.appendChild(newComment);

        // Réinitialiser les champs du formulaire
        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('comment').value = '';

        // Cacher le message d'erreur s'il était affiché
        errorElement.style.display = 'none';
      });
    });
    