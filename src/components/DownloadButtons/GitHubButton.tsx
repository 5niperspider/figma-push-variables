import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Modal, TextField, Typography } from "@mui/material";
import { usePluginContext } from "../../Context/PluginContext";
import github from '../../assets/github-mark.png'
import { createGithubCommit } from "../../service/github";
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export const GitHubButton = (props: {disabled?: boolean}) => {
    const pluginContext = usePluginContext();
    const [accessToken, setAccessToken] = useState<string>(null!)
    const [repo, setRepo] = useState<string>(null!)
    const [branch, setBranch] = useState<string>(null!)
    const [commit, setCommit] = useState<string>(null!)
    const [path, setPath] = useState<string>(null!)
    const [open, setOpen] = useState<boolean>(false)
    const opacity = props.disabled ? 0.6 : 1



    const send = async () => {
      const articleFiles = [
        {
          path: path,
          content: pluginContext.data,
          encoding: "utf-8",
        }
      ];
  
      await createGithubCommit(
        accessToken,
        repo,
        branch,
        commit,
        articleFiles
      );
    }

    return (
      <>
        <Button disabled={props.disabled} style={{opacity: opacity}} onClick={()=>{setOpen(true)}}>
            <Box
                display="flex"
                alignItems="center"
                flexDirection={"column"}
            >
            <img src={github} alt="github" width={50}/>
            <p style={{color: "black"}}>{!props.disabled? "GitHub" : "SOON"}</p>
            </Box>
            
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              GitHub
            </Typography>
            <TextField size="small" fullWidth onChange={(event)=>{setAccessToken(event.target.value)}} label="Access Token" type={"password"}/>
            <TextField size="small" fullWidth onChange={(event)=>{setRepo(event.target.value)}} label="Repository Name"/>
            <TextField size="small" fullWidth onChange={(event)=>{setBranch(event.target.value)}} label="Branch"/>
            <TextField size="small" fullWidth onChange={(event)=>{setCommit(event.target.value)}} label="Commit Title"/>
            <TextField size="small" fullWidth onChange={(event)=>{setPath(event.target.value)}} label="Filepath"/>
            <Button onClick={send}>Push</Button>
          </Box>
        </Modal>
      </>
    )
}

  