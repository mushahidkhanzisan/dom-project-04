const extractText = () => {
    const fileInput = document.getElementById('imgeInput');
    const outPutDiv = document.getElementById('text-disply');

    const imagefiles = fileInput.files[0];

    if(!imagefiles){
        outPutDiv.textContent = 'please select an image file.'
        return;
    }
    
    Tesseract.recognize(
        imagefiles,
        'ben'
    ).then( ({data}) => {
        outPutDiv.textContent = data.text;
    }).catch( (error) => {
        console.error('Error', error);
        outPutDiv.textContent = 'Error'
        
    })
}