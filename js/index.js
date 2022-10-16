const showButton = document.querySelector('#ShowButton');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const submitButton = document.querySelector('.review__form-button');
const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const review = document.querySelector('#review');

showButton.addEventListener('click', function (e){
    e.preventDefault();
    modal.style.display = "block";
})

closeButton.addEventListener('click', function (e){
    e.preventDefault();
    modal.style.display = "none";
    clearInputs();
})

window.addEventListener('click', function (e){
    if (e.target === modal) {
        modal.style.display = "none";
        clearInputs();
    }
})

const clearInputs = () => {
    name.value = "";
    mail.value = "";
    review.value = "";
    name.classList.remove('invalid');
    mail.classList.remove('invalid');
    review.classList.remove('invalid');
    name.classList.remove('valid');
    mail.classList.remove('valid');
    review.classList.remove('valid');
}

const replaceClass = (item, oldClass, newClass) => {
    item.classList.remove(oldClass);
    item.classList.add(newClass);
};

const isEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

name.addEventListener('blur', function (){
    if (name.value.length < 3)
        replaceClass(name, 'valid', 'invalid');
    else
        replaceClass(name, 'invalid', 'valid');
})

mail.addEventListener('blur', function (){
    if (!isEmail(mail.value))
        replaceClass(mail, 'valid', 'invalid');
    else
        replaceClass(mail, 'invalid', 'valid');
})

review.addEventListener('blur', function (){
    if (review.value.length < 20)
        replaceClass(review, 'valid', 'invalid');
    else
        replaceClass(review, 'invalid', 'valid');
})

