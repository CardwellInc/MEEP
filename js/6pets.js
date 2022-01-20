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

///Pet 3

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

///Pet 4

let PName4 = document.getElementById("PetName4").value;
    
//G1
var ServUsed4 = document.getElementById("Used4").value;
var WPBAL4 = document.getElementById("Plan4").value;
let InstallPaid4 = document.getElementById("Paid4").value;
let EndDate4 = document.getElementById("EndDate4").value;



let x4=(WPBAL4/12).toFixed(2);     //cost of each installment
let CxlCost7=(ServUsed4-InstallPaid4).toFixed(2); //cxlcost for services cxl
let y4=Math.trunc(CxlCost7/x4);  //Number of installments to call after = services cxl
let z4=Math.abs([x4*y4]-CxlCost7).toFixed(2); //remaining balance to pay when they call back after - services cxl
let CxlCost8=(WPBAL4-InstallPaid4).toFixed(2); // Cost to close per services cxl
let q4=Math.round(CxlCost8/x4); //number of remaining installments on wellness plan - WP Cxl

//make below if statement a var to use in multipet cxl - this is going to be fun =.=
if (parseInt(ServUsed4) < parseInt(WPBAL4)) {
           
            ///services used cxl

        var P4 = "Looking at "+PName4+"'s plan, as $"+ServUsed4+" of services were used and the plan costs $"+WPBAL4+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid4+" of installments paid, which leaves the cost to close today of $"+CxlCost7+". This can either be paid today or we can let each monthly installment of $"+x4+" lower the balance each month over time, I do recommend calling back after the next "+y4+" installments to pay the remaining $"+z4+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate4+".";

        var note4 = "- adv $"+CxlCost7+" per Services for "+PName4+" ";
        var Ending4 = " $"+CxlCost7+" for "+PName4;  

    } else {
                ///WP BAL cxl

            var P4 = "Looking at "+PName4+"'s plan, as $"+ServUsed4+" of services were used and the plan costs $"+WPBAL4+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid4+" of installments paid, which leaves the cost to close today of $"+CxlCost8+". This can either be paid today or over the remaining "+q4+" installments before the plan expires on "+EndDate4+".";

            var note4 = "-adv $"+CxlCost8+" per WP BAL for "+PName4+" ";
            var Ending4 = " $"+CxlCost8+" for "+PName4;               
    } 

///Pet 5

let PName5 = document.getElementById("PetName5").value;
    
//G1
var ServUsed5 = document.getElementById("Used5").value;
var WPBAL5 = document.getElementById("Plan5").value;
let InstallPaid5 = document.getElementById("Paid5").value;
let EndDate5 = document.getElementById("EndDate5").value;



let x5=(WPBAL5/12).toFixed(2);     //cost of each installment
let CxlCost9=(ServUsed5-InstallPaid5).toFixed(2); //cxlcost for services cxl
let y5=Math.trunc(CxlCost9/x5);  //Number of installments to call after = services cxl
let z5=Math.abs([x5*y5]-CxlCost9).toFixed(2); //remaining balance to pay when they call back after - services cxl
let CxlCostX=(WPBAL5-InstallPaid5).toFixed(2); // Cost to close per services cxl
let q5=Math.round(CxlCostX/x5); //number of remaining installments on wellness plan - WP Cxl

//make below if statement a var to use in multipet cxl - this is going to be fun =.=
if (parseInt(ServUsed5) < parseInt(WPBAL5)) {
           
            ///services used cxl

        var P5 = "Looking at "+PName5+"'s plan, as $"+ServUsed5+" of services were used and the plan costs $"+WPBAL5+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid5+" of installments paid, which leaves the cost to close today of $"+CxlCost9+". This can either be paid today or we can let each monthly installment of $"+x5+" lower the balance each month over time, I do recommend calling back after the next "+y5+" installments to pay the remaining $"+z5+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate5+".";

        var note5 = "- adv $"+CxlCost9+" per Services for "+PName5+" ";
        var Ending5 = " $"+CxlCost9+" for "+PName5;  

    } else {
                ///WP BAL cxl

            var P5 = "Looking at "+PName5+"'s plan, as $"+ServUsed5+" of services were used and the plan costs $"+WPBAL5+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid5+" of installments paid, which leaves the cost to close today of $"+CxlCostX+". This can either be paid today or over the remaining "+q5+" installments before the plan expires on "+EndDate5+".";

            var note5 = "-adv $"+CxlCostX+" per WP BAL for "+PName5+" ";
            var Ending5 = " $"+CxlCostX+" for "+PName5;               
    } 


///Pet 6

let PName6 = document.getElementById("PetName6").value;
    
//G1
var ServUsed6 = document.getElementById("Used6").value;
var WPBAL6 = document.getElementById("Plan6").value;
let InstallPaid6 = document.getElementById("Paid6").value;
let EndDate6 = document.getElementById("EndDate6").value;



let x6=(WPBAL6/12).toFixed(2);     //cost of each installment
let CxlCostXI=(ServUsed6-InstallPaid6).toFixed(2); //cxlcost for services cxl
let y6=Math.trunc(CxlCostXI/x6);  //Number of installments to call after = services cxl
let z6=Math.abs([x6*y6]-CxlCostXI).toFixed(2); //remaining balance to pay when they call back after - services cxl
let CxlCostXII=(WPBAL6-InstallPaid6).toFixed(2); // Cost to close per services cxl
let q6=Math.round(CxlCostXII/x6); //number of remaining installments on wellness plan - WP Cxl

//make below if statement a var to use in multipet cxl - this is going to be fun =.=
if (parseInt(ServUsed6) < parseInt(WPBAL6)) {
           
            ///services used cxl

        var P6 = "Looking at "+PName6+"'s plan, as $"+ServUsed6+" of services were used and the plan costs $"+WPBAL6+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid+" of installments paid, which leaves the cost to close today of $"+CxlCostXI+". This can either be paid today or we can let each monthly installment of $"+x6+" lower the balance each month over time, I do recommend calling back after the next "+y6+" installments to pay the remaining $"+z6+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate6+".";

        var note6 = "- adv $"+CxlCostXI+" per Services for "+PName6+" ";
        var Ending6 = " $"+CxlCostXI+" for "+PName6;  

    } else {
                ///WP BAL cxl

            var P6 = "Looking at "+PName6+"'s plan, as $"+ServUsed6+" of services were used and the plan costs $"+WPBAL6+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid6+" of installments paid, which leaves the cost to close today of $"+CxlCostXII+". This can either be paid today or over the remaining "+q6+" installments before the plan expires on "+EndDate6+".";

            var note6 = "-adv $"+CxlCostXII+" per WP BAL for "+PName6+" ";
            var Ending6 = " $"+CxlCostXII+" for "+PName6;               
    } 


document.getElementById("Pet1").innerHTML = P1;
document.getElementById("Pet2").innerHTML = P2;
document.getElementById("Pet3").innerHTML = P3;
document.getElementById("Pet4").innerHTML = P4;
document.getElementById("Pet5").innerHTML = P5;
document.getElementById("Pet6").innerHTML = P6;
document.getElementById("result").innerHTML = result;
document.getElementById("note2").innerHTML = note+note2+note3+note4+note5+note6;
document.getElementById("Ending").innerHTML = "The "+Ending+", the"+Ending2+", the"+Ending3+", the"+Ending4+", and "+Ending5+" can either be processed today to close, or we can let the monthly installments lower the balance over time. Which option do you prefer?";

}