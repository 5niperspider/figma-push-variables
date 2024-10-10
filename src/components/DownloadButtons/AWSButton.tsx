import { Box, Button } from "@mui/material";
import { usePluginContext } from "../../Context/PluginContext";
import aws from '../../assets/aws.png'

export const AWSButton = (props: {disabled?: boolean}) => {
    const pluginContext = usePluginContext();

    return (
        <Button disabled={props.disabled}>
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