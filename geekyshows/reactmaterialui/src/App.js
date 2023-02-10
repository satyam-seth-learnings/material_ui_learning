import {
  Button,
  ButtonGroup,
  IconButton,
  Fab,
  Checkbox,
  FormControlLabel,
  Radio,
  Slider,
  Switch,
  Box,
  Avatar,
  Badge,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Typography,
  CircularProgress,
  LinearProgress,
  Container,
  Grid,
  Hidden,
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/Inbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useState } from 'react';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
      <Button variant="contained" color="secondary" style={{ backgroundColor: "blue" }}>Custom</Button>

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
      <Fab color="primary"><AddIcon /></Fab>
      <Fab color="secondary"><EditIcon /></Fab>
      <Fab variant="extended"><NavigationIcon />Navigate</Fab>
      <Fab disabled><FavoriteIcon /></Fab>


      {/* Checkbox */}
      <h1>Checkbox</h1>
      <Checkbox />
      <Checkbox checked="true" />
      <Checkbox checked="true" color="primary" />
      <Checkbox defaultChecked indeterminate />
      <FormControlLabel control={<Checkbox name="checkedA" />} label="Secondary" />
      <FormControlLabel control={<Checkbox checked="true" name="checkedA" />} label="Secondary" />

      {/* Date / Time */}
      <h1>Date and Time</h1>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>

      {/* Radio Button */}
      <h1>Radio Button</h1>
      <Radio
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />

      {/* Slider */}
      <h1>Slider</h1>
      <Slider value="5" />

      {/* Switch */}
      <h1>Switch</h1>
      <Switch />

      {/* Box */}
      <h1>Box</h1>
      <Box>Hello World</Box>

      {/* Alignment */}
      <h1>Alignment</h1>
      <Box textAlign="left">Hello</Box>
      <Box textAlign="center">Hello</Box>
      <Box textAlign="right">Hello</Box>

      {/* Font Weight */}
      <h3>Font Weight</h3>
      <Box fontWeight="fontWeightBold">Hello</Box>
      <Box fontWeight={500}>Hello</Box>

      {/* Font Size */}
      <h1>Font Size</h1>
      <Box fontSize={24}>Hello</Box>

      {/* Font Style */}
      <h1>Font Style</h1>
      <Box fontStyle="italic">Hello</Box>

      {/* Color */}
      <h1>Color</h1>
      <Box color="primary.main">primary</Box>
      <Box color="secondary.main">secondary</Box>
      <Box color="error.main">error</Box>
      <Box color="warning.main">warning</Box>
      <Box color="info.main">info</Box>
      <Box color="success.main">success</Box>

      {/* Background Color */}
      <h1>Background Color</h1>
      <Box bgcolor="primary.main">primary</Box>
      <Box bgcolor="secondary.main">secondary</Box>
      <Box bgcolor="error.main">error</Box>
      <Box bgcolor="warning.main">warning</Box>
      <Box bgcolor="info.main">info</Box>
      <Box bgcolor="success.main">success</Box>

      {/* Margin */}
      <h1>Margin</h1>
      <Box m={10}> All Side Margin</Box>
      <Box mt={10}>Margin Top</Box>
      <Box mb={10}>Margin Bottom</Box>
      <Box ml={10}>Margin Left</Box>
      <Box mr={10}>Margin Right</Box>
      <Box mx={10}>Margin Left Right</Box>
      <Box my={10}>Margin Top Bottom</Box>

      {/* Padding */}
      <h1>Padding</h1>
      <Box p={10}> All Side Padding</Box>
      <Box pt={10}>Padding Top</Box>
      <Box pb={10}>Padding Bottom</Box>
      <Box pl={10}>Padding Left</Box>
      <Box pr={10}>Padding Right</Box>
      <Box px={10}>Padding Left Right</Box>
      <Box py={10}>Padding Top Bottom</Box>

      {/* Width Sizing */}
      <h1>Width Sizing</h1>
      <Box width={1 / 4} bgcolor="red">Width 1/4</Box>
      <Box width={500} bgcolor="yellow">Width 500px</Box>
      <Box width="50%" bgcolor="pink">Width 50%</Box>
      <Box width={1} bgcolor="green">Width 100%</Box>

      {/* Height Sizing */}
      <h1>Height Sizing</h1>
      <Box height="50%" bgcolor="pink">Height 50%</Box>
      <Box height={200} bgcolor="yellow">Height 200px</Box>

      {/* Border */}
      <h1>Border</h1>
      <Box border={1}>Hello 1</Box>
      <Box borderTop={1}>Hello 2</Box>
      <Box borderBottom={1}>Hello 3</Box>
      <Box borderLeft={1}>Hello 4</Box>
      <Box borderRight={1}>Hello 5</Box>

      <Box border={0}>Hello 1</Box>
      <Box border={1} borderTop={0}>Hello 2</Box>
      <Box border={1} borderBottom={0}>Hello 3</Box>
      <Box border={1} borderLeft={0}>Hello 4</Box>
      <Box border={1} borderRight={0}>Hello 5</Box>

      <h3>Border Color</h3>
      <Box border={1} borderColor="secondary.main">Hello</Box>

      <h3>Border Radius</h3>
      <Box border={1} borderRadius="50%" width={300} height={300}></Box>
      <Box border={1} borderRadius={16} width={300} height={300}></Box>


      {/* Avatars */}
      <h1>Avatars</h1>
      <Avatar>G</Avatar>
      <Avatar src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg" />

      {/* Badge */}
      <h1>Badges</h1>
      <Badge badgeContent={4} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" max={40}>
        <MailIcon />
      </Badge>
      <Badge anchorOrigin={{ vertical: "bottom", horizontal: "right" }} badgeContent={100} color="primary" max={50} >
        <MailIcon />
      </Badge>
      <Badge color="primary" variant="dot">
        <MailIcon />
      </Badge>

      {/* Chip */}
      <h1>Chip</h1>
      <Chip label="Basic" />
      <Chip label="Disabled" disabled />
      <Chip avatar={<Avatar>M</Avatar>} label="Avatar Chip" />
      <Chip avatar={<Avatar src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg" />} label="Avatar Chip" />

      {/* Divider */}
      <h1>Divider</h1>
      <Divider />
      <Divider orientation="vertical" />

      {/* List */}
      <h1>List</h1>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>

      {/* Table */}
      <h1>Table</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Roll</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">1</TableCell>
              <TableCell align="right">Sonam</TableCell>
              <TableCell align="right">101</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">Math</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">2</TableCell>
              <TableCell align="right">Rahul</TableCell>
              <TableCell align="right">102</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">Math</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Tooltip */}
      <h1>Tooltip</h1>
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      {/* Typography */}
      <h1>Typography</h1>
      <Typography variant="h1">Heading H1</Typography>
      <Typography variant="h6">Heading H6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>

      {/* Progress */}
      <h1>Progress</h1>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <LinearProgress />
      <LinearProgress color="secondary" />

      {/* Container */}
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>

      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>

      {/* Grid */}
      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">4</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} direction="row">
        <Grid item lg={6} md={4} sm={12} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">4</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} direction="row" justify="center">
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">
            <Grid container>
              <Grid item xs={12}>
                <Box bgcolor="red" p={5} textAlign="center">1-1</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="blue" p={5} textAlign="center">1-2</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="green" p={5} textAlign="center">1-3</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">
            <Grid container>
              <Grid item xs={12}>
                <Box bgcolor="red" p={5} textAlign="center">4-1</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="pink" p={5} textAlign="center">4-2</Box>
              </Grid>
              <Grid item xs={12}>
                <Box bgcolor="green" p={5} textAlign="center">4-3</Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="yellow" p={5} textAlign="center">1</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="green" p={5} textAlign="center">2</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Hidden only="md">
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box bgcolor="blue" p={5} textAlign="center">4</Box>
          </Grid>
        </Hidden>
      </Grid>

      {/* Paper */}
      <h1>Paper</h1>
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper elevation={9}>
            <Box p={5} textAlign="center">1</Box>
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper variant="outlined">
            <Box p={5} textAlign="center">2</Box>
          </Paper>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">4</Box>
        </Grid>
      </Grid>

      {/* Card */}
      <h1>Card</h1>
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card>
            <CardHeader title="Card hai ye" subheader="September 14, 2016" />
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Material UI 1
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Material UI 2
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="red" p={5} textAlign="center">3</Box>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Box bgcolor="blue" p={5} textAlign="center">4</Box>
        </Grid>
      </Grid>

      {/* Accordion */}
      <h1>Accordion</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>

      {/* App Bar */}
      <h1>App Bar</h1>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
