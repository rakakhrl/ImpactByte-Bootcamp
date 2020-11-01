const listOfGithub = document.getElementById("list-of-github");

const githubUname = [
  "auzanassdq",
  "rakakhrl",
  "Nafachri",
  "Dheal",
  "stevenkebosbor",
  "oktado",
];

const getProfile = async () => {
  const baseUrl = "https://api.github.com/users";

  return Promise.all(
    githubUname.map(async (username) => {
      const response = await fetch(`${baseUrl}/${username}`);

      return await response.json();
    })
  );
};

const showProfile = async () => {
  let listOfProfile = await getProfile();

  console.log(listOfProfile);

  listOfProfile.forEach((profile) => {
    listOfGithub.innerHTML += ` 
        <div class="col-12 col-md-6 col-lg-3 mt-3">
            <div class = "card">
                <img class="card-img-top" src="${profile.avatar_url}" alt="card image">
                    <div class="card-body">
                        <h5 class="card-title">Username: <a href="${profile.html_url}">${profile.login}</a></h5>
                        <h5 class="card-title">Total Repo: ${profile.public_repos}</h5>
                    </div>
            </div>
        </div>
        `;
  });
};

showProfile();
