

    function copyToClipboard() {
            var copyLink=$('#copyLink').val();
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val(copyLink).select();
            document.execCommand("copy");
            $temp.remove();
            alert("Copied On clipboard");
    }
    $(document).ready(function() {
        
        var hashParams = window.location.hash.substr(1).split('=')[1];//.substr(1).split('&'); // substr(1) to remove the `#`
       $(".getRefLink").click(function() {
           $("#refs").removeAttr("style");
           var referred = $("#Account").html();
           $("#copyLink").val("https://airdrop.codtokens.com#ref="+referred);
           
           var link=$("#reff").html("<a href='https://airdrop.codtokens.com#ref="+referred+"'>https://airdrop.codtokens.com#ref="+referred+"</a>");
           //alert(link);
           
           
       })

        if (hashParams != undefined) {
            //alert(hashParams);
            //$(".")
            $(".claim").click(function(){
                var referred = $("#Account").html();
                $("#reff").html("<a href='https://airdrop.codtokens.com#ref="+referred+"'>https://airdrop.codtokens.com#ref="+referred+"</a>");
                    claimRefToken(hashParams);
                    
                });
                $(".presale").click(function(){
                    var referred = $("#Account").html();
                    $("#reff").html("<a href='https://airdrop.codtokens.com#ref="+referred+"'>https://airdrop.codtokens.com#ref="+referred+"</a>");
                    if (parseFloat($("#ethV").val())>0.003) {
                        preSaleRef(($("#ethV").val()),hashParams);
                    } else {
                        alert("Amount too low");
                    }
                        
                }); 
        } else {
               // alert("New Link");
                
                $(".claim").click(function(){
                    var referred = $("#Account").html();
                    $("#reff").html("<a href='https://airdrop.codtokens.com#ref="+referred+"'>https://airdrop.codtokens.com#ref="+referred+"</a>");
                    //alert(referred);
                    claimToken();

                });
                $(".presale").click(function(){
                    var referred = $("#Account").html();
                    $("#reff").html("<a href='https://airdrop.codtokens.com#ref="+referred+"'>https://airdrop.codtokens.com#ref="+referred+"</a>");
                    if (parseFloat($("#ethV").val())>0.003) {
                        preSale(($("#ethV").val()));
                    } else {
                        alert("Amount too low");
                    }
                        
                });            
        }

    });
