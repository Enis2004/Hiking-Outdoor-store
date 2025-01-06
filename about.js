const accordionsButtons = document.querySelectorAll('.accordion-button');

accordionsButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const accordionContent = button.nextElementSibling;

        if(accordionContent.style.display === "block"){
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display ="block";
        }
    });
});
document.getElementById('commentForm').addEventListener('submit', function(event){
    event.preventDefault();
    const commentName = document.getElementById('commentName').value;
    const commentText = document.getElementById('commentText').value;

    alert('Please provide both name and comment')
    if(!commentName || !commentText){
        return;
    }
    const formData = new FormData();
    formData.append('commentName', commentName);
    formData.append('commentText', commentText);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'process_comment.php',true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            const response = JSON.parse(xhr.responseText);
        if(response.status === 'success'){

            const commentsList = document.getElementById('commentsList');
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<strong>${response.commentName}:</strong><p>${response.commentText}</p>`; 
            commentsList.appendChild(newComment);
            
            document.getElementById('commentForm').reset();
        } else {
            alert('Failed to submit comment');
        }
     }
  };
    xhr.send(formData);
});

