var checkBtn = document.getElementById("check");

checkBtn.addEventListener("click", function(e){
    e.preventDefault();
    let costp = Number(document.getElementById("cp").value);
    let qty = Number(document.getElementById("qty").value);
    let runningp = Number(document.getElementById("rp").value);

    let profit = 0;
    let profit_percent = 0;
    let output = document.getElementsByClassName("output")[0];

    if(costp <= 0 || qty <= 0 || runningp <= 0)
    {
        alert("All inputs should be greater than 0.");
    }
    else
    {
        if(costp === runningp)
        {
            output.innerHTML = "<div>You gained "+ profit_percent.toFixed(2) +"%. Your total profit is ₹" +profit+"</div>"
        }
        else if(costp < runningp)
        {
            profit = (runningp - costp).toFixed(2);
            profit_percent = (profit * 100 / costp).toFixed(2);
            output.innerHTML = "<div>You gained "+ profit_percent +"%. Your total profit is ₹" +profit*qty+"</div>"
        }
        else
        {
            profit = (costp - runningp).toFixed(2);
            profit_percent = (profit * 100 / costp).toFixed(2);
            output.innerHTML = "<div>You lost "+ profit_percent +"%. Your total loss is ₹" +profit*qty+"</div>"
        }
    }
    
})