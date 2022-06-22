import { useState, forwardRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Styling for the Modal Box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500, // Changed width from 400 to 500
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px", // Added a border radius to make it curved
  boxShadow: 24,
  p: 4,
  display: "flex", // Added the display:flex property
  justifyContent: "space-around", // Added the justifyContent property
};

// Our optional custom theme
const theme = createTheme({
  typography: {
    h6: {
      color: "#d40808",
    },
  },
});

export default function LoginModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [redShirtsEmail, setRedShirtsEmail] = useState("");
  const [redShirtsPassword, setRedShirtsPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  const [backDropOpen, setBackDropOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  // ---------------- FOR MUI ALERT ----------------
  // We don't need to understand this Alert code, this is just necessary to make MUI's Snackbar alert work
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // ---------------- HANDLER FUNCTIONS ----------------
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleSnackClose = () => setSnackOpen(false);

  // ---------------- Red Shirt Handler Functions ----------------
  // Handling what happens when user types in email text box for RED SHIRTS
  const handleRedEmailChange = (event) => {
    setRedShirtsEmail(event.target.value);

    setLoggedInUser({
      password: redShirtsPassword,
      email: event.target.value,
    });
  };
  // Handling what happens when user types in password text box for RED SHIRTS
  const handleRedPasswordChange = (event) => {
    setRedShirtsPassword(event.target.value);
    setLoggedInUser({ password: event.target.value, email: redShirtsEmail });
  };

  // ---------------- Blue Shirt Handler Function ----------------
  // CLEANER SOLUTION: Handling the email and password events all in one event handler function (for BLUE SHIRTS)
  // We are achieving the same thing here as what we did with red shirts, but cleaner. 
  const handleBlueInputs = (event) => {
    setLoggedInUser((prevState) => {
      // in our state updating function, we always get access to the previous state (you can call it anything you like)
      return { ...prevState, [event.target.name]: event.target.value }; // return what is already in the loggedInUser object (pull out object properties using spread operator), then add new/replace existing properties 
    });
  };
  // Why using square brackets above for e.target.name again?
  // let a = "aKey";
  // let myObj = { [a]: 10 }; // We always use square brackets when we need to compute a dynamic value.
  // // output will be {aKey:10}
  // console.log(myObj);

  // ---------------- Login Button Handler Function ----------------
  // For when the user hits either login button
  const handleLogin = (e) => {
    if (e.target.name === "redshirts") {
      // if the user clicks the redshirts login button
      // Do something with loggedInUser (ie send credentials to database)
      console.log(loggedInUser);
    }
    if (e.target.name === "blueshirts") {
      // if the user clicks the blueshirts login button
      // Do something with loggedInUser (ie send credentials to database)
      console.log(loggedInUser);
    }
    setBackDropOpen(true);
    setTimeout(() => {
      setBackDropOpen(false);
      setSnackOpen(true);
      setModalOpen(false);
    }, 3000); // excecute the callback function in setTimeout after 3 seconds
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <Button variant="outlined" onClick={handleModalOpen}>
        Click to login
      </Button>

      {/* Added ThemeProvider because we've added a custom theme, otherwise we wouldn't require this */}
      <ThemeProvider theme={theme}>
        <Modal open={modalOpen} onClose={handleModalClose}>
          <Box sx={style}>
            <Stack spacing={2}>
              {/* Notice that our h6 variant has our custom colour that we applied to it via our theme! */}
              <Typography variant="h6">Red Shirts Login</Typography>
              <TextField
                label="Email address"
                variant="outlined"
                size="small"
                sx={{ m: 1 }}
                onChange={handleRedEmailChange}
                name="email"
              />
              <TextField
                label="Password"
                variant="outlined"
                size="small"
                type="password"
                sx={{ m: 1 }}
                onChange={handleRedPasswordChange}
                name="password"
              />
              <Button
                name="redshirts"
                onClick={handleLogin}
                variant="contained"
              >
                Login
              </Button>
            </Stack>
            <Stack spacing={2}>
              {/* Notice that our h6 variant's colour has been overridden by the 'sx' prop */}
              <Typography sx={{ color: "blue" }} variant="h6">
                Blue Shirts Login
              </Typography>
              <TextField
                label="Email address"
                variant="outlined"
                size="small"
                sx={{ m: 1 }}
                onChange={handleBlueInputs}
                name="email" // added a name property so we can access it in our handleBlueInputs function
              />
              <TextField
                label="Password"
                variant="outlined"
                size="small"
                type="password"
                sx={{ m: 1 }}
                onChange={handleBlueInputs}
                name="password" // added a name property so we can access it in our handleBlueInputs function
              />
              <Button
                name="blueshirts"
                onClick={handleLogin}
                variant="contained"
              >
                Login
              </Button>
            </Stack>
            <Backdrop open={backDropOpen}>
              <CircularProgress />
            </Backdrop>
          </Box>
        </Modal>
      </ThemeProvider>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Welcome, {loggedInUser.email}!
        </Alert>
      </Snackbar>
    </div>
  );
}
