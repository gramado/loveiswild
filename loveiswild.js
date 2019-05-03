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
    
	loveiswild.admin.validateForm()     - valida um formulário.
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
        this.validateForm = do_validateForm;
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
 
	/*  do_validateForm:
		O objetivo desse método é capturar o input do form na página inicial, usado na busca, compará lo com o banco de dados,
		apresentar o resultado em outra página /search que também será um mecanismo de pesquisa. */

    function do_validateForm(){

        var xHref;
        var xSave;
        var str;
        /*var buffer;*/
        /*var file_name;*/
        /* ... */

        /*alert("do_validateForm: Getting substring ...");*/

        /* var GET = "gui";*/

        var GET = window.location.search.substring(14);

        if (GET == "")
		{
            document.myForm.search_input.value = "";
            return 0;
			
        }else{
            document.myForm.search_input.value = GET;
        }

        /* validate Form / show link */

        xSave = document.myForm.search_input.value; 

	/* Obs: 
		Essa comparação não funciona, quando a busca é feita em /home.html, pois 
		a análise é feita pelo js da página /seach.
		Isso está aqui só para uso futuro.*/

        str = "https://gramado.github.io/ home"; 
        var resIndex = str.match(document.myForm.search_input.value);

        str = "https://gramado.github.io/about fred nora Fred Nora Frederico economist developer author";
        var resAboutMe = str.match(document.myForm.search_input.value);

        str = "https://gramado.github.io/projects work kernel gui osdev source";
        var resProjects = str.match(document.myForm.search_input.value);

        str = "https://gramado.github.io/links social network twitter facebook youtube linkedin";
        var resLinks = str.match(document.myForm.search_input.value);

        str = "https://gramado.github.io/contact email business"; 
        var resContactMe = str.match(document.myForm.search_input.value);

        /* @TODO: PARSE SOME FILES AND TEXT TO FIND A RESULT */

        /**/
        if (resIndex == document.myForm.search_input.value){
            document.myForm.search_input.value = "index.html";
        }

        /**/
        if (resAboutMe == document.myForm.search_input.value){
            document.myForm.search_input.value = "about";
        }

        /**/
        if (resProjects == document.myForm.search_input.value){
            document.myForm.search_input.value = "projects";
        }

        /**/
        if (resLinks == document.myForm.search_input.value){
            document.myForm.search_input.value = "links";
        }

        /**/
        if (resContactMe == document.myForm.search_input.value){
            document.myForm.search_input.value = "contact";
        }

		/* ... */

        xHref = document.myForm.search_input.value;

        /* Show formated link */
        document.getElementById("link1").innerHTML = xSave;
        document.getElementById("link1").href = xHref;
        document.getElementById("link1").target = "_self";

        document.myForm.search_input.value = xSave;

		/* carregar página de /search com input*/


		/* alert("~validate input Opening URL."); */

        var url_search;
        url_search = "https://gramado.github.io/search/?search_input=";

		/*alert("do_validateForm: debug");*/

		/*#bugbug*/
		/*this.document.location.href = url_search + xSave; */
		/*this.document.location.href = "www.google.com";*/

		/*window.open(url_search,"_self",false);*/
        var myWindow = window.open(url_search + xSave);
		/*alert("do_validateForm: EXIT");*/

		/* ?? O que acontece ao retornarmos, ??? inicializa a biblioteca quando chega no elemento 'body' ??*/
		/* return 0; */
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
       Para acionar esse método é usada a função >> gramado.admin.download(); */
       
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



