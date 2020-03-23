import React from 'react';
import { Grommet, Box } from "grommet";
import Main from "./Main"

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Box flex>
        <Main />
      </Box>
    </Grommet>
  );
}

export default App;
