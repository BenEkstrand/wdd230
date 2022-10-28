   function calculatePayment() {


        var Amount = parseFloat(document.getElementById("Amount").value);
        var Term = parseFloat(document.getElementById("Term").value);
        var APR = parseFloat(document.getElementById("APR").value);
        
	    var percentageRate = APR / 1200;
        var lengthOfLoan = 12 * Term;
        var monthlyPayment = (Amount * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
        monthlyPayment = monthlyPayment.toFixed(2);


        document.getElementById("payment").value = monthlyPayment;


    }// JavaScript Document