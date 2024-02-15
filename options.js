document.addEventListener('DOMContentLoaded', function() {

let jsonData;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data;
    const provinceDropdown = document.getElementById('province');
    const districtDropdown = document.getElementById('district');
    const sectorDropdown = document.getElementById('sector');
    const cellDropdown = document.getElementById('cell');
    const villageDropdown = document.getElementById('village')
    
    Object.keys(jsonData).forEach(key => {
        const value = jsonData[key];
        const option = document.createElement('option');
        option.text = key; 
        option.value = key; 
        provinceDropdown.append(option);
        

    });
    provinceDropdown.addEventListener('change', function() {
        const selectedProvince = provinceDropdown.value;
        const districts = jsonData[selectedProvince];
        for (const district in districts) {
            const option = document.createElement('option');
            option.text = district;
            option.value = district;
            districtDropdown.append(option);
        }
        console.log(districts);
        });
    districtDropdown.addEventListener('change', function() {
        const selectedDistrict = districtDropdown.value;
        const sectors = jsonData[provinceDropdown.value][selectedDistrict];
        for (const sector in sectors) {
            const option = document.createElement('option');
            option.text = sector;
            option.value = sector;
            sectorDropdown.append(option);
        }
    console.log(sectors);
     
    });
    sectorDropdown.addEventListener('change', function() {
        const selectedSector = sectorDropdown.value;
        const cells = jsonData[provinceDropdown.value][districtDropdown.value][selectedSector];
        for (const cell in cells) {
            const option = document.createElement('option');
            option.text = cell;
            option.value = cell;
            cellDropdown.append(option);
        }
        console.log(cells);
    });
    cellDropdown.addEventListener('change', function() {
        const selectedCell = cellDropdown.value;
        const villages = jsonData[provinceDropdown.value][districtDropdown.value][sectorDropdown.value][selectedCell];
        Object.keys(villages).forEach(villageKey => {
            const option = document.createElement('option');
            option.text = villages[villageKey];
            option.value = villages[villageKey];
            villageDropdown.append(option);
        });
        console.log(villages);
    });
   
});
});
