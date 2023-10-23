const greetingsList = [
    'hello world',
    'bonjour monde',
    'kaise hee aaap',
    'entha paad',
    'namaskaaram',
];

function changeGreeting() {
    const randomIndex = Math.floor(Math.random() * greetingsList.length);
    const randomGreeting = greetingsList[randomIndex];
    document.getElementById('greetingTxt').textContent = randomGreeting.toString();
}

function getCount() {
    const randomIndex = Math.floor(Math.random() * 1000);
    document.getElementById('vistorCountTxt')
    textContent = "visitor count: " + randomIndex.toString();

}