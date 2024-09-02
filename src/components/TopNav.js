
import * as React from 'react';
import { 
   AppBar, 
   Box, 
   CssBaseline, 
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
import { FiMenu, FiShoppingCart, FiX } from 'react-icons/fi';

const navItems = ['Shop', 'About', 'Contact'];
const mobileNavItems = ['Home', 'Shop', 'About', 'Contact'];

function TopNav(props) {
   const { window } = props;
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const theme = useTheme();
 
   const handleDrawerToggle = () => {
     setMobileOpen((prevState) => !prevState);
   };

   const drawer = (
      <Box height='100%' display='flex' flexDirection='column'>
        <IconButton 
           aria-label="close drawer"
           onClick={handleDrawerToggle}
           color="secondary"
           sx={{ alignSelf: 'flex-end' }}
        >
           <FiX />
        </IconButton>
        <List 
            onClick={handleDrawerToggle}
            sx={{ 
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center',
               gap: '10px'
            }}
         >
            {mobileNavItems.map((item) => (
               <NavButton key={item} label={item} />
            ))}
            <IconButton 
               onClick={handleDrawerToggle}
               color="secondary"
               sx={{ marginTop: '10px'}}
            >
               <FiShoppingCart fontSize='34px' />
            </IconButton>
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
               {/* Mobile */}
               <Typography
                  variant="h4"
                  component="div"
                  sx={{ flexGrow: 1, display: { sm: 'none' } }}
               >
                  Sister M.A.E. Designs
               </Typography>
               <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  color="secondary"
                  sx={{ display: { sm: 'none' } }}
               >
                  <FiMenu />
               </IconButton>


               {/* Desktop */}
               <Typography
                  variant="h4"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
               >
                  Sister M.A.E. Designs
               </Typography>
               <Box sx={{ display: { xs: 'none', sm: 'flex', gap: '32px', alignItems: 'center' } }}>
                  {navItems.map((item) => (
                     <NavButton key={item} label={item} />
                  ))}
                  <IconButton color="secondary"
                     pt="20px"
                     sx={{
                     position: 'relative',
                     overflow: 'visible',
                     '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '70%',
                        left: '44%',
                        width: '0',
                        height: '0',
                        borderRadius: '50%',
                        border: `2px solid ${theme.palette.secondary.main}`,
                        transition: 'width 0.3s ease, height 0.3s ease',
                        transform: 'translate(-50%, -50%)',
                     },
                     '&:hover::after': {
                        top: '50%',
                        left: '50%',
                        width: '120%',
                        height: '120%',
                     },
                     }}
                  >
                     <FiShoppingCart fontSize='18px' />
                  </IconButton>
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
                  keepMounted: true,
               }}
               sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { 
                     boxSizing: 'border-box', 
                     width: '100vw', 
                     height: '100vh',
                     backgroundColor: 'rgba(255,255,255,.8)',
                     backdropFilter: 'blur(2px)' 
                  },
               }}
            >
               {drawer}
            </Drawer>
         </nav>
      </Box>
   );
}

export default TopNav;