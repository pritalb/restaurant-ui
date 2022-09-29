page_colors = {
    '.home' : '#F9B464',
    '.menu' : '#8685EF',
    '.about_us' : '#FF3367',
    '.contact' : '#F9F871',
    '.order_summary' : '#DC04FF',
    'default' : '#FFFFFF',
    'default-dark' : '#2B2B2B',
}

item_name = ''
item_rate = 0

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
    target = e.target;
    parent = target.parentElement;
    item_name = target.dataset.name
    item_rate = target.dataset.rate

    document.querySelector('.menu-form-heading').innerText = item_name
    document.querySelector('.menu-form-item-rate').innerText = item_rate
    
    document.querySelectorAll('.menu-item').forEach(menuItem => {
        menuItem.style.color = page_colors['default-dark']
        menuItem.style.borderColor = page_colors['default-dark']
        menuItem.querySelector('img').style.borderColor = page_colors['default-dark'];
    });


    target.style.borderColor = page_colors['default']
    parent.style.color = page_colors['default']
    parent.style.borderColor = page_colors['default']
}

function placeOrder(e) {
    item = e.target;
    parent = item.parentNode;
    quantity = parent.querySelector('.menu_item_quantity').value;
    customer = parent.querySelector('.menu_item_customer_name').value;
    total_bill = quantity * item_rate;

    console.log(`customer: ${customer}, item: ${item_name}, rate: ${item_rate}, quantity: ${quantity}, total bill: ${total_bill}`)

    document.querySelector('.order-summary-greeting-1').innerText = 'Thank You!';
    document.querySelector('.order-summary-greeting-2').innerText = 'Please do business with us again.';
    document.querySelector('.order-summary-customer-name').innerText = `Customer Name: ${customer}`;
    document.querySelector('.order-summary-item').innerText = `Item: ${item_name}`;
    document.querySelector('.order-summary-rate').innerText =  `Rate: ${item_rate}`;
    document.querySelector('.order-summary-quantity').innerText = `Quantity: ${quantity}`;
    document.querySelector('.order-summary-total').innerText = `Total Amount: ${total_bill}`;
    showPage('.order_summary');
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

    document.querySelectorAll('.menu-item').forEach(menuItem => {
        menuItem.querySelector('img').addEventListener('click', orderItem);
    });

    document.querySelectorAll('.order_place_button').forEach(btn => {
        btn.addEventListener('click', placeOrder);
    });

    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.backgroundColor = 'transparent';
    });
}
main();