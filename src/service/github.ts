export const createGithubFileBlob = async (githubAccessToken: any, repoFullName: any, content: any, encoding = "utf-8") => {
    const blobResp = await fetch(`https://api.github.com/repos/${repoFullName}/git/blobs`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${githubAccessToken}`,
                'X-GitHub-Api-Version': '2022-11-28'
            },
            body: JSON.stringify({
                "content": content,
                "encoding": encoding
            })
        })
    const response = await blobResp.json()

    return response.sha
}

export const getShaForBaseTree = async (githubAccessToken: any, repoFullName: any, branchName: any) => {
    const baseTreeResp = await fetch(`https://api.github.com/repos/${repoFullName}/git/trees/${branchName}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${githubAccessToken}`,
                'X-GitHub-Api-Version': '2022-11-28'
            },
        })
    const response = await baseTreeResp.json()

    return response.sha
}

export const getParentSha = async (githubAccessToken: any, repoFullName: any, branchName: any) => {
    const parentResp = await fetch(`https://api.github.com/repos/${repoFullName}/git/refs/heads/${branchName}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${githubAccessToken}`,
                'X-GitHub-Api-Version': '2022-11-28'
            },
        })
    const response = await parentResp.json()

    return response.object.sha
}

export const createGithubRepoTree = async (githubAccessToken: any, repoFullName: any, branchName: any, articleFiles: string | any[]) => {
    const shaForBaseTree = await getShaForBaseTree(githubAccessToken, repoFullName, branchName)

    const tree = []

    for (var i = 0; i < articleFiles.length; i++) {
        const fileSha = await createGithubFileBlob(githubAccessToken, repoFullName, articleFiles[i].content, articleFiles[i].encoding)
        tree.push({
            "path": articleFiles[i].path.substring(1),
            "mode": "100644",
            "type": "blob",
            "sha": fileSha
        })
    }

    const payload = {
        "base_tree": shaForBaseTree,
        "tree": tree
    }

    const treeResp = await fetch(`https://api.github.com/repos/${repoFullName}/git/trees`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${githubAccessToken}`,
                'X-GitHub-Api-Version': '2022-11-28'
            },
            body: JSON.stringify(payload)
        })
    const response = await treeResp.json()

    return response.sha
}

export const createGithubCommit = async (githubAccessToken: any,
    repoFullName: any,
    branchName: any,
    commitMessage: any,
    articleFiles: any) => {
    const tree = await createGithubRepoTree(githubAccessToken, repoFullName, branchName, articleFiles)
    const parentSha = await getParentSha(githubAccessToken, repoFullName, branchName)

    const payload = {
        "message": commitMessage,
        "tree": tree,
        "parents": [parentSha]
    }

    const response = await fetch(`https://api.github.com/repos/${repoFullName}/git/commits`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${githubAccessToken}`,
                'X-GitHub-Api-Version': '2022-11-28'
            },
            body: JSON.stringify(payload)
        })

    const commitResp = await response.json()
    const commitSha = commitResp.sha

    await updateGithubBranchRef(githubAccessToken, repoFullName, branchName, commitSha)
}

export const updateGithubBranchRef = async (githubAccessToken: any, repoFullName: any, branchName: any, commitSha: any) => {
    const payload = {
        "sha": commitSha,
        "force": false
    }

    const response = await fetch(`https://api.github.com/repos/${repoFullName}/git/refs/heads/${branchName}`,
        {
            method: 'PATCH',
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${githubAccessToken}`,
                'X-GitHub-Api-Version': '2022-11-28'
            },
            body: JSON.stringify(payload)
        })

    const commitResp = await response.json()
}