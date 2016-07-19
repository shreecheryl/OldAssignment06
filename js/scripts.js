var $ = function(id) {
        return document.getElementById(id);
}

$("fullName").focus();
        
    // Name validation
    
    $("fullName").addEventListener("blur", checkName, false);
    
    function checkName() {
        var name = $("fullName");
        var patt = /^[a-zA-Z\s]*$/;
        if (name.value == "") {
            name.nextElementSibling.firstChild.nodeValue = " This field is required";
            $("fullName").focus();
        }
        else if (!patt.test(name.value)) {
            $("addressType").removeEventListener("blur", checkAddressType, false);
            $("fullName").focus();
            name.nextElementSibling.firstChild.nodeValue = " Entry is invalid";
            name.value = "";
        }
        else {
            name.nextElementSibling.firstChild.nodeValue = "";
            $("addressType").addEventListener("blur", checkAddressType, false);
        }
    }
        
    // Address Type validation

    $("addressType").addEventListener("change", checkAddressType, false);
    
    function checkAddressType() {
        if ($("Select").selected) {
           $("addressType").focus();
           $("addressType").nextElementSibling.firstChild.nodeValue = " This field is required";  
        } else if (!$("Other").selected) {
           $("addressType").nextElementSibling.firstChild.nodeValue = "";
           $("address").focus();
        } else {
            $("addressType").nextElementSibling.firstChild.nodeValue = "";
        }
    }
        
    // "Other" Address Type
        
    $("addressType").addEventListener("change", displayOther, false);
        
    function displayOther() {
        if ($("Other").selected) {
            $("otherType").setAttribute("class", "form-group");
            $("other").addEventListener("blur", checkOther, false);
            $("other").focus();
        } else {
            $("otherType").setAttribute("class", "form-group hidden");
        }
    }
        
    function checkOther() {
        if ($("other").value == "") {
           $("other").focus();
           $("other").nextElementSibling.firstChild.nodeValue = " This field is required";  
        } else {
           $("other").nextElementSibling.firstChild.nodeValue = ""; 
        } 
    }
   
    // Validate Address, City
        
    $("address").addEventListener("blur", validateEntry, false);
    $("city").addEventListener("blur", validateEntry, false);

    function validateEntry() {
            if (this.value == "") {
                this.nextElementSibling.firstChild.nodeValue = " This field is required";
                this.focus();
            } else {
                this.nextElementSibling.firstChild.nodeValue = "";    
            }
        }
    
        
    // Validate State, Zip Code, Phone
    
    $("state").addEventListener("blur", function() { validateRegExp($("state"), /^[A-Z]{2}$/); }, false);
    $("zipCode").addEventListener("blur", function() { validateRegExp($("zipCode"), /(^\d{5}$)|(^\d{5}-\d{4}$)/); }, false);
    $("phoneNumber").addEventListener("blur", function() { validateRegExp($("phoneNumber"), /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/); }, false);

    function validateRegExp(obj, patt) {
            if (obj.value == "") {
                obj.nextElementSibling.firstChild.nodeValue = " This field is required";
                obj.focus();
            } else if (patt.test(obj.value) === false) {
                obj.nextElementSibling.firstChild.nodeValue = " Entry is invalid";
                obj.value = "";
                obj.focus();
            } else {
                obj.nextElementSibling.firstChild.nodeValue = "";    
            }
        }
        
    // Email validation
        
    $("emailAddress").addEventListener("blur", checkEmail, false);
        
    function checkEmail() {
        var patt = /\S+@\S+\.\S+/;
        if ($("emailAddress").value == "") {
           $("emailAddress").focus();
           $("emailAddress").nextElementSibling.firstChild.nodeValue = " This field is required";  
        } 
        else if (patt.test($("emailAddress").value) === false) {
           $("emailAddress").focus();
           $("emailAddress").nextElementSibling.firstChild.nodeValue = " Entry not valid";
           $("emailAddress").value = "";
        } else {
           $("emailAddress").nextElementSibling.firstChild.nodeValue = "";
           $("handTossed").focus();  
        }
    }

    // Dough validation and Choose Size Update
    
    $("dough").addEventListener("click", checkDough, false);

    function checkDough() {
        if ($("handTossed").checked === false && $("thinCrust").checked === false && $("newYorkStyle").checked === false && $("glutenFree").checked === false) {
           $("handTossed").focus();
           $("doughLabel").nextElementSibling.firstChild.nodeValue = " This field is required";  
        } else {
           $("doughLabel").nextElementSibling.firstChild.nodeValue = "";
           $("sizes").focus();
        }
    }
        
    var objHandTossed = {
        size0: ["Select", ""],
        size1: ["Small", 9.99],
        size2: ["Medium", 12.99],
        size3: ["Large", 14.99]   
    }
    
    var objThinCrust = {
        size0: ["Select", ""],
        size1: ["Medium", 11.99],
        size2: ["Large", 13.99]   
    }
    
    var objNewYorkStyle = {
        size0: ["Select", ""],
        size1: ["Large", 16.99],
        size2: ["Extra Large", 19.99]   
    }
    
    var objGlutenFree = {
        size0: ["Select", ""],
        size1: ["Small", 10.99],  
    }
                
    $("dough").addEventListener("click", loadSizeOptions, false);
        
    function loadSizeOptions() {
        $("sizes").innerHTML = "";
        if ($("handTossed").checked) {
            for (var x in objHandTossed){
              var opt = document.createElement('option');
              opt.value = objHandTossed[x][1];
              opt.innerHTML = objHandTossed[x][0] + " " + objHandTossed[x][1];
              $("sizes").appendChild(opt);
            }
        }
        else if ($("thinCrust").checked) {
            for (var x in objThinCrust){
              var opt = document.createElement('option');
              opt.value = objThinCrust[x][1];
              opt.innerHTML = objThinCrust[x][0] + " " + objThinCrust[x][1];
              $("sizes").appendChild(opt);
            }
        }
        else if ($("newYorkStyle").checked) {
            for (var x in objNewYorkStyle){
              var opt = document.createElement('option');
              opt.value = objNewYorkStyle[x][1];
              opt.innerHTML = objNewYorkStyle[x][0] + " " + objNewYorkStyle[x][1];
              $("sizes").appendChild(opt);
            }
        }
        else if ($("glutenFree").checked) {
            for (var x in objGlutenFree){
              var opt = document.createElement('option');
              opt.value = objGlutenFree[x][1];
              opt.innerHTML = objGlutenFree[x][0] + " " + objGlutenFree[x][1];
              $("sizes").appendChild(opt);
            }
        } 
    }
        
    $("placeHolder").addEventListener("click", chooseDough, false);
        
        function chooseDough() {
           if ($("doughLabel").nextElementSibling.firstChild.nodeValue != "") {
            $("doughLabel").nextElementSibling.firstChild.nodeValue = " This field is required";
           }
        }
        
    $("sizes").addEventListener("change", enableExtras, false);
        
        function enableExtras() {
            if (event.target.value != "") {
                $("doughLabel").nextElementSibling.firstChild.nodeValue = "";
                $("sizeLabel").nextElementSibling.firstChild.nodeValue = "";
                $("cheeseSelection").disabled = false;
                $("sauceSelection").disabled = false;
                var toppings = document.getElementsByName("topping");
                for (var x in toppings) {
                    toppings[x]["disabled"] = false;
                }
            } else {
                $("sizeLabel").nextElementSibling.firstChild.nodeValue = " Please select a size";
                $("cheeseSelection").disabled = true;
                $("sauceSelection").disabled = true;
                var toppings = document.getElementsByName("topping");
                for (var x in toppings) {
                    toppings[x]["disabled"] = true;
                }
            }
        }
        
    $("costs").addEventListener("change", calculateTotal, false);
        
        function calculateTotal() {
            var sizeCost = $("sizes").value;
            var cheeseCost = $("cheeseSelection").value;
            var sauceCost = $("sauceSelection").value;
            var toppings = document.getElementsByName("topping");
            var selectedToppings = [];
            for (var i = 0; i < toppings.length; i++) {
                if (toppings[i].checked) {
                    selectedToppings.push(toppings[i]);
                    }
            }
            var toppingsCost = selectedToppings.length * .99;
            $("total").value = "$" + eval(parseFloat(sizeCost) + parseFloat(cheeseCost) + parseFloat(sauceCost) + parseFloat(toppingsCost));
        }
        
    $("finished").addEventListener("click", confirmOrder, false);
        
        function confirmOrder() {
            var doneBuilding = window.confirm("Are you sure you are done building your pizza?");
            if (doneBuilding === true) {
                $("billingInfo").setAttribute("class", "form-group");
                $("nameBilling").focus();
            } else {
                $("handTossed").focus();
            }
        }
        
    //  Billing Information Same
        
    $("billingInfoSame").addEventListener("click", fillBillingInfo, false);
        
        function fillBillingInfo() {
            if ($("billingInfoSame").checked) {
                $("nameBilling").value = $("fullName").value;
                $("nameBilling").nextElementSibling.firstChild.nodeValue = "";
                $("addressBilling").value = $("address").value;
                $("addressBilling").nextElementSibling.firstChild.nodeValue = "";
                $("addressNumberBilling").value = $("addressNumber").value;
                $("cityBilling").value = $("city").value;
                $("cityBilling").nextElementSibling.firstChild.nodeValue = "";
                $("stateBilling").value = $("state").value;
                $("stateBilling").nextElementSibling.firstChild.nodeValue = "";
                $("zipCodeBilling").value = $("zipCode").value;
                $("zipCodeBilling").nextElementSibling.firstChild.nodeValue = "";
            } else {
                $("nameBilling").value = "";
                $("addressBilling").value = "";
                $("addressNumberBilling").value = "";
                $("cityBilling").value = "";
                $("stateBilling").value = "";
                $("zipCodeBilling").value = "";
            }
        }
        
    // Validate Billing Address, City
        
    $("addressBilling").addEventListener("blur", validateEntry, false);
    $("cityBilling").addEventListener("blur", validateEntry, false);    
    
    
    //  Validate Billing Name, Billing State, Billing Zip Code
    
    $("nameBilling").addEventListener("blur", function() { validateRegExp($("nameBilling"), /^[a-zA-Z\s]*$/); }, false);    
    $("stateBilling").addEventListener("blur", function() { validateRegExp($("stateBilling"), /^[A-Z]{2}$/); }, false);
    $("zipCodeBilling").addEventListener("blur", function() { validateRegExp($("zipCodeBilling"), /(^\d{5}$)|(^\d{5}-\d{4}$)/); }, false);
        
    // Validate Credit Card Number
        
