/*CMD
  command: /calcprofit
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
š„ *Profit Calculator *š„

Calculate here your incoming profits!

*Send the amount of <cur> you want to invest*
  ANSWER
  keyboard: 
  aliases: š calculator, š¹ calculator, š„ profit calulator, š„ calculator
CMD*/

let aa = message

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(message)){
Bot.sendMessage("āļø Enter amount "+" Numberic Only")
return }
var a=aa*1
let daily_amount=Bot.getProperty("daily_amount1")
let cur=Bot.getProperty("cur")
if(message=="Back š"){
Bot.runCommand("/start")
return
}
let ko10=daily_amount*1
let ko11=ko10/100
let df=ko11*1
let daily_expired=Bot.getProperty("daily_expired")
var mkb1=Bot.getProperty("minimuminvestment")
var mkb2=mkb1*1
if(message*1>=mkb2){
let d=a*0.75
let gh= d*4
let prof = gh-a
let zero= Bot.getProperty("zero")
var buttons =[{title:"š° Invest Now š°",command:"/deposit"}]
let moko=df*1
var rc24=message*moko
var rc96=rc24*daily_expired
let kl=6
var g="š„* Profit Calculator*\n\n*Amount Invested: *"+message+" "+cur+" \n*Plan:* "+daily_amount+"% daily for "+daily_expired+" days\n*Credit Time: *"+" "+daily_amount+"% every 24 hours\n\n*After 24 Hours: *"+rc24.toFixed(kl)+" "+cur+" \nā± _Your first payment will arrive after 24 hours!_"+"\n\nš° *After "+daily_expired+" Days: *"+rc96.toFixed(kl)+"\nā_ You will get back more than what you invested after just "+daily_expired+" Days_"+"\n\nš„ *Total Profit: *"+rc96.toFixed(kl)+" "+cur

Bot.sendKeyboard("Back š",g)
}else{
Bot.sendMessage("*āļø Enter amount "+" Bigger than "+mkb1+" "+cur+"*")
}
