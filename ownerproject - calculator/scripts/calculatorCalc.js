class calculatorClass{

    _selectedBtn;

    constructor(){

        this.readKeyboard();

    }

    readKeyboard(){

        document.addEventListener("keyup", e=> {

            switch(e.key){

                case "5":
                    console.log("cinco");
                    break;
            }
        })
    }
    
}