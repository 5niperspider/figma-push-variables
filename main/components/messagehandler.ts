export async function messageHandler(msg: any) {

  console.log('Plugin got message', msg);

  switch (msg.type) {
    case ("css"): {
      break
    }
    default: {
      console.log(`messagetype ${msg.type} not supported`)
      break
    }
  }
}