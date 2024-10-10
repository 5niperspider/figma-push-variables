import { Button } from "@mui/material"
import { DownloadButtons } from "../DownloadButtons/DownloadButtons"
import { usePluginContext } from "../../Context/PluginContext"

export const UploadView = () => {
    const pluginContext = usePluginContext()

    return (
        <>
          <p style={{fontWeight: 'bold'}}>Your File is Ready.</p>
          <p>Chose your destination:</p>
          <DownloadButtons />
          <Button onClick={() => pluginContext.setView(false)}>Back</Button>
        </>
    )
}