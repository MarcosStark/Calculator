class calculatorClass{

    _displayCalc = [];
    _recorder = [];
    _lastElement = [];
    _operator = ["+", "-", "*", "/"];
    _operatorCalc;
    _teste = [];
    _result = 0;
    _displayHistory = [];

    constructor(){

        this.readKeyboard();   
        this.clearAll();
    }
    
    readKeyboard(){
 
        var x;

        document.addEventListener("keyup", e=> { 

             x = x + 1;

            this._lastElement[x] = e.key;

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
                    this.display(this._displayHistory.join(""));  
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
                    this.display(this._displayHistory.join(""));  

                    //this.display(this._displayCalc.push(e.key));
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

    isOperator(value){

        //for(var i = 1; i <= this._lastElement.length; i++){

            return this._operator.indexOf(value) > -1;

        //}
    }

    display(value){

        document.getElementById("display").innerHTML = value;
    }

    clearAll(){

        document.querySelector(".btn-ac").addEventListener("click", e=>{

            this._recorder = 0, this._teste = 0;
            this._displayHistory = [];
            this.display(0);
        });

    }

    setLastOperator(value){

        if(this.isOperator(value) == true) {
            
            this._operatorCalc = value;

            this._displayHistory.push(value);

            this._displayCalc = [];

        } else {

            this._displayCalc.push(value);
            this._displayHistory.push(value);

            if(this._operatorCalc != undefined){

                this._teste = this._displayCalc.join("");

            } else {

                this._recorder = this._displayCalc.join("");
            }
        } 

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

        this.display(this._result); 
        this._recorder = this._result;  
        console.log("result:" + this._result);
        this._displayCalc = []; 
    }
}