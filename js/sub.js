/* Sub-Build.js */

// Add Sub Button
document.getElementById('add-sub').addEventListener('click', function() {
    var subCount = document.querySelectorAll('.sub').length;
    var newSub = document.createElement('div');
    newSub.className = 'sub';
    newSub.innerHTML = `
      <h2>Sub ${subCount + 1}</h2>
      <label for="sub${subCount + 1}-name">Sub Name:</label>
      <input type="text" id="sub${subCount + 1}-name" name="sub${subCount + 1}-name" required>
      
      <!-- Add more input fields here -->
      
      <button type="button" class="remove-sub">Remove Sub</button>
    `;
    document.getElementById('sub-form').insertBefore(newSub, document.getElementById('add-sub'));
  });
  
  // Remove Sub Button
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-sub')) {
      event.target.parentNode.remove();
    }
  });