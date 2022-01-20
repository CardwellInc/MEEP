    // Event Listener for WPBAL
    document.getElementById("submit-button").addEventListener("click", buildServ);
    document.getElementById("Reset-button").addEventListener("click", resetall);

    // Event Function
    function resetall() {
    
        if (confirm("Are you sure you want to Reset?")) {
            location.reload();
        }
    }


function buildServ() {


    let result = "Canceling a Wellness Plan is all based on usage. We figure in how much the hospitals have covered in services and how many payments you have made, and then we come to a final balance based on whichever costs less: the remaining balance of future Plan payments, or the remaining costs of service after deducting past payments. This means you will either pay for the services you have used, Or the remaining 12 month plan balance, whichever is the lesser of the two.";



///Pet 1

let PName = document.getElementById("PetName").value;
    
//G1
var ServUsed = document.getElementById("Used").value;
var WPBAL = document.getElementById("Plan").value;
let InstallPaid = document.getElementById("Paid").value;
let EndDate = document.getElementById("EndDate").value;



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

        var note = "- adv $"+CxlCost+" per Services for "+PName+" ";
        var Ending = " $"+CxlCost+" for "+PName;

    } else {
                ///WP BAL cxl

            var P1 = "Looking at "+PName+"'s plan, as $"+ServUsed+" of services were used and the plan costs $"+WPBAL+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid+" of installments paid, which leaves the cost to close today of $"+CxlCost2+". This can either be paid today or over the remaining "+q+" installments before the plan expires on "+EndDate+".";

            var note = "-adv $"+CxlCost2+" per WP BAL for "+PName+" ";      
            var Ending = " $"+CxlCost2+" for "+PName;           
    }       
 
///Pet 2

let PName2 = document.getElementById("PetName2").value;
    
//G1
var ServUsed2 = document.getElementById("Used2").value;
var WPBAL2 = document.getElementById("Plan2").value;
let InstallPaid2 = document.getElementById("Paid2").value;
let EndDate2 = document.getElementById("EndDate2").value;



let x2=(WPBAL2/12).toFixed(2);     //cost of each installment
let CxlCost3=(ServUsed2-InstallPaid2).toFixed(2); //cxlcost for services cxl
let y2=Math.trunc(CxlCost3/x2);  //Number of installments to call after = services cxl
let z2=Math.abs([x2*y2]-CxlCost3).toFixed(2); //remaining balance to pay when they call back after - services cxl
let CxlCost4=(WPBAL2-InstallPaid2).toFixed(2); // Cost to close per services cxl
let q2=Math.round(CxlCost4/x2); //number of remaining installments on wellness plan - WP Cxl

//make below if statement a var to use in multipet cxl - this is going to be fun =.=
if (parseInt(ServUsed2) < parseInt(WPBAL2)) {
           
            ///services used cxl

        var P2 = "Looking at "+PName2+"'s plan, as $"+ServUsed2+" of services were used and the plan costs $"+WPBAL2+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid2+" of installments paid, which leaves the cost to close today of $"+CxlCost3+". This can either be paid today or we can let each monthly installment of $"+x2+" lower the balance each month over time, I do recommend calling back after the next "+y2+" installments to pay the remaining $"+z2+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate2+".";

        var note2 = "- adv $"+CxlCost3+" per Services for "+PName2+" ";
        var Ending2 = " $"+CxlCost3+" for "+PName2;  

    } else {
                ///WP BAL cxl

            var P2 = "Looking at "+PName2+"'s plan, as $"+ServUsed2+" of services were used and the plan costs $"+WPBAL2+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid2+" of installments paid, which leaves the cost to close today of $"+CxlCost4+". This can either be paid today or over the remaining "+q2+" installments before the plan expires on "+EndDate2+".";

            var note2 = "-adv $"+CxlCost4+" per WP BAL for "+PName2+" ";
            var Ending2 = " $"+CxlCost4+" for "+PName2;               
    } 

///Pet 2

let PName3 = document.getElementById("PetName3").value;
    
//G1
var ServUsed3 = document.getElementById("Used3").value;
var WPBAL3 = document.getElementById("Plan3").value;
let InstallPaid3 = document.getElementById("Paid3").value;
let EndDate3 = document.getElementById("EndDate3").value;



let x3=(WPBAL3/12).toFixed(2);     //cost of each installment
let CxlCost5=(ServUsed3-InstallPaid3).toFixed(2); //cxlcost for services cxl
let y3=Math.trunc(CxlCost5/x3);  //Number of installments to call after = services cxl
let z3=Math.abs([x3*y3]-CxlCost5).toFixed(2); //remaining balance to pay when they call back after - services cxl
let CxlCost6=(WPBAL3-InstallPaid3).toFixed(2); // Cost to close per services cxl
let q3=Math.round(CxlCost6/x3); //number of remaining installments on wellness plan - WP Cxl

//make below if statement a var to use in multipet cxl - this is going to be fun =.=
if (parseInt(ServUsed3) < parseInt(WPBAL3)) {
           
            ///services used cxl

        var P3 = "Looking at "+PName3+"'s plan, as $"+ServUsed3+" of services were used and the plan costs $"+WPBAL3+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid3+" of installments paid, which leaves the cost to close today of $"+CxlCost5+". This can either be paid today or we can let each monthly installment of $"+x3+" lower the balance each month over time, I do recommend calling back after the next "+y3+" installments to pay the remaining $"+z3+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate3+".";

        var note3 = "- adv $"+CxlCost5+" per Services for "+PName3+" ";
        var Ending3 = " $"+CxlCost5+" for "+PName3;  

    } else {
                ///WP BAL cxl

            var P3 = "Looking at "+PName3+"'s plan, as $"+ServUsed3+" of services were used and the plan costs $"+WPBAL3+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid3+" of installments paid, which leaves the cost to close today of $"+CxlCost6+". This can either be paid today or over the remaining "+q3+" installments before the plan expires on "+EndDate3+".";

            var note3 = "-adv $"+CxlCost6+" per WP BAL for "+PName3+" ";
            var Ending3 = " $"+CxlCost6+" for "+PName3;               
    } 


document.getElementById("Pet1").innerHTML = P1;
document.getElementById("Pet2").innerHTML = P2;
document.getElementById("Pet3").innerHTML = P3;
document.getElementById("result").innerHTML = result;
document.getElementById("note2").innerHTML = note+note2+note3;
document.getElementById("Ending").innerHTML = "The "+Ending+", the"+Ending2+", and "+Ending3+" can either be processed today to close, or we can let the monthly installments lower the balance over time. Which option do you prefer?";

}