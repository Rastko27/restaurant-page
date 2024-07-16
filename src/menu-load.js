function menuLoad() {
    const contentDiv = document.getElementById('content');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';

    const appetizers = document.createElement('h2');
    appetizers.textContent = 'Appetizers';

    const bruschetta = document.createElement('h3');
    bruschetta.textContent = 'Bruschetta';

    const bruschettaText = document.createElement('p');
    bruschettaText.textContent = 'Crispy bread topped with fresh tomatoes, basil, and a drizzle of balsamic glaze.';

    const calamari = document.createElement('h3');
    calamari.textContent = 'Calamari';

    const calamariText = document.createElement('p');
    calamariText.textContent = 'Lightly fried squid served with zesty marinara sauce.';

    const mainCourses = document.createElement('h2');
    mainCourses.textContent = 'Main Courses';

    const grilledSalmon = document.createElement('h3');
    grilledSalmon.textContent = 'Grilled Salmon';

    const grilledSalmonText = document.createElement('p');
    grilledSalmonText.textContent = 'Succulent salmon fillet, grilled to perfection, served with a lemon herb butter sauce.';

    const pastaPrimavera = document.createElement('h3');
    pastaPrimavera.textContent = 'Pasta Primavera';

    const pastaPrimaveraText = document.createElement('p');
    pastaPrimaveraText.textContent = 'A delightful mix of seasonal vegetables and pasta, tossed in a light garlic and olive oil sauce.';
    
    const deserts = document.createElement('h2');
    deserts.textContent = 'Deserts';

    const tiramisu = document.createElement('h3');
    tiramisu.textContent = 'Tiramisu';

    const tiramisuText = document.createElement('p');
    tiramisuText.textContent = 'A classic Italian dessert layered with espresso-soaked ladyfingers and creamy mascarpone.';

    const chocolateLavaCake = document.createElement('h3');
    chocolateLavaCake.textContent = 'Chocolate Lava Cake';

    const chocolateLavaCakeText = document.createElement('p');
    chocolateLavaCakeText.textContent = 'Warm, gooey chocolate cake with a molten center, served with vanilla ice cream.';

    const beverages = document.createElement('h2');
    beverages.textContent = 'Beverages';

    const water = document.createElement('h3');
    water.textContent = 'Water';

    const waterText = document.createElement('p');
    waterText.textContent = 'Refreshing water.';

    const lemonade = document.createElement('h3');
    lemonade.textContent = 'Lemonade';

    const lemonadeText = document.createElement('p');
    lemonadeText.textContent = 'Cool and refreshing, made with freshly squeezed lemons.';

    contentDiv.appendChild(h1);
    contentDiv.appendChild(appetizers);
    contentDiv.appendChild(bruschetta);
    contentDiv.appendChild(bruschettaText);
    contentDiv.appendChild(calamari);
    contentDiv.appendChild(calamariText);
    contentDiv.appendChild(mainCourses);
    contentDiv.appendChild(grilledSalmon);
    contentDiv.appendChild(grilledSalmonText);
    contentDiv.appendChild(pastaPrimavera);
    contentDiv.appendChild(pastaPrimaveraText);
    contentDiv.appendChild(deserts);
    contentDiv.appendChild(tiramisu);
    contentDiv.appendChild(tiramisuText);
    contentDiv.appendChild(chocolateLavaCake);
    contentDiv.appendChild(chocolateLavaCakeText);
    contentDiv.appendChild(beverages);
    contentDiv.appendChild(water);
    contentDiv.appendChild(waterText);
    contentDiv.appendChild(lemonade);
    contentDiv.appendChild(lemonadeText);
}
    
export default menuLoad;