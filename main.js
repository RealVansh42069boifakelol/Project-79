var menuListArray = ["Chicken tandoori Pizza" , "Deluxe Viggie Pizza" , "Paneer Ticka Pizza" , "Veg Extravangaza Pizza","Veg Marhgerita Pizza","Veg Supreme Pizza"];

function showMenu() 
{
    document.getElementById("displayMenu").style.display = "block";
    console.log(menuListArray);
}

function hideDisplayMenu() 
{
  document.getElementById("displayMenu").style.display = "none";
}

function addItems() 
{

     var items = document.getElementById("addItemsdiv").textContent;
     document.getElementById("addItemsdiv").style.display = "list-item";
     console.log(items);

}

function hidePizzaimg() 
{
    document.getElementById("addItemsdiv").style.display = "none";
}