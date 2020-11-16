$(document).ready(
    function () {
        // event handlers
        $("#tabs a").click(showTab);



        //I realized I dont need these .changes, it updates once different tab is clicked
        //good practice though. I had all those functions but deleted them.

        // $("input[name=toppings]").change(updateAddOns);
        // $("input[name=meats]").change(updateAddOns);
        // $("input[name=contact]").change(updateContactInfo);
        // $("input[name=size]").change(updateRadioButtons);
        // $("input[name=crust]").change(updateRadioButtons);
        // $("input[name=address]").change(updateContactInfo);
        $("form").submit(placeOrder);





        // other functions
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");


            var subTotal = 0;


            //get pizza size and crust of default selected radio button and put to screen
            var pizzaSize = $("input[name=size]:checked").val() + "<br>";

            //get price for selected pizza size
            var selectedPizzaPrice = $("input[name=size]:checked");


            //Note for Stacy* Had a hard time figuring out how to add price for the size to
            //the subtotal without adding a duplicate selector. What would be the better
            //way of doing it?

            subTotal += selectedPizzaPrice.data("size-price");
            $("#outputPizzaSize").html(pizzaSize);
            var pizzaCrust = $("input[name=crust]:checked").val() + "<br>";
            $("#outputPizzaCrust").html(pizzaCrust);



            //get all toppings values
            var toppingsList = "";
            var checkedToppings = $("input[name=toppings]:checked");
            checkedToppings.each(function () {
                subTotal += $(this).data("toppings-price");
                toppingsList += $(this).val();
                toppingsList += "<br>";

            });


            //get all meats values
            var meatList = "";
            var checkedMeats = $("input[name=meats]:checked");
            checkedMeats.each(function () {
                subTotal += $(this).data("meats-price");
                meatList += $(this).val();
                meatList += "<br>";

            });
            //put toppings values on screen
            $("#outputToppings").html(toppingsList);
            //put meats values on screen
            $("#outputMeats").html(meatList);




            //get contact information values
            //get full name
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var fullName = firstName + " " + lastName + "<br>";
            //get phone number
            var phoneNumber = $("#phoneNumber").val();
            //get address
            var street = $("#street").val() + "<br>";
            var city = $("#city").val() + "<br>";
            //put full name on screen
            $("#outputName").html(fullName);
            //put phone number on screen
            $("#outputPhone").text(phoneNumber);
            //put address on screen
            $("#outputStreet").html(street);
            $("#outputCity").html(city);



            //get all prices

            var tax = subTotal * .051;
            var deliveryFee = 2;
            var grandTotal = subTotal + tax + deliveryFee;

            //put prices on screen
            $("#outputSubtotal").text("$" + subTotal.toFixed(2));
            $("#outputTax").text("$" + tax.toFixed(2));
            $("#outputDeliveryFee").text("$" + deliveryFee.toFixed(2));
            $("#outputGrandTotal").text("$" + grandTotal.toFixed(2));






        }

        function placeOrder(event){
            event.preventDefault();

            $("#finalMessage").html("Thank you for your order. Have a nice day!")

            //Side note* Tried to make fields required with out the validation steps,
            //but with the form submit. I thought it would require to fill it out but didnt.
            // Because we didnt have to validate decided to leave out on this one.

            //Really happy how it turned out for the most part.

        }

    });