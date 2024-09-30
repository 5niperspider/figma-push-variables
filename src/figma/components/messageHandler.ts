export async function messageHandler(msg: any) {

    switch (msg.type) {
      case "search":{
        console.log("search with: ",msg.searchString)
        break
      }
      default: {
        console.log(`messagetype ${msg.type} not supported`)
        break
      }
    }
  }
  