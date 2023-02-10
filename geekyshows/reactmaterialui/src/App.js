import { Button, ButtonGroup, IconButton, Fab, Checkbox, FormControlLabel } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './App.css';

function App() {
  return (
    <>
      {/* Button */}
      <h1>Button</h1>
      <Button>Click Me</Button>
      <Button color="secondary">Click Me</Button>
      <Button href="https://google.com" color="primary">Link</Button>
      <Button disabled>Disabled</Button>

      <h3>Contained Button</h3>
      <Button variant="contained">Click Me</Button>
      <Button variant="contained" color="secondary">Click Me</Button>
      <Button variant="contained" href="https://google.com" color="primary">Link</Button>
      <Button variant="contained" disabled>Disabled</Button>

      <h3>Outline Button</h3>
      <Button variant="outlined">Click Me</Button>
      <Button variant="outlined" color="secondary">Click Me</Button>
      <Button variant="outlined" href="https://google.com" color="primary">Link</Button>
      <Button variant="outlined" disabled>Disabled</Button>

      <h3>Button Size</h3>
      <Button variant="outlined" color="secondary" size="small">Small</Button>
      <Button variant="outlined" color="secondary" size="medium">Medium</Button>
      <Button variant="outlined" color="secondary" size="large">Large</Button>

      <h3>Button with Icon</h3>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>Delete</Button>

      <h3>Icon Button</h3>
      <IconButton variant="contained" color="secondary">
        <DeleteIcon />
      </IconButton>
      
      <h1>Custom Button</h1>
      <Button variant="contained" color="secondary" style={{backgroundColor:"blue"}}>Custom</Button>

      {/* Button Group */}
      <h3>Button Group</h3>
      <ButtonGroup variant="contained" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h3>Button Group</h3>
      <ButtonGroup orientation="vertical" variant="contained" color="primary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      {/* Floating Action Button */}
      <h1>Floating Action Button</h1>
      <Fab color="primary"><AddIcon/></Fab>
      <Fab color="secondary"><EditIcon/></Fab>
      <Fab variant="extended"><NavigationIcon/>Navigate</Fab>
      <Fab disabled><FavoriteIcon/></Fab>


      {/* Checkbox */}
      <h3>Checkbox</h3>
      <Checkbox />
      <Checkbox checked="true" />
      <Checkbox checked="true" color="primary" />
      <Checkbox defaultChecked indeterminate />
      <FormControlLabel control={<Checkbox name="checkedA" />} label="Secondary" />
      <FormControlLabel control={<Checkbox checked="true" name="checkedA" />} label="Secondary" />
    </>
  );
}

export default App;