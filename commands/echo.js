module.exports = {
	name: "echo",
    description: "Repeats a message",
    category: "utility",
    aliases: [],
    args: true,
    usage: "<message>",
    guildOnly: false,
	execute(message, args) {
        let response = args.join(" ");
        message.channel.send(response);
	},
};