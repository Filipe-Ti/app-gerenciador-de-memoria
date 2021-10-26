/* arch() Retorna a arquitetura da CPU do sistema operacional para a qual o binário Node.js foi compilado. 
Os valores possíveis são 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', e 'x64'.

platform() Retorna uma string que identifica a plataforma do sistema operacional. 
O valor é definido em tempo de compilação. Os valores possíveis são 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', e 'win32'.

totalment() Retorna a quantidade total de memória do sistema em bytes como um número inteiro.

freemem() Retorna a quantidade de memória livre do sistema em bytes como um número inteiro.
*/
const os = require('os');

setInterval(() => {
    const {arch, platform, totalmem, freemem } = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100;

    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM:`${parseInt(tRam)} MB`,
        FreeRAM: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)} %`
    };
    
    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000);




