
import _ from 'lodash';
import tryUntil from './try-until';

export default function findAgency (DB, image, cb) {
    /*var find = function(str) {
        var i = 0;
        var tab = [];
        console.log("DB");
        console.log(DB);
        while (i < DB.lenght) {
            console.log(DB[i].name + " vs " + str);
            if (DB[i].name === str) {
                tab.push(DB[i]);
            }
            i += 1;
        }
        return tab;
    }

    var tabAgencyName = [];
    if (image !== null && image.agencyName !== null) {
        var name = image.agencyName;
        tabAgencyName = find(name);
    }
    var tabCredit = [];
    if (image !== null && image.credit !== null) {
        var name = image.credit;
        tabCredit = find(name);
    }
    var i = 0;
    while (i < tabAgencyName.lenght) {
        var index = -1;
        var u = 0;
        while (u < tabCredit.lenght) {
            if (tabCredit[u].id === tabAgencyName[u].id) {
                index = u;
                break;
            }
            u += 1;
        }
        if (index > -1) {
            tabAgencyName.splice(i, 1);
        } else {
            i += 1;
        }
    }

    var tabUnknown = find('Unknown');*/

    DB.findAgency(function(elt) {
        return elt.name === image.agencyName || elt.name === image.credit || elt.name === 'Unknown';
    }, function(err, res) {
        var tab = [];
        if (err === null) {
            tab = [res];
        }
        tryUntil(tab, cb);
    });

    /*console.log("############");
    console.log(image);
    console.log(tabAgencyName);
    console.log(tabCredit);
    console.log(tabUnknown);*/

    //tryUntil(tabAgencyName + tabCredit + tabUnknown, cb);
}
