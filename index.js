const fs = require('fs')
const { Client, Intents, MessageActionRow, MessageSelectMenu, Permissions } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] })
const config = require('./config.json')
const roleConfig = require('./roles.json')
const cron = require('node-cron')

client.once('ready', () => {
    console.log('Ready!')
})

client.on("messageCreate", message => {
    message.fetch()
    if(!message.guild) return
    if (!message.member) return;
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return;
    if (message.content == "!createSelectRoles") {

        const rows = []
        for (selecConNum in roleConfig) {
            const selectConfig = roleConfig[selecConNum]
            const OptionsArray = []
            for (rolenum in selectConfig.options) {
                const role = selectConfig.options[rolenum]
                OptionsArray.push({ "label": message.guild.roles.cache.get(role.role).name, "value": message.guild.roles.cache.get(role.role).id })
                if (role.emoji) OptionsArray[rolenum].emoji = role.emoji
                if (role.description) OptionsArray[rolenum].description = role.description
            }

            const minValues = selectConfig.min ? selectConfig.min : 0
            const maxValues = selectConfig.max ? selectConfig.max : selectConfig.options.length

            const Row = new MessageActionRow().addComponents(
                new MessageSelectMenu()
                    .addOptions(OptionsArray)
                    .setCustomId(`${selecConNum}`)
                    .setMinValues(minValues)
                    .setMaxValues(maxValues)
                    .setPlaceholder(selectConfig.name)
            )
            rows.push(Row)
        }
        message.channel.send({
            content: fs.readFileSync("./message.txt") + " ",
            components: rows
        })
    }

})

client.on('interactionCreate', interaction => {
    if (!interaction.isSelectMenu()) return
    const reactionRoles = roleConfig[interaction.customId].options.map(x => x.role)
    const currentRoles = interaction.member._roles
    const selectedRoles = interaction.values
    const remove = reactionRoles.filter(x => currentRoles.includes(x))

    if (remove.length > 0) for (role of remove) { interaction.member.roles.remove(role) }
    if (selectedRoles.length > 0) for (role of selectedRoles) { interaction.member.roles.add(role) }
    interaction.deferUpdate()
})
       

    
cron.schedule('0 0 12 * * 1 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965167927257083955>・<@&940187751431692308>：超ゲリラ・極ゲリラ経験値にゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
        
cron.schedule('0 0 12 * * 1 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&940187751431692308>：極ゲリラ経験値にゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 15 * * 3 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&940187751431692308>：極ゲリラ経験値にゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 19 * * 5 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&940187751431692308>：極ゲリラ経験値にゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 12,22 * * 6 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&940187751431692308>：極ゲリラ経験値にゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 10,16 * * 7 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&940187751431692308>：極ゲリラ経験値にゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 13 * * 2 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965187119486234644>：超極ゲリラ経験値にゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 17 * * 4 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965187119486234644>：超極ゲリラ経験値にゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 10 * * 6 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965187119486234644>：超極ゲリラ経験値にゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 21 * * 7 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965187119486234644>：超極ゲリラ経験値にゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 17 14 2,22 * * ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965168353876537354>：開眼のネコフラワー（開催５分前）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 22 14 2,22 * * ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965168353876537354>：開眼のネコフラワー（２分間のみ開催、急げ！）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 0 5,11,17,23,29 * * ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&940187840753573989>：逆襲のカオルくん（１２時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 0 2,8,14,20,26 * * ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&940187840753573989>：逆襲のカオルくん（１２時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 7 * * 1,4 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965527469320994869>：ガープラ密林（４時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 12 * * 2,5,7 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965527469320994869>：ガープラ密林（４時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 19 * * 3,6 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965527469320994869>：ガープラ密林（４時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 12 * * 1,4 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965527542096343102>：アシビニ砂漠（４時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 19 * * 2,5,7 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965527542096343102>：アシビニ砂漠（４時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 7 * * 3,6 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965527542096343102>：アシビニ砂漠（４時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 19 * * 1,4 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965527622568259585>：ジャンフォレ火山（４時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 7 * * 2,5,7 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965527622568259585>：ジャンフォレ火山（４時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    
cron.schedule('0 0 12 * * 3,6 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&965527622568259585>：ジャンフォレ火山（４時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})
    

cron.schedule('0 0 13 * * 1 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&977838936531554374>：超極悪ゲリラ経験値だにゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})

cron.schedule('0 0 19 * * 3,7 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&977838936531554374>：超極悪ゲリラ経験値だにゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})

cron.schedule('0 0 11 * * 6 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&977838936531554374>：超極悪ゲリラ経験値だにゃ！（１時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})

cron.schedule('0 0 11 * * 1,3,5,6,7 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&977839033415778324>：秘宝の眠る孤島、地図王の眠る島（２時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})

cron.schedule('0 0 20 * * 2,4,6,7 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&977839033415778324>：秘宝の眠る孤島、地図王の眠る島（２時間開催）')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})

cron.schedule('0 0 17 * * 2 ', () => {
    const channe = client.channels.cache.get('965584642684092476')
    channe.send('<@&1008720326194118766>,<@&921640695108874290>,<@&921640835689353268>：\rクラン戦争が開戦されました')
    },{
    scheduled: true,
    timezone: "Asia/Tokyo"
})

client.on('messageCreate', message => {
  if(message.content.startsWith("!狙撃究極")) {
   message.member.roles.add('905057833576448031')
  }
});

client.login(config.token)
