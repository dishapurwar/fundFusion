import React, { useState } from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ReCAPTCHA from "react-google-recaptcha";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Grid,
  Paper, // Import Paper component from Material-UI
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const ColorStepConnector = withStyles((theme) => ({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 20px)",
    right: "calc(50% + 20px)",
  },
  active: {
    "& $line": {
      backgroundColor: theme.palette.primary.main, // Your desired color for active step
    },
  },
  completed: {
    "& $line": {
      backgroundColor: theme.palette.primary.main, // Your desired color for completed step
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0", // Default color
    borderRadius: 1,
  },
}))(StepConnector);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  button: {
    marginRight: theme.spacing(1),
    color: "#FFF", // Button text color
    backgroundColor: theme.palette.primary.main, // Button background color
    "&:hover": {
      backgroundColor: theme.palette.primary.dark, // Button background color on hover
    },
  },
  backButton: {
    marginRight: theme.spacing(1),
    color: "#000", // Button text color
    backgroundColor: "#FFF", // Button background color
    "&:hover": {
      backgroundColor: "#EEE", // Button background color on hover
    },
  },
  paper: {
    padding: theme.spacing(3), // Add padding to the Paper component
  },
}));
function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Startup Details",
    "Additional Information",
  ];
}
const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        {" "}
        <Typography variant="h7" gutterBottom>
          <b>Your First Name</b>
        </Typography>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="first-name"
              // label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        {" "}
        <Typography variant="h7" gutterBottom>
          <b>Your Last Name</b>
        </Typography>
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              id="last-name"
              // label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        {" "}
        <Typography variant="h7" gutterBottom>
          <b>Select Gender</b>
        </Typography>
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={field.value}
              onChange={field.onChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          )}
        />
      </div>
    </>
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        {" "}
        <Typography variant="h7" gutterBottom>
          <b>Email</b>
        </Typography>
        <Controller
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <TextField
              id="email"
              // label="E-mail"
              variant="outlined"
              placeholder="Enter Your E-mail Address"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        {" "}
        <Typography variant="h7" gutterBottom>
          <b>Phone Number</b>
        </Typography>
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        {" "}
        <Typography variant="h7" gutterBottom>
          <b>Linkedin Profile URL</b>
        </Typography>
        <Controller
          control={control}
          name="linkedin"
          render={({ field }) => (
            <TextField
              id="linkedin"
              // label="Alternate Phone"
              variant="outlined"
              placeholder="Enter Linkedin URL"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>
    </>
  );
};
const Startup = () => {
  const { control } = useFormContext();
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        {" "}
        {/* Add space between each Controller */}
        <Typography variant="h7" gutterBottom>
          <b>Name of Startup</b>
        </Typography>
        <Controller
          control={control}
          name="startup"
          render={({ field }) => (
            <TextField
              id="startup"
              variant="outlined"
              placeholder="Enter the name of your Startup"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        {" "}
        {/* Add space between each Controller */}
        <Typography variant="h7" gutterBottom>
          <b>Are you a single founder?</b>
        </Typography>
        <Controller
          control={control}
          name="founder"
          render={({ field }) => (
            <RadioGroup
              aria-label="founder"
              name="founder"
              value={field.value}
              onChange={field.onChange}
              row
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          )}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        {" "}
        {/* Add space between each Controller */}
        <Typography variant="h7" gutterBottom>
          <b>Website URL</b>
        </Typography>
        <Controller
          control={control}
          name="wurl"
          render={({ field }) => (
            <TextField
              id="wurl"
              variant="outlined"
              placeholder="Enter website URL"
              fullWidth
              margin="normal" // Set margin to dense to reduce spacing
              {...field}
            />
          )}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        {" "}
        {/* Add space between each Controller */}
        <Typography variant="h7" gutterBottom>
          <b>Month and Year of Incorporation</b>
        </Typography>
        <div>
          <Controller
            control={control}
            name="incorporationDate"
            render={({ field }) => (
              <input
                type="date"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                style={{ width: "290px", height: "50px" }}
              />
            )}
          />
        </div>
      </div>

      <div>
        {" "}
        {/* Add space between each Controller */}
        <Typography variant="h7" gutterBottom>
          <b>Category</b>
        </Typography>
        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <TextField
              id="category"
              variant="outlined"
              placeholder="Enter the category of your Startup"
              fullWidth
              margin="normal" // Set margin to dense to reduce spacing
              {...field}
            />
          )}
        />
      </div>
    </>
  );
};
const Additional = () => {
  const { control } = useFormContext();
  const [isRobotVerified, setRobotVerified] = useState(false);

  const handleVerification = (value) => {
    setRobotVerified(!!value);
  };
  return (
    <>
      <Typography variant="h7" gutterBottom>
        <b>Please share your Pitch Deck</b>
      </Typography>
      <div style={{ marginBottom: "20px", position: "relative" }}>
        <div
          style={{
            border: "1px dotted #888",
            padding: "20px",
            height: "200px",
            width: "500px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          onClick={() => document.getElementById("pitch-deck-file").click()}
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "1",
              backgroundColor: "white",
              padding: "5px",
              whiteSpace: "nowrap",
            }}
          >
            You can upload a PDF file only [max size 20MB].
          </Typography>
          <b>Drop your pitch deck here</b>
          <IconButton
            component="span"
            aria-label="upload pitch deck"
            color="primary"
          >
            <CloudUploadIcon />
          </IconButton>
        </div>
        <input
          id="pitch-deck-file"
          type="file"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={(e) => console.log(e.target.files[0])} // Handle file upload logic
        />
      </div>

      <Typography variant="h7" gutterBottom>
        <b>100 Characters to tell us what you are building</b>
      </Typography>
      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <TextField
            id="description"
            variant="outlined"
            placeholder="Enter details here"
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 100 }}
            multiline
            rows={4}
            style={{ maxWidth: "74%", width: "100%" }} // Ensure input box fills the container width
            {...field}
          />
        )}
      />
      <ReCAPTCHA
        sitekey="6LdNGokpAAAAAIhIc-kdetXBogyDfTJfKVrNRLpX" // Replace 'YOUR_SITE_KEY' with your actual reCAPTCHA site key
        onChange={handleVerification}
        style={{ margin: "20px auto", display: "block" }}
      />
      {/* Add Submit Button */}
      {/* <Button
        variant="contained"
        color="primary"
        disabled={!isRobotVerified} // Disable button if robot verification is not completed
      >
        Submit
      </Button> */}
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <Startup />;
    case 3:
      return <Additional />;
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const getNextButtonLabel = () => {
    if (activeStep === steps.length - 1) {
      return "Finish";
    } else {
      return `NEXT`;
    }
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorStepConnector />}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleNext)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {getStepContent(activeStep)}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="flex-end">
                  {/* Add buttons within the Grid container */}
                  <Button
                    className={
                      activeStep === 0 ? classes.backButton : classes.button
                    }
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    {getNextButtonLabel()}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default LinearStepper;
