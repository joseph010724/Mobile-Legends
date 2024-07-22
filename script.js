const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const responses = {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! What can I do for you?",
    "how are you": "I'm an AI, so I don't have feelings, but I'm here to help you!",
    "what is ai": "AI stands for Artificial Intelligence, which is the simulation of human intelligence in machines.",
    "bye": "Goodbye! Have a great day!",
    // Mobile Legends related questions
    "how to counter tank heroes?": "To counter tank heroes, build items like 'Demon Hunter Sword' and 'Malefic Roar'. These items help deal with high HP and defense.",
    "how to counter marksman heroes?": "To counter marksman heroes, build items like 'Blade Armor' and 'Dominance Ice'. These items reduce their attack speed and reflect damage.",
    "how to counter mage heroes?": "To counter mage heroes, build items like 'Athena's Shield' and 'Radiant Armor'. These items provide magic resistance and reduce burst damage.",
    "how to counter assassin heroes?": "To counter assassin heroes, build items like 'Immortality' and 'Antique Cuirass'. These items provide survivability and reduce physical damage.",
    "how to counter fighter heroes?": "To counter fighter heroes, build items like 'Blade of Heptaseas' and 'Sea Halberd'. These items reduce their healing and increase your burst damage.", 
    //Counter Heroes for each Role
    "counter heroes for assassins?": "To counter Assassins, use heroes like Eudora or Saber because of the Crowd Control and Burst Capability of the skillset they have.",
    "counter heroes for tank?": "To counter Tanks, use heroes like Lunox or Karrie because of their burst capability and massive damage to one target.",
    "counter heroes for mage?": "To counter Mage heroes, use heroes like Lancelot or Ling because of their ability to chase down enemy easily.",
    "counter heroes for marksman?": "To counter Marksmans, use heroes like Lolita or Tigreal because of their skillsets and  can easily setup a set for your ally marksman.",
    "counter heroes for fighters?": "To counter Fighters, use heroes like Yu Zhong or Dyrotth because of their sustainability and early high damage because of their skills and passoives."
};
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userText = userInput.value.trim().toLowerCase();
    if (userText) {
        appendMessage('You', userText);
        userInput.value = '';
        setTimeout(() => {
            const botResponse = getBotResponse(userText);
            appendMessage('Bot', botResponse);
        }, 500);
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userText) {
    return responses[userText] || "Sorry, I didn't understand that. Can you please rephrase?";
}
