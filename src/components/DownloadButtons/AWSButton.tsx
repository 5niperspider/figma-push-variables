import { Box, Button } from "@mui/material";
import { usePluginContext } from "../../Context/PluginContext";
import aws from '../../assets/aws.png'

export const AWSButton = (props: {disabled?: boolean}) => {
    const pluginContext = usePluginContext();
    const opacity = props.disabled ? 0.6 : 1

    return (
        <Button disabled={props.disabled} style={{opacity: opacity}}>
            <Box
                display="flex"
                alignItems="center"
                flexDirection={"column"}
            >
            <img src={aws} alt="aws" width={50}/>
            <p style={{color: "black"}}>{!props.disabled ? "AWS" : "SOON"}</p>
            </Box>
        </Button>
    )
}