
  const socialMedia = [
        {
            "link": "https://www.linkedin.com/in/alex-tomas--/",
            "src": "https://cdn-icons-png.flaticon.com/128/145/145807.png",
            "alt": "Linkedin Icon",
            "content": ""
        },
        {
            "link": "https://github.com/alexxtomas",
            "src": "https://cdn-icons-png.flaticon.com/128/536/536452.png",
            "alt": "GitHub Icon",
            "content": ""
        },
        {
            "link": "",
            "src": "https://cdn-icons-png.flaticon.com/128/6066/6066482.png",
            "alt": "Phone Icon",
            "content": "+34 679 911 255"
        }
    ]

 const projects = [
        {
            "link": "https://gifinder-javascript-vanilla.netlify.app/",
            "src": "https://res.cloudinary.com/dv3z6ozcj/image/upload/v1666787403/GIFINDER_nrcjqp.png",
            "name": "GIFINDER",
            "description": "This is a project made in two days with vanilla javascript, which I did with the aim of understanding how the DOM management with JavaScript worked in a project as real as possible. It has the difficulty of being completely composable and all the elements dynamically injected into HTML.",
            "sourceCode": "https://github.com/alexxtomas/GIFINDER",
        },
        {
            "link": "https://cost-of-living-bb8o.vercel.app/",
            "src": "https://res.cloudinary.com/dv3z6ozcj/image/upload/v1666787403/COST-OF-LIVING_vfm91d.png",
            "name": "COST OF LIVING",
            "description": "Project made with TypeScript and Pico CSS. I had the challenge of making another project with vanilla JavaScript, I gave it a spin and decided to start with TypeScript and in 1 day this is what I was able to do. Very happy with the result, and really happy with the knowledge acquired in this project even though the development has been very brief.",
            "sourceCode": "https://github.com/alexxtomas/cost-of-living",
        }
    ]

const practices = [
    {
        "name": "redux-react-app",
        "description": "Practice to learn Redux along with React in <a href='https://www.youtube.com/c/midudev' target='_blank'>Midudev's</a> full stack course based on <a href='https://fullstackopen.com/en/' target='_blank'>Full Stack Open</a>. In it I have learned how to use Redux, I have learned all about the immutable states of redux and its actions. It was a different way of working in which I learned a lot",
        "sourceCode": "https://github.com/alexxtomas/redux-react-app",
        "tecnologies": ["Redux", "React"]
    },
    {
        "name": "react-app-with-typescript",
        "description": "Practice to learn TypeScript along with React in <a href='https://www.youtube.com/c/midudev' target='_blank'>Midudev's</a> full stack course based on  <a href='https://fullstackopen.com/en/' target='_blank'>Full Stack Open</a>. In it I have learned how to implement TypeScript in a project with React. After this practice I was left with a bad taste in my mouth with TypeScript. In subsequent practices this improved and I currently love TypeScript",
        "sourceCode": "https://github.com/alexxtomas/redux-react-app",
        "tecnologies": ["TypeScript", "React"]
    },
    {
        "name": "grapql-server",
        "description": "Practice to learn GraphQL on the backend with ApolloSever and MongoDB in <a href='https://www.youtube.com/c/midudev' target='_blank'>Midudev's </a> full stack course based on  <a href='https://fullstackopen.com/en/' target='_blank'>Full Stack Open</a>. I really enjoyed this practice. I love the backend part and on top of that implementing GraphQL was super fun, I also learned how to add JsonWebTokens to later use them in the frontend.",
        "sourceCode": "https://github.com/alexxtomas/graphql-server",
        "tecnologies": ["GraphQL", "MongoDB"]
    },
    {
        "name": "react-graphql",
        "description": "Practice to learn GraphQL on the frontend with React  in <a href='https://www.youtube.com/c/midudev' target='_blank'>Midudev's </a> full stack course based on  <a href='https://fullstackopen.com/en/' target='_blank'>Full Stack Open</a>. In it I learned how to interact with an API that uses GraphQL from the frontend and also to implement jsonwebtokens as authentication",
        "sourceCode": "https://github.com/alexxtomas/react-graphql",
        "tecnologies": ["GraphQL", "React"]
    },
    {
        "name": "notes-api-backend",
        "description": "Practice to learn Integration Testion in <a href='https://www.youtube.com/c/midudev' target='_blank'>Midudev's </a> full stack course based on  <a href='https://fullstackopen.com/en/' target='_blank'>Full Stack Open</a>. In it I made my first steps in testing. I learned a lot about why they have to be done and the types of tests that exist.",
        "sourceCode": "https://github.com/alexxtomas/notes-api-backend",
        "tecnologies": ["Jest", "Supertest", "Express", 'MongoDB']
    },
    {
        "name": "notes-api-frontend",
        "description": "Practice to learn Integration Testion and Testing e2e in React in <a href='https://www.youtube.com/c/midudev' target='_blank'>Midudev's </a> full stack course based on  <a href='https://fullstackopen.com/en/' target='_blank'>Full Stack Open</a>. Apart from delving deeper into React, learning the useRef hook and some other things, I learned how to perform e2e tests with cypress for the first time. I loved cypress!",
        "sourceCode": "https://github.com/alexxtomas/notes-api-frontend",
        "tecnologies": ["React", "Cypress", "Jest"]
    },

]

export default {projects, socialMedia, practices}