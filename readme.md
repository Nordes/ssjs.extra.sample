# ssjs.extra.sample
Test project to interconnect in multiple way a bot framework proxy.
* chat (Skype, etc.) => botframework => AI [Normal path]
* chat (skype, etc.) => botframework => [intercepted] => send to this app before going to AI


Once registered properly, then you have a new context unlocked. The idea is basically to have a multi platform channel without having to redeploy each time something. 

* 1 AI (Something like SuperScript for now, but should be changed to something more multilingual allowing Metadata (Api AI?))
* 1 BotFramework config
* 1 Service running somewhere (even behind firewall)

# Tool used for this PoC
* SuperScript JS
* NodeJs (Using Express)
* CSV database to act like if we had a real one

# What else
For now that's it... Not working, and this project is mainly meant to be temporary.