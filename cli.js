// Dependencies

const os = require('os');
const repl = require('repl');

// Create the CLI
repl.start({
    'prompt':'>>>',
    'eval': function(str){
        let horizontalLine = function(){
            console.log('----------------');
        }
        if(str.indexOf('systemInformation') > -1){
            horizontalLine();
            console.log(os.version());
            horizontalLine();
            console.log(os.arch());
            horizontalLine();
            console.log(os.cpus());
            horizontalLine();
            console.log(os.totalmem());
            horizontalLine();
            console.log(os.hostname());
            horizontalLine();
            console.log(os.platform());
            horizontalLine();
            console.log(os.release());
            horizontalLine();
            console.log(os.userInfo());
            horizontalLine();
        }
    }
})