const { Client, Collection } = require("discord.js");

module.exports = class extends Client {
    constructor(config) {
        super({
            disabledEvents: []
        });

        this.commands = new Collection();
        this.cooldowns = new Collection();
        this.config = config;
    }
};