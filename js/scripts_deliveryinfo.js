var $ = function(id) {
        return document.getElementById(id);
}

//$("fullName").focus();
        
    // Name validation
    
//    $("fullName").addEventListener("blur", checkName, false);
//    
//    function checkName() {
//        var name = $("fullName");
//        var patt = /[0-9]/;
//        if (name.value == "") {
//            name.nextElementSibling.firstChild.nodeValue = " This field is required";
//            $("fullName").focus();
//        }
//        else if (patt.test(name.value)) {
//            $("addressType").removeEventListener("blur", checkAddressType, false);
//            $("fullName").focus();
//            name.nextElementSibling.firstChild.nodeValue = " Entry is invalid";
//            name.value = "";
//        }
//        else {
//            name.nextElementSibling.firstChild.nodeValue = "";
//            $("addressType").addEventListener("blur", checkAddressType, false);
//        }
//    }
//        
//    // Address Type validation
//    
//    function checkAddressType() {
//        if ($("Select").selected) {
//           $("addressType").focus();
//           $("addressType").nextElementSibling.firstChild.nodeValue = " This field is required";  
//        } else {
//           $("addressType").nextElementSibling.firstChild.nodeValue = "";
//        }
//    }
//        
//    // "Other" Address Type
//        
//    $("addressType").addEventListener("mouseout", displayOther, false);
//        
//    function displayOther() {
//        if ($("Other").selected) {
//            $("otherType").setAttribute("class", "form-group");
//            $("other").addEventListener("blur", checkOther, false);
//            $("other").focus();
//        } else {
//            $("otherType").setAttribute("class", "form-group hidden");
//        }
//    }
//        
//    function checkOther() {
//        if ($("other").value == "") {
//           $("other").focus();
//           $("other").nextElementSibling.firstChild.nodeValue = " This field is required";  
//        } else {
//           $("other").nextElementSibling.firstChild.nodeValue = ""; 
//        } 
//    }
//        
//    
//        
//    // Address validation
//        
//    $("address").addEventListener("blur", checkAddress, false);
//        
//    function checkAddress() {
//        if ($("address").value == "") {
//           $("address").focus();
//           $("address").nextElementSibling.firstChild.nodeValue = " This field is required";  
//        } else {
//           $("address").nextElementSibling.firstChild.nodeValue = ""; 
//        } 
//    }
//    
//    // City validation
//        
//    $("city").addEventListener("blur", checkCity, false);
//        
//    function checkCity() {
//        if ($("city").value == "") {
//           $("city").focus();
//           $("city").nextElementSibling.firstChild.nodeValue = " This field is required";  
//        } else {
//           $("city").nextElementSibling.firstChild.nodeValue = ""; 
//        } 
//    }
//        
//    // State validation
//    
//    $("state").addEventListener("blur", checkState, false);
//        
//    function checkState() {
//        var patt = /[A-Z][A-Z]/
//        if ($("state").value == "") {
//           $("state").focus();
//           $("state").nextElementSibling.firstChild.nodeValue = " This field is required";  
//        } else if (patt.test($("state").value) === false || $("state").value.length != 2 ) {
//           $("state").focus();
//           $("state").nextElementSibling.firstChild.nodeValue = " Entry not valid";
//           $("state").value = "";
//        } else {
//           $("state").nextElementSibling.firstChild.nodeValue = ""; 
//        }
//    }
//        
//    // Zip Code validation
//        
//    $("zipCode").addEventListener("blur", checkZip, false);
//        
//    function checkZip() {
//        var patt = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
//        if ($("zipCode").value == "") {
//           $("zipCode").focus();
//           $("zipCode").nextElementSibling.firstChild.nodeValue = " This field is required";  
//        } else if (patt.test($("zipCode").value) === false) {
//           $("zipCode").focus();
//           $("zipCode").nextElementSibling.firstChild.nodeValue = " Entry not valid";
//           $("zipCode").value = "";
//        } else {
//           $("zipCode").nextElementSibling.firstChild.nodeValue = ""; 
//        }
//    }
//        
//    // Phone validation
//        
//    $("phoneNumber").addEventListener("blur", checkPhone, false);
//        
//    function checkPhone() {
//        var patt = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
//        if ($("phoneNumber").value == "") {
//           $("phoneNumber").focus();
//           $("phoneNumber").nextElementSibling.firstChild.nodeValue = " This field is required";  
//        } else if (patt.test($("phoneNumber").value) === false) {
//           $("phoneNumber").focus();
//           $("phoneNumber").nextElementSibling.firstChild.nodeValue = " Entry not valid";
//           $("phoneNumber").value = "";
//        } else {
//           $("phoneNumber").nextElementSibling.firstChild.nodeValue = ""; 
//        }
//    }
//        
//    // Email validation
//        
//    $("emailAddress").addEventListener("blur", checkEmail, false);
//        
//    function checkEmail() {
//        var patt = /\S+@\S+\.\S+/;
//        if ($("emailAddress").value == "") {
//           $("emailAddress").focus();
//           $("emailAddress").nextElementSibling.firstChild.nodeValue = " This field is required";  
//        } 
//        else if (patt.test($("emailAddress").value) === false) {
//           $("emailAddress").focus();
//           $("emailAddress").nextElementSibling.firstChild.nodeValue = " Entry not valid";
//           $("emailAddress").value = "";
//        } else {
//           $("emailAddress").nextElementSibling.firstChild.nodeValue = ""; 
//        }
//    }