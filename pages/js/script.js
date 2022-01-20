    // Event Listener for WPBAL
    document.getElementById("Reset-button").addEventListener("click", resetall);

// Event Function
function resetall() {
    
        if (confirm("Are you sure you want to Reset?")) {
            location.reload();
        }
    }


    document.getElementById("submit-button").addEventListener("click", buildServ);



function buildServ() {

let PName = document.getElementById("PetName").value;
    
//G1
var ServUsed = document.getElementById("Used").value;
var WPBAL = document.getElementById("Plan").value;
let InstallPaid = document.getElementById("Paid").value;
let EndDate = document.getElementById("EndDate").value;

let result = "Canceling a Wellness Plan is all based on usage. We figure in how much the hospitals have covered in services and how many payments you have made, and then we come to a final balance based on whichever costs less: the remaining balance of future Plan payments, or the remaining costs of service after deducting past payments. This means you will either pay for the services you have used, Or the remaining 12 month plan balance, whichever is the lesser of the two.";

let x=(WPBAL/12).toFixed(2);     //cost of each installment
let CxlCost=(ServUsed-InstallPaid).toFixed(2); //cxlcost for services cxl
let y=Math.trunc(CxlCost/x);  //Number of installments to call after = services cxl
let z=Math.abs([x*y]-CxlCost).toFixed(2); //remaining balance to pay when they call back after - services cxl
let CxlCost2=(WPBAL-InstallPaid).toFixed(2); // Cost to close per services cxl
let q=Math.round(CxlCost2/x); //number of remaining installments on wellness plan - WP Cxl

//make below if statement a var to use in multipet cxl - this is going to be fun =.=
if (parseInt(ServUsed) < parseInt(WPBAL)) {
           
            ///services used cxl

        var P1 = "Looking at "+PName+"'s plan, as $"+ServUsed+" of services were used and the plan costs $"+WPBAL+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid+" of installments paid, which leaves the cost to close today of $"+CxlCost+". This can either be paid today or we can let each monthly installment of $"+x+" lower the balance each month over time, I do recommend calling back after the next "+y+" installments to pay the remaining $"+z+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate+".";

        var note = "-adv $"+CxlCost+" per Services for "+PName+" ";

    } else {

                ///WP BAL cxl

            var P1 = "Looking at "+PName+"'s plan, as $"+ServUsed+" of services were used and the plan costs $"+WPBAL+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid+" of installments paid, which leaves the cost to close today of $"+CxlCost2+". This can either be paid today or over the remaining "+q+" installments before the plan expires on "+EndDate+".";

            var note = "-adv $"+CxlCost2+" per WP BAL for "+PName+" ";
                
    }
       
    document.getElementById("result").innerHTML = result;
    document.getElementById("Pet1").innerHTML = P1+" Which option do you prefer?";
    document.getElementById("note").innerHTML = note;

}


