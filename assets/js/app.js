document.addEventListener('DOMContentLoaded', () => {

    const checkboxConfidentiality = document.querySelector('#confidentiality');
    const btnSubmit = document.querySelector('#btnSubmit');

    checkboxConfidentiality.addEventListener('change', (e) => {
        console.log(btnSubmit)
        if (e.target.checked) {
            btnSubmit.disabled = false;
            btnSubmit.style.backgroundColor = 'green';

        } else {
            btnSubmit.disabled = true;
            btnSubmit.style.backgroundColor = 'red';
        }
    });

    btnSubmit.addEventListener('click', (e) => {
        if (checkboxConfidentiality.checked) {
            alert('Merci, votre message a bien été envoyé !');
        } else {
            btnSubmit.disabled = true;
            btnSubmit.style.backgroundColor = 'red';}
    });

});
