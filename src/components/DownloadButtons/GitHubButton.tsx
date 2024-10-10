import { Box, Button } from "@mui/material";
import { usePluginContext } from "../../Context/PluginContext";
import github from '../../assets/github-mark.png'

export const GitHubButton = (props: {disabled?: boolean}) => {
    const pluginContext = usePluginContext();

    return (
        <Button disabled={props.disabled}>
            <Box
                display="flex"
                alignItems="center"
                flexDirection={"column"}
            >
            <img src={github} alt="github" width={50}/>
            <p style={{color: "black"}}>{!props.disabled? "GitHub" : "SOON"}</p>
            </Box>
        </Button>
    )
}