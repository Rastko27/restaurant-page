function aboutLoad() {
    const contentDiv = document.getElementById('content');

    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    h1.textContent = 'About the Restaurant';
    p1.textContent = "Welcome to The Culinary Haven, where culinary excellence meets warm hospitality in the heart of Gourmet Town. Established in 2010, our restaurant has become a cherished dining destination, known for its exquisite Mediterranean fusion cuisine and inviting atmosphere. Our menu, crafted with the freshest ingredients, features a delightful array of dishes, from classic favorites to innovative creations. Whether you're craving a hearty pasta, a perfectly grilled steak, or a refreshing salad, every plate at The Culinary Haven is a testament to our commitment to quality and flavor.";
    p2.textContent = "At The Culinary Haven, we believe in creating memorable experiences for our guests. Our dedicated team of chefs, servers, and staff share a passion for exceptional food and outstanding service. The ambiance of our thoughtfully designed interior, featuring cozy seating, ambient lighting, and tasteful decor, provides the perfect setting for any occasion. Committed to sustainability, we source local and organic ingredients whenever possible, reflecting our respect for nature and our community. Join us at The Culinary Haven and discover the warmth, flavor, and hospitality that define our restaurant.";

    contentDiv.appendChild(h1);
    contentDiv.appendChild(p1);
    contentDiv.appendChild(p2);
}

export default aboutLoad;