page_colors = {
    '.home' : '#F9B464',
    '.menu' : '#8685EF',
    '.about_us' : '#FF3367',
    '.contact' : '#F9F871',
    '.order_summary' : '#DC04FF',
    'default' : '#FFFFFF',
}

function showPage(page) {
    page_btn = document.querySelector(`${page}_btn`)

    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    })

    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.backgroundColor = 'transparent';
        btn.style.color = page_colors['default'];
        btn.style.borderColor = page_colors['default'];
    });

    document.querySelector(page).style.display= "grid";
    document.querySelector('body').style.backgroundColor = page_colors[page]
    page_btn.style.color = page_colors[page]
    page_btn.style.borderColor = page_colors[page]
}

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
    receipt_container = document.querySelector('.order_summary');
    total_bill = quantity * item_rate;

    receipt_container.innerHTML = '';
    if (total_bill == 0 || customer == '') {
        receipt_container.innerText = 'Please enter the required information';
    } else {
        receipt_container.innerText = `Customer: ${customer}, Item name: ${item_name}, price: ${item_rate}, quantity: ${quantity}, Total bill: ${total_bill}`;
        showPage('.order_summary')
    }
}

function addEventListenersToButtons() {
    pages = ['home', 'menu', 'about_us', 'contact', 'order_summary']

    pages.forEach(page => {
        document.querySelector(`.${page}_btn`).addEventListener('click', () => {
            showPage(`.${page}`);
        })
    });
}


function main() {
    showPage('.home');
    addEventListenersToButtons();

    document.querySelectorAll('.menu_item').forEach(menuItem => {
        menuItem.querySelector('img').addEventListener('click', orderItem);
    });

    document.querySelectorAll('.order_place_button').forEach(btn => {
        btn.addEventListener('click', placeOrder);
    });

    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.backgroundColor = 'transparent';
    });

    // document.querySelectorAll('form').forEach(menuItem => {
    //     menuItem.style.display = 'none';
    // });
}
main();