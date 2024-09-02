
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { 
   AppBar, 
   Box, 
   CssBaseline, 
   Divider, 
   Drawer, 
   IconButton, 
   List, 
   ListItem, 
   ListItemButton, 
   ListItemText, 
   Toolbar,
   Typography,
   useTheme 
} from '@mui/material';
import NavButton from './NavButton';

const drawerWidth = 240;
const navItems = ['Shop', 'About', 'Contact'];

function TopNav(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const theme = useTheme();
 
   const handleDrawerToggle = () => {
     setMobileOpen((prevState) => !prevState);
   };

   const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Sister M.A.E. Designs
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
   );

   const container = window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <AppBar 
            component="nav" 
            elevation={0} 
            sx={{ 
               width: '-webkit-fill-available',
               boxShadow: theme.palette.shadows.primary, 
               margin: { xs: 2, sm: 3, md: 4 },
               borderRadius: '6px 32px 6px 6px' 
            }}
         >
            <Toolbar>
               <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography
                  variant="h4"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
               >
                  Sister M.A.E. Designs
               </Typography>
               <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {navItems.map((item) => (
                     <NavButton key={item} label={item} />
                  ))}
               </Box>
            </Toolbar>
         </AppBar>
         <nav>
            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
               }}
            >
               {drawer}
            </Drawer>
         </nav>
      </Box>
   );
}

export default TopNav;