import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faq.css";

const SimpleAccordion = () => {
  return (
    <div className="faqQuestions">
              <h1 className="faqTitle">FAQ</h1>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}className="faqAccordionSummary">
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails className="faqAccordionDetails">
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="faqAccordionSummary"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails className="faqAccordionDetails">
          <Typography>
            Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
 
 );
};

export default SimpleAccordion;
