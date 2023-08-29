// Supported file types
const fileTypes = {
    'jpg': 'image/jpeg',
    'png': 'image/png', 
    'pdf': 'application/pdf'
  };
  
  // File converter function 
  function convertFile(file, newType) {
  
    // Get file type from file name
    const fileType = getFileType(file.name);
  
    // Check if original type is supported
    if(!fileTypes[fileType]) {
      return {
        error: 'Unsupported file type' 
      };
    }
  
    // Convert to new type
    const newFile = new Blob([file], {type: fileTypes[newType]});
  
    return newFile;
  
  }
  
  // Get file type from file name
  function getFileType(fileName) {
    return fileName.split('.').pop();
  }
  
  
  // Usage
  
  const fileInput = document.getElementById('file-input');
  const convertBtn = document.getElementById('convert-btn');
  
  convertBtn.addEventListener('click', () => {
  
    const file = fileInput.files[0];
    const newType = 'pdf'; // or any supported type
  
    const newFile = convertFile(file, newType);
  
    // Download new file
    downloadFile(newFile, 'converted.' + newType); 
  
  });