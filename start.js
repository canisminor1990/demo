const child_process = require('child_process');
const inquirer      = require('inquirer-promise');
const chalk         = require('chalk');

const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));

const Image = '\n' +
              '                                 ``...``                                        \n' +
              '                        `./+ossydNMMMMNNmdyo+-`                                 \n' +
              '                     -+hmmmNMMNmNMMMMMMMMMMMNNNds:                              \n' +
              '                  .+dmNNMMMMMMdoomMMMMMMMMMNMNMMNNmo-                           \n' +
              '               ``omNmmNMMMMMMMNy+sddmNMMMMMMMNNNNNNNNy:                         \n' +
              '               .yNmmmNNNNNMMmy/.````.-:/shmNMMNmNNNNNNmy-                       \n' +
              '              .hNNNNmmmmNNNh/.           .:sdNMNmmNNmdmmh/                      \n' +
              '             `yMMMMmmmmmmmy+.              ./yNNmdmNmmmmdh/                     \n' +
              '             oMMMMMMNNNmdd+-`              `.:ymNmdmmdddmdh:                    \n' +
              '            :NMMMMMMMMNNNmy+/:-`         `.:/osdNMddddddddhy-                   \n' +
              '           `dMMMMMMMMMMMMy:.``             -oshdNMNhhmhddddys`                  \n' +
              '           /MMMMMMMMMMMMNmhohhs.`         ../+o+hMMmddmhddmdh:                  \n' +
              '           sMMMMMMMMMMMd+:-`                 ```-dMMNmNNmmmmdo                  \n' +
              '           mMMMMMMMMMMmo-                       .oMMMMNNMNNNmy                  \n' +
              '           dMMMMMMMMMMmo-`         ``   -` `   `./NMMMMMMMMMNs                  \n' +
              '           +MMMMMMMMMMMh+-`       `..`   ``   .:/omMMMMMMMMNy.                  \n' +
              '            oNNMMMMMMMMNs:--.`...`        ``.:++:oNMMMMMMMh:                    \n' +
              '             ``+mNMMMMMNh:-..``.-:/:-...`...``-:oNMMMMdy+.                      \n' +
              '                  `/o+:.  `.:-.``````````    `./so/--`                          \n' +
              '                             .::-.`           ``   ``                           \n' +
              '                      ``.-+s+-::://::-..`````       -so///:-.``                 \n' +
              '        `.....-:/+ossyyhhmd/-----.....``             +yysyyyyysso+/:--::`       \n' +
              '     :+sddddmddddddddhdddhs-.....```                 oshyhdhyyhdddhhyhdyyys+/:-`\n' +
              ' `-+hNNMMNNNmmmmmmmmmddddh/..``````                 `yhhyhdhhdmNNmhhmNdmmddddddh\n' +
              'dNMMMMMNMMMNNNNNmmNNmmmmmd`    ```                 `shdhdhhhdNNNNmhmMmNMmmNNNmmm';



const image_1 = "                                                                   \n" +
                "        ,--,                 ,-.----.    ,-.----.                  \n" +
                "      ,--.'|    ,---,        \\    /  \\   \\    /  \\                 \n" +
                "   ,--,  | :   '  .' \\       |   :    \\  |   :    \\          ,---, \n" +
                ",---.'|  : '  /  ;    '.     |   |  .\\ : |   |  .\\ :        /_ ./| \n" +
                "|   | : _' | :  :       \\    .   :  |: | .   :  |: |  ,---, |  ' : \n" +
                ":   : |.'  | :  |   /\\   \\   |   |   \\ : |   |   \\ : /___/ \\.  : | \n" +
                "|   ' '  ; : |  :  ' ;.   :  |   : .   / |   : .   /  .  \\  \\ ,' ' \n" +
                "'   |  .'. | |  |  ;/  \\   \\ ;   | |`-'  ;   | |`-'    \\  ;  `  ,' \n" +
                "|   | :  | ' '  :  | \\  \\ ,' |   | ;     |   | ;        \\  \\    '  \n" +
                "'   : |  : ; |  |  '  '--'   :   ' |     :   ' |         '  \\   |  \n" +
                "|   | '  ,/  |  :  :         :   : :     :   : :          \\  ;  ;  \n" +
                ";   : ;--'   |  | ,'         |   | :     |   | :           :  \\  \\ \n" +
                "|   ,/       `--''           `---'.|     `---'.|            \\  ' ; \n" +
                "'---'                          `---`       `---`             `--`  \n" +
                "                                                                   "

