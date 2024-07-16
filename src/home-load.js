function homeLoad() {
    const contentDiv = document.getElementById('content');

    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.justifyContent = 'flex-start';
    contentDiv.style.alignItems = 'center';
    h1.textContent = 'The Culinary Haven';
    img.src = 'images/restaurant-image.jpg';
    img.alt = '';
    img.style.width = '500px';
    img.style.height = '100%';
    p.textContent = 'Nestled in the heart of the city, Gastronomia Delizia offers a culinary experience like no other. Our chefs are masters in the art of blending traditional flavors with modern techniques, creating dishes that are both familiar and innovative. The ambiance is warm and inviting, perfect for a romantic dinner or a gathering with friends.';

    contentDiv.appendChild(h1);
    contentDiv.appendChild(img);
    contentDiv.appendChild(p);
}

export default homeLoad;