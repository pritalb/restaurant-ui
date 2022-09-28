// menu_on = false;

// function showMenu() {
//     console.log('showing menu');
//     document.querySelector('#menu').style.display="block";
//     // document.querySelector('.menu_toggle').innerText = 'hide menu';
//     menu_on = true;
// }

// function hideMenu() {
//     console.log('hiding menu');
//     document.querySelector('#menu').style.display="none";
//     // document.querySelector('.menu_toggle').innerText = 'show menu';
//     menu_on = false;
// }

function showPage(page) {
    // console.log('showing menu');
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    })

    document.querySelector(page).style.display="block";
    // document.querySelector('.menu_toggle').innerText = 'hide menu';
    menu_on = true;
}


// function menuButton() {
//     if (menu_on) {
//         hideMenu();
//     } else {
//         showMenu();
//     }
// }

function orderItem(e) {
    item = e.target;
    parent = item.parentNode;

    parent.querySelector('form').style.display = 'block';
}

function placeOrder(e) {
    item = e.target;
    parent = item.parentNode;
    item_name = parent.dataset.name;
    item_rate = parent.dataset.rate;
    quantity = parent.querySelector('.menu_item_quantity').value;
    customer = parent.querySelector('.menu_item_customer_name').value;
    receipt_container = document.querySelector('#receipt');
    total_bill = quantity * item_rate;

    // console.log(`target: ${item}, rate: ${item_rate}, name: ${item_name}, quantity: ${quantity}, bill: ${total_bill}`);

    receipt_container.innerHTML = '';
    if (total_bill == 0 || customer == '') {
        receipt_container.innerText = 'Please enter the required information';
    } else {
        receipt_container.innerText = `Customer: ${customer}, Item name: ${item_name}, price: ${item_rate}, quantity: ${quantity}, Total bill: ${total_bill}`;
    }

    parent.style.display = 'none';
}

function addEventListenersToButtons() {
    pages = ['home', 'menu', 'about_us', 'contact']

    pages.forEach(page => {
        document.querySelector(`.${page}_btn`).addEventListener('click', () => {
            showPage(`.${page}`);
        })
    });
}


function main() {
    // hideMenu();
    showPage('.home');
    addEventListenersToButtons();
    // document.querySelector('.menu_toggle').addEventListener("click", () => {
    //     showPage('.menu');
    // });

    document.querySelectorAll('.menu_item').forEach(menuItem => {
        menuItem.querySelector('img').addEventListener('click', orderItem);
    });

    document.querySelectorAll('.order_place_button').forEach(btn => {
        btn.addEventListener('click', placeOrder);
    });

    document.querySelectorAll('form').forEach(menuItem => {
        menuItem.style.display = 'none';
    });
}
main();