class calculatorClass{

    _lastElement = [];
    _operator = ["+", "-", "*", "/", "%", "="];

    constructor(){

        this.readKeyboard();

    }

    readKeyboard(){

        document.addEventListener("keyup", e=> {

            switch(e.key){

                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":   
                    this._lastElement.push(e.key);
                    this.calcOperation();
                    console.log("teste:" + this._lastElement);
                    break;

                    case "Escape": 
                    this.clearAll();
                    break;
    
                case "Backspace":
                    this.clearEntry();
                    break;
    
                case "+":
                case "-":
                case "/":
                case "*":
                case "%":
                    break;
    
                case "Enter":
                case "=":
                    break;

                case ".":
                case ",":
                    break;
            }
        })
    }

    calcOperation(){


    }
    
    
}