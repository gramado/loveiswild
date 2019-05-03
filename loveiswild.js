/*  love is wild - js

    loveiswild.js is a client side js library.


    loveiswild.xxx.yyy() 

    steps:
    =====================
    1) *Step1 Defining global variables.
    2) *Step2 Setup the library.
    3) *Step3 set of methods. All methods begins with do_xxxx().

    Functions:
    ======================
    loveiswildMain()                    - Inicializa a biblioteca.
	
	loveiswild.persona4.persona4Alert()           - teste 
    loveiswild.persona3.persona3Alert()           - teste 
    loveiswild.persona2.persona2Alert()           - teste
    loveiswild.persona1.persona1Alert()           - teste 
    
    loveiswild.admin.function1()        - teste
    loveiswild.admin.function2()        - teste
    loveiswild.admin.function3()        - teste 
    loveiswild.admin.messageShow()      - mostra uma mensagem de teste. 
    loveiswild.admin.initializedAlert() - mensagem de alerta que a biblioteca foi inicializada. 
    loveiswild.admin.myFunction()       - teste.
    loveiswild.admin.download()         - baixa um arquivo escrito em uma área de texto.
    
	Continua...

    History:
        2019 Created by Fred Nora.
*/


 /* # Step 1 # */



    //#importante
    // Esse será o nome do pacote.
    var loveiswild;

    // Variables.
    var var11 = 0;
    var string1 = "This is a string.";

    // Strings.
    message = "Initializing ..."









	/* # Step 2 # */
	/* Setup library */

    /* Entry point: 
       Isso inicializa a biblioteca.
       Isso deve ser chamado apenas uma vez. */

    function loveiswildMain(){

        /*document.getElementById("getThis").focus();*/

        /* alert("loveiswildMain:"); */

        loveiswild = new CreatingLIWPackage();

        /* Com o pacote criado, vamos configurar os ponteiros para os métodos das 5 classes */
        loveiswild.persona4 = new PERSONA4();
        loveiswild.persona3 = new PERSONA3();
        loveiswild.persona2 = new PERSONA2();
        loveiswild.persona1 = new PERSONA1();
		
        loveiswild.admin = new ADMIN();
        /* more ...*/

        /*testando ...*/

        /* loveiswild.persona4.persona4Alert();  */
        /* loveiswild.persona3.persona3Alert(); */
        /* loveiswild.persona2.persona2Alert(); */
        /* loveiswild.persona1.persona1Alert(); */

        /* Done.*/
        /* Mensagem sinalizando o fim da inicialização da lib.*/
        /*loveiswild.admin.initializedAlert();*/
        /* return 0; */
    };


   /*Isso cria os 4 classes do pacote loveiswild*/
    /* cinco objetos ... que terão vários métodos cada. */

    function CreatingLIWPackage(){

        this.persona4 = 0;    /* rep.:    */
        this.persona3 = 0;    /* limb.:   */
        this.persona2 = 0;    /* cortex.: */ 
        this.persona1 = 0;    /* spirit.: */ 

        this.admin = 0;       /* Admin support */
    }

    /* A partir daqui, vamos configurar os ponteiros para os métodos das 5 classes.
     * Mais de um ponteiro poderá ser configurado para cada uma das 5 classes. */

    /*persona4*/
    function PERSONA4(){ 
        this.persona4Alert = do_persona4Alert;  /* 'loveiswild.persona4.persona4Alert()' chamará 'do_persona4Alert()'*/
        //...
    }

    /*persona3*/
    function PERSONA3(){
        this.persona3Alert = do_persona3Alert;  /* */
        //...
    }

    /*persona2*/
    function PERSONA2(){
        this.persona2Alert = do_persona2Alert;  /* */
        //...
    }

    /*persona1*/
    function PERSONA1(){
        this.persona1Alert = do_persona1Alert;  /* */
        //...
    }

    /* Administrando a biblioteca. Essas são as funcionalidades administrativas da biblioteca */
    function ADMIN(){
		
 
        
		this.function1 = do_function1;
        this.function2 = do_function2;
        this.function3 = do_function3;
        this.messageShow = do_messageShow;
        this.initializedAlert = do_initializedAlert;
        this.myFunction = do_myFunction;
        this.download = do_downloadFile;
        /*Continua ...*/
    }






	/* # Step 3 # */

	/* Methods */

	/*  Daqui pra baixo, criaremos os métodos propriamente ditos
		Obs: Cada método tem um ponteiro para acessá-lo. O ponteiro fica 
		na sua respectiva classe. */

    /* Manteremos a ordem */

    function do_persona4Alert(){
        alert("~PERSONA4");
    }

    function do_persona3Alert(){
        alert("~PERSONA3");
    }

    function do_persona2Alert(){
        alert("~PERSONA2");	
    }

    function do_persona1Alert(){
        alert("~PERSONA1");
    }

    function do_initializedAlert(){
        alert("do_initializedAlert: method working ~It's initialized!");
    }
 
 
	

    //Test 1.
    function do_function1(){
        window.alert("Testing button 1.");
        return 0;
    }

    //Test 2.
    function do_function2(){
        window.alert("Testing button 2.");
        return 0;
    }

    //Test 3.
    function do_function3(){

        var txt;
        var r = confirm("Press a button!");
        
        if(r == true){
            txt = "You pressed OK!";
        }else{
            txt = "You pressed Cancel!";
        }
        
        window.alert(txt); 
        return 0;
    }

    // Showing some message.
    function do_messageShow(){
        window.alert(message);
    }

    /* Toggle between adding and removing the "ux3-logic-responsive" class to topnav when the user clicks on the icon. */

    function do_myFunction(){

        var x = document.getElementById("myTopnav");
        
        if( x.className === "ux3-logic-navigation" ){
            x.className = "ux3-logic-responsive";
        }else{
            x.className = "ux3-logic-navigation";
        }
    }

    /* Esse método é para baixar um arquivo que foi construído em um form com os inputs 'filename_input' e 'filetext_input'. 
       Para acionar esse método é usada a função >> loveiswild.admin.download(); */
       
    function do_downloadFile(){

		//file support.
        var xFileName = "fail";
        var xFileText = "fail";

		/*alert("go");*/

        xFileName = document.getElementById("fn1").value;
        xFileText = document.getElementById("ft1").value;

        var pom = document.createElement('a');
        
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xFileText));
        pom.setAttribute('download', xFileName);

        if (document.createEvent){

            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }else{
            pom.click();
        }
}



