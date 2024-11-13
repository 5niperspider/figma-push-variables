import { Box, Button } from "@mui/material"
import { PlattformSelect } from "../PlattformSelect"
import { usePluginContext } from "../../Context/PluginContext"
import { CollectionSelect } from "../VariableSelect/CollectionSelect"

export const GenerateView = () => {
    const pluginContext = usePluginContext()

    const onClick = () => {
      console.log("collections checked: ", pluginContext.collsChecked)
        parent.postMessage({pluginMessage: {type: pluginContext.platform}}, '*')
      }

    return (
      <>
        <CollectionSelect/>
        <Box
          width={"100%"}
          justifyContent="end"
          display="flex"
          alignItems="center"
          flexDirection={"row"}
        >
          <PlattformSelect />
          <Button disabled={pluginContext.platform == ""} style={{height: 40}} variant="contained" onClick={onClick}>Generate</Button>
        </Box>
      </>
    )
}