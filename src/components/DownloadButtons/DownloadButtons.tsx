import { Box, Button } from "@mui/material";
import { usePluginContext } from "../../Context/PluginContext";
import { GitHubButton } from "./GitHubButton";
import { AzureButton } from "./AzureButton";
import { AWSButton } from "./AWSButton";

export const DownloadButtons = () => {
    const pluginContext = usePluginContext();

    function save() {
        console.log("context", pluginContext.data)
        const blob = new Blob([pluginContext.data], {type: pluginContext.type});
            const elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = "style";        
            document.body.appendChild(elem);
            elem.click();        
            document.body.removeChild(elem);
      }

    return (
        <>
        <Box 
            width={"100%"}
            justifyContent="center"
            display="flex"
            alignItems="center"
            flexDirection={"row"}
        >
            <GitHubButton disabled={false} />
            <AzureButton disabled={true} />
            <AWSButton disabled={true} />
        </Box>
        <Button variant="contained" onClick={() => save()}>Download</Button>
        </>
    )
}