function myfunction(){
    let text;
    let name = prompt("Please enter your name ","0");
    if (name != null||name != "")
    {
        let h = prompt("Please enter your height in inches", "0");
        var height = h / 12;

        

    }else{
            text = "Invalid input";
        }
    if(h!=null||h!="")
    {
        let w = prompt("Please enter your weight in kg", "0");
        var weight = w * 2.205;
    }else{
        text = "Invalid input";
    }

        text = "Name: " + name;
        text = "Height: " + height + "feet";
        text = "Weight: " + weight + "kg";

    }




