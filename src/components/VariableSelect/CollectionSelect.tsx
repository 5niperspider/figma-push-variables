import { Box, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { usePluginContext } from "../../Context/PluginContext";
import { useEffect, useState } from "react";


export const CollectionSelect = () => {
    const pluginContext = usePluginContext()

  const handleToggle = (id: string) => () => {
    const currentIndex = pluginContext.collsChecked.indexOf(id);
    const newChecked = [...pluginContext.collsChecked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    pluginContext.setCollsChecked(newChecked);
  };

  return (
    <>
    {pluginContext.collections ?
    <List sx={{ width: '100%', height: '100%', bgcolor: 'background.paper' }}>
      {pluginContext.collections.map((value) => {

        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={pluginContext.collsChecked.includes(value.id)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': value.id }}
                />
              </ListItemIcon>
              <ListItemText id={value.id} primary={value.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    :
    <Box sx={{ width: '100%', height: '100%', bgcolor: 'background.paper' }}>
        Loading
    </Box>
    }
    </>
  );
}