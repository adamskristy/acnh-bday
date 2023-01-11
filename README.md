# ACNH Birthday Directory

This mid-mod project is frontend focused and for practicing React skills.

### Minimum Project Requirements

- There should be at least 4-5 functional components
- There should be at least 3 or more pages (separate routes)
- The Application must make use of React Router (`npm install react-router-dom`)
- Uses at least one external API
- Prop passing of some sort
- Has README.md file at the root of repository that clearly documents the purpose of the project, the target end user, and includes a link to the deployed version of the project
- Must have a repository and make regular commits (at least 10 total)
- Must be deployed (a good option is Netlify.)

### Stretch Goals:

- Manage at least some part of state with the useReducer and useContext hooks (together) or Redux. (`npm install @reduxjs/toolkit react-redux`)
- Use Local Storage to store some of your application data in the browser
- Install axios (`npm install axios`) and use it to read external APIs
- Use a CSS Framework (like Bootstrap) to style part of your application

## Demo

https://acnh-bday.netlify.app

## Motivations

I choose this project idea due to love of video games, like Animal Crossing, and wanting to pick a fun topic. Also the ease of access to the information. I picked an API that was relatively simple to understand.

This target audience is for the Animal Crossing Lovers like myself.

## Resources

[ACNH API](https://acnhapi.com/) is a free RESTful API for critters, fossils, art, music, furniture and villagers from Animal Crossing: New Horizons. I accessed the villager data as an [object array](http://acnhapi.com/v1a/villagers) instead of a nested JSON to allow me to practice array methods and manipulate the data as needed. 

The schema is listed as follows from the ACNH API site

![App Screenshot](https://i.imgur.com/5hJysiul.png)

### Sample data
```JSON
{
  "id": 1,
  "file-name": "ant00",
  "name": {
    "name-USen": "Cyrano",
    "name-EUen": "Cyrano",
    "name-EUde": "Theo",
    "name-EUes": "Cirano",
    "name-USes": "Cirano",
    "name-EUfr": "Cyrano",
    "name-USfr": "Cyrano",
    "name-EUit": "Cirano",
    "name-EUnl": "Cyrano",
    "name-CNzh": "阳明",
    "name-TWzh": "陽明",
    "name-JPja": "さくらじま",
    "name-KRko": "사지마",
    "name-EUru": "Сирано"
  },
  "personality": "Cranky",
  "birthday-string": "March 9th",
  "birthday": "9/3",
  "species": "Anteater",
  "gender": "Male",
  "catch-phrase": "ah-CHOO",
  "icon_uri": "https://acnhapi.com/v1/icons/villagers/1",
  "image_uri": "https://acnhapi.com/v1/images/villagers/1"
}
```
## Screenshots

I used [Miro](https://miro.com/) to help streamline by ideas for layout and react components. My idea was create a very simple and easy to use calendar. I wanted to user to be able to access the specific information they wanted quickly without having to click through all the pages. 

The app is target to Animal Crossing lovers who most likely would know the villager by name and be able to search for their favorites, however, I felt that even people who aren't familiar should be able to have fun and connect with the app so I included a search by birthday, a simple, yet fun way to engage people who may not be familiar.

![App Screenshot](https://i.imgur.com/ED5iqWhl.png)
![App Screenshot](https://i.imgur.com/jcbdDeNl.png)
![App Screenshot](https://i.imgur.com/fJnc8hDl.png)
![App Screenshot](https://i.imgur.com/zKsOITxl.png)


## Lessons Learned

I learned that I need a lot more practice with the fundamentals of JavaScript. This project required the use of a lot of array methods like map, find, and filter. I also used a lot of string methods such as includes and split.

This project really challenged the way I think about problem solving and helped me to sharpen my debugging skills.

Some challenges I faced was the simplistic nature of the API. There were no built in functions to search or filter the information so I had to come up with that myself. Thinking through that process was difficult but a lot of fun.

Also incorporating Bulma and SASS in the project was difficult. Bulma is a newer css framework so the documentation is not as detailed, in addition to support and troubleshooting tips. There was a lot of trial and error but I ultimately enjoyed it. I choose Bulma because of the fact it was newer.

I was initially going to try TailWind CSS but after testing it out, it was overwhelming with the amount features, and I did not like how much code was in my files. Bulma provides a similar experience, but paired down. I will say I like the simplicity of Bulma, however for this project, more customization would have been preferable.



## Future Updates

- Additional styling 
    - fixed grid layout on Home and Calendar page
    - general restyling of pages

- Add more information about villagers
    - added villager icons
    - added villager text and bubble colors

- Refactor code to simplify
    - seperated logic for search form into seperate components (name and birthday)
    - fixed code to filter through api correctly and return results (switched from filter to find method)

- Try axios instead of fetch

- Rework the day page 
    - I assumed there would be multiple villagers for each date and based my layout upon that. Need to adjust so page is not so empty
    - adding icons helped but still too much white space

- fix search by name form (unable to use uppercase)
- placeholder text if no villager data

- condense search forms into one with dropdown

## Acknowledgements

- [ACNH API](https://acnhapi.com/)
- [Bulma](https://bulma.io/)
- [Font Awesome](https://fontawesome.com/)
- [The Net Ninja](https://www.youtube.com/c/TheNetNinja)
- [Web Dev Smplified](https://www.youtube.com/c/TheNetNinja)

## Disclaimer

Animal Crossing and all related assets are the sole property of Nintendo. I claim no ownership or rights. This information was use for non-commerical and educational purposes.
