class calculatorClass{

    _displayCalc = [];
    _recorder = [];
    _lastElement;
    _operator = ["+", "-", "*", "/", "%"];
    _operatorCalc;
    _teste = [];
    _result = 0;

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

        console.log("Start"); 

        console.log("historyBefore:" + this._recorder); 
        
            if(this._displayCalc != 0){

            this._recorder = this._displayCalc.join("");
            console.log("display:" + this._displayCalc);
       }

        
        if(this.isOperator() == true) {

            this._operatorCalc = value;
            console.log("operator:" + this._operatorCalc);
            this._displayCalc = [];
            console.log("history:" + this._recorder); 
            console.log("1ª:" + this._teste);
        } else {

            console.log("historyNOP:" + this._recorder); 
            console.log("1ªNOP  :" + this._teste);
            this._displayCalc.push(value);
            this._teste = this._displayCalc.join("");
            this._recorder = this._displayCalc.join("");

        }

        /*console.log("Operator:" + this._operatorCalc);
        console.log("history:" + this._recorder); 
        console.log("1ª:" + this._teste);*/
        console.log("End"); 
        
    }

    calcOperation(){

        switch(this._operatorCalc){

            case "+":
                
                this._result = (parseInt(this._recorder) + parseInt(this._teste));
                this._recorder = this._result;  
                console.log("result:" + this._result);
                this._displayCalc = [];
                break;

            case "-":
                  

                this._result = (parseInt(this._recorder) - parseInt(this._teste));
                this._recorder = this._result;  
                console.log("result:" + this._result);
                this._displayCalc = [];
                break;

            case "*":
                this._result = (parseInt(this._recorder) * parseInt(this._teste));
                this._recorder = this._result;  
                console.log("result:" + this._result);
                this._displayCalc = [];
                break;

            case "/":
            this._result = (parseInt(this._recorder) / parseInt(this._teste));
            this._recorder = this._result;  
            console.log("result:" + this._result);
            this._displayCalc = [];
            break;
 
        }
    }

    
    
}