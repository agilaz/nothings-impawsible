//console.log('This would be the main JS file.');
//filler
/*var mongodb = require('mongodb');
var assert = require('assert');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://198.74.58.213:27017/courseInfo';

var jsonArray;
var findData = function(db, callback) {
   var cursor = db.collection('courses').find( );
   cursor.each(function(err, doc) {
      //assert.equal(err, null);
      if (doc != null) {
         jsonArray.push(doc);
      } else {
         callback();
      }
   });
};
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      //HURRAY!! We are connected. :)
      //chrome.extension.getBackgroundPage().console.log('Connection established to', url);
      // do some work here with the database.
      //insertDoc(db, JSON.parse(text), function() { db.close();});
      findData(db, function() {db.close();setProperties();});
      //Close connection
      //db.close();
    }
  });*/
var text = '[{"subject":"AAS","courseNumber":"270","name":"AAS 270 - TOPICS IN AFRICAN AMERICAN STUDIES","classNum":"42713","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Leigh-Anne Francis","roomNum":"Education Building 306","attributes":["GEN","BSC"]},{"subject":"AAS","courseNumber":"376","name":"AAS 376 - AFRICAN AMERICAN WOMENS HISTORY","classNum":"40427","sectionNum":"02-LWD 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Leigh-Anne Francis","roomNum":"Social Sciences Building 325","attributes":["GEN","SCH"]},{"subject":"AAS","courseNumber":"378","name":"AAS 378 - AFRICAN AMERICAN LITERATURE 1920-1980","classNum":"42135","sectionNum":"02-LWD 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Piper Williams","roomNum":"Social Sciences Building 226","attributes":["VPA"]},{"subject":"AAS","courseNumber":"180","name":"AAS 180 - AFRICAN AMERICAN HISTORY 1865 TO PRESENT","classNum":"42133","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Mekala Audain","roomNum":"Social Sciences Building 227","attributes":["SCH"]},{"subject":"ANT","courseNumber":"110","name":"ANT 110 - INTRO TO CULTURAL ANTHROPOLOGY","classNum":"40431","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Jeffrey Ratcliffe","roomNum":"Social Sciences Building 321","attributes":["GLO","BSC"]},{"subject":"ANT","courseNumber":"110","name":"ANT 110 - INTRO TO CULTURAL ANTHROPOLOGY","classNum":"40433","sectionNum":"03-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Miriam Shakow","roomNum":"Social Sciences Building 323","attributes":["GLO","BSC"]},{"subject":"ANT","courseNumber":"110","name":"ANT 110 - INTRO TO CULTURAL ANTHROPOLOGY","classNum":"40434","sectionNum":"04-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Lisa Lauria","roomNum":"Social Sciences Building 323","attributes":["GLO","BSC"]},{"subject":"ANT","courseNumber":"340","name":"ANT 340 - SOCIAL CHANGE IN LATIN AMERICA","classNum":"42125","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Miriam Shakow","roomNum":"Social Sciences Building 324","attributes":["GLO","BSC"]},{"subject":"ANT","courseNumber":"370","name":"ANT 370 - TOPICS IN ANTHROPOLOGY","classNum":"40441","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Jared Beatrice","roomNum":"Social Sciences Building 223","attributes":["GLO","BSC"]},{"subject":"ANT","courseNumber":"111","name":"ANT 111 - INTRO TO PHYSICAL ANTHROPOLOGY","classNum":"42755","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"George Leader","roomNum":"Social Sciences Building 321","attributes":["BSC","NSC"]},{"subject":"ANT","courseNumber":"170","name":"ANT 170 - TOPICS IN ANTHROPOLOGY","classNum":"42273","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Holly Ogren","roomNum":"Social Sciences Building 324","attributes":["BSC"]},{"subject":"ANT","courseNumber":"205","name":"ANT 205 - HUMAN EVOLUTION","classNum":"40437","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Jared Beatrice","roomNum":"Social Sciences Building 324","attributes":["BSC"]},{"subject":"ANT","courseNumber":"270","name":"ANT 270 - TOPICS IN ANTHROPOLOGY","classNum":"42587","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Holly Ogren","roomNum":"Social Sciences Building 324","attributes":["BSC"]},{"subject":"ARA","courseNumber":"171","name":"ARA 171 - THE CONTEMPORARY ARAB WORLD","classNum":"40448","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Salem Elkholy","roomNum":"Bliss Hall 229","attributes":["GLO","VPA"]},{"subject":"AAH","courseNumber":"217","name":"AAH 217 - ARTS OF THE ISLAMIC WORLD","classNum":"42245","sectionNum":"02-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Deborah Hutton","roomNum":"Art and Multimedia 230","attributes":["GLO","VPA"]},{"subject":"AAH","courseNumber":"106","name":"AAH 106 - ART HIST II:RENAISSANCE TO REVOL","classNum":"42662","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Hetty Joyce","roomNum":"Art and Multimedia 230","attributes":["VPA"]},{"subject":"AAH","courseNumber":"202","name":"AAH 202 - ART OF ROME","classNum":"42246","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Lee Riccardi","roomNum":"Art and Multimedia 230","attributes":["VPA"]},{"subject":"AAH","courseNumber":"498","name":"AAH 498 - JUNIOR RESEARCH SEMINAR","classNum":"40010","sectionNum":"70-SEM 1-REG ACAD","schedule":[{"day":"Monday","time":"now"}],"teacher":"Hetty Joyce","roomNum":"Art and Multimedia 218","attributes":["VPA"]},{"subject":"AAV","courseNumber":"214","name":"AAV 214 - PRINTMAKING","classNum":"41985","sectionNum":"01-LSU 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Francine Affourtit","roomNum":"Art and Multimedia 120","attributes":["VPA"]},{"subject":"BIO","courseNumber":"185","name":"BIO 185 - THEMES IN BIOLOGY","classNum":"41609","sectionNum":"A-LEC 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"David Wynne","roomNum":"Science Complex P101","attributes":["NSC"]},{"subject":"BIO","courseNumber":"185","name":"BIO 185 - THEMES IN BIOLOGY","classNum":"41699","sectionNum":"A02-LAB 1-REG ACAD","schedule":[{"day":"Thursday","time":"now"}],"teacher":"David Wynne","roomNum":"Biology Building 106","attributes":["NSC"]},{"subject":"BIO","courseNumber":"185","name":"BIO 185 - THEMES IN BIOLOGY","classNum":"41708","sectionNum":"D-LEC 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Nancy Kohn","roomNum":"Biology Building 208","attributes":["NSC"]},{"subject":"BIO","courseNumber":"185","name":"BIO 185 - THEMES IN BIOLOGY","classNum":"41709","sectionNum":"D01-LAB 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"}],"teacher":"Nancy Kohn","roomNum":"Biology Building 106","attributes":["NSC"]},{"subject":"BIO","courseNumber":"393","name":"BIO 393 - INDEPENDENT RESEARCH IN BIOLOGY I","classNum":"43061","sectionNum":"02-INR 1-REG ACAD","schedule":[],"teacher":"Matthew Wund","roomNum":"TBA","attributes":["NSC"]},{"subject":"BIO","courseNumber":"393","name":"BIO 393 - INDEPENDENT RESEARCH IN BIOLOGY I","classNum":"43143","sectionNum":"03-INR 1-REG ACAD","schedule":[],"teacher":"James Bricker","roomNum":"TBA","attributes":["NSC"]},{"subject":"BIO","courseNumber":"393","name":"BIO 393 - INDEPENDENT RESEARCH IN BIOLOGY I","classNum":"43144","sectionNum":"04-INR 1-REG ACAD","schedule":[],"teacher":"Kathryn Elliott","roomNum":"TBA","attributes":["NSC"]},{"subject":"BIO","courseNumber":"393","name":"BIO 393 - INDEPENDENT RESEARCH IN BIOLOGY I","classNum":"43145","sectionNum":"05-INR 1-REG ACAD","schedule":[],"teacher":"Manuel Figueroa","roomNum":"TBA","attributes":["NSC"]},{"subject":"BIO","courseNumber":"393","name":"BIO 393 - INDEPENDENT RESEARCH IN BIOLOGY I","classNum":"43146","sectionNum":"06-INR 1-REG ACAD","schedule":[],"teacher":"Tracy Kress","roomNum":"TBA","attributes":["NSC"]},{"subject":"BIO","courseNumber":"393","name":"BIO 393 - INDEPENDENT RESEARCH IN BIOLOGY I","classNum":"43147","sectionNum":"07-INR 1-REG ACAD","schedule":[],"teacher":"David Wynne","roomNum":"TBA","attributes":["NSC"]},{"subject":"BIO","courseNumber":"394","name":"BIO 394 - HONORS INDEPENDENT RESEARCH IN BIOLOGY I","classNum":"41676","sectionNum":"03-INR 1-REG ACAD","schedule":[],"teacher":"Tracy Kress","roomNum":"TBA","attributes":["NSC"]},{"subject":"BIO","courseNumber":"394","name":"BIO 394 - HONORS INDEPENDENT RESEARCH IN BIOLOGY I","classNum":"41677","sectionNum":"04-INR 1-REG ACAD","schedule":[],"teacher":"Sudhir Nayak","roomNum":"TBA","attributes":["NSC"]},{"subject":"CHE","courseNumber":"201","name":"CHE 201 - GENERAL CHEMISTRY I","classNum":"42910","sectionNum":"B02-LAB 1-REG ACAD","schedule":[{"day":"Friday","time":"now"}],"teacher":"Stephanie Sen","roomNum":"Science Complex C114","attributes":["NSC"]},{"subject":"CHE","courseNumber":"202","name":"CHE 202 - GENERAL CHEMISTRY II","classNum":"41733","sectionNum":"C-LEC 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Joanne Billmers Joanne Billmers","roomNum":"Science Complex C121 Science Complex P317","attributes":["NSC"]},{"subject":"CHE","courseNumber":"202","name":"CHE 202 - GENERAL CHEMISTRY II","classNum":"41735","sectionNum":"D-LEC 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"WednesDay","time":"now"}],"teacher":"Dora Schnur","roomNum":"Science Complex P101","attributes":["NSC"]},{"subject":"CLS","courseNumber":"222","name":"CLS 222 - THE ART OF ROME","classNum":"42304","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Lee Riccardi","roomNum":"Art and Multimedia 230","attributes":["VPA"]},{"subject":"CLS","courseNumber":"250","name":"CLS 250 - INTRODUCTION TO GREEK MYTHOLOGY","classNum":"40456","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Emyr Dakin","roomNum":"Social Sciences Building 325","attributes":["VPA"]},{"subject":"CLS","courseNumber":"250","name":"CLS 250 - INTRODUCTION TO GREEK MYTHOLOGY","classNum":"40457","sectionNum":"02-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Emyr Dakin","roomNum":"Education Building 306","attributes":["VPA"]},{"subject":"CLS","courseNumber":"370","name":"CLS 370 - SPECIAL TOPICS CLASSICAL STUDIES","classNum":"42700","sectionNum":"01-SEM 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Holly Haynes,  Lee Riccardi","roomNum":"Art and Multimedia 214","attributes":["VPA"]},{"subject":"CMP","courseNumber":"232","name":"CMP 232 - WORLD LITERATURE SINCE 1700","classNum":"40467","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Francis Hannold","roomNum":"Bliss Hall 153","attributes":["GLO","VPA"]},{"subject":"CMP","courseNumber":"336","name":"CMP 336 - NOMADS, WARRIORS, POETS: LIT OF CENT. EURASIA","classNum":"40466","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"WednesDay","time":"now"}],"teacher":"Harriet Hustis","roomNum":"Bliss Hall 228","attributes":["GLO","VPA"]},{"subject":"CRI","courseNumber":"256","name":"CRI 256 - WOMEN IN THE CRIMINAL JUSTICE SY","classNum":"42178","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Margaret Leigey","roomNum":"Social Sciences Building 326","attributes":["GEN","BSC"]},{"subject":"CRI","courseNumber":"301","name":"CRI 301 - CRIMINAL LAW AND PROCEDURE","classNum":"42162","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Thursday","time":"now"}],"teacher":"Ronald Susswein","roomNum":"Social Sciences Building 328","attributes":["BSC"]},{"subject":"CRI","courseNumber":"307","name":"CRI 307 - GEOSPATIAL ANALYSIS OF CRIME","classNum":"42174","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"David Mazeika","roomNum":"Social Sciences Building 021","attributes":["BSC"]},{"subject":"ECE","courseNumber":"201","name":"ECE 201 - INFANT THRU ADOL DEV EARLY CHILD","classNum":"41038","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Arti Joshi","roomNum":"Education Building 306","attributes":["BSC"]},{"subject":"ECE","courseNumber":"102","name":"ECE 102 - MULTICULT CHILDRENS LIT FOR ECED","classNum":"41039","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Deborah Thompson","roomNum":"Education Building 204","attributes":["VPA"]},{"subject":"ECO","courseNumber":"102","name":"ECO 102 - PRINCIPLES OF MACROECONOMICS","classNum":"40287","sectionNum":"05-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"},{"day":"WednesDay","time":"now"}],"teacher":"Michele Naples Michele Naples","roomNum":"Business Building 226 Business Building 122","attributes":["BSC"]},{"subject":"ECO","courseNumber":"102","name":"ECO 102 - PRINCIPLES OF MACROECONOMICS","classNum":"40300","sectionNum":"07-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Donald Vandegrift","roomNum":"Business Building 224","attributes":["BSC"]},{"subject":"ECO","courseNumber":"102","name":"ECO 102 - PRINCIPLES OF MACROECONOMICS","classNum":"40307","sectionNum":"13-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"},{"day":"WednesDay","time":"now"}],"teacher":"Subarna Samanta Subarna Samanta","roomNum":"Business Building 123 Business Building 206","attributes":["BSC"]},{"subject":"ECO","courseNumber":"102","name":"ECO 102 - PRINCIPLES OF MACROECONOMICS","classNum":"40285","sectionNum":"H1-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"},{"day":"WednesDay","time":"now"}],"teacher":"Michele Naples Michele Naples","roomNum":"Business Building 124 Business Building 122","attributes":["BSC"]},{"subject":"SED","courseNumber":"224","name":"SED 224 - ADOLESCENT LEARNING &DEVELOPMENT","classNum":"41276","sectionNum":"02-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"}],"teacher":"Ruth Palmer","roomNum":"Education Building 110","attributes":["BSC"]},{"subject":"SED","courseNumber":"224","name":"SED 224 - ADOLESCENT LEARNING &DEVELOPMENT","classNum":"41271","sectionNum":"P2A-PRA 1-REG ACAD","schedule":[{"day":"WednesDay","time":"now"}],"teacher":"Ruth Palmer","roomNum":"Forcina Hall 203","attributes":["BSC"]},{"subject":"SED","courseNumber":"224","name":"SED 224 - ADOLESCENT LEARNING &DEVELOPMENT","classNum":"42773","sectionNum":"P2B-PRA 1-REG ACAD","schedule":[{"day":"Friday","time":"now"}],"teacher":"Ruth Palmer,  Stuart Carroll","roomNum":"Forcina Hall 203","attributes":["BSC"]},{"subject":"EFN","courseNumber":"398","name":"EFN 398 - HISTORICAL AND POLIT CONTEXTS OF SCHOOLS","classNum":"41107","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Thursday","time":"now"}],"teacher":"Donna Mcinerney Donna Mcinerney","roomNum":"Education Building 208 Education Building 213","attributes":["CBL","BSC"]},{"subject":"EFN","courseNumber":"398","name":"EFN 398 - HISTORICAL AND POLIT CONTEXTS OF SCHOOLS","classNum":"42752","sectionNum":"03-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"}],"teacher":"Patricia Ehrensal","roomNum":"Education Building 209","attributes":["CBL","BSC"]},{"subject":"EFN","courseNumber":"299","name":"EFN 299 - SCHOOLS, COMMUNITIES & CULTURE","classNum":"41104","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"}],"teacher":"Brian Girard","roomNum":"Education Building 208","attributes":["BSC"]},{"subject":"EFN","courseNumber":"299","name":"EFN 299 - SCHOOLS, COMMUNITIES & CULTURE","classNum":"41105","sectionNum":"02-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"}],"teacher":"Colette Gosselin","roomNum":"Education Building 208","attributes":["BSC"]},{"subject":"EFN","courseNumber":"299","name":"EFN 299 - SCHOOLS, COMMUNITIES & CULTURE","classNum":"41106","sectionNum":"03-LDI 1-REG ACAD","schedule":[{"day":"Thursday","time":"now"}],"teacher":"Jonathan Davis","roomNum":"Education Building 208","attributes":["BSC"]},{"subject":"EFN","courseNumber":"299","name":"EFN 299 - SCHOOLS, COMMUNITIES & CULTURE","classNum":"41110","sectionNum":"P2-PRA 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"}],"teacher":"Staff","roomNum":"TBA","attributes":["BSC"]},{"subject":"EFN","courseNumber":"299","name":"EFN 299 - SCHOOLS, COMMUNITIES & CULTURE","classNum":"41111","sectionNum":"P3-PRA 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"}],"teacher":"Staff","roomNum":"TBA","attributes":["BSC"]},{"subject":"EFN","courseNumber":"299","name":"EFN 299 - SCHOOLS, COMMUNITIES & CULTURE","classNum":"41112","sectionNum":"P4-PRA 1-REG ACAD","schedule":[{"day":"WednesDay","time":"now"}],"teacher":"Staff","roomNum":"TBA","attributes":["BSC"]},{"subject":"EFN","courseNumber":"299","name":"EFN 299 - SCHOOLS, COMMUNITIES & CULTURE","classNum":"41113","sectionNum":"P5-PRA 1-REG ACAD","schedule":[{"day":"Thursday","time":"now"}],"teacher":"Staff","roomNum":"TBA","attributes":["BSC"]},{"subject":"EFN","courseNumber":"299","name":"EFN 299 - SCHOOLS, COMMUNITIES & CULTURE","classNum":"41114","sectionNum":"P6-PRA 1-REG ACAD","schedule":[{"day":"Thursday","time":"now"}],"teacher":"Staff","roomNum":"TBA","attributes":["BSC"]},{"subject":"ELE","courseNumber":"201","name":"ELE 201 - CHILD & ADOLESCENT DEVELOPMENT","classNum":"41118","sectionNum":"01-SEM 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Brenda Leake","roomNum":"Education Building 105","attributes":["BSC"]},{"subject":"ELE","courseNumber":"201","name":"ELE 201 - CHILD & ADOLESCENT DEVELOPMENT","classNum":"41119","sectionNum":"02-SEM 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"MinSoo Kim-Bossard","roomNum":"Education Building 103","attributes":["BSC"]},{"subject":"LNG","courseNumber":"372","name":"LNG 372 - AMERICAN ENGLISH","classNum":"42348","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Felicia Steele","roomNum":"Social Sciences Building 225","attributes":["CBL"]},{"subject":"HES","courseNumber":"160","name":"HES 160 - CURRENT HEALTH & WELLNESS ISSUES","classNum":"41515","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"John Farrell","roomNum":"Packer Hall 249","attributes":["BSC"]},{"subject":"HES","courseNumber":"160","name":"HES 160 - CURRENT HEALTH & WELLNESS ISSUES","classNum":"41511","sectionNum":"02-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"}],"teacher":"Joanne Smith-Tavener","roomNum":"Packer Hall 256","attributes":["BSC"]},{"subject":"HIS","courseNumber":"384","name":"HIS 384 - WOMEN IN 20TH CENTURY US","classNum":"40543","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Alix Genter","roomNum":"Bliss Hall 234","attributes":["GEN","SCH"]},{"subject":"HIS","courseNumber":"100","name":"HIS 100 - TOPICS: ANCIENT/MEDIEVAL WORLD","classNum":"43010","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Roman Kovalev","roomNum":"Social Sciences Building 230","attributes":["GLO","SCH"]},{"subject":"HIS","courseNumber":"117","name":"HIS 117 - EARLY MODERN EUROPE","classNum":"42086","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Henry Buehner","roomNum":"Science Complex P301","attributes":["GLO","SCH"]},{"subject":"HIS","courseNumber":"165","name":"HIS 165 - TOPICS: NORTH AMERICA/US","classNum":"40520","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Qin Shao","roomNum":"Social Sciences Building 227","attributes":["GLO","SCH"]},{"subject":"HIS","courseNumber":"177","name":"HIS 177 - 20TH CENTURY US","classNum":"40524","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Michael Zvalaren","roomNum":"Social Sciences Building 227","attributes":["GLO","SCH"]},{"subject":"HIS","courseNumber":"210","name":"HIS 210 - THE CRAFT OF HISTORY","classNum":"40510","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Jodi Weinstein","roomNum":"Social Sciences Building 228","attributes":["GLO","SCH"]},{"subject":"HIS","courseNumber":"330","name":"HIS 330 - TOPICS: ASIA /EURASIA / MIDDLE EAST","classNum":"40535","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Qin Shao","roomNum":"Social Sciences Building 227","attributes":["GLO","SCH"]},{"subject":"HIS","courseNumber":"330","name":"HIS 330 - TOPICS: ASIA /EURASIA / MIDDLE EAST","classNum":"Topic: POST-MAO CHINA Notes: This is a combined section class","sectionNum":"42295","schedule":[],"teacher":"Social Sciences Building 228","roomNum":"TuFr 11:00AM - 12:20PM","attributes":["GLO","SCH"]},{"subject":"HIS","courseNumber":"330","name":"HIS 330 - TOPICS: ASIA /EURASIA / MIDDLE EAST","classNum":"select ","sectionNum":"Topic: HISTORY OF KOREA","schedule":[],"teacher":"TuFr 11:00AM - 12:20PM","roomNum":"03-LWD 1-REG ACAD","attributes":["GLO","SCH","SCH","GLO"]},{"subject":"HIS","courseNumber":"341","name":"HIS 341 - ISLAMIC WORLD","classNum":"40537","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Jo-Ann Gross","roomNum":"Social Sciences Building 232","attributes":["GLO","SCH"]},{"subject":"HIS","courseNumber":"135","name":"HIS 135 - CIVILIZATION OF INDIA","classNum":"40519","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Xinru Liu","roomNum":"Social Sciences Building 227","attributes":["SCH"]},{"subject":"HIS","courseNumber":"165","name":"HIS 165 - TOPICS: NORTH AMERICA/US","classNum":"Notes: This is a combined section class","sectionNum":"40522","schedule":[],"teacher":"Bliss Hall 235","roomNum":"TuFr 9:30AM - 10:50AM","attributes":["SCH"]},{"subject":"HIS","courseNumber":"230","name":"HIS 230 - MODERN WORLD HISTORY & GEOGRAPHY","classNum":"40531","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"WednesDay","time":"now"}],"teacher":"Qin Shao","roomNum":"Social Sciences Building 324","attributes":["SCH"]},{"subject":"HIS","courseNumber":"303","name":"HIS 303 - HISTORY OF ROMAN REPUBLIC","classNum":"42092","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Dobrinka Chiekova","roomNum":"Social Sciences Building 230","attributes":["SCH"]},{"subject":"HIS","courseNumber":"315","name":"HIS 315 - EARLY RUSSIA TO 1584","classNum":"42290","sectionNum":"01-LWD 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Roman Kovalev","roomNum":"Social Sciences Building 230","attributes":["SCH"]},{"subject":"HIS","courseNumber":"365","name":"HIS 365 - TOPICS: NORTH AMERICA / US","classNum":"40540","sectionNum":"02-LWD 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"},{"day":"Friday","time":"now"}],"teacher":"Christopher Fisher","roomNum":"Social Sciences Building 227","attributes":["SCH"]},{"subject":"HIS","courseNumber":"365","name":"HIS 365 - TOPICS: NORTH AMERICA / US","classNum":"42385","sectionNum":"04-LWD 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Leigh-Anne Francis","roomNum":"Social Sciences Building 325","attributes":["SCH"]},{"subject":"HGS","courseNumber":"210","name":"HGS 210 - NON-VIOLENCE AND PEACE ACTION","classNum":"42769","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Monday","time":"now"},{"day":"Thursday","time":"now"}],"teacher":"Janet Gray","roomNum":"Bliss Hall 234","attributes":["GLO","BSC"]},{"subject":"HON","courseNumber":"270","name":"HON 270 - HONORS TOPICS","classNum":"42716","sectionNum":"05-LDI 1-REG ACAD","schedule":[{"day":"WednesDay","time":"now"}],"teacher":"Harriet Hustis","roomNum":"Bliss Hall 228","attributes":["GLO","VPA"]},{"subject":"HON","courseNumber":"370","name":"HON 370 - HONORS TOPICS","classNum":"42312","sectionNum":"01-LDI 1-REG ACAD","schedule":[{"day":"Thursday","time":"now"}],"teacher":"Deborah Hutton","roomNum":"Art and Multimedia 214","attributes":["GLO","VPA"]},{"subject":"HON","courseNumber":"370","name":"HON 370 - HONORS TOPICS","classNum":"Topic: PHOTOGRAPHY IN INDIA Notes: This is a combined section class","sectionNum":"42320","schedule":[],"teacher":"Social Sciences Building 232","roomNum":"Th 3:30PM - 6:20PM","attributes":["GLO","VPA"]},{"subject":"HON","courseNumber":"370","name":"HON 370 - HONORS TOPICS","classNum":"42321","sectionNum":"05-LDI 1-REG ACAD","schedule":[{"day":"Thursday","time":"now"}],"teacher":"Sai Kuen Li","roomNum":"Social Sciences Building 340","attributes":["BSC"]},{"subject":"HON","courseNumber":"370","name":"HON 370 - HONORS TOPICS","classNum":"42320","sectionNum":"04-LDI 1-REG ACAD","schedule":[{"day":"Thursday","time":"now"}],"teacher":"Jo-Ann Gross","roomNum":"Social Sciences Building 232","attributes":["SCH"]},{"subject":"IMM","courseNumber":"460","name":"IMM 460 - GAMES II: IMPLEMENTATION AND PROJECT MANAGEMENT","classNum":"40064","sectionNum":"01-LSU 1-REG ACAD","schedule":[{"day":"Tuesday","time":"now"}],"teacher":"Joshua Fishburn","roomNum":"Art and Multimedia 222","attributes":["QUR"]},{"subject":"IDS","courseNumber":"103","name":"IDS 103 - FY COMMUNITY ENGAGED LEARNING","classNum":"41496","sectionNum":"01-PRA 1-REG ACAD","schedule":[],"teacher":"Staff","roomNum":"TBA","attributes":["CBL"]},{"subject":"IDS","courseNumber":"365","name":"IDS 365 - THE NATURAL HISTORY OF THE GALAPAGOS ISLANDS & ECUADOR I","classNum":"41497","sectionNum":"A-LDI 1-REG ACAD","schedule":[],"teacher":"Staff","roomNum":"TBA","attributes":["GLO","NSC"]},{"subject":"IDS","courseNumber":"343","name":"IDS 343 - AMERICAS UNOFFICIAL AMBASSADORS SUMMER SERVICE INTERNSHIP","classNum":"43137","sectionNum":"70-INT 1-REG ACAD","schedule":[],"teacher":"Staff","roomNum":"TBA","attributes":["SCH"]}]';

