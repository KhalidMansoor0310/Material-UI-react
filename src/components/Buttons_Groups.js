import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function Buttons_Groups() {
  const CustomButton = () => {
    alert("Wellcome");
  }
  return (
    <>
      <div className="app">
        <h1>React MUI</h1>
        <button>Click Me</button>
        <Button>Click</Button>
        <Button variant='contained' color='success'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant="contained" color='error' href="#contained-buttons">Clickable href</Button>
        <Button variant="contained" href="#contained-buttons" disabled>Disabled</Button>
        <br /><br /><br />
        <ButtonGroup variant='contained' color='success'>
          <Button onClick={CustomButton}>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
        </ButtonGroup>

        <br /><br /><br />
        <ButtonGroup variant='outlined' orientation='vertical' color='success'>
          <Button onClick={CustomButton}>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
        </ButtonGroup>
      </div>

      
    </>
  );
}

export default Buttons_Groups;
