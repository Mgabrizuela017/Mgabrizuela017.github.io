
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        
        $(document).ready(function () {
            var foto_nueva=new Image();
            foto_nueva.src="Assets/img/Bebidas_barra.png";
            $("#Bebidas_barra2").hover(function () {
                $(this).attr("src","Assets/img/bebidas_todas.jpg"); 
            },function () {
                $(this).attr("src", foto_nueva.src)  
            });

         var foto_nueva2=new Image();
            foto_nueva2.src="Assets/img/Salon_azul6.jpg";
            $("#Salon").hover(function () {
                $(this).attr("src","Assets/img/Salon_azul5.jpg"); 
            },function () {
                $(this).attr("src", foto_nueva2.src)  
            });
            


  
           var foto_nueva4=new Image();
            foto_nueva4.src="Assets/img/Salon_azul.jpg";
            $("#Salon2").hover(function () {
                $(this).attr("src","Assets/img/15_LARA (5).png"); 
            },function () {
                $(this).attr("src", foto_nueva4.src)  
            });
        });//Termina ready
