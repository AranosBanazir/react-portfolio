import {Webhook} from 'discord-webhook-node'
const contactMessage = (contact) =>{
    const hook = new Webhook(process.env.WEBHOOK)

    const message = `
    \`\`\`
     Email: ${contact.email}

     Name: ${contact.name}

     Message:
     ${contact.msg}
     \`\`\`
    `


    hook.setUsername('Contact Message')
    hook.send(message)
}

module.exports = {
    contactMessage
}