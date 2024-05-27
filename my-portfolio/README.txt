This is a portfolio made for school using react.

/// Stuff needed for this project:
Routing
Axios
redux & thunk

/// How to start

1. open terminal
2. input "cd my-portfolio"
3. npm start


/// functions

Contact Me functions:

handleInputChange is a function that handles changes in form input fields.
handleSubmit is a function that handles form submission.
Both of these functions is using the info comes from:

const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

Gameshowcase functions:

handleImageClick is a function that handles the event when an image is clicked.

handleCloseImageModal is a function that handles the event when the image modal needs to be closed.

handleTitleClick is a function that handles the event when a title is clicked.

Reasoning to having all these different click functions is so when you press title of the game you get directed to the git/game, but if you click the image it showcases full size of the image.

Githubrepos functions:

I use api to get the repos from my own github. But I didn't like the desc aswell as name on some of the repos so I made my own table such as:

const repositoryMappings = {
    'grupp-1-react': {
        displayName: 'E-Wallet (School project)',
        description: 'A website designed for mobile device that handles your creditcards.',
        url: 'https://philipalgebrink-ewallet.netlify.app/',
    },
    'Philip_FE23_flexboxMania': {
        displayName: 'Flexbox Mania (School project)',
        description: 'A website showcasing my flexbox skills.',
    },
    'Philip_FE23_individuell-examination': {
        displayName: 'Flexbox and Grid Mania (School project)',
        description: 'A website showcasing I know how to use grid and flexbox.',
    },
    'Solaris-individuell-examination': {
        displayName: 'Our Solarsystem (School project)',
        description: 'A website showcasing I know how to use javascript and API to fetch information of our solarsystem.',
    },
    'grupp-8-flickr-api': {
        displayName: 'Flickr Image Search (School project)',
        description: 'A website showcasing I know how to use javascript, API and lightbox. In this case we used API from Flickr to fetch pictures on searching results.',
    },
}

to manually be able to set name and desc for them. If they don't exist in the table I made manually then they will showcase the original repo name an desc.