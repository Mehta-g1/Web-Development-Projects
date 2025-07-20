# Real-Time Weather Forecast App

This is a simple and elegant web application that provides real-time weather information for any city in the world. It features a clean, card-based interface that displays the current temperature, humidity, wind speed, and a dynamic weather icon that changes according to the conditions.

## Features

- **City-Based Search:** Users can enter the name of any city to get the latest weather forecast.
- **Real-Time Data:** Fetches live weather data from the [OpenWeatherMap API](https://openweathermap.org/api).
- **Dynamic UI:** The user interface updates dynamically to show:
    - Current temperature in Celsius.
    - Humidity percentage.
    - Wind speed in km/h.
    - An icon representing the current weather condition (e.g., clouds, rain, clear sky).
- **Error Handling:** Displays a user-friendly error message if the entered city name is invalid or not found.
- **Responsive Design:** The layout is designed to be responsive and works well on different screen sizes.

## Technologies Used

- **HTML5:** For the basic structure and content of the application.
- **CSS3:** For styling the user interface, including a gradient background and modern card design.
- **JavaScript (ES6):** For handling user input, making API requests, and dynamically updating the DOM.

## How to Use

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Mehta-g1/Web-Development-Projects.git
    ```
2.  **Get an API Key:**
    - This project uses the OpenWeatherMap API to fetch weather data.
    - You need to get your own free API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
3.  **Update the API Key:**
    - Open the `script.js` file.
    - Replace the placeholder API key in the first line with your own key:
      ```javascript
      const api_key = "YOUR_API_KEY_HERE";
      ```
4.  **Open `index.html`:**
    - Open the `index.html` file in your web browser to run the application.

## File Structure

```
.
├── images/
│   ├── clear.png
│   ├── clouds.png
│   ├── drizzle.png
│   ├── humidity.png
│   ├── mist.png
│   ├── rain.png
│   ├── search.png
│   ├── snow.png
│   └── wind.png
├── index.html
├── script.js
└── style.css
```

-   **`index.html`**: The main HTML file containing the structure of the web page.
-   **`style.css`**: The stylesheet for the application.
-   **`script.js`**: Contains the JavaScript code for fetching and displaying the weather data.
-   **`images/`**: A directory containing all the weather icons and search icon used in the application.



## Credits

This project was created by ❤️ **[@Mehta_G](https://web-development-projects-xi.vercel.app/Project-6%20(Personal%20Portfolio%20website)/index.html)**.
