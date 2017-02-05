var React = require("react");

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a page from a React tutorial.</p>
      <p>
        Here are some tools i used:
      </p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a> - This was the
            javascript framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open weather map</a> - Used weather API
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
