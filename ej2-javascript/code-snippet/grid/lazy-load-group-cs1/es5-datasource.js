var data = createLazyLoadData();

function createLazyLoadData() {
    var lazyLoadData = [];
    var customerid = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
    'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
    'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
    'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
    'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
    'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
    'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];

    var product = ['Chai', 'Chang', 'Aniseed Syrup', 'Chef Anton\'s Cajun Seasoning', 'Chef Anton\'s Gumbo Mix', 'Grandma\'s Boysenberry Spread',
    'Uncle Bob\'s Organic Dried Pears', 'Northwoods Cranberry Sauce', 'Mishi Kobe Niku', 'Ikura', 'Queso Cabrales', 'Queso Manchego La Pastora', 'Konbu',
    'Tofu', 'Genen Shouyu', 'Pavlova', 'Alice Mutton', 'Carnarvon Tigers', 'Teatime Chocolate Biscuits', 'Sir Rodney\'s Marmalade', 'Sir Rodney\'s Scones',
    'Gustaf\'s KnÃ¤ckebrÃ¶d', 'TunnbrÃ¶d', 'GuaranÃ¡ FantÃ¡stica', 'NuNuCa NuÃŸ-Nougat-Creme', 'GumbÃ¤r GummibÃ¤rchen', 'Schoggi Schokolade', 'RÃ¶ssle Sauerkraut',
    'ThÃ¼ringer Rostbratwurst', 'Nord-Ost Matjeshering', 'Gorgonzola Telino', 'Mascarpone Fabioli', 'Geitost', 'Sasquatch Ale', 'Steeleye Stout', 'Inlagd Sill',
    'Gravad lax', 'CÃ´te de Blaye', 'Chartreuse verte', 'Boston Crab Meat', 'Jack\'s New England Clam Chowder', 'Singaporean Hokkien Fried Mee', 'Ipoh Coffee',
    'Gula Malacca', 'Rogede sild', 'Spegesild', 'Zaanse koeken', 'Chocolade', 'Maxilaku', 'Valkoinen suklaa', 'Manjimup Dried Apples', 'Filo Mix', 'Perth Pasties',
    'TourtiÃ¨re', 'PÃ¢tÃ© chinois', 'Gnocchi di nonna Alice', 'Ravioli Angelo', 'Escargots de Bourgogne', 'Raclette Courdavault', 'Camembert Pierrot', 'Sirop d\'Ã©rable',
    'Tarte au sucre', 'Vegie-spread', 'Wimmers gute SemmelknÃ¶del', 'Louisiana Fiery Hot Pepper Sauce', 'Louisiana Hot Spiced Okra', 'Laughing Lumberjack Lager', 'Scottish Longbreads',
    'Gudbrandsdalsost', 'Outback Lager', 'Flotemysost', 'Mozzarella di Giovanni', 'RÃ¶d Kaviar', 'Longlife Tofu', 'RhÃ¶nbrÃ¤u Klosterbier', 'LakkalikÃ¶Ã¶ri', 'Original Frankfurter grÃ¼ne SoÃŸe'];

    var customername = ['Maria', 'Ana Trujillo', 'Antonio Moreno', 'Thomas Hardy', 'Christina Berglund', 'Hanna Moos', 'FrÃ©dÃ©rique Citeaux', 'MartÃ­n Sommer', 'Laurence Lebihan', 'Elizabeth Lincoln',
    'Victoria Ashworth', 'Patricio Simpson', 'Francisco Chang', 'Yang Wang', 'Pedro Afonso', 'Elizabeth Brown', 'Sven Ottlieb', 'Janine Labrune', 'Ann Devon', 'Roland Mendel', 'Aria Cruz', 'Diego Roel',
    'Martine RancÃ©', 'Maria Larsson', 'Peter Franken', 'Carine Schmitt', 'Paolo Accorti', 'Lino Rodriguez', 'Eduardo Saavedra', 'JosÃ© Pedro Freyre', 'AndrÃ© Fonseca', 'Howard Snyder', 'Manuel Pereira',
    'Mario Pontes', 'Carlos HernÃ¡ndez', 'Yoshi Latimer', 'Patricia McKenna', 'Helen Bennett', 'Philip Cramer', 'Daniel Tonini', 'Annette Roulet', 'Yoshi Tannamuri', 'John Steel', 'Renate Messner', 'Jaime Yorres',
    'Carlos GonzÃ¡lez', 'Felipe Izquierdo', 'Fran Wilson', 'Giovanni Rovelli', 'Catherine Dewey', 'Jean FresniÃ¨re', 'Alexander Feuer', 'Simon Crowther', 'Yvonne Moncada', 'Rene Phillips', 'Henriette Pfalzheim',
    'Marie Bertrand', 'Guillermo FernÃ¡ndez', 'Georg Pipps', 'Isabel de Castro', 'Bernardo Batista', 'LÃºcia Carvalho', 'Horst Kloss', 'Sergio GutiÃ©rrez', 'Paula Wilson', 'Maurizio Moroni', 'Janete Limeira', 'Michael Holz',
    'Alejandra Camino', 'Jonas Bergulfsen', 'Jose Pavarotti', 'Hari Kumar', 'Jytte Petersen', 'Dominique Perrier', 'Art Braunschweiger', 'Pascale Cartrain', 'Liz Nixon', 'Liu Wong', 'Karin Josephs', 'Miguel Angel Paolino',
    'Anabela Domingues', 'Helvetius Nagy', 'Palle Ibsen', 'Mary Saveley', 'Paul Henriot', 'Rita MÃ¼ller', 'Pirkko Koskitalo', 'Paula Parente', 'Karl Jablonski', 'Matti Karttunen', 'Zbyszek Piestrzeniewicz'];
   
    var customeraddress = ['507 - 20th Ave. E.\r\nApt. 2A', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
    '4726 - 11th Ave. N.E.', '7 Houndstooth Rd.', '59 rue de l\'Abbaye', 'Luisenstr. 48', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
    '7 Houndstooth Rd.', '2817 Milton Dr.', 'Kirchgasse 6', 'Sierras de Granada 9993', 'Mehrheimerstr. 369', 'Rua da Panificadora, 12', '2817 Milton Dr.', 'Mehrheimerstr. 369'];
   
    var quantityperunit = ['10 boxes x 20 bags', '24 - 12 oz bottles', '12 - 550 ml bottles', '48 - 6 oz jars', '36 boxes', '12 - 8 oz jars', '12 - 1 lb pkgs.', '12 - 12 oz jars', '18 - 500 g pkgs.', '12 - 200 ml jars',
    '1 kg pkg.', '10 - 500 g pkgs.', '2 kg box', '40 - 100 g pkgs.', '24 - 250 ml bottles', '32 - 500 g boxes', '20 - 1 kg tins', '16 kg pkg.', '10 boxes x 12 pieces', '30 gift boxes', '24 pkgs. x 4 pieces', '24 - 500 g pkgs.', '12 - 250 g pkgs.',
    '12 - 355 ml cans', '20 - 450 g glasses', '100 - 250 g bags'];

    var orderID = 10248;
    for (var i = 0; i < 20000; i++) {
        lazyLoadData.push({
            'OrderID': orderID + i,
            'CustomerID': customerid[Math.floor(Math.random() * customerid.length)],
            'CustomerName': customername[Math.floor(Math.random() * customername.length)],
            'CustomerAddress': customeraddress[Math.floor(Math.random() * customeraddress.length)],
            'ProductName': product[Math.floor(Math.random() * product.length)],
            'ProductID': i,
            'Quantity': quantityperunit[Math.floor(Math.random() * quantityperunit.length)]
        });
    }
    return lazyLoadData;
}