const image_2 = "                                  ,----,              \n" +
                "                                ,/   .`|         ,--, \n" +
                "     ,---,     ,----..        ,`   .'  :       ,--.'| \n" +
                "  ,`--.' |    /   /   \\     ;    ;     /    ,--,  | : \n" +
                " /    /  :   /   .     :  .'___,/    ,'  ,---.'|  : ' \n" +
                ":    |.' '  .   /   ;.  \\ |    :     |   |   | : _' | \n" +
                "`----':  | .   ;   /  ` ; ;    |.';  ;   :   : |.'  | \n" +
                "   '   ' ; ;   |  ; \\ ; | `----'  |  |   |   ' '  ; : \n" +
                "   |   | | |   :  | ; | '     '   :  ;   '   |  .'. | \n" +
                "   '   : ; .   |  ' ' ' :     |   |  '   |   | :  | ' \n" +
                "   |   | ' '   ;  \\; /  |     '   :  |   '   : |  : ; \n" +
                "   '   : |  \\   \\  ',  /      ;   |.'    |   | '  ,/  \n" +
                "   ;   |.'   ;   :    /       '---'      ;   : ;--'   \n" +
                "   '---'      \\   \\ .'                   |   ,/       \n" +
                "               `---`                     '---'        \n" +
                "                                                      "

const image_3 = "                                                     \n" +
                "                                                     \n" +
                "                  ,---,.    ,---,        ,-.----.    \n" +
                "        ,---,   ,'  .' |   '  .' \\       \\    /  \\   \n" +
                "       /_ ./| ,---.'   |  /  ;    '.     ;   :    \\  \n" +
                " ,---, |  ' : |   |   .' :  :       \\    |   | .\\ :  \n" +
                "/___/ \\.  : | :   :  |-, :  |   /\\   \\   .   : |: |  \n" +
                " .  \\  \\ ,' ' :   |  ;/| |  :  ' ;.   :  |   |  \\ :  \n" +
                "  \\  ;  `  ,' |   :   .' |  |  ;/  \\   \\ |   : .  /  \n" +
                "   \\  \\    '  |   |  |-, '  :  | \\  \\ ,' ;   | |  \\  \n" +
                "    '  \\   |  '   :  ;/| |  |  '  '--'   |   | ;\\  \\ \n" +
                "     \\  ;  ;  |   |    \\ |  :  :         :   ' | \\.' \n" +
                "      :  \\  \\ |   :   .' |  | ,'         :   : :-'   \n" +
                "       \\  ' ; |   | ,'   `--''           |   |.'     \n" +
                "        `--`  `----'                     `---'       \n" +
                "                                                     "

const image_4 = "        ,----,            \n" +
                "      ,/   .`|            \n" +
                "    ,`   .'  :            \n" +
                "  ;    ;     /            \n" +
                ".'___,/    ,'     ,---.   \n" +
                "|    :     |     '   ,'\\  \n" +
                ";    |.';  ;    /   /   | \n" +
                "`----'  |  |   .   ; ,. : \n" +
                "    '   :  ;   '   | |: : \n" +
                "    |   |  '   '   | .; : \n" +
                "    '   :  |   |   :    | \n" +
                "    ;   |.'     \\   \\  /  \n" +
                "    '---'        `----'   \n" +
                "                          \n" +
                "                          \n" +
                "                          "


const image_5 = "                                                    \n" +
                "        ,--,                   ,--.                 \n" +
                "      ,--.'|    ,---,        ,--.'|    ,---,        \n" +
                "   ,--,  | : ,`--.' |    ,--,:  : |   '  .' \\       \n" +
                ",---.'|  : ' |   :  : ,`--.'`|  ' :  /  ;    '.     \n" +
                "|   | : _' | :   |  ' |   :  :  | | :  :       \\    \n" +
                ":   : |.'  | |   :  | :   |   \\ | : :  |   /\\   \\   \n" +
                "|   ' '  ; : '   '  ; |   : '  '; | |  :  ' ;.   :  \n" +
                "'   |  .'. | |   |  | '   ' ;.    ; |  |  ;/  \\   \\ \n" +
                "|   | :  | ' '   :  ; |   | | \\   | '  :  | \\  \\ ,' \n" +
                "'   : |  : ; |   |  ' '   : |  ; .' |  |  '  '--'   \n" +
                "|   | '  ,/  '   :  | |   | '`--'   |  :  :         \n" +
                ";   : ;--'   ;   |.'  '   : |       |  | ,'         \n" +
                "|   ,/       '---'    ;   |.'       `--''           \n" +
                "'---'                 '---'                         \n" +
                "                                                    "
const run = async () => {
	console.log(chalk.red("💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗"))
	console.log(chalk.red(Image))
	console.log(chalk.red("💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗"))
	await delay(2000);
	console.log(chalk.red(image_1))
	await delay(2000);
	console.log(chalk.magenta(image_2))
	await delay(2000);
	console.log(chalk.yellow(image_3))
	await delay(2000);
	console.log(chalk.green(image_4))
	await delay(2000);
	console.log(chalk.blue(image_5))
	await delay(2000);
	console.log(chalk.blue("🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈"))
	console.log(chalk.blue("💗💗💗💗💗💗💗💗💗💗💗💗 海纳 10 周年快乐 💗💗💗💗💗💗💗💗💗💗💗💗"))
	console.log(chalk.blue("🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈"))
};

run();