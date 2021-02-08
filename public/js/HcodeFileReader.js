class HcodeFileReader {

    constructor(inputEl, imgEl){

        this.imgEl = inputEl;
        this.imgEl = imgEl;

        this.initInputEvent();
        
    }

    initInputEvent() {

        
        document.querySelector(this.inputEl).addEventListener("change", e=> {
            
            
            this.reader(e.target.files[0]).then( result => {

               document.querySelector(this.inputEl).src = result;
            });
        });
    }

    reader(file){
        return new Promise((resolve, reject)=>{

        let reader = new FileReader();

        reader.onload = function() {

            resolver(reader.result);

        }

        reader.onerror=function(){
           reject("Não foi possível ler a imagem");
        }
        reader.readAsDataURL(file);
        });


    }
}