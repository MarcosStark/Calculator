class calculatorClass{

    _displayCalc = [];
    _recorder = [];
    _lastElement;
    _operator = ["+", "-", "*", "/", "%"];
    _operatorCalc;
    _teste;

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
                    this.calcOperation();
                    break;

                case ".":
                case ",":
                    break;
            }
        })
    }

    isOperator(){

        return this._operator.indexOf(this._lastElement) > -1;
    }

    setLastOperator(value){

        if(this.isOperator() == true) {

            this._operatorCalc = value;
            this._recorder = this._displayCalc.join("");
            this._displayCalc = [];
        } else {

        this._displayCalc.push(value);
        this._teste = this._displayCalc.join("");
        //console.log("teste:" + this._lastElement);
        }

        console.log("history:" + this._recorder);
        console.log("1ª:" + this._teste);
        console.log("Operator:" + this._operatorCalc);
    }

    calcOperation(value){

    if(this._operatorCalc == "+"){

        this._result = (this._recorder.parseInt() + this._teste);

        console.log("result:" + this._result);
    }

    }
    
    
}