class calculatorClass{

    _displayCalc = [];
    _lastElement;
    _operator = ["+", "-", "*", "/", "%"];

    constructor(){

        this.readKeyboard();

    }

    readKeyboard(){

        document.addEventListener("keyup", e=> {

            this._lastElement = e.key;
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
                    this.setLastOperator(e.key);   
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
                    this.setLastOperator(e.key);  
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

    isOperator(){

        console.log(this._operator.indexOf(this._lastElement) > -1);
    }

    setLastOperator(value){

        if(this.isOperator() == true) {

            this._displayCalc.push(value);
        } else {

        this._displayCalc.push(value);
        var teste = this._displayCalc.join("");
        console.log("teste:" + this._lastElement);
        }

        console.log(this._displayCalc);
        console.log("OKOK:" + teste);
    }

    calcOperation(){


    }
    
    
}