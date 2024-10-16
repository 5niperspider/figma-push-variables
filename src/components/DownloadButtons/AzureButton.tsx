import { Box, Button } from "@mui/material";
import { usePluginContext } from "../../Context/PluginContext";
import azure from '../../assets/azure.png'

export const AzureButton = (props: {disabled?: boolean}) => {
    const pluginContext = usePluginContext();
    const opacity = props.disabled ? 0.6 : 1

    return (
        <Button disabled={props.disabled} style={{opacity: opacity}}>
            <Box
                display="flex"
                alignItems="center"
                flexDirection={"column"}
            >
            <img src={azure} alt="azure" width={50}/>
            <p style={{color: "black"}}>{!props.disabled? "Azure" : "SOON"}</p>
            </Box>
        </Button>
    )
}