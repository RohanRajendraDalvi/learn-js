/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        if(isValidEmail(email)){
            console.log(email);
            const listItem = document.createElement('li');
            listItem.innerText = email.slice(0,email.indexOf('@')).replace(/./g,'*')+email.slice(email.indexOf('@'));
            list.appendChild(listItem)
        }

    }
}

function isValidEmail(email){
    let result = email.match(/^[a-zA-Z0-9_]+@(.+\.)*northeastern.edu$/);
    return result;
}