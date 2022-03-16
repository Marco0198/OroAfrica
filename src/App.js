import "./App.css";
import Labour from "./component/Labour";
import Cam from "./component/Cam";
import Misc from "./component/Misc";
import Diamonds from "./component/Diamonds";
import DataTable from "./component/DataTable";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TheNavBar from "./component/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function App() {
  return (
    <div className="App">
      <TheNavBar />
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            marginTop: 6,
          }}
        >
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Labour</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Labour />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Cam</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Cam />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Misc</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Misc />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Diamonds</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Diamonds />
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
        <Box>
          <DataTable />
        </Box>
      </Container>
    </div>
  );
}

export default App;
