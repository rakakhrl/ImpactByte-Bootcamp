let listOfFlag = document.getElementById("list-of-flag");

const getCountry = async () => {
  const url = "https://restcountries.eu/rest/v2/all";
  const response = await fetch(url);

  const data = await response.json();

  return data;
};

const showFlag = async () => {
  const listOfCountry = await getCountry();

  listOfCountry.forEach((country) => {
    listOfFlag.innerHTML += ` 
        <div class="col-12 col-md-6 col-lg-3 mt-3">
            <div class = "card">
                <img class="card-img-top" src="${country.flag}" alt="card image">
                    <div class="card-body">
                        <h5 class="card-title">${country.name}</h5>
                    </div>
            </div>
        </div>
        `;
  });
};

showFlag();
