import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/style.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import { PeopleOutlinedIcon } from "@mui/icons-material/PeopleOutlined";
import { ContactsOutlinedIcon } from "@mui/icons-material/ContactOutlined";
import { ReceiptOutlinedIcon } from "@mui/icons-material/ReceiptOutlined";
import { PersonOutlinedIcon } from "@mui/icons-material/PersonOutlined";
import { CalendarTodayOutlinedIcon } from "@mui/icons-material/CalendarTodayOutlined";
import { HelpOutlinedIcon } from "@mui/icons-material/HelpOutlined";
import { PieChartOutlineOutlinedIcon } from "@mui/icons-material/PieChartOutlineOutlined";
import { TimeLineOutlinedIcon } from "@mui/icons-material/TimeLineOutlined";
import { MenuOutlinedIcon } from "@mui/icons-material/MenuOutlined";
import { MapOutlinedIcon } from "@mui/icons-material/MapOutlined";

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
  return (
    <Box 
    sx={{
        "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
            background: "transparent !important"
        },
    }}
    >
    
    </Box>
  );
};

export default Sidebar;
