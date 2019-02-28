"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Ethan Gruenemeier
   Date: 2.27.19
   
   Filename: tc_cart.js
	
*/
// This var is set to 0;
var orderTotal = 0;
// this var is set to a string that is an HTML table. 
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";
// This is a for loop that starts at 0 and stops when it reaches three while iterating by one evreytime
for (var i = 0; i <= 3; i++) {
    // This adds the table data cell with the image of the item they have in there cart
    cartHTML += `<tr> <td><img src='tc_${item[i]}.png' alt='${item[i]}' /></td>`;
    // this adds another cell row that contains the description for evrey item thats in the cart.
    cartHTML += `<td>${itemDescription[i]}</td> <td>$${itemPrice[i]}</td> <td>${itemQty[i]}</td>`;
    // this establishes a var and sets it equal to the price of that item and multiplies it by the quantity.
    var itemCost = itemPrice[i] * itemQty[i];
    // this adds another data row for the cost of the item 
    cartHTML += `<td>$${itemCost}</td></tr>`;
    // this sets the total equal to the total plus the item cost.
    orderTotal += itemCost;
}
// This adds the closing part of the table to the HTML to display the order total.
cartHTML += `<tr> <td colspan='4'>Subtotal</td> <td>$${orderTotal}</td> </tr> </table>`;
// This sets the cartHTML var to the innerHTML of the ID created in the HTML.
document.getElementById("cart").innerHTML = cartHTML;