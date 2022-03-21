import { Button } from '@mui/material';

function App() {
  return (
    <div className="app">
      <h1>React MUI</h1>
      <button>Click Me</button>
      <Button>Click</Button>
      <Button variant='contained' color='success'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      <Button variant="contained" color='error' href="#contained-buttons">Clickable href</Button>
      <Button variant="contained" href="#contained-buttons" disabled>Disabled</Button>
      




    </div>
  );
}

export default App;
