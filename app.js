var input = document.getElementById('input')
  input.addEventListener('change', function() {
    readXlsxFile(input.files[0]).then(function(data) {

        // Data kommer fra Excel-filen.
        console.log(data);
        console.log(forNavn);

        // For å se verdiene kan vi bruke for of loop
        for (const iterator of data) {
            if (iterator[1] == "Elev 4") {
                console.log(iterator);
                console.log(iterator[6]);
            }
        }


    })
  })