//    $("ccNumber").addEventListener("blur", checkCardNumber, false);
//            
//        function checkCardNumber() {
//            this.value = this.value.replace(/\s/g, "");
//            this.value = this.value.replace(/-/g, "");
//            // accept only digits
//	        if (/[^0-9]+/.test(this.value)) {
//                this.value = "";
//                this.nextElementSibling.firstChild.nodeValue = " Entry is invalid";
//                this.focus();
//            }
//            else if (this.value.charAt(0) == 3 && this.value.length != 13) {
//                this.value = "";
//                this.nextElementSibling.firstChild.nodeValue = " Entry is invalid";
//                this.focus();
//            }
//            else if (this.value.charAt(0) == 4 && this.value.length != 13 && this.value.length != 16) {
//                this.value = "";
//                this.nextElementSibling.firstChild.nodeValue = " Entry is invalid";
//                this.focus();
//            }
//            else if (this.value.charAt(0) == 5 && this.value.length != 16) {
//                this.value = "";
//                this.nextElementSibling.firstChild.nodeValue = " Entry is invalid";
//                this.focus();
//            }
//            else if (this.value.charAt(0) == 5 && (this.value.charAt(1) == 0 || this.value.charAt(1) > 5)) {
//                this.value = "";
//                this.nextElementSibling.firstChild.nodeValue = " Entry is invalid";
//                this.focus();
//            }
//	        else {
//            this.value = this.value.replace(/\D/g, "");
//	        var nCheck = 0, nDigit = 0, isEven = false;
//
//	        for (var n = this.value.length - 1; n >= 0; n--) {
//		          var cDigit = this.value.charAt(n),
//			      nDigit = parseInt(cDigit, 10);
//
//		    if (isEven) {
//            if ((nDigit *= 2) > 9) {
//                nDigit -= 9;
//                }
//            }
//
//            nCheck += nDigit;
//		    isEven = !isEven;
//	       }
//
//	       if ((nCheck % 10) != 0) {
//              this.nextElementSibling.firstChild.nodeValue = " Entry is invalid";
//              this.value = "";
//              this.focus(); 
//           } else {
//              if (this.value.charAt(0) == 3) {
//              this.nextElementSibling.firstChild.nodeValue = " American Express";
//              } else if (this.value.charAt(0) == 4) {
//              this.nextElementSibling.firstChild.nodeValue = " VISA";
//              } else if (this.value.charAt(0) == 5) {
//              this.nextElementSibling.firstChild.nodeValue = " MasterCard";
//              }
//              this.nextElementSibling.focus();
//             }
//            }
//           }
        
    // Validate Expiration Info
        
        $("ccYear").addEventListener("change", checkExpDate, false);
        $("ccMonth").addEventListener("change", checkExpDate, false);
        
        function checkExpDate() {
            var today = new Date();
            currentMonth = today.getMonth();
            currentYear = today.getFullYear();
            if ($("ccYear").value == currentYear && $("ccMonth").value >= currentMonth) {
                $("ccMonth").nextElementSibling.firstChild.nodeValue = "";
                $("ccYear").nextElementSibling.firstChild.nodeValue = "";
                $("ccCVC").disabled = false;
                $("ccCVC").focus();
            } else if ($("ccYear").value == currentYear && $("ccMonth").value < currentMonth) {
                $("ccMonth").nextElementSibling.firstChild.nodeValue = " Credit card has expired";
                $("ccYear").nextElementSibling.firstChild.nodeValue = " *";
                $("ccCVC").disabled = true;
                $("ccMonth").focus();
            } else if ($("ccYear").value > currentYear && $("ccMonth").value != "Select") {
                $("ccMonth").nextElementSibling.firstChild.nodeValue = "";
                $("ccYear").nextElementSibling.firstChild.nodeValue = "";
                $("ccCVC").disabled = false;
                $("ccCVC").focus();
            } else if ($("ccMonth").value == "Select" || $("ccYear").value == "Select") {
                $("ccMonth").nextElementSibling.firstChild.nodeValue = " *";
                $("ccYear").nextElementSibling.firstChild.nodeValue = " *";
                $("ccCVC").disabled = true;
                $("ccMonth").focus();
            } else {
                $("ccCVC").disabled = true;
                $("ccMonth").focus();
            }
        }
        
    // Validate CVC Code
        
        $("ccCVC").addEventListener("blur", function() { validateRegExp($("ccCVC"), /^[0-9]{3,4}$/); }, false);