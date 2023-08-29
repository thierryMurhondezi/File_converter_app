javascript
const fileInput = document.getElementById('file-input');
const convertBtn = document.getElementById('convert-btn');
const formatSelect = document.getElementById('format-select');

convertBtn.addEventListener('click', () => {
  const selectedFormat = formatSelect.value;
  const file = fileInput.files[0];

  const newFile = convertFile(file, selectedFormat);

  // Rest of logic...
});

function convertFile(file, newType) {
  const fileType = getFileType(file.name);

  if (!fileTypes[fileType]) {
    return {
      error: 'Unsupported file type'
    };
  }

  const newFile = new Blob([file], { type: fileTypes[newType] });

  return newFile;
}

function getFileType(fileName) {
  return fileName.split('.').pop();
}

const fileTypes = {
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'pdf': 'application/pdf'
};

const downloadFile = (file, fileName) => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
};

convertBtn.addEventListener('click', () => {
  const file = fileInput.files[0];
  const newType = 'pdf'; // or any supported type

  const newFile = convertFile(file, newType);

  // Download new file
  downloadFile(newFile, 'converted.' + newType);
});