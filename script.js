document.addEventListener("DOMContentLoaded", function () {

    let tatal_amount = document.getElementById("tatal_amount_id_paragraph");
    let item = document.getElementById("items");

    let selectedList = document.getElementById('selectedList');
    let totalPriceElement = document.getElementById('totalPrice');


    let selectedChocolates = [];

    // Sample chocolate data for Sweet Delights
    const chocolates = [{
        name: 'Milk Chocolate Bar',
        price: 2.50,
        image: 'https://s3.amazonaws.com/images.ecwid.com/images/29136006/1481842106.jpg'
    },
    {
        name: 'Dark Chocolate Truffles',
        price: 3.00,
        image: 'https://th.bing.com/th/id/OIP.z5JUULCVdkOtzVUEr84YPwHaFX?rs=1&pid=ImgDetMain'
    },

    {
        name: 'Hazelnut Pralines',
        price: 3.50,
        image: 'https://funcakes.com/content/uploads/2021/07/Chocolates-with-hazelnut-praline-filling-1000x750.jpg'
    },
    {
        name: 'Caramel-filled Chocolates',
        price: 3.20,
        image: 'https://th.bing.com/th/id/OIP.RVPqfOZbrJkEnnT1qKAwYgHaFJ?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Assorted Chocolate Box',
        price: 4.00,
        image: 'https://th.bing.com/th/id/OIP.P9E8-sV3i61xYkYCklx3WQHaHa?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Mint Chocolate Truffles',
        price: 3.30,
        image: 'https://bing.com/th?id=OSK.48cb46b1e91ab521757aa62c81af68f9'
    },
    {
        name: 'Cherry-filled Dark Chocolate',
        price: 3.80,
        image: 'https://i.pinimg.com/originals/2b/3a/11/2b3a119f6d89679bcf1fe52e24813d60.png'
    },

    {
        name: 'White Chocolate Almond Bark',
        price: 2.80,
        image: 'https://i.pinimg.com/originals/a7/51/a5/a751a58be89cf5e17d841fa9da56f49b.jpg'
    }
    ];




    // Create chocolate options
    chocolates.forEach(chocolate => {

        const Mainoption = document.createElement('div');
        Mainoption.classList.add("col-12", "col-md-6", "col-lg-3");
        const option = document.createElement('div');
        option.classList.add('chocolate-option', 'menu-item-image', "shadow", "menu-item-card", "p-3", "mb-3");
        const image = document.createElement('img');
        image.src = chocolate.image;
        image.alt = chocolate.name;
        image.classList.add("menu-item-image", "w-100");
        const price = document.createElement('p');
        price.textContent = "$" + chocolate.price;
        let title = document.createElement('p');
        title.textContent = chocolate.name;
        title.classList.add("menu-card-title");

        option.appendChild(image);
        option.appendChild(price);
        option.appendChild(title);
        Mainoption.appendChild(option);
        option.addEventListener('click', () => selectChocolate(chocolate));
        item.appendChild(Mainoption);
    });


    // Function to handle chocolate selection
    function selectChocolate(chocolate) {
        if (selectedChocolates.length < 8) {
            selectedChocolates.push(chocolate);
            updateSelectedList();
            updateTotalPrice();
        } else {
            alert('You can select up to 8 chocolates.');
        }
    }

    // Function to update the selected chocolates list
    function updateSelectedList() {
        selectedList.innerHTML = '';
        selectedChocolates.forEach(chocolate => {
            const listItem = document.createElement('li');
            listItem.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
            selectedList.appendChild(listItem);
        });
    }


    // Function to update the total price
    function updateTotalPrice() {
        const totalPrice = selectedChocolates.reduce((total, chocolate) => total + chocolate.price, 0);
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }








});