function lineObject_ToString(lineObj)
{
    var string = lineObject_GetShortID(lineObj);
    string += " ";
    string += lineObj["lineFrom"];
    if (lineObj["isCircular"])
    {
        // x2B8C
        //string += " ⮌ ";
        //string += " &#x2B8C; ";
        string += " &#x21BA; ";
    }
    else
    {
        // x2B62
        //string += " ⭢ ";
        //string += " &#x2B62; ";
        string += " &#x2192; ";
    }
    //tableHTML += " →⮌⭢ &#2192; ";
    string += lineObj["lineTo"];

    return string;
}

function lineObject_GetShortID(lineObj)
{
    var string = "";
    //output += JSON.stringify(rawDB[i]);
    string += lineObj["lineName"];
    string += " (";
    var lineDisplayType = "";
    switch (lineObj["lineType"])
    {
        case "kmb":
            lineDisplayType = "九巴";
            break;
        case "gmb":
            lineDisplayType = "<font color='green'>綠巴</font>";
            break;
        case "ch_bus":
            lineDisplayType = "過海巴士";
            break;
        case "walk":
            lineDisplayType = "步行";
            break;
        default:
            // Obsolete, undesired, but tolerated.
            lineDisplayType = lineObj["lineType"];
            break;
    }
    string += lineDisplayType;
    string += ")";

    return string;
}

function lineObject_GetFullInternalID(lineObj)
{
    return lineObj["lineName"] + "_" + lineObj["lineType"];
}

function lineObject_IsWalking(lineObj)
{
    return lineObj["lineType"] == "walk";
}