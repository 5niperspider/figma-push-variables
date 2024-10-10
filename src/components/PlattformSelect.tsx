import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { usePluginContext } from "../Context/PluginContext";

export const PlattformSelect = (props: {disabled?: boolean}) => {
    const pluginContext = usePluginContext();

    const handleChange = (event: SelectChangeEvent) => {
        pluginContext.setPlatform(event.target.value as string);
      };

    return (
        <FormControl sx={{m:1, minWidth:80}} size="small">
            <InputLabel id="demo-simple-small-label">Select Platform</InputLabel>
            <Select
                labelId="demo-simple-small-label"
                value={pluginContext.platform}
                label="Select Platform"
                onChange={handleChange}
            >
                <MenuItem value={"json"}>JSON</MenuItem>
                <MenuItem value={"css"}>CSS</MenuItem>
                <MenuItem value={"android"}>Android</MenuItem>
            </Select>
        </FormControl>
    )
}