const child_process = require('child_process');
const inquirer      = require('inquirer-promise');
const chalk         = require('chalk');

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

const run = async () => {
	await start()
};

run();

async function start() {
	await inquirer.input(
		chalk.blue(
			`请输入博客名称`
		)
	);

	await delay(1000);
	log('100', '博客名称设置成功!');

	await inquirer.confirm(
		chalk.blue(
			`是否开始安装依赖`
		)
	);

	await delay(1000);
	log('10', '正在安装...');
	await delay(4000);
	log('22', '正在安装...');
	await delay(1000);
	log('60', '正在安装...');
	await delay(1000);
	log('94', '正在安装...');
	await delay(1000);
	log('100', '✅ 安装成功');

	await inquirer.confirm(
		chalk.blue(
			`😘 是否要生成 Blog 主题`
		)
	);
	log('0', '正在初始化...');
	await delay(1000);
	log('20', '正在生成中...');
	await delay(1000);
	log('40', '正在生成中...');
	await delay(1000);
	logError('60', '生成程序出现意外情况...');
	await delay(1000);
	logWarn('60', '尝试修正...');
	await delay(2000);
	logError('60', '❌ 修正失败...');
	await delay(1000);
	logWarn('60', '再次尝试修正...');
	await delay(2000);
	logError('60', '❌ 修正失败...');
	await delay(2000);
	logError('60', '🤯 ??????????????');
	await delay(2000);
	logError('60', '================================');
	logError('60', '🤯 进行用爱发电，再次修正...');
	logError('60', '================================');
	await delay(2000);
	logWarn('60', '✨ 加入日期因子：2021 年 3 月 29 日');
	await delay(2000);
	logError('60', '🤯 因果律不足，请尝试加入更多变量...');
	await delay(2000);
	logWarn('60', '✨ 加入地理因子：成都高新区');
	await delay(2000);
	logError('60', '🤯 因果律不足，请尝试加入更多变量...');
	await delay(2000);
	logWarn('60', '✨ 加入天气因子：晴空万里 26 度');
	await delay(2000);
	logError('60', '🤯 因果律不足，请尝试加入更多变量...');
	await delay(2000);
	logWarn('60', '👀 让我康康谁在捣乱');
	await delay(2000);
	logWarn('60', '👀 寻找中......');
	await delay(2000);
	console.log(Image);
	await delay(1000);
	logError('60', '🔐 目标已锁定');
	await delay(1000);
	await inquirer.input("目标是否为"+
		chalk.blue(
			`「海纳」`
		)
	);
	await delay(1500);
	logWarn('60', '🚀🚀🚀🚀🚀 开始执行机密程序....');
	await delay(3000);
	logSuccess('60', '================================');
	logSuccess('60', '🌈 强行修正成功，继续进行生成...');
	logSuccess('60', '================================');
	await delay(2000);
	log('72', '正在生成中...');
	await delay(2000);
	log('88', '正在生成中...');
	await delay(2000);
	log('90', '正在生成中...');
	await delay(2000);
	log('99', '正在生成中...');
	await delay(1000);
	log('100', '✅ 生成成功');
	await delay(1000);
}

function log(progress, ...props) {
	console.log(chalk.blue('> '), chalk.yellow(`${progress}%`), chalk.gray(...props));
}

function logSuccess(progress, ...props) {
	console.log(chalk.blue('> '), chalk.yellow(`${progress}%`), chalk.green(...props));
}

function logError(progress, ...props) {
	console.log(chalk.blue('> '), chalk.yellow(`${progress}%`), chalk.red(...props));
}

function logWarn(progress, ...props) {
	console.log(chalk.blue('> '), chalk.yellow(`${progress}%`), chalk.blue(...props));
}

const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms));