#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const add = require("date-fns/add")
const sub = require("date-fns/sub")
let command;
const now = new Date();
let newDate = now;
if(argv && argv._ && argv._[0]){
  command = argv._[0]
}
if(command){
  if(command==='add'|| command==="sub"){
    let from = argv.from || "now"
    let fromDate = new Date()
    if(from==='yearBeginning'){
      fromDate  = new Date(Date.UTC(now.getUTCFullYear()))
    }else if(from==='monthBeginning'){
      fromDate  = new Date(Date.UTC(now.getUTCFullYear(),now.getUTCMonth()))
    }else if(from ==='dayBeginning'){
      fromDate  = new Date(Date.UTC(now.getUTCFullYear(),now.getUTCDate()))
    }
      const commandMap={
        add:add,
        sub:sub
      }
     newDate=commandMap[command](fromDate,{
      years:argv.years ||0 ,
      months:argv.months ||0,
      weeks:argv.weeks ||0,
      days:argv.days ||0,
      hours:argv.hours ||0,
      minutes:argv.minutes ||0,
      seconds:argv.seconds ||0
    })    
  }

}
console.log(newDate.toISOString());