var wantedCourse = {subject:"" , courseNumber: "" , name: "" , day:"" , attribute: ""}
var dbCourse = {subject:"" , courseNumber: "" , name: "" , day:"" , attribute: [""]}

//Get the name of the course
function setSubject(){
var nameList = document.getElementById("SSR_CLSRCH_WRK_SUBJECT_SRCH$0");
return nameList.options[nameList.selectedIndex].value;
}

function setCourseNum() {
	var num = document.getElementById("Course#");
	return num;
}


function setName() {
	var Name = document.getElementById("courseName");
	return Name;
}

function setDay() {
	var dayString = "";
	if (document.getElementById("MON").checked) {
		dayString = "Mo";
	}
	if (document.getElementById("TUE").checked)
		{dayString = dayString.concat("Tu");}
	if (document.getElementById("WED").checked)
		{dayString = dayString.concat("We");}
	if (document.getElementById("THUR").checked)
		{dayString = dayString.concat("Th");}
	if (document.getElementById("FRI").checked)
		{dayString = dayString.concat("Fr");}
	if (document.getElementById("SAT").checked)
		dayString = dayString.concat("Sa");
	if (document.getElementById("SUN").checked)	
		dayString = dayString.concat("Su");
	return dayString;
}

function setAttributes() {
	var atrArray = new Array();
	if (document.getElementById("bsc").checked) {
		atrArray.push("Behavioral, Social or Cultural");
	}
	if (document.getElementById("cbl").checked)	
		atrArray.push("CBL");
	if (document.getElementById("gen").checked)
		atrArray.push("GEN");
	if (document.getElementById("glo").checked)
		atrArray.push("GLO");
	if (document.getElementById("vpa").checked)
		atrArray.push("VPA");
	if (document.getElementById("nsc").checked)
		atrArray.push("NSC");
	if (document.getElementById("nsl").checked)
		atrArray.push("NSL");
	if (document.getElementById("qur").checked)
		atrArray.push("QUR");
	if (document.getElementById("rae").checked)
		atrArray.push("RAE");
	if (document.getElementById("sch").checked)
		atrArray.push("SCH");
	if (document.getElementById("vpa").checked)
		atrArray.push("VPA");
	if (document.getElementById("wwk").checked) {
		atrArray.push("WWK");
	}	
	return atrArray;
}

