
//function to get counter from ddb via lambda & updates totalviews
const dataContainer = document.getElementById('totalviews');

async function getCounter() {
    try {
        let response = await fetch("https://xw2wtu2vvpdidknzxcumdgcgri0miekq.lambda-url.us-west-2.on.aws/"); //directly invokes lambda endpoint
        let data = await response.json();
        dataContainer.textContent = `${data}`; 

    } catch (error) {
        console.error('Error fetching totalviews:', error);
        dataContainer.textContent = 'Error getting totalviews';
    }
}

getCounter(); 
