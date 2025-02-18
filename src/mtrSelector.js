/**
 * A class for convenience. Give in two correct dropdowns, and this will correctly output what the user has chosen conveniently.
 */
var MTRSelector = /** @class */ (function () {
    function MTRSelector(lineDrop, stationDrop) {
        this.lineDropdown = lineDrop;
        this.stationDropdown = stationDrop;
    }
    MTRSelector.prototype.initializeDropdown = function () {
        var resultingLineDropdown = "<option value='0'>---</option>";
        resultingLineDropdown += "<option value='erl'>東鐵線</option>";
        resultingLineDropdown += "<option value='mos'>馬鞍山線</option>";
        resultingLineDropdown += "<option value='wrl'>西鐵線</option>";
        resultingLineDropdown += "<option value='tmle'>屯馬線 (東)</option>";
        resultingLineDropdown += "<option value='tmlw'>屯馬線 (西)</option>";
        resultingLineDropdown += "<option value='ktl'>觀塘線</option>";
        resultingLineDropdown += "<option value='twl'>荃灣線</option>";
        resultingLineDropdown += "<option value='ill'>港島線</option>";
        resultingLineDropdown += "<option value='tcl'>東涌線</option>";
        resultingLineDropdown += "<option value='tko'>將軍澳線</option>";
        resultingLineDropdown += "<option value='seil'>南港島線 (東)</option>";
        resultingLineDropdown += "<option value='swil'>南港島線 (西)</option>";
        this.lineDropdown.innerHTML = resultingLineDropdown;
    };
    MTRSelector.prototype.calculateSelectedStation = function () {
        var allWaypoints = obtainAllMTRWaypoints();
        var selectedStationID = this.stationDropdown.selectedOptions[0].value;
        //console.log(selectedStationID);
        for (var i = 0; i < allWaypoints.length; i++) {
            if (allWaypoints[i].getID() == selectedStationID) {
                //console.log("returning " + allWaypoints[i]);
                return allWaypoints[i];
            }
        }
        //console.log("No return")
        return null;
    };
    MTRSelector.prototype.getSelectionID = function () {
        // Supposedly only 1 item is selectable.
        var lineID = this.lineDropdown.selectedOptions[0].value;
        var stationID = this.stationDropdown.selectedOptions[0].value;
        return lineID + "_" + stationID;
    };
    /**
     * Returns whether the current selection is valid: the default "---" option is not chosen.
     */
    MTRSelector.prototype.selectionIsValid = function () {
        // Selection is valid when the default "0" option is not chosen.
        return this.stationDropdown.selectedOptions[0].value.indexOf("0") == -1;
    };
    /**
     * Checks the value of the fromDropdown, and populate the toDropdown accordingly.
     */
    MTRSelector.prototype.updateDropdown = function () {
        // First insert a default option.
        var resultingDropdown = "<option value='0'>---</option>";
        // Then obtain the correct list of stations.
        //console.log(this.lineDropdown.selectedOptions[0].value)
        switch (this.lineDropdown.selectedOptions[0].value) {
            case "erl":
                this.currentlyLoadedSelections = MTR_ERL_ALL;
                break;
            case "mos":
                this.currentlyLoadedSelections = MTR_MOS_ALL;
                break;
            case "wrl":
                this.currentlyLoadedSelections = MTR_TMLW_ALL;
                break;
            case "tmle":
                this.currentlyLoadedSelections = MTR_TMLE_ALL;
                break;
            case "tmlw":
                this.currentlyLoadedSelections = MTR_TMLW_ALL;
                break;
            case "ktl":
                this.currentlyLoadedSelections = MTR_KTL_ALL;
                break;
            case "twl":
                this.currentlyLoadedSelections = MTR_TWL_ALL;
                break;
            case "ill":
                this.currentlyLoadedSelections = MTR_ILL_ALL;
                break;
            case "tcl":
                this.currentlyLoadedSelections = MTR_TCL_ALL;
                break;
            case "tko":
                this.currentlyLoadedSelections = MTR_TKO_ALL;
                break;
            case "seil":
                this.currentlyLoadedSelections = MTR_SEIL_ALL;
                break;
            case "swil":
                this.currentlyLoadedSelections = MTR_SWIL_ALL;
                break;
            default:
                //console.log("default")
                this.currentlyLoadedSelections = [];
                break;
        }
        // Finally populate the dropdown list
        for (var i = 0; i < this.currentlyLoadedSelections.length; i++) {
            var station = this.currentlyLoadedSelections[i];
            var optionString = "<option value='" + station.getID() + "'>" + station.getName() + "</option>";
            resultingDropdown += optionString;
        }
        this.stationDropdown.innerHTML = resultingDropdown;
        return;
    };
    return MTRSelector;
}());
