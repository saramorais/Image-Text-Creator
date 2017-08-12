import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "{1eadbbb9f83724314e17ba6732fb1c085d06286735e4b258518143de529481c0}",
  secret: "{6287da69475a8b3263a02d4fa196615f02b15d3349d1726092379c2c89b9e685}",
  callbackUrl: "{urn:ietf:wg:oauth:2.0:oob}"
});


ReactDOM.render(
  <App />,
  document.getElementById("wrapper")
);
