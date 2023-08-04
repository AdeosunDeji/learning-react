import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/alert";

function App() {
  const [alert, setAlert] = useState(false);

  return (
    <div>
      {alert && <Alert onClose={() => setAlert(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlert(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
