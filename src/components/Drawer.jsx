import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MoveRight } from "lucide-react";

export default function RightDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (value) => () => {
    setOpen(value);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* text yahan likho */}

      
    </Box>
  );

  return (  
    <>
      
      <div
  className="flex h-10.5 w-10.5 rounded-full bg-[#2b4dff] text-white items-center justify-center hover:border hover:bg-white hover:text-[#2b4dff] transition-all duration-300 ease-in cursor-pointer lg:hidden"
  onClick={toggleDrawer(true)}
>
  <MoveRight />
</div>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}