function filter(wantedCourse , dbCourse ) {
	if (wantedCourse.subject) { //assuming condition is true if no subject value is passed (i.e. all subjects are default)
        if (dbCourse.subject != wantedCourse.subject) { 
            return false;
        }
    }  
    if (wantedCourse.courseNumber) {    
        if (dbCourse.courseNumber != wantedCourse.courseNumber) {
            return false;
        }
    }
    if (wantedCourse.name) {
        if (dbCourse.name != wantedCourse.name) {
            return false;
        }
    }
    if (wantedCourse.day) {
        if (dbCourse.day != wantedCourse.day) {
            return false;
        }
    }
	//Checking for subset
	if (wantedCourse.attribute) {
        var i = 0;
        while (i < wantedCourse.attribute.length) {
            var j = 0;
            while (j < dbCourse.attribute.length) {
                if (wantedCourse.attribute[i] != dbCourse.attribute[j]) { //if A is not C, then = 1/B... ifA!=B, j=2/A
                    j++; //GOES BACK W/O INCREMENTING
                }//end of if (60)
                else {
                    break;
                }
            } //end of while (59)
            if (wantedCourse.attribute[i] != dbCourse.attribute[j]){ //B is B
                return false;
            }//end of if (64)
            i++;
        }//end of while 57
    }
	alert('True');
	return true;
}
var matchingCourses = [];
function setProperties(){
	wantedCourse.subject = setSubject(); //wantedCourse.subject = the value of what the user selects
	//alert(wantedCourse.subject); 
	wantedCourse.day = setDay();
	wantedCourse.attribute = setAttributes();
	var jsonArray = JSON.parse(text);
    for(var i = 0; i < jsonArray.length; i++) {
        if(filter(wantedCourse,jsonArray[i])) {
            matchingCourses.push(jsonArray[i]);
        }
    }	
}
