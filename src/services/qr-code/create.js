import prompt from "prompt";
import promptQRCODE from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

async function  createQRCODE() {
//segundo a documentação deve-se passar o schema que nada mais é onde esta nosso codigo promptQRCODE
//ele pede depois um repositorio com o erro e o resultado é só colocar estas duas variaveis e usamos uma arrow function
    prompt.get(promptQRCODE,handle);

    prompt.start();

}

export default createQRCODE;