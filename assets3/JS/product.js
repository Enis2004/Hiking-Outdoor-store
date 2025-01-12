function openModal(imageSrc) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
    var caption = document.getElementById('caption');
    modal.style.display = "block";
    modalImage.src = imageSrc;
    
    var imageName = imageSrc.split('/').pop();
    caption.innerHTML = "";  
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}
function toggleContent(productId){
    var content = document.getElementById(productId);
    if (content.style.display === "block"){
        content.style.display = "none";
    }else{
        content.style.display ="block";
    }
}
function loadComments(productId){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'comments.json',true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var data = JSON.parse(xhr.responseText);
            var comments = data.comments.filter(function(comment) {
                return comment.productId === productId;
            });
            var commentsHTML = '';
            comments.forEach(function(comment){
                commentsHTML += '<div class="comment"><strong>' + comment.author + ':</strong><p>' + comment.comment + '</p></div>';
            });
            document.getElementById('comments-'+ productId).innerHTML = commentsHTML;

            }
        };
        xhr.send();
    }
    function toggleDescription(productId){
        var desc = document.getElementById('product-desc-' + productId);
        var desc = document.getElementById('comment-'+productId);
        if (desc.style.display === 'none'){
            desc.style.display = 'block';
            comments.style.display == 'block';
            loadComments(productId);
        }else{
            desc.style.display = 'none';
            comments.style.display = 'none'
        }

}
window.onload = function(){
    loadComments(1);
    
  
};
