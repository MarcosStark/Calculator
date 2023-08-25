class calculatorClass{

    _displayCalc = [];
    _recorder = [];
    _lastElement = [];
    _operator = ["+", "-", "*", "/"];
    _operatorCalc;
    _teste = [];
    _result = 0;
    _okok = 0;

    constructor(){

        this.readKeyboard();   
    }
    
    readKeyboard(){
 
    this._okok = this._okok + 1;
        document.addEventListener("keyup", e=> { 

            this._lastElement[this._okok] = e.key;
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

    display(value){

        document.getElementById("display").innerHTML = value;
    }


    setLastOperator(value){
        console.log("general: " + value);

        if(this.isOperator() == true) {

            console.log("operator: " + value);
            this._operatorCalc = value;
            this._displayCalc = [];

        } else {

            this._displayCalc.push(value);

            console.log("number: " + value);
            if(this._operatorCalc != undefined){

                this._teste = this._displayCalc.join("");

            } else {

                this._recorder = this._displayCalc.join("");
            }
        } 
        this.display(this._lastElement); 
    }

    calcOperation(){

        switch(this._operatorCalc){

            case "+":
                this._result = (parseInt(this._recorder) + parseInt(this._teste));
                break;
            case "-":                 
                this._result = (parseInt(this._recorder) - parseInt(this._teste));
                break;
            case "*":
                this._result = (parseInt(this._recorder) * parseInt(this._teste));
                break;
            case "/":
            this._result = (parseInt(this._recorder) / parseInt(this._teste));
            break;     
        
    }

    console.log("length: " + this._lastElement.length);
        this.display(this._result); 
        this._recorder = this._result;  
        console.log("result:" + this._result);
        this._displayCalc = []; 
    }
}