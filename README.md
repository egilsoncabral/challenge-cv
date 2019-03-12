# Hacker News App

The goal of the project was to use Oauth to authentication by the GitHub API, plus retrieve datas from a third-party Hacker News API, to create a web application which you will show a list with the news according to the selected category. Among the available categories it is possible to choose among "restaurant, mall, pubs, among others. It is still possible to filter by a specific place according to its category.
This project have 2 subprojects, the server to handle with authentication issues and the client to show the news by Hacker New API.

## Build/Usage

	1. Clone project

		$ git clone https://github.com/egilsoncabral/challenge-cv.git
		
	2. Build the project

	    - For build both projects, you will need to execute a instruction to download all dependencies
        	
         	$ npm install
        	
        - Then go to client directory and execute:
        	
        	$ npm start
		
		- Then go to server directory and execute:
        	
        	$ node app.js	
         
## Important

- This application uses API's from GitHub and Hacker News.
- You will need to install the NodeJs.


## Used Tools

- Create ReactApp
- GitHub API
- Hacker News API


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details