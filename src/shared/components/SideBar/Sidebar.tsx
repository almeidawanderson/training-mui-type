import { Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import iconeproframe from '../../../assets/iconeproframe.png'
import HomeIcon from '../../../assets/SidebarIcons/HomeIcon.svg'



interface ISideBarProps {
    children: React.ReactNode;
}

export const SideBar: React.FC<ISideBarProps> = ({children}) => {
    const theme = useTheme()

    return(
        <>
        <Drawer variant="permanent">
            <Box 
            width={theme.spacing(28)}
            height="100%"
            display="flex"
            flexDirection="column" >
            
            <Box 
            sx={{height: theme.spacing(15), width: theme.spacing(25)}}
            width="100%" 
            height={theme.spacing(20)} 
            display="flex"
            alignItems="center"          
            justifyContent="center" >
            <img alt="Proframe Engenharia e Tecnologia" src={iconeproframe} 
            />
            </Box>

            <Divider />

            <Box flex={1}>
                <List component="nav">
                    <ListItemButton>
                        <ListItemIcon>
                            <img src={HomeIcon}/>
                        </ListItemIcon>
                        <ListItemText 
                        sx={{fontFamily: 'serif', fontWeight: 'bold', fontSize: '2rem', color: '#000'}}                 
                        primary="Página Inicial" />
                    </ListItemButton>
                </List>
            </Box>
            
            </Box>
        </Drawer>

        <Box
            height='100vh'
            marginLeft={theme.spacing(28)}
        >        
        {children}
        </Box>
        </>
    )
}