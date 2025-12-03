import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { ChevronsRight } from 'lucide-react';

export default function AccordionUsage() {
  const accors=[
    {
      heading:"Where should I incorporate my business?",
      text:"Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested."
    },
    {
      heading:"How long should a business plan be?",
      text:"Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested."
    },
    {
      heading:"Be Part of a Community",
      text:"Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested."
    },
  ]
  return (
    <div className='flex w-full  flex-col gap-5'>
      {accors.map((accor)=>{
        return(
      <Accordion
  sx={{
    padding: "15px 20px",
    fontSize: "17px",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.06)",
    borderRadius: "10px",
    maxWidth:{
      xs:"full",
      lg:"646.11px"
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      color: "#2D67FF", // heading blue
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)", 
      color:"#2D67FF"
      // rotate icon
    }
  }}
  slotProps={{ transition: { unmountOnExit: true } }}
>
  <AccordionSummary
    expandIcon={<ChevronsRight />}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    <Typography
      component="span"
      sx={{
        fontSize: {
          xs: "17px",
          md: "18px",
          lg: "19.635px",
        },
        transition: "0.3s",
      }}
    >
      {accor.heading}
    </Typography>
  </AccordionSummary>

  <AccordionDetails
    sx={{
      fontSize: {
        xs: "13px",
        sm: "14px",
        lg: "15px",
      },
      color: "#726b7d",
    }}
  >
    {accor.text}
  </AccordionDetails>
</Accordion>


        )
      })}
      
    </div>
  );
}