
document.getElementById("start").addEventListener("click",function st_t(){

    
    var strin=["","Historians consider India's modern age to have begun sometime between 1848 and 1885. The appointment in 1848 of Lord Dalhousie as Governor General of the East India Company set the stage for changes essential to a modern state.","The pervasive and ecologically devastating human encroachment of recent decades has critically endangered Indian wildlife. In response, the system of national parks and protected areas, first established in 1935, was substantially expanded. In 1972, India enacted the Wildlife Protection Act and Project Tiger to safeguard crucial wilderness;","India is a federation with a parliamentary system governed under the Constitution of India, which serves as the country's supreme legal document. It is a constitutional republic and representative democracy, in which majority rule is tempered by minority rights protected by law.","Since its independence in 1947, India has maintained cordial relations with most nations. In the 1950s, it strongly supported decolonisation in Africa and Asia and played a lead role in the Non-Aligned Movement. In the late 1980s, the Indian military twice intervened abroad at the invitation of neighbouring countries: a peace-keeping operation in Sri Lanka between 1987 and 1990; and an armed intervention to prevent a 1988 attempt in the Maldives.","Television broadcasting began in India in 1959 as a state-run medium of communication and had slow expansion for more than two decades. The state monopoly on television broadcast ended in the 1990s and, since then, satellite channels have increasingly shaped the popular culture of Indian society."];
    var x=Math.floor(Math.random() * 5) + 1;
    var div=document.getElementById("text");
    var p=document.createElement("p");
    p.textContent=strin[x];
    p.setAttribute("id","essay");
    div.appendChild(p);
    
   
});
    document.getElementById("enter").addEventListener("input",function check(){
        var fill=document.getElementById("enter");
        var data=fill.value;
       
        var es=document.getElementById("essay");
        var st=es.textContent;
        var new_st=st.substr(0,(data.length));
        
        if(new_st.localeCompare(data)==0)
            {
                var body=document.getElementById("bb");
                body.setAttribute("style","background-color:greenyellow");
                if(st.length==data.length)
                    {
                       var fit= document.getElementById("box");
                        var suc=document.createElement("p");
                        suc.textContent="Good job ! ";
                        fit.appendChild(suc);
                    }
            }
                
        else
            {
                var body=document.getElementById("bb");
                body.setAttribute("style","background-color:orangered");
                
            }
        
    });
    


